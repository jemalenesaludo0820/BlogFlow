import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    proxy: {
      '/LavaLust': {
        target: 'https://bfbackend-l9q7.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/LavaLust/, '/LavaLust')
      },
      '/api': {
        target: 'https://bfbackend-l9q7.onrender.com',
        changeOrigin: true
      },
      '/auth': {
        target: 'https://bfbackend-l9q7.onrender.com',
        changeOrigin: true
      },
      '/users': {
        target: 'https://bfbackend-l9q7.onrender.com',
        changeOrigin: true
      },
      '/post_section': {
        target: 'https://bfbackend-l9q7.onrender.com',
        changeOrigin: true
      },
      '/categories': {
        target: 'https://bfbackend-l9q7.onrender.com',
        changeOrigin: true
      },
      '/notifications': {
        target: 'https://bfbackend-l9q7.onrender.com',
        changeOrigin: true
      },
      '/uploads': {
    target: 'https://bfbackend-l9q7.onrender.com',
    changeOrigin: true
  }
    
    }
  }
})
