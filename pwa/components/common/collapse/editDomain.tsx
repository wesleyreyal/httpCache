import React from 'react';
import { Block } from './block';
import { Icon } from 'components/common/icon';

export const EditDomain: React.FC = () => (
  <Block className="gap-x-40 mt-6">
    <Icon name="trash" size={32} iconColor="red" />
    <Icon name="plus" size={42} />
  </Block>
);
