import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/shopping-cart/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});