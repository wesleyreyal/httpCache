import React, { useEffect, useState } from 'react';
import { NextPage, NextPageContext } from 'next';
import { Domain } from 'actions';
import { Configuration as ConfigurationType, Domain as DomainModel } from 'model';
import { AddDomain, CollapseBlock } from 'components/common/collapse';
import { useRedirectIfNotLogged } from 'context';

type DomainsPageProps = {
  domains: ReadonlyArray<DomainModel>;
  total: number;
};

const Domains: NextPage<DomainsPageProps> = ({ domains: defaultDomains }) => {
  useRedirectIfNotLogged();

  const [domains, setDomains] = useState<ReadonlyArray<DomainModel>>(defaultDomains);

  return (
    <div className="flex flex-col gap-y-2">
      <AddDomain />
      {domains.map((domain, idx) => (
        <CollapseBlock
          key={idx}
          number={idx + 1}
          name={domain.dns}
          configurations={domain.configurations as ConfigurationType[]}
        />
      ))}
    </div>
  );
};

Domains.getInitialProps = async (ctx: NextPageContext & { req: { cookies: Record<string, string> } }) => {
  return new Domain()
    .getMany(
      ctx?.req?.cookies ? { config: { headers: { Authorization: `Bearer ${ctx.req.cookies.token}` } } } : undefined
    )
    .then(({ items, total }) => ({ domains: items, total }))
    .catch(() => ({ domains: [], total: 0 }));
};

export default Domains;
