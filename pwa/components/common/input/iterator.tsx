import React, { useMemo, useState } from 'react';
import { InputGuesserProps } from './guesser';
import { Group } from './group';
import { InputHTMLAttributes } from 'react';
import { OutlinedButton } from '../button';

export type IteratorValue = Record<string, string | ReadonlyArray<string> | boolean | undefined>;
export type IteratorProps = {
  className?: string;
  label: string;
  name: string;
  // TODO: remove the any keyword here.
  // eslint-disable-next-line
  inputsTemplate: ReadonlyArray<InputGuesserProps & { onChange?: (value: any) => void }>;
  values: ReadonlyArray<IteratorValue>;
};

export const Iterator: React.FC<IteratorProps> = ({ className = 'gap-4', inputsTemplate, label, name, values }) => {
  const [iteration, setIteration] = useState(values.length);
  const memoizedIterations = useMemo(() => [...new Array(iteration)], [iteration]);

  return (
    <div className="form-control w-full gap-4">
      <label className="text-xl font-bold">{label}</label>
      <div className={className}>
        {memoizedIterations.map((_, idx) => {
          return (
            <div key={idx} className="flex py-2">
              <Group
                inputs={inputsTemplate.map(
                  (template) =>
                    ({
                      ...template,
                      defaultValue: values[idx]?.[(template as InputHTMLAttributes<HTMLInputElement>).name ?? ''],
                      defaultChecked: values[idx]?.[(template as InputHTMLAttributes<HTMLInputElement>).name ?? ''],
                      onChange: ({ target }) => {
                        template.onChange?.({ target: { ...target, iteration: idx } });
                      },
                    } as InputGuesserProps)
                )}
              />
            </div>
          );
        })}
      </div>
      <OutlinedButton
        text={`Add new item in ${name}`}
        onClick={(ev) => {
          ev.preventDefault();
          setIteration(iteration + 1);
        }}
      />
    </div>
  );
};
