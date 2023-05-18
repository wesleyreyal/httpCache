import React, { PropsWithChildren } from 'react';
import { Title } from '../text';
import { Blur } from '../block';
import { InputBase, inputType } from '../input';
import Link, { LinkProps } from 'next/link';
import { BaseButton, buttonType } from '../button';

type redirectionType = {
  text: string;
  highlightText: string;
  redirectionLink: string;
};

type additionalTypes = {
  authentication?: boolean;
  title: string;
  inputs?: ReadonlyArray<inputType>;
  buttonProps: buttonType;
  redirectionInformation?: redirectionType;
  links?: LinkProps[];
};

type formType = additionalTypes & React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

export const AuthenticationForm: React.FC<PropsWithChildren<formType>> = ({ children, title, ...props }) => (
  <Blur>
    <Form authentication method="POST" title={title} {...props}>
      {children}
    </Form>
  </Blur>
);

export const Form: React.FC<PropsWithChildren<formType>> = ({
  children,
  className,
  title,
  inputs,
  buttonProps,
  redirectionInformation,
  ...props
}) => (
  <form {...props} className={`flex justify-center items-center flex-col gap-y-4 ${className}`}>
    <>
      <Title title={title} />
      {inputs ? inputs.map((inputProps, idx) => <InputBase key={idx} {...inputProps} />) : ''}
      {children}
      <BaseButton {...buttonProps} className="mt-6" />
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
