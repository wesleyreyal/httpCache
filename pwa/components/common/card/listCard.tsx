import {Card, cardProps} from './card';
import React from 'react';
import { Icon } from "../icon";

const listCardProps: cardProps[] = [
  {
    children: <Icon name='box' />,
    title: 'card1',
    text: 'textCard1',
  },
  {
    children: <Icon name='server' />,
    title: 'card2',
    text: 'textCard2',
  },
  {
    children: <Icon name='code' />,
    title: 'card3',
    text: 'textCard3',
  },
  {
    children: <Icon name='box' />,
    title: 'card4',
    text: 'textCard4',
  },
  {
    children: <Icon name='extensible' />,
    title: 'card5',
    text: 'textCard5',
  },
  {
    children: <Icon name='performance' />,
    title: 'card6',
    text: 'textCard6',
  },
];
export const ListCard: React.FC = () => {
  return (
    <div className="listCard  grid grid-cols-3 place-items-center gap-y-20">
      {
        listCardProps.map((card, id) => <Card key={id} {...card} />
      )}
    </div>
  );
};
