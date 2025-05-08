import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'remoteMenu',
      filename: 'remoteEntry.js',
      exposes: {
        './UserMenu': './src/components/UserMenu.vue'
      },
      shared: ['vue', 'pinia', 'vue-router']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@shared': path.resolve(__dirname, '../../shared')
    },
  },
  server: {
    port: 8081, // 可根據需要修改
  },
});