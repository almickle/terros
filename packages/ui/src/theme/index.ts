// Import styles from the UX package
import '@terros/ux/styles';

// Re-export theme variables and utilities
export * from './theme';

export { ThemeProvider } from './ThemeProvider';
export { useTheme } from './ThemeProvider';

export type { Theme } from './types';
