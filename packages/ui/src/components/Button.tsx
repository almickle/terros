import * as React from 'react';

import { getButtonStyles } from './button-variants';
import { Spinner } from './Spinner';
import { usePressEffect } from './usePressEffect';

import { useTheme } from '@/theme/ThemeProvider';
import type { BaseProps, WithVariant, WithSize, WithColor, WithFullWidth } from '@/types';
import { createStyles, mergeStyles } from '@/utils/style-utils';

type Styles = Record<string, string | number | React.CSSProperties | undefined | null>;

type OmitButtonColor = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'style'>;

// Extend base props with button-specific props
export interface ButtonProps
  extends OmitButtonColor,
    BaseProps,
    WithVariant,
    WithSize,
    WithColor,
    WithFullWidth {
  /** Whether the button is in a loading state */
  loading?: boolean;
  /** Icon to display before the button text */
  leftIcon?: React.ReactNode;
  /** Icon to display after the button text */
  rightIcon?: React.ReactNode;
  /** Whether the button should take up the full width of its container */
  fullWidth?: boolean;
  /** Whether the button is disabled */
  disabled?: boolean;
  style?: Styles;
}

/**
 * A customizable button component with various styles and states.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      color = 'primary',
      fullWidth = false,
      loading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      style,
      ...buttonProps
    },
    ref
  ) => {
    const { theme } = useTheme();
    // Use press effect from ux library
    // eslint-disable-next-line import/no-unresolved
    const press = usePressEffect();

    const buttonStyles = React.useMemo(() => {
      // Get base styles from variant system
      const variantStyles = getButtonStyles({
        variant,
        size,
        color,
        fullWidth,
        disabled: loading || disabled,
      });

      // Define base button styles
      const baseButtonStyles: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing?.sm || '8px',
        border: 'none',
        borderRadius: theme.borderRadius?.md || '4px',
        fontWeight: theme.fontWeights?.medium || 500,
        transition: theme.transitions?.default || 'all 0.2s ease-in-out',
        cursor: loading || disabled ? 'not-allowed' : 'pointer',
        opacity: loading || disabled ? 0.7 : 1,
        width: fullWidth ? '100%' : 'auto',
      };

      // Merge all styles with proper type safety
      const mergedStyles = {
        ...baseButtonStyles,
        ...variantStyles,
      } as const;

      // Apply theme and merge with any additional styles from props
      return mergeStyles(createStyles(theme, mergedStyles), style || {});
    }, [theme, variant, size, color, fullWidth, loading, disabled, style]);

    const spinnerStyles: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      marginRight: theme.spacing?.sm || '8px',
      flexShrink: 0,
    };

    const iconStyles: React.CSSProperties = {
      display: 'inline-flex',
      marginRight: theme.spacing?.sm || '8px',
    };

    const rightIconStyles: React.CSSProperties = {
      display: 'inline-flex',
      marginLeft: theme.spacing?.sm || '8px',
    };

    return (
      <button
        ref={ref}
        {...buttonProps}
        onMouseDown={press.onMouseDown}
        onMouseUp={press.onMouseUp}
        onMouseLeave={press.onMouseLeave}
        style={{
          ...buttonStyles,
          ...press.style,
          ...style,
        }}
        disabled={loading || disabled}
        aria-busy={loading}
      >
        {loading && <Spinner style={spinnerStyles} />}
        {leftIcon && !loading && <span style={iconStyles}>{leftIcon}</span>}
        {children}
        {rightIcon && <span style={rightIconStyles}>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
