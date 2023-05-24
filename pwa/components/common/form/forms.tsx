import React, { PropsWithChildren } from 'react';
import { Title } from 'components/common/text';
import { InputGuesser, InputGuesserProps } from 'components/common/input';
import Link from 'next/link';
import { BaseButton, buttonType } from 'components/common/button';
import { FormEventHandler } from 'react';
import { CreatableAPIResource } from 'model';

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
  handleSubmit?: (values: CreatableAPIResource) => void;
};

type formType = additionalTypes & React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
export type FormEventWithValues<T> = FormEventHandler<T> | { target: { values: T } };

export const Form: React.FC<PropsWithChildren<formType>> = ({
  children,
  className,
  title,
  inputs,
  buttonProps,
  redirectionInformation,
  handleSubmit,
  ...props
}) => (
  <form
    onSubmit={(event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const values = Array.from(form.elements).reduce((data: Record<string, string>, element) => {
        if (element instanceof HTMLInputElement && element.name) {
          data[element.name] = element.value;
        }
        return data;
      }, {});

      handleSubmit?.(values as CreatableAPIResource);
    }}
    {...props}
    className={`flex justify-center flex-col gap-y-8 ${className}`}
  >
    <>
      {title && <Title title={title} />}
      {inputs ? inputs.map((inputProps, idx) => <InputGuesser key={idx} {...inputProps} />) : ''}
      {children}
      <div className="m-auto grid gap-4">
        {buttonProps && <BaseButton {...buttonProps} className="m-auto" />}
        {redirectionInformation ? (
          <Link href={redirectionInformation.redirectionLink} className="hover:underline text-neutral">
            {redirectionInformation.text}{' '}
            <span className="font-bold text-base-900">{redirectionInformation.highlightText}</span>
          </Link>
        ) : null}
      </div>
    </>
  </form>
);
