package pkg

import (
	"bytes"
	"context"
	"io"
	"net/http"
	"souin_middleware/pkg/deployer"
	"sync"
	"time"

	"go.uber.org/zap"
)

type CheckerChain struct {
	*sync.Map
	logger *zap.Logger
	cancel context.CancelFunc
	ctx    context.Context
}

func NewCheckerChain(logger *zap.Logger) *CheckerChain {
	return &CheckerChain{
		Map:    &sync.Map{},
		logger: logger,
	}
}

func isDomainValid(dns string) bool {
	res, err := http.DefaultClient.Get(dns + "/souin-healthcheck")
	if err != nil || res == nil || res.Body == nil || res.StatusCode != http.StatusOK {
		return false
	}

	body := bytes.NewBuffer([]byte{})
	_, err = io.Copy(body, res.Body)

	return err == nil && body.String() == "OK"
}

type domain struct {
	id   string
	subs []string
}

func (d *domain) Contains(zone string) bool {
	for _, sub := range d.subs {
		if sub == zone {
			return true
		}
	}

	return false
}

func (c *CheckerChain) Add(id, dns, sub string) {
	d, b := c.LoadOrStore(dns, &domain{id: id, subs: []string{}})
	if b {
		if sub != "" && !d.(*domain).Contains(sub) {
			d.(*domain).subs = append(d.(*domain).subs, sub)
		}
	}
	c.Store(dns, d)

	if c.cancel == nil {
		c.ctx, c.cancel = context.WithCancel(context.Background())
		go func(checker *CheckerChain) {
			c.logger.Debug("Start the checker loop")
			for {
				select {
				case <-checker.ctx.Done():
					return
				default:
					c.Map.Range(func(key, value any) bool {
						go func(dns string, dom *domain) {
							c.logger.Sugar().Debugf("Try to validate %s", dns)
							if isDomainValid(dns) {
								validateDomain(dom.id)
								deployer.Deploy(dns, dom.subs...)
								c.Del(dns)

								return
							}

							for _, sub := range dom.subs {
								if sub != "" && isDomainValid(sub+"."+dns) {
									validateDomain(dom.id)
									deployer.Deploy(dns, dom.subs...)
									c.Del(dns)

									return
								}
							}
						}(key.(string), value.(*domain))

						return true
					})
				}

				time.Sleep(10 * time.Second)
			}
		}(c)
	}
}

func (c *CheckerChain) Del(dns string) {
	c.logger.Sugar().Infof("Delete %s", dns)
	c.Map.Delete(dns)
	hasItem := false
	c.Map.Range(func(key, value any) bool {
		hasItem = true
		return false
	})

	if !hasItem {
		c.logger.Debug("Stop the checker loop")
		c.cancel()
	}
}
