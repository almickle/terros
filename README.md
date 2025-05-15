# Terros

A modern web application built with React, TypeScript, and Moon.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm 8.15.0 or higher

### Installation

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Setup the workspace:

   ```bash
   pnpm run prepare
   ```

## 🛠 Development

### Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build for production
- `pnpm lint` - Lint the codebase
- `pnpm format` - Format the codebase
- `pnpm test` - Run tests

## 🏗 Project Structure

```
.
├── apps/                    # Applications
│   └── web/                 # Web application
├── packages/                # Shared packages
│   ├── ui/                  # UI components
│   └── utils/               # Utility functions
├── .eslintrc.js             # ESLint configuration
├── .prettierrc.js           # Prettier configuration
├── moon.yml                 # Moon workspace configuration
└── package.json             # Workspace package.json
```

## 📦 Tech Stack

- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Moon](https://moonrepo.dev/) - Monorepo Tooling
- [ESLint](https://eslint.org/) - Linting
- [Prettier](https://prettier.io/) - Code Formatting
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
