import React, { useState } from 'react';
import { NextPage, NextPageContext } from 'next';
import { Domain } from 'actions';
import { Configuration, Domain as DomainModel } from 'model';
import { Collapse } from 'components/common/collapse';
import { useRedirectIfNotLogged } from 'context';
import { OutlinedButton } from 'components/common/button';
import { Iterator } from 'components/common/input';
import { Subdomain, subdomainProps } from 'components/common/collapse/subdomain/subdomain';

type DomainsPageProps = {
  domains: ReadonlyArray<DomainModel<Configuration>>;
  total: number;
};

const Domains: NextPage<DomainsPageProps> = (props) => {
  useRedirectIfNotLogged();

  const [domains, setDomains] = useState<ReadonlyArray<DomainModel<Configuration>>>(props?.domains ?? []);

  return (
    <div className="grid gap-y-8">
      {domains.map((domain, idx) => (
        <Collapse
          title={
            <>
              <span className="font-bold text-base-200">no. {idx}</span>
              <span className="font-bold">{domain.dns}</span>
              <span className="font-bold text-base-300">{domain.configurations.length} configurations</span>
            </>
          }
          key={idx}
        >
          <Iterator
            className="pt-8 gap-y-8 grid"
            name="subdomains"
            values={domain.configurations.map((c) => c as Record<string, string>)}
            inputsTemplate={[]}
            Template={(props) => <Subdomain {...(props.values[props.iteration ?? 0] as subdomainProps)} />}
          />
          {domain.configurations.map((configuration) => JSON.stringify(configuration))}
        </Collapse>
      ))}
      <OutlinedButton text="Add new domain" />
    </div>
  );
};

Domains.getInitialProps = (ctx: NextPageContext & { req: { cookies: Record<string, string> } }) => {
  return new Domain()
    .getMany({
      ...(ctx?.req?.cookies ? { config: { headers: { Authorization: `Bearer ${ctx.req.cookies.token}` } } } : {}),
      depth: 1,
    })
    .then(({ items, total }) => ({ domains: items as ReadonlyArray<DomainModel<Configuration>>, total }))
    .catch(() => {
      return { domains: [] as ReadonlyArray<DomainModel<Configuration>>, total: 0 };
    });
};

export default Domains;
