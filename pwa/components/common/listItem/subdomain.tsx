import { InputBaseWithoutLabel } from '../input';
import { Icon } from '../icon';
import React from 'react';
import { EditConfiguration } from './editConfiguration';
import { Button } from '../button';
import { usePushToast } from '../../../context/toastContext';

type subdomainProps = {
  zone: string;
  ip: string;
};
export const Subdomain: React.FC<subdomainProps> = ({ zone, ip }) => {
  const pushToast = usePushToast();

  return (
    <div className="flex justify-around items-center max-w-screen-xl">
      <InputBaseWithoutLabel defaultValue={zone} />
      <InputBaseWithoutLabel defaultValue={ip} />
      <EditConfiguration />
      <Button text="save changes" onclick={() => pushToast({ text: 'Your changes blalblab', variant: 'success' })} />
      <Icon name="trash" iconColor="red" size={32} />
    </div>
  );
};
