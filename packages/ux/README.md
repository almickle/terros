# @terros/ux

A lightweight SCSS utility library for the Terros design system, built with modern tooling for optimal performance.

## Features

- 🚀 **Modern Build System** - Built with Vite for fast development and optimized production builds
- 🎨 **Design Tokens** - Centralized variables for colors, typography, spacing, and more
- 🛠️ **Utility-First** - Generate utility classes for rapid UI development
- 🔌 **Framework Agnostic** - Works with any JavaScript framework or vanilla projects
- 📱 **Responsive** - Mobile-first responsive utilities
- 🧩 **Modular** - Import only what you need

## Installation

```bash
# Using pnpm (recommended)
pnpm add @terros/ux

# Using npm
npm install @terros/ux

# Using yarn
yarn add @terros/ux
```

## Usage

### Using Compiled CSS (Easiest)

```html
<!-- In your HTML -->
<link rel="stylesheet" href="./node_modules/@terros/ux/dist/terros-ux.css" />
```

### Using SCSS (Recommended for Customization)

```scss
// Import the entire library
@use '@terros/ux' as *;

// Or import specific modules
@use '@terros/ux/src/styles/variables' as *;
@use '@terros/ux/src/styles/mixins' as *;

// Your custom styles here
.my-component {
  @include respond-to('md') {
    // Responsive styles
  }
}
```

### CSS Custom Properties (Variables)

```css
/* Import just the CSS variables */
@import '@terros/ux/dist/vars.css';

/* Use the variables in your CSS */
:root {
  --color-primary: var(--terros-color-primary);
  --spacing-4: var(--terros-spacing-4);
}
```

## Development

### Prerequisites

- Node.js 16+
- pnpm (recommended) or npm

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm run dev
   ```

### Build

```bash
# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Available Features

### Mixins

- `respond-to($breakpoint)` - Media query helper
- `visually-hidden()` - Hide element visually but keep it accessible
- `container($max-width)` - Center a container with max-width

### Variables

- Colors (`$colors`)
- Typography (`$font-sizes`, `$font-weights`)
- Spacing (`$spacing`)
- Breakpoints (`$breakpoints`)
- Border radius (`$border-radius`)
- Box shadows (`$box-shadows`)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow the [Sass Guidelines](https://sass-guidelin.es/)
- Use BEM naming convention for components
- Write meaningful commit messages following [Conventional Commits](https://www.conventionalcommits.org/)

## Publishing

1. Update the version in `package.json`
2. Update `CHANGELOG.md`
3. Commit changes with `chore(release): vX.Y.Z`
4. Create a git tag `vX.Y.Z`
5. Push changes and tags
6. Run `npm publish`

## License

MIT © Terros Design System
