package deployer

import (
	"bytes"
	"errors"
	"net/http"
	"strings"
	"text/template"
)

func (d *deployer) insertTask(domain string) error {
	tpl, err := template.New("createTaskPayload").Parse(createTaskPayloadTemplate)
	if err != nil {
		return err
	}

	var buf bytes.Buffer
	tpl.Execute(&buf, createTaskPayload{
		ProjectId:  d.projectId,
		TemplateId: d.templateId,
		Name:       strings.ReplaceAll(domain, ".", "_"),
		Domain:     domain,
	})
	rq, err := d.getAuthRequest("/project/"+d.projectId+"/tasks", http.MethodPost, &buf)
	if err != nil {
		return err
	}

	var res *http.Response
	res, err = http.DefaultClient.Do(rq)
	if err != nil {
		return err
	}

	if res.StatusCode != http.StatusCreated {
		return errors.New("impossible to create the task")
	}

	return nil
}

func (d *deployer) createAndRunTask(domain string) error {
	return d.insertTask(domain)
}
