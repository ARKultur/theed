import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    // Relative to the root
    outDir: './dist',
  },
});