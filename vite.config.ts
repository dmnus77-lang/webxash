import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  base: '/webxash/',
  plugins: [vue()],
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rolldownOptions: {
      external: [
        /.*\.wasm\?url$/
      ]
    }
  }
});