import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Whether the textarea is invalid */
  isInvalid?: boolean;
  /** Whether the textarea is disabled */
  isDisabled?: boolean;
  /** Whether the textarea is required */
  isRequired?: boolean;
  /** Size of the textarea */
  size?: 'sm' | 'md' | 'lg';
  /** Number of rows to display */
  rows?: number;
  /** Additional class names */
  className?: string;
  /** Additional styles */
  style?: React.CSSProperties;
}

/**
 * A customizable textarea component with various styles and states.
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      isInvalid = false,
      isDisabled = false,
      isRequired = false,
      size = 'md',
      rows = 3,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-3 py-2 text-base',
      lg: 'px-4 py-3 text-lg',
    }[size];

    const textareaClass = cn(
      'flex w-full rounded-md border border-input bg-background px-3 py-2',
      'ring-offset-background placeholder:text-muted-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      isInvalid ? 'border-destructive focus-visible:ring-destructive/50' : 'border-input',
      sizeClasses,
      className
    );

    return (
      <textarea
        className={textareaClass}
        ref={ref}
        disabled={isDisabled}
        required={isRequired}
        aria-invalid={isInvalid}
        aria-required={isRequired}
        aria-disabled={isDisabled}
        rows={rows}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
