import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Whether the input is invalid */
  isInvalid?: boolean;
  /** Whether the input is disabled */
  isDisabled?: boolean;
  /** Whether the input is required */
  isRequired?: boolean;
  /** Size of the input */
  size?: 'sm' | 'md' | 'lg';
  /** Left element to render inside the input */
  leftElement?: React.ReactNode;
  /** Right element to render inside the input */
  rightElement?: React.ReactNode;
  /** Additional class names */
  className?: string;
  /** Additional styles */
  style?: React.CSSProperties;
}

/**
 * A customizable input component with various styles and states.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      isInvalid = false,
      isDisabled = false,
      isRequired = false,
      size = 'md',
      leftElement,
      rightElement,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'h-8 text-xs px-2',
      md: 'h-10 text-sm px-3',
      lg: 'h-12 text-base px-4',
    }[size];

    const inputClass = cn(
      'flex w-full rounded-md border border-input bg-background ring-offset-background',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium',
      'placeholder:text-muted-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      isInvalid ? 'border-destructive focus-visible:ring-destructive/50' : 'border-input',
      leftElement && 'pl-10',
      rightElement && 'pr-10',
      sizeClasses,
      className
    );

    return (
      <div className='relative w-full'>
        {leftElement && (
          <div className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/70'>
            {leftElement}
          </div>
        )}
        <input
          type={type}
          className={inputClass}
          ref={ref}
          disabled={isDisabled}
          required={isRequired}
          aria-invalid={isInvalid}
          aria-required={isRequired}
          aria-disabled={isDisabled}
          {...props}
        />
        {rightElement && (
          <div className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/70'>
            {rightElement}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
