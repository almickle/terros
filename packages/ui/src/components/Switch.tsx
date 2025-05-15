import * as React from 'react';

import { useTheme } from '@/theme/ThemeProvider';

const Switch = React.forwardRef<
  HTMLInputElement,
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    /** Whether the switch is checked */
    checked?: boolean;
    /** Whether the switch is disabled */
    disabled?: boolean;
    /** Whether the switch is invalid */
    isInvalid?: boolean;
    /** Whether the switch is required */
    required?: boolean;
    /** Size of the switch */
    size?: 'sm' | 'md' | 'lg';
    /** Additional class names */
    className?: string;
    /** Callback when the switch is toggled */
    onChange?: (checked: boolean) => void;
  }
>(
  (
    {
      className,
      checked = false,
      disabled = false,
      isInvalid = false,
      required = false,
      size = 'md',
      onChange,
      ...props
    },
    ref
  ) => {
    const { theme } = useTheme();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.checked);
      }
    };

    // Define size-based styles
    const switchSizes = {
      sm: { width: '1.75rem', height: '1rem', dotSize: '0.75rem' },
      md: { width: '2.25rem', height: '1.25rem', dotSize: '1rem' },
      lg: { width: '2.75rem', height: '1.5rem', dotSize: '1.25rem' },
    }[size];

    return (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          position: 'relative',
          ...(typeof className === 'string' ? { className } : {}),
        }}
      >
        <input
          type='checkbox'
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            opacity: 0,
            zIndex: 1,
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
          checked={checked}
          disabled={disabled}
          aria-invalid={isInvalid}
          aria-required={required}
          onChange={handleChange}
          ref={ref}
          {...props}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: switchSizes.width,
            height: switchSizes.height,
            borderRadius: '9999px',
            backgroundColor: checked
              ? theme.colors.primary
              : 'var(--color-background-elevated, #1e2747)',
            padding: '0 0.125rem',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
            transition: 'background-color 0.2s ease-in-out',
            border: `1px solid ${isInvalid ? theme.colors.danger : 'transparent'}`,
          }}
          onClick={(e) => {
            // Prevent double-triggering with the input click
            e.preventDefault();
            if (!disabled && onChange) {
              onChange(!checked);
            }
          }}
        >
          <span
            style={{
              display: 'block',
              width: switchSizes.dotSize,
              height: switchSizes.dotSize,
              backgroundColor: theme.colors.background.default,
              borderRadius: '50%',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
              border: `1px solid ${checked ? 'transparent' : theme.colors.border}`,
              transform: checked
                ? `translateX(calc(${switchSizes.width} - ${switchSizes.dotSize} - 0.25rem))`
                : 'translateX(0)',
              transition: 'transform 0.2s ease-in-out',
            }}
          />
        </div>
      </div>
    );
  }
);

Switch.displayName = 'Switch';

export { Switch };
