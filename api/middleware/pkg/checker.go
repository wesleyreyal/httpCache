package pkg

import (
	"bytes"
	"context"
	"fmt"
	"io"
	"net/http"
	"sync"
	"time"
)

type CheckerChain struct {
	*sync.Map
	cancel context.CancelFunc
	ctx    context.Context
}

func NewCheckerChain() *CheckerChain {
	return &CheckerChain{
		Map: &sync.Map{},
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
			fmt.Println("Start the checker loop")
			for {
				select {
				case <-checker.ctx.Done():
					return
				default:
					c.Map.Range(func(key, value any) bool {
						go func(dns string, dom *domain) {
							fmt.Println("Try to validate", dns)
							if isDomainValid(dns) {
								validateDomain(dom.id)
								c.Del(dns)

								return
							}

							for _, sub := range dom.subs {
								if sub != "" && isDomainValid(sub+"."+dns) {
									validateDomain(dom.id)
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
	fmt.Println("Delete", dns)
	c.Map.Delete(dns)
	hasItem := false
	c.Map.Range(func(key, value any) bool {
		hasItem = true
		return false
	})

	if !hasItem {
		fmt.Println("Stop the checker loop")
		c.cancel()
	}
}
