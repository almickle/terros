import React, { useState, useEffect } from 'react';
import {
  ThemeProvider,
  Button,
  Card,
  Input,
  Checkbox,
  Radio,
  Switch,
  Select,
  Textarea,
  lightTheme,
  darkTheme,
} from '@terros/ui';
import '@terros/ux/styles';

const App: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Apply theme when isDarkMode changes
  useEffect(() => {
    const html = document.documentElement;
    const themeToApply = isDarkMode ? darkTheme : lightTheme;

    // Update HTML attributes and classes
    if (isDarkMode) {
      html.classList.add('dark');
      html.setAttribute('data-theme', 'dark');
    } else {
      html.classList.remove('dark');
      html.setAttribute('data-theme', 'light');
    }

    // Update CSS custom properties
    const root = document.documentElement;
    // Set both standard and prefixed CSS variables for better compatibility
    root.style.setProperty('--background', themeToApply.colors.background.default);
    root.style.setProperty('--color-background', themeToApply.colors.background.default);
    root.style.setProperty('--background-paper', themeToApply.colors.background.paper);
    root.style.setProperty('--color-background-paper', themeToApply.colors.background.paper);
    root.style.setProperty('--text-primary', themeToApply.colors.text.primary);
    root.style.setProperty('--color-text', themeToApply.colors.text.primary);
    root.style.setProperty('--text-secondary', themeToApply.colors.text.secondary);
    root.style.setProperty('--color-text-secondary', themeToApply.colors.text.secondary);

    // Update the theme in state
    setTheme(themeToApply);

    // Save preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Listen for system color scheme changes and apply theme
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (isDark: boolean) => {
      const themeToApply = isDark ? darkTheme : lightTheme;
      const root = document.documentElement;

      // Update HTML attributes and classes
      if (isDark) {
        root.classList.add('dark');
        root.setAttribute('data-theme', 'dark');
      } else {
        root.classList.remove('dark');
        root.setAttribute('data-theme', 'light');
      }

      // Update CSS custom properties
      root.style.setProperty('--background', themeToApply.colors.background.default);
      root.style.setProperty('--color-background', themeToApply.colors.background.default);
      root.style.setProperty('--background-paper', themeToApply.colors.background.paper);
      root.style.setProperty('--color-background-paper', themeToApply.colors.background.paper);
      root.style.setProperty('--text-primary', themeToApply.colors.text.primary);
      root.style.setProperty('--color-text', themeToApply.colors.text.primary);
      root.style.setProperty('--text-secondary', themeToApply.colors.text.secondary);
      root.style.setProperty('--color-text-secondary', themeToApply.colors.text.secondary);

      // Update the theme in state
      setTheme(themeToApply);
    };

    const handleChange = (e: MediaQueryListEvent) => {
      const newIsDark = e.matches;
      setIsDarkMode(newIsDark);

      // Only update theme if there's no saved preference
      if (!localStorage.getItem('theme')) {
        applyTheme(newIsDark);
      }
    };

    // Set initial theme based on system preference if no theme is saved
    if (!localStorage.getItem('theme')) {
      const systemIsDark = mediaQuery.matches;
      setIsDarkMode(systemIsDark);
      applyTheme(systemIsDark);
    }

    // Listen for changes in system preference
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [plan, setPlan] = useState('free');
  const [message, setMessage] = useState('');
  const [formControlsToggle, setFormControlsToggle] = useState(false);

  // Handle responsive layout
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const theme = isDarkMode ? darkTheme : lightTheme;

    root.style.setProperty('--background', theme.colors.background.default);
    root.style.setProperty('--background-paper', theme.colors.background.paper);
    root.style.setProperty('--text-primary', theme.colors.text.primary);
    root.style.setProperty('--text-secondary', theme.colors.text.secondary);

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDarkMode;
    setIsDarkMode(newIsDark);

    // Update localStorage with the new theme preference
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');

    // Update the data-theme attribute and dark class
    const html = document.documentElement;
    if (newIsDark) {
      html.setAttribute('data-theme', 'dark');
      html.classList.add('dark');
    } else {
      html.setAttribute('data-theme', 'light');
      html.classList.remove('dark');
    }

    // Apply the new theme
    setTheme(newIsDark ? darkTheme : lightTheme);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Form submitted!\nName: ${name}\nEmail: ${email}\nNewsletter: ${newsletter ? 'Yes' : 'No'}\nPlan: ${plan}\nMessage: ${message}`
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--background, var(--color-background, #ffffff))',
          color: 'var(--text-primary, var(--color-text, #111827))',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            padding: '2rem',
            flex: '1 0 auto',
          }}
          className="theme-transition"
        >
          <header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  margin: 0,
                  color: 'var(--text-primary)',
                }}
              >
                Terros Design System
              </h1>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  margin: '0.5rem 0 0 0',
                }}
              >
                Example Application
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            ></Button>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1rem',
              }}
            >
              <span
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                }}
              >
                {isDarkMode ? 'Dark' : 'Light'} Mode
              </span>
              <Switch
                checked={isDarkMode}
                onChange={toggleTheme}
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              />
            </div>
          </header>

          <Card style={{ marginBottom: '3rem', padding: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              Example Form
            </h2>
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap: '1.5rem',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      marginBottom: '0.25rem',
                    }}
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      marginBottom: '0.25rem',
                    }}
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    marginBottom: '0.75rem',
                  }}
                >
                  Subscription Plan
                </label>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  {['free', 'pro', 'enterprise'].map((option) => (
                    <div key={option} style={{ display: 'flex', alignItems: 'center' }}>
                      <Radio
                        id={`plan-${option}`}
                        name="plan"
                        checked={plan === option}
                        onChange={() => setPlan(option)}
                        style={{ marginRight: '0.5rem' }}
                      />
                      <label htmlFor={`plan-${option}`} style={{ textTransform: 'capitalize' }}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    marginBottom: '0.25rem',
                  }}
                >
                  Message (Optional)
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  rows={3}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox
                  id="newsletter"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                  style={{ marginRight: '0.5rem' }}
                />
                <label htmlFor="newsletter" style={{ fontSize: '0.875rem' }}>
                  Subscribe to our newsletter
                </label>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '1rem' }}>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setName('');
                    setEmail('');
                    setNewsletter(false);
                    setPlan('free');
                    setMessage('');
                  }}
                >
                  Reset
                </Button>
              </div>
            </form>
          </Card>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              Button Components
            </h2>

            <Card style={{ padding: '1.5rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
                Button Variants
              </h3>
              <div
                style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}
              >
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
                Button Colors
              </h3>
              <div
                style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}
              >
                <Button color="primary">Primary</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
                <Button color="danger">Danger</Button>
                <Button color="info">Info</Button>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
                Button Sizes
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                }}
              >
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '1.5rem 0 1rem 0' }}>
                Button States
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Button disabled>Disabled</Button>
                <Button loading>Loading</Button>
                <Button fullWidth>Full Width</Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Form Controls</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Text Input</label>
                  <Input placeholder="Type something..." />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Select</label>
                  <Select inputSize="md">
                    <option value="">Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="flex items-center">
                    <Checkbox className="mr-2" />
                    <span>Checkbox</span>
                  </label>
                </div>

                <div>
                  <label className="flex items-center">
                    <Radio name="example-radio" className="mr-2" />
                    <span>Radio</span>
                  </label>
                </div>

                <div className="flex items-center">
                  <Switch
                    className="mr-2"
                    checked={formControlsToggle}
                    onChange={(checked) => setFormControlsToggle(checked as boolean)}
                  />
                  <span className="ml-2">Toggle</span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    marginBottom: '0.25rem',
                  }}
                >
                  Text Area
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  rows={3}
                />
              </div>
            </Card>
          </section>
        </div>

        <footer className="py-6 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Terros Design System. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
