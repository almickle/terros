import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({
      projects: [
        path.resolve(__dirname, '../tsconfig.json'),
        path.resolve(__dirname, './tsconfig.json'),
      ],
    }),
  ],
  resolve: {
    alias: [
      // Legacy mappings for backward compatibility
      {
        find: '@terros/ui',
        replacement: path.resolve(__dirname, '../src'),
      },
      {
        find: '@terros/ux',
        replacement: path.resolve(__dirname, '../../ux/src'),
      },
    ],
  },
  server: {
    port: 3000,
    open: true,
  },
});
