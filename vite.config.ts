import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  base: '/webxash/', // Asegúrate de que coincida con el nombre exacto de tu repo
  plugins: [vue()],
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src'),
    },
  },
});