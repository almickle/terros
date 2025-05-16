import { createContext, useContext, useState, useMemo, useEffect, useCallback } from 'react';

import { ThemeProvider as UIThemeProvider, lightTheme, darkTheme } from '@terros/ui';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Layout } from '@/components';
import CompanyPage from '@/pages/CompanyPage';
import DashboardPage from '@/pages/DashboardPage';
import Lander from '@/pages/Lander';
import ProductPage from '@/pages/ProductPage';

type ThemeContextType = {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
};

type MobileContextType = {
  isMobile: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const MobileContext = createContext<MobileContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const useMobile = () => {
  const context = useContext(MobileContext);
  if (context === undefined) {
    throw new Error('useMobile must be used within a ThemeProvider');
  }
  return context;
};

// Custom theme provider that handles theme persistence and switching
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mobileValue = useMemo(() => ({ isMobile }), [isMobile]);

  const [theme, setThemeState] = useState<'light' | 'dark'>(
    () => (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
  );

  const setTheme = useCallback((theme: 'light' | 'dark') => {
    setThemeState(theme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  // Apply theme class to root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Memoize the theme object to prevent unnecessary re-renders
  const currentTheme = useMemo(() => (theme === 'light' ? lightTheme : darkTheme), [theme]);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      currentTheme,
    }),
    [theme, setTheme, toggleTheme, currentTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MobileContext.Provider value={mobileValue}>
        <UIThemeProvider theme={currentTheme}>{children}</UIThemeProvider>
        <Analytics />
      </MobileContext.Provider>
    </ThemeContext.Provider>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Lander />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="company" element={<CompanyPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
