import * as React from 'react';

import { cn } from '@/lib/utils';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Whether the select is disabled */
  isDisabled?: boolean;
  /** Whether the select is invalid */
  isInvalid?: boolean;
  /** Whether the select is required */
  isRequired?: boolean;
  /** Size of the select */
  inputSize?: 'sm' | 'md' | 'lg';
  /** Left element to render inside the select */
  leftElement?: React.ReactNode;
  /** Right element to render inside the select */
  rightElement?: React.ReactNode;
  /** Additional class names */
  className?: string;
  /** Additional styles */
  style?: React.CSSProperties;
  /** Options for the select */
  options?: Array<{
    value: string | number;
    label: string;
    disabled?: boolean;
  }>;
  /** Placeholder text */
  placeholder?: string;
  /** Value of the select */
  value?: string | number;
  /** Default value of the select */
  defaultValue?: string | number;
  /** Callback when the value changes */
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * A customizable select component with various styles and states.
 */
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      isDisabled = false,
      isInvalid = false,
      isRequired = false,
      inputSize = 'md',
      leftElement,
      rightElement,
      options = [],
      placeholder = 'Select an option',
      children,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'h-8 text-xs pl-8 pr-10',
      md: 'h-10 text-sm pl-10 pr-10',
      lg: 'h-12 text-base pl-12 pr-12',
    }[inputSize];

    const iconSizeClasses = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    }[inputSize];

    const selectClass = cn(
      'block w-full rounded-md border border-input bg-background py-2 text-foreground',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      isInvalid ? 'border-destructive focus:ring-destructive/50' : 'border-input',
      leftElement && 'pl-10',
      rightElement && 'pr-10',
      sizeClasses,
      className
    );

    return (
      <div className='relative'>
        {leftElement && (
          <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
            {leftElement}
          </div>
        )}
        <select
          className={selectClass}
          disabled={isDisabled}
          required={isRequired}
          aria-invalid={isInvalid}
          aria-required={isRequired}
          aria-disabled={isDisabled}
          ref={ref}
          {...props}
        >
          {placeholder && (
            <option value='' disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
          {children}
        </select>
        <div
          className={cn(
            'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400',
            iconSizeClasses
          )}
        ></div>
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Select };
