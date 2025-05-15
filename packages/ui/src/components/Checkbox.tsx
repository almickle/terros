import * as React from 'react';

import { cn } from '@/lib/utils';
import { useTheme } from '@/theme/ThemeProvider';

const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    /** Whether the checkbox is checked */
    isChecked?: boolean;
    /** Whether the checkbox is disabled */
    isDisabled?: boolean;
    /** Whether the checkbox is invalid */
    isInvalid?: boolean;
    /** Whether the checkbox is required */
    isRequired?: boolean;
    /** Size of the checkbox */
    size?: 'sm' | 'md' | 'lg';
    /** Additional class names */
    className?: string;
  }
>(({ className, isChecked, isDisabled, isInvalid, isRequired, size = 'md', ...props }, ref) => {
  const { theme } = useTheme();
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  }[size];

  // Use CSS variables for theming
  const style = {
    '--checkbox-bg': theme.colors.background.paper,
    '--checkbox-border': isInvalid ? theme.colors.danger : theme.colors.border,
    '--checkbox-ring': isInvalid ? theme.colors.danger : theme.colors.primary,
    '--checkbox-text': theme.colors.primary,
    '--checkbox-check': theme.colors.primary, // Checkmark color - using primary color
  } as React.CSSProperties;

  return (
    <div className="relative flex items-center">
      <input
        type="checkbox"
        className={cn(
          'form-checkbox appearance-none',
          'w-5 h-5 rounded',
          'border-2 border-[var(--checkbox-border)]',
          'focus:ring-2 focus:ring-offset-0 focus:ring-[var(--checkbox-ring)]',
          'transition-colors duration-200',
          'checked:bg-[var(--checkbox-ring)]',
          'checked:border-[var(--checkbox-ring)]',
          isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
          'relative',
          sizeClasses,
          className
        )}
        style={style}
        checked={isChecked}
        disabled={isDisabled}
        aria-invalid={isInvalid}
        aria-required={isRequired}
        ref={ref}
        {...props}
      />
      {isChecked && (
        <svg
          className="absolute left-0 w-5 h-5 pointer-events-none"
          viewBox="0 0 20 20"
          fill="var(--checkbox-check)"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
