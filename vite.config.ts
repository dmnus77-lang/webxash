import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  base: '/webXash/',
  plugins: [vue()],
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rolldownOptions: {
      external: [
        "hlsdk-portable/cl_dlls/client_emscripten_wasm32.wasm?url",
        "hlsdk-portable/dlls/hl_emscripten_wasm32.wasm?url"
      ]
    }
  }
});