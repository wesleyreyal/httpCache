import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Configuration, Domain } from '../../actions';
import { APIList, Configuration as ConfigurationType, Domain as DomainType } from '../../model';
import { AddDomain, CollapseBlock } from '../../components/common/collapse';
import { useRedirectIfNotLogged } from '../../context';

const Domains: NextPage = () => {
  useRedirectIfNotLogged();

  const [domains, setDomains] = useState<DomainType[]>([]);

  useEffect(() => {
    new Domain().getMany().then((response: APIList<DomainType>) => {
      const domainArray = Array.from(response.items);
      setDomains(domainArray);
    });

    new Configuration().getMany().then((response: APIList<ConfigurationType>) => {
      const configurationArray = Array.from(response.items);
      console.log(configurationArray);
    });
  }, []);

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

export default Domains;
