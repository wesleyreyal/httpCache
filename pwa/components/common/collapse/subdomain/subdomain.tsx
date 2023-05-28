import { InputBase } from 'components/common/input';
import React, { useState } from 'react';
import { BaseButton, OutlinedButton } from 'components/common/button';
import { usePushToast } from 'context';
import { Blur } from 'components/common/block';
import Link from 'next/link';
import { Configuration } from 'model';

export type subdomainProps = Configuration;
export const Subdomain: React.FC<subdomainProps> = ({ id, zone, ip }) => {
  const pushToast = usePushToast();
  const [validationPopup, setValidationPopup] = useState(false);
  const [updated, setUpdated] = useState(false);

  return (
    <div className="flex gap-x-8 justify-between items-center w-full">
      <InputBase className="w-full" defaultValue={zone} onChange={() => setUpdated(true)} />
      <InputBase className="w-full" defaultValue={ip} onChange={() => setUpdated(true)} />
      <div className="flex gap-x-4 items-center">
        <Link href="/configuration/[id]" as={`configuration/${id}`}>
          <OutlinedButton text="Edit configuration" className="flex-nowrap whitespace-nowrap" />
        </Link>
        <OutlinedButton variant="danger" icon="trash" onClick={() => setValidationPopup(true)} />
        {validationPopup && (
          <Blur className="absolute w-full left-0 top-0 h-full flex flex-col items-center justify-center gap-y-20">
            <h1 className="text-2xl font-bold">Are you sure you want to delete the zone {zone} ?</h1>
            <div className="flex gap-x-80">
              <OutlinedButton text="cancel" variant="danger" onClick={() => setValidationPopup(false)} />
              <BaseButton text="Delete" variant="danger" wide />
            </div>
          </Blur>
        )}
        {updated && (
          <OutlinedButton
            icon="save"
            onClick={() => pushToast({ text: `Your changes on the zone ${zone} has been saved!`, variant: 'success' })}
          />
        )}
      </div>
    </div>
  );
};
