import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@stripe/stripe-js"], // Ensures Stripe is processed correctly
  },
  build: {
    rollupOptions: {
      external: [], // No external dependencies
    },
    outDir: "dist",
  },
  server: {
    historyApiFallback: true, // Fixes 404 on refresh in SPA
  },
 
});
