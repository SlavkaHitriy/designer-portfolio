import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';

const root = resolve(__dirname, 'src');

export const alias = ['@', '@core', '@pages', '@shared'];

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg'
    })
  ],
  resolve: {
    alias: alias.map((name) => ({
      find: name,
      replacement: resolve(root, name.replace('@', ''))
    }))
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/core/styles/shared/variables.scss";
        @import "@/core/styles/shared/mixins.scss";
        `
      }
    }
  }
});
