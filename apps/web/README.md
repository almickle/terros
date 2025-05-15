# Terros Web Application

This is the main web application for Terros, built with React, TypeScript, and Vite.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm 8.15.0 or higher

### Installation

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

   This will start the development server at `http://localhost:3000`.

## 🛠 Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview the production build
- `pnpm lint` - Lint the codebase
- `pnpm format` - Format the codebase
- `pnpm type-check` - Run TypeScript type checking

## 🏗 Project Structure

```
.
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components
│   ├── styles/        # Global styles and Tailwind configuration
│   ├── lib/           # Utility functions and libraries
│   ├── hooks/         # Custom React hooks
│   ├── assets/        # Static assets (images, fonts, etc.)
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── public/            # Static files
├── index.html         # HTML entry point
└── vite.config.ts     # Vite configuration
```

## 📦 Dependencies

- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [ESLint](https://eslint.org/) - Linting
- [Prettier](https://prettier.io/) - Code Formatting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
