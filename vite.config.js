import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/sagar-shirwalkar.github.io/' : '/',
  plugins: [react()],
  build: {
    minify: false,
    sourcemap: true, // Enable source maps in production
  },
})
