import { forwardRef, useId } from 'react';
import type { ComponentPropsWithRef, Ref } from 'react';

import { Label } from '../../atoms';

type Option = {
  value: string | number;
  label: string;
};

type Props = ComponentPropsWithRef<'select'> & {
  label: string;
  options: Option[];
  value?: string | number;
};

export const Select = forwardRef(
  ({ label, value, options, ...rest }: Props, ref: Ref<HTMLSelectElement>) => {
    const id = useId();

    return (
      <>
        <Label id={id}>{label}</Label>
        <select
          ref={ref}
          id={id}
          defaultValue={value}
          className="bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block w-full p-2.5 mt-1
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...rest}
        >
          <option value="" disabled>
            Choose one option
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} selected>
              {option.label}
            </option>
          ))}
        </select>
      </>
    );
  }
);

Select.displayName = 'ForwardRef (Select)';
