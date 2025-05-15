import { CSSProperties } from 'react';

import { Theme } from '../theme/types';

/**
 * Get a value from the theme object using a path
 * @param theme - The theme object
 * @param path - Path to the value in dot notation (e.g., 'colors.primary')
 * @param defaultValue - Default value if not found
 * @returns The theme value or default
 */
export const getThemeValue = <T>(theme: Theme, path: string, defaultValue: T): T => {
  const value = path
    .split('.')
    .reduce<unknown>(
      (obj, key) =>
        obj && typeof obj === 'object' && key in obj && (obj as Record<string, unknown>)[key],
      theme
    );

  return value !== undefined ? (value as T) : defaultValue;
};

type StyleValue = string | number | CSSProperties | undefined | null;
type Styles = Record<string, StyleValue>;

/**
 * Create style props based on theme
 * @param theme - The theme object
 * @param styles - Style object with theme paths as values
 * @param baseStyles - Base style object
 * @returns Style object with theme values
 */

export const createStyles = <T extends Styles>(
  theme: Theme,
  styles: T,
  baseStyles: Styles = {}
): T => {
  const result = { ...baseStyles } as Record<string, unknown>;

  for (const [key, value] of Object.entries(styles)) {
    if (typeof value === 'string' && value.startsWith('theme.')) {
      const themePath = value.replace('theme.', '');
      result[key] = getThemeValue(theme, themePath, value);
    } else if (value && typeof value === 'object' && !Array.isArray(value)) {
      result[key] = createStyles(theme, value as Styles);
    } else {
      result[key] = value;
    }
  }

  return result as T;
};

/**
 * Merge multiple style objects together
 * @param styles - Style objects to merge
 * @returns Merged style object
 */
export const mergeStyles = (...styles: Array<Styles | undefined | null>): Styles => {
  return styles.reduce<Styles>((acc, style) => {
    if (!style) return acc;

    const newResult = { ...acc };

    for (const [key, value] of Object.entries(style)) {
      if (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        key in newResult &&
        typeof newResult[key] === 'object' &&
        newResult[key] !== null
      ) {
        newResult[key] = { ...newResult[key], ...value };
      } else {
        newResult[key] = value;
      }
    }

    return newResult;
  }, {});
};
