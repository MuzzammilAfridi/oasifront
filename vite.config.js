import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["@stripe/stripe-js"], // Keep only necessary externals
    },
    
    outDir: 'dist', // Default output directory
  },
})
