# @terros/ui

A collection of reusable React components built with TypeScript and Tailwind CSS, designed to work seamlessly with the Terros Design System.

## Installation

```bash
# Using pnpm
pnpm add @terros/ui @terros/ux

# Using npm
npm install @terros/ui @terros/ux

# Using yarn
yarn add @terros/ui @terros/ux
```

## Peer Dependencies

This package requires the following peer dependencies:

- `react` (>=18.0.0)
- `react-dom` (>=18.0.0)
- `@terros/ux` (workspace version)

## Usage

### Basic Setup

Wrap your application with the `ThemeProvider` to enable theming and global styles:

```tsx
import { ThemeProvider } from '@terros/ui';
import '@terros/ux/dist/terros-ux.css';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Using Components

Import and use components as needed:

```tsx
import { Button } from '@terros/ui';

function Example() {
  return (
    <div>
      <Button variant='primary'>Click me</Button>
      <Button variant='outline' size='lg'>
        Large Button
      </Button>
    </div>
  );
}
```

## Available Components

- **Button**: A versatile button component with multiple variants, sizes, and states.

## Theming

The UI components are fully themeable. You can customize the theme by passing a custom theme to the `ThemeProvider`:

```tsx
import { ThemeProvider, createTheme } from '@terros/ui';

const customTheme = createTheme({
  colors: {
    primary: '#4f46e5',
    // ... other theme overrides
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

## Development

### Prerequisites

- Node.js 16+
- pnpm

### Setup

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Start the development server: `pnpm dev`

### Building

To build the package for production:

```bash
pnpm build
```

### Testing

To run tests:

```bash
pnpm test
```

## License

MIT
