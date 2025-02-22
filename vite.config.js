import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["framer-motion", "@stripe/stripe-js"], // ✅ Combine both into an array
    },
    outDir: 'dist', // Default output directory
  },
})
