import { resolve } from 'path';

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/styles/index.js'),
      name: 'terros-ux',
      fileName: 'terros-ux',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        assetFileNames: 'terros-ux.css',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Any SCSS options you want to pass to the compiler
      },
    },
  },
});
