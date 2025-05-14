import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    open: true
  },
  build: {
    outDir: 'dist', // Make sure the build is output to the correct directory
    emptyOutDir: true, // Clean the dist folder before building
  },
})