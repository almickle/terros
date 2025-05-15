import { Theme } from './types';

// Predefined themes
export const lightTheme: Theme = {
  // Colors
  colors: {
    primary: 'var(--color-primary, #7c3aed)',
    success: 'var(--color-success, #10b981)',
    warning: 'var(--color-warning, #f59e0b)',
    danger: 'var(--color-danger, #ef4444)',
    info: 'var(--color-info, #6366f1)',
    border: 'var(--color-border, #e2e8f0)',
    text: {
      primary: 'var(--color-text, #1e293b)',
      secondary: 'var(--color-text-secondary, #64748b)',
    },
    background: {
      default: 'var(--color-background, #f8fafc)',
      paper: 'var(--color-background-paper, #ffffff)',
    },
  },
  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  // Border radius
  borderRadius: {
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    full: '9999px',
  },
  // Font sizes
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
  },
  // Font weights
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  // Line heights
  lineHeights: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  // Transitions
  transitions: {
    default: 'all 0.2s ease-in-out',
    fast: 'all 0.1s ease-in-out',
    slow: 'all 0.3s ease-in-out',
  },
  // Z-indices
  zIndices: {
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modal: 1400,
    popover: 1500,
    tooltip: 1600,
  },
};

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    primary: 'var(--color-primary, #8b5cf6)',
    success: 'var(--color-success, #34d399)',
    warning: 'var(--color-warning, #fbbf24)',
    danger: 'var(--color-danger, #f87171)',
    info: 'var(--color-info, #818cf8)',
    border: 'var(--color-border, #2d3748)',
    text: {
      primary: 'var(--color-text, #f8fafc)',
      secondary: 'var(--color-text-secondary, #94a3b8)',
    },
    background: {
      default: 'var(--color-background, #121212)',
      paper: 'var(--color-background-paper, #1e2747)',
    },
  },
};

export const highContrastTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    primary: 'var(--color-primary, #1a73e8)',
    success: 'var(--color-success, #0d8a0d)',
    warning: 'var(--color-warning, #e6a700)',
    danger: 'var(--color-danger, #d32f2f)',
    info: 'var(--color-info, #1a73e8)',
    text: {
      primary: 'var(--color-text, #000000)',
      secondary: 'var(--color-text-secondary, #333333)',
    },
    background: {
      default: 'var(--color-background, #ffffff)',
      paper: 'var(--color-background-paper, #f5f5f5)',
    },
  },
};

// Default theme values
export const defaultTheme: Theme = lightTheme;
