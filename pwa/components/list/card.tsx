import { Card, cardProps } from 'components/common/card';
import React from 'react';
import { Icon } from 'components/common/icon';

const listCardProps: ReadonlyArray<React.PropsWithChildren<cardProps>> = [
  {
    children: <Icon name="box" iconColor="#3DA9FC" />,
    title: 'Easy deploy',
    text: 'Souin is a Cloud Native application shipped as a ready-to-use single Docker image. It is compatible with Kubernetes or baremetal.',
  },
  {
    children: <Icon name="server" iconColor="#3DA9FC" />,
    title: 'Self-hosted',
    text: "Souin has been designed with simplicity in mind: only one service, only one binary as it's written in go.",
  },
  {
    children: <Icon name="code" iconColor="#3DA9FC" />,
    title: 'Open source',
    text: 'Everyone can access to the source-code on github. To make it transparent, and to serve a greater good.',
  },
  {
    children: <Icon name="box" iconColor="#3DA9FC" />,
    title: 'Compatible',
    text: 'Shipped with a production-grade web server built on top of Caddy: automatic HTTPS, HTTP/3, logging, zstd, compression...',
  },
  {
    children: <Icon name="extensible" iconColor="#3DA9FC" />,
    title: 'Extensible',
    text: 'Souin is available as module or plugin for most of the golang webservers, proxies, API. (e.g Traefik,Tyk, Echo,...]',
  },
  {
    children: <Icon name="lock" iconColor="#3DA9FC" />,
    title: 'Standards',
    text: 'Souin respects the HTTP cache RFCs from the IETF, supports the Surrogate-Keys and provide an ESI tag processor',
  },
];
export const CardList: React.FC = () => {
  return (
    <div className="listCard grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-20">
      {listCardProps.map((card, id) => (
        <Card key={id} {...card} />
      ))}
    </div>
  );
};
