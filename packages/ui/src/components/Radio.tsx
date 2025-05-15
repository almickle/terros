import * as React from 'react';

import { cn } from '@/lib/utils';

const Radio = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    /** Whether the radio is checked */
    isChecked?: boolean;
    /** Whether the radio is disabled */
    isDisabled?: boolean;
    /** Whether the radio is invalid */
    isInvalid?: boolean;
    /** Whether the radio is required */
    isRequired?: boolean;
    /** Size of the radio */
    size?: 'sm' | 'md' | 'lg';
    /** Additional class names */
    className?: string;
  }
>(({ className, isChecked, isDisabled, isInvalid, isRequired, size = 'md', ...props }, ref) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  }[size];

  return (
    <input
      type='radio'
      className={cn(
        'form-radio rounded-full border-gray-300 text-primary-600 focus:ring-primary-500',
        isInvalid ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary-500',
        isDisabled && 'opacity-50 cursor-not-allowed',
        sizeClasses,
        className
      )}
      checked={isChecked}
      disabled={isDisabled}
      aria-invalid={isInvalid}
      aria-required={isRequired}
      ref={ref}
      {...props}
    />
  );
});

Radio.displayName = 'Radio';

export { Radio };
