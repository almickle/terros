import { type VariantProps } from 'class-variance-authority';

// Type definitions for button variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonColor = 'primary' | 'success' | 'warning' | 'danger' | 'info';

// Type for button variants props
export interface ButtonVariantsProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  fullWidth?: boolean;
  disabled?: boolean;
}

// This is a no-op function for type compatibility
export const buttonVariants = (): Record<string, never> => ({});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

// Base styles that apply to all buttons
const baseStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 500,
  borderRadius: '0.375rem',
  outline: 'none',
  transition: 'background-color 200ms, border-color 200ms, color 200ms, box-shadow 200ms',
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px var(--color-primary)',
  },
  '&:disabled': {
    opacity: 0.5,
    pointerEvents: 'none',
  },
} as const;

// Size variants
const sizes = {
  sm: {
    padding: '0.375rem 0.75rem',
    fontSize: '0.75rem',
  },
  md: {
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
  },
  lg: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
  },
} as const;

// Color variants
const colors = {
  primary: {
    default: {
      backgroundColor: 'var(--color-primary, #4f46e5)',
      color: 'var(--color-text-on-primary, #ffffff)',
      '&:hover': {
        backgroundColor: 'var(--color-primary-hover, #4338ca)',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px var(--color-primary-light)',
      },
    },
    outline: {
      backgroundColor: 'transparent',
      border: '1px solid var(--color-primary, #4f46e5)',
      color: 'var(--color-primary, #4f46e5)',
      '&:hover': {
        backgroundColor: 'var(--color-primary-faded, rgba(79, 70, 229, 0.1))',
        borderColor: 'var(--color-primary-hover, #4338ca)',
        color: 'var(--color-primary-hover, #4338ca)',
      },
      '&:active': {
        backgroundColor: 'var(--color-primary-faded, rgba(79, 70, 229, 0.2))',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px var(--color-primary-light, rgba(79, 70, 229, 0.3))',
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary, #4f46e5)',
      '&:hover': {
        backgroundColor: 'var(--color-primary-faded, rgba(79, 70, 229, 0.1))',
        color: 'var(--color-primary-hover, #4338ca)',
      },
      '&:active': {
        backgroundColor: 'var(--color-primary-faded, rgba(79, 70, 229, 0.2))',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px var(--color-primary-light, rgba(79, 70, 229, 0.3))',
      },
    },
    link: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary, #4f46e5)',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        backgroundColor: 'transparent',
      },
      '&:focus': {
        boxShadow: 'none',
      },
    },
  },
  secondary: {
    default: {
      backgroundColor: 'var(--color-secondary, #6b7280)',
      color: 'var(--color-text-on-secondary, #ffffff)',
      '&:hover': {
        backgroundColor: 'var(--color-secondary-hover, #4b5563)',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px var(--color-secondary-light, rgba(107, 114, 128, 0.3))',
      },
    },
    outline: {
      backgroundColor: 'transparent',
      border: '1px solid var(--color-secondary, #6b7280)',
      color: 'var(--color-secondary, #6b7280)',
      '&:hover': {
        backgroundColor: 'var(--color-secondary-faded, rgba(107, 114, 128, 0.1))',
        borderColor: 'var(--color-secondary-hover, #4b5563)',
        color: 'var(--color-secondary-hover, #4b5563)',
      },
      '&:active': {
        backgroundColor: 'var(--color-secondary-faded, rgba(107, 114, 128, 0.2))',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px var(--color-secondary-light, rgba(107, 114, 128, 0.3))',
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-secondary, #6b7280)',
      '&:hover': {
        backgroundColor: 'var(--color-secondary-faded, rgba(107, 114, 128, 0.1))',
        color: 'var(--color-secondary-hover, #4b5563)',
      },
      '&:active': {
        backgroundColor: 'var(--color-secondary-faded, rgba(107, 114, 128, 0.2))',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px var(--color-secondary-light, rgba(107, 114, 128, 0.3))',
      },
    },
    link: {
      backgroundColor: 'transparent',
      color: '#1f2937',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        backgroundColor: 'transparent',
      },
      '&:focus': {
        boxShadow: 'none',
      },
    },
  },
  success: {
    default: {
      backgroundColor: 'var(--color-success, #10b981)',
      color: 'var(--color-text-on-success, #ffffff)',
      '&:hover': {
        backgroundColor: 'var(--color-success-hover, #059669)',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px var(--color-success-light, rgba(16, 185, 129, 0.3))',
      },
    },
    outline: {
      backgroundColor: 'transparent',
      border: '1px solid var(--color-success, #10b981)',
      color: 'var(--color-success, #10b981)',
      '&:hover': {
        backgroundColor: 'var(--color-success-faded, rgba(16, 185, 129, 0.1))',
        borderColor: 'var(--color-success-hover, #059669)',
        color: 'var(--color-success-hover, #059669)',
      },
      '&:active': {
        backgroundColor: 'var(--color-success-faded, rgba(16, 185, 129, 0.2))',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px var(--color-success-light, rgba(16, 185, 129, 0.3))',
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-success, #10b981)',
      '&:hover': {
        backgroundColor: 'var(--color-success-faded, rgba(16, 185, 129, 0.1))',
        color: 'var(--color-success-hover, #059669)',
      },
      '&:active': {
        backgroundColor: 'var(--color-success-faded, rgba(16, 185, 129, 0.2))',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px var(--color-success-light, rgba(16, 185, 129, 0.3))',
      },
    },
    link: {
      backgroundColor: 'transparent',
      color: 'var(--color-success, #2ecc71)',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        backgroundColor: 'transparent',
      },
      '&:focus': {
        boxShadow: 'none',
      },
    },
  },
  warning: {
    default: {
      backgroundColor: 'var(--color-warning, #f59e0b)',
      color: 'var(--color-text-on-warning, #1f2937)',
      '&:hover': {
        backgroundColor: 'var(--color-warning-hover, #d97706)',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px var(--color-warning-light, rgba(245, 158, 11, 0.3))',
      },
    },
    outline: {
      backgroundColor: 'transparent',
      border: '1px solid var(--color-warning, #f59e0b)',
      color: 'var(--color-warning, #f59e0b)',
      '&:hover': {
        backgroundColor: 'var(--color-warning-faded, rgba(245, 158, 11, 0.1))',
        borderColor: 'var(--color-warning-hover, #d97706)',
        color: 'var(--color-warning-hover, #d97706)',
      },
      '&:active': {
        backgroundColor: 'var(--color-warning-faded, rgba(245, 158, 11, 0.2))',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px var(--color-warning-light, rgba(245, 158, 11, 0.3))',
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-text, #1f2937)',
      '&:hover': {
        backgroundColor: 'var(--color-background-alt, rgba(0, 0, 0, 0.04))',
      },
      '&:active': {
        backgroundColor: 'var(--color-background-elevated, rgba(0, 0, 0, 0.08))',
      },
    },
    link: {
      backgroundColor: 'transparent',
      color: 'var(--color-warning, #f7dc6f)',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        backgroundColor: 'transparent',
      },
      '&:focus': {
        boxShadow: 'none',
      },
    },
  },
  danger: {
    default: {
      backgroundColor: 'var(--color-danger, #ef4444)',
      color: 'var(--color-text-on-danger, #ffffff)',
      '&:hover': {
        backgroundColor: 'var(--color-danger-hover, #dc2626)',
      },
      '&:active': {
        backgroundColor: 'var(--color-danger-faded, rgba(239, 68, 68, 0.2))',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px var(--color-danger-light, rgba(239, 68, 68, 0.3))',
      },
    },
    outline: {
      backgroundColor: 'transparent',
      border: '1px solid var(--color-danger, #ef4444)',
      color: 'var(--color-danger, #ef4444)',
      '&:hover': {
        backgroundColor: 'var(--color-danger-faded, rgba(239, 68, 68, 0.1))',
        borderColor: 'var(--color-danger-hover, #dc2626)',
        color: 'var(--color-danger-hover, #dc2626)',
      },
      '&:active': {
        backgroundColor: 'var(--color-danger-faded, rgba(239, 68, 68, 0.2))',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px var(--color-danger-light, rgba(239, 68, 68, 0.3))',
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-danger, #ef4444)',
      '&:hover': {
        backgroundColor: 'var(--color-danger-faded, rgba(239, 68, 68, 0.1))',
        color: 'var(--color-danger-hover, #dc2626)',
      },
      '&:active': {
        backgroundColor: 'var(--color-danger-faded, rgba(239, 68, 68, 0.2))',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px var(--color-danger-light, rgba(239, 68, 68, 0.3))',
      },
    },
    link: {
      backgroundColor: 'transparent',
      color: 'var(--color-danger, #e74c3c)',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        backgroundColor: 'transparent',
      },
      '&:focus': {
        boxShadow: 'none',
      },
    },
  },
  info: {
    default: {
      backgroundColor: 'var(--color-info, #3b82f6)',
      color: 'var(--color-text-on-info, #ffffff)',
      '&:hover': {
        backgroundColor: 'var(--color-info-hover, #2563eb)',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px var(--color-info-light, rgba(59, 130, 246, 0.3))',
      },
    },
    outline: {
      backgroundColor: 'transparent',
      border: '1px solid var(--color-info, #3b82f6)',
      color: 'var(--color-info, #3b82f6)',
      '&:hover': {
        backgroundColor: 'var(--color-info-faded, rgba(59, 130, 246, 0.1))',
        borderColor: 'var(--color-info-hover, #2563eb)',
        color: 'var(--color-info-hover, #2563eb)',
      },
      '&:active': {
        backgroundColor: 'var(--color-info-faded, rgba(59, 130, 246, 0.2))',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px var(--color-info-light, rgba(59, 130, 246, 0.3))',
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-info, #3b82f6)',
      '&:hover': {
        backgroundColor: 'var(--color-info-faded, rgba(59, 130, 246, 0.1))',
        color: 'var(--color-info-hover, #2563eb)',
      },
      '&:active': {
        backgroundColor: 'var(--color-info-faded, rgba(59, 130, 246, 0.2))',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px var(--color-info-light, rgba(59, 130, 246, 0.3))',
      },
    },
    link: {
      backgroundColor: 'transparent',
      color: '#3498db',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        backgroundColor: 'transparent',
      },
      '&:focus': {
        boxShadow: 'none',
      },
    },
  },
} as const;

export const getButtonStyles = ({
  variant = 'primary',
  size = 'md',
  color = 'primary',
  fullWidth = false,
  disabled = false,
}: ButtonVariantsProps) => {
  const sizeStyle = sizes[size as ButtonSize];
  const baseColor = colors[color as ButtonColor];

  // Get the appropriate styles based on variant
  let variantStyle = {};
  if (variant === 'outline') {
    variantStyle = baseColor.outline;
  } else if (variant === 'ghost') {
    variantStyle = baseColor.ghost;
  } else if (variant === 'link') {
    variantStyle = baseColor.link;
  } else {
    variantStyle = baseColor.default;
  }

  // Combine all styles
  return {
    ...baseStyles,
    ...sizeStyle,
    ...variantStyle,
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.7 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
  };
};
