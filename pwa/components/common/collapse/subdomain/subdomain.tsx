import { InputBaseWithoutLabel } from '../../input';
import { Icon } from '../../icon';
import React, { useState } from 'react';
import { EditConfiguration } from './editConfiguration';
import { BaseButton } from '../../button';
import { usePushToast } from '../../../../context';
import { Blur } from '../../block/blur';

export type subdomainProps = {
  zone: string;
  ip: string;
};
export const Subdomain: React.FC<subdomainProps> = ({ zone, ip }) => {
  const pushToast = usePushToast();
  const [validationPopup, setValidationPopup] = useState(false);

  return (
    <div className="flex justify-around items-center max-w-screen-xl w-full">
      <InputBaseWithoutLabel defaultValue={zone} />
      <InputBaseWithoutLabel defaultValue={ip} />
      <EditConfiguration />
      <BaseButton
        text="save changes"
        onClick={() => pushToast({ text: 'Your changes blalblab', variant: 'success' })}
      />
      <Icon name="trash" iconColor="red" size={32} onclick={() => setValidationPopup(true)} />
      {validationPopup && (
        <Blur className="absolute w-screen left-0 top-2 h-full flex flex-col items-center justify-center gap-y-20">
          <h1 className="text-2xl font-bold">Are you sure you want to delete this domain ?</h1>
          <div className="flex gap-x-80">
            <BaseButton text="cancel" variant="danger" outlined wide onClick={() => setValidationPopup(false)} />
            <BaseButton text="Delete" variant="danger" wide />
          </div>
        </Blur>
      )}
    </div>
  );
};
