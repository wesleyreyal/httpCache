import { Card, cardProps } from '../common/card';
import React from 'react';
import { Icon } from '../common/icon';

const listCardProps: React.PropsWithChildren<cardProps>[] = [
  {
    children: <Icon name="box" iconColor="#3DA9FC" />,
    title: 'card1',
    text: 'textCard1',
  },
  {
    children: <Icon name="server" iconColor="#3DA9FC" />,
    title: 'card2',
    text: 'textCard2',
  },
  {
    children: <Icon name="code" iconColor="#3DA9FC" />,
    title: 'card3',
    text: 'textCard3',
  },
  {
    children: <Icon name="box" iconColor="#3DA9FC" />,
    title: 'card4',
    text: 'textCard4',
  },
  {
    children: <Icon name="extensible" iconColor="#3DA9FC" />,
    title: 'card5',
    text: 'textCard5',
  },
  {
    children: <Icon name="performance" iconColor="#3DA9FC" />,
    title: 'card6',
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
