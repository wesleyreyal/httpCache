import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { Activation as ActivationAction } from 'actions';
import { useRouter, useSearchParams } from 'next/navigation';
import { ROUTES } from 'routes';
import { usePushToast } from 'context';

const Activation: NextPage = () => {
  const { push } = useRouter();
  const params = useSearchParams();
  const pushToast = usePushToast();

  useEffect(() => {
    new ActivationAction().activate({ email: params.get('email') ?? '', token: params.get('token') ?? '' }).then(() => {
      push(ROUTES.SIGN_IN);
      pushToast({ text: 'Account validated !', variant: 'success' });
    });
  }, [params, push, pushToast]);

  return (
    <div className="alert">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>Please wait during we are validating your account</span>
    </div>
  );
};

export default Activation;
