// Theme configuration and utilities
import { defaultTheme } from './themes';
import { Theme } from './types';

/**
 * Merge custom theme with default theme
 * @param customTheme - Custom theme overrides
 * @returns Merged theme object
 */
export const createTheme = (customTheme: Partial<Theme> = {}): Theme => {
  return {
    ...defaultTheme,
    ...customTheme,
    colors: {
      ...defaultTheme.colors,
      ...customTheme.colors,
      text: {
        ...defaultTheme.colors.text,
        ...customTheme.colors?.text,
      },
      background: {
        ...defaultTheme.colors.background,
        ...customTheme.colors?.background,
      },
    },
  };
};

/**
 * Get a theme value or fallback to a default
 * @param theme - Theme object
 * @param path - Path to the value in dot notation (e.g., 'colors.primary')
 * @param defaultValue - Default value if not found
 * @returns The theme value or default
 */
export const getThemeValue = <T>(theme: Theme, path: string, defaultValue: T): T => {
  const value = path
    .split('.')
    .reduce<unknown>(
      (obj, key) =>
        obj && typeof obj === 'object' && key in obj && obj[key as keyof typeof obj] !== undefined
          ? (obj as Record<string, unknown>)[key]
          : undefined,
      theme
    );

  return value !== undefined ? (value as T) : defaultValue;
};

/**
 * Apply theme styles to the document
 * @param theme - Theme object to apply
 */
export const applyTheme = (theme: Theme) => {
  const root = document.documentElement;

  // Apply color variables
  Object.entries(theme.colors).forEach(([key, value]) => {
    if (typeof value === 'string') {
      root.style.setProperty(`--color-${key}`, value);
    } else if (value && typeof value === 'object') {
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        root.style.setProperty(`--color-${key}-${nestedKey}`, nestedValue as string);
      });
    }
  });

  // Apply other theme properties as needed
  Object.entries(theme).forEach(([key, value]) => {
    if (key !== 'colors' && value && typeof value === 'object') {
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        root.style.setProperty(`--${key}-${nestedKey}`, String(nestedValue));
      });
    }
  });
};
