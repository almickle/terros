import React, { createContext, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';

import { createTheme } from './theme';
import type { Theme } from './types';

// Create a context for the theme
const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: createTheme(),
  setTheme: () => {},
});

// Props for ThemeProvider
export interface ThemeProviderProps {
  /** The theme to use */
  theme?: Partial<Theme>;
  /** Callback when the theme is updated */
  onThemeChange?: (theme: Theme) => void;
  /** Child components */
  children: ReactNode;
}

/**
 * ThemeProvider component that provides theme context to all child components.
 * Wrap your app with this component to enable theming.
 *
 * @example
 * ```tsx
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 * ```
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme: customTheme,
  onThemeChange,
  children,
}) => {
  // Create the theme by merging the default theme with any custom theme provided
  const theme = useMemo(() => {
    return createTheme(customTheme);
  }, [customTheme]);

  // Create the context value
  const contextValue = useMemo(
    () => ({
      theme,
      setTheme: (newTheme: Partial<Theme>) => {
        const mergedTheme = createTheme(newTheme);
        onThemeChange?.(mergedTheme);
      },
    }),
    [theme, onThemeChange]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <div
        className="min-h-screen theme-provider"
        style={
          {
            '--theme-primary': theme.colors.primary,
            '--theme-success': theme.colors.success,
            '--theme-warning': theme.colors.warning,
            '--theme-danger': theme.colors.danger,
            '--theme-info': theme.colors.info,
            '--theme-text': theme.colors.text.primary,
            '--theme-text-secondary': theme.colors.text.secondary,
            '--theme-background': theme.colors.background.default,
            '--theme-background-paper': theme.colors.background.paper,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

/**
 * Hook to access the theme context
 * @returns The current theme and a function to update it
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Re-export the Theme type
export type { Theme } from './types';
