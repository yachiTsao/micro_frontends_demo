import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
    remotes: {
      remote: 'http://localhost:4173/assets/remoteEntry.js',
      remoteMenu: 'http://localhost:4174/assets/remoteEntry.js',
    },
    shared: ['vue', 'pinia', 'vue-router']
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 8080, // 可根據需要修改
  },
});