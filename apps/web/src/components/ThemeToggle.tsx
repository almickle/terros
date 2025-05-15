import { useMemo } from 'react';

import { RiSunLine, RiMoonLine } from 'react-icons/ri';

import { useTheme } from '../App';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = useMemo(() => theme === 'dark', [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? <RiSunLine className="theme-icon" /> : <RiMoonLine className="theme-icon" />}
    </button>
  );
}

export default ThemeToggle;
