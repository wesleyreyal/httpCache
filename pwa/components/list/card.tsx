import { Card, cardProps } from 'components/common/card';
import React from 'react';
import { Icon } from 'components/common/icon';

const listCardProps: ReadonlyArray<React.PropsWithChildren<cardProps>> = [
  {
    children: <Icon name="box" iconColor="#3DA9FC" />,
    title: 'Easy to deploy',
    text: 'textCard1',
  },
  {
    children: <Icon name="server" iconColor="#3DA9FC" />,
    title: 'Self-hosted',
    text: 'textCard2',
  },
  {
    children: <Icon name="code" iconColor="#3DA9FC" />,
    title: 'Open source',
    text: 'textCard3',
  },
  {
    children: <Icon name="box" iconColor="#3DA9FC" />,
    title: 'Compatible',
    text: 'textCard4',
  },
  {
    children: <Icon name="extensible" iconColor="#3DA9FC" />,
    title: 'Extensible',
    text: 'textCard5',
  },
  {
    children: <Icon name="performance" iconColor="#3DA9FC" />,
    title: 'Optimise performance',
    text: 'textCard6',
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
