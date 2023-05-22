import React, { PropsWithChildren } from 'react';
import { Title } from 'components/common/text';
import { InputGuesser, InputGuesserProps } from 'components/common/input';
import Link from 'next/link';
import { BaseButton, buttonType } from 'components/common/button';

type redirectionType = {
  text: string;
  highlightText: string;
  redirectionLink: string;
};

type additionalTypes = {
  authentication?: boolean;
  title?: string;
  inputs: ReadonlyArray<InputGuesserProps>;
  buttonProps?: buttonType;
  redirectionInformation?: redirectionType;
};

type formType = additionalTypes & React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

export const Form: React.FC<PropsWithChildren<formType>> = ({
  children,
  className,
  title,
  inputs,
  buttonProps,
  redirectionInformation,
  ...props
}) => (
  <form {...props} className={`flex justify-center flex-col gap-y-8 ${className}`}>
    <>
      {title && <Title title={title} />}
      {inputs ? inputs.map((inputProps, idx) => <InputGuesser key={idx} {...inputProps} />) : ''}
      {children}
      {buttonProps && <BaseButton {...buttonProps} className="mt-6" />}
      {redirectionInformation ? (
        <Link href={redirectionInformation.redirectionLink}>
          {redirectionInformation.text}{' '}
          <span className="text-muted font-bold">{redirectionInformation.highlightText}</span>
        </Link>
      ) : (
        ''
      )}
    </>
  </form>
);
