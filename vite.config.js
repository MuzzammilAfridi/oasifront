import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@stripe/stripe-js"],
  },
  build: {
    rollupOptions: {
      external: [],
    },
    outDir: "dist",
  },
  server: {
    historyApiFallback: true, // Fixes 404 on refresh locally
  },
  // preview: {
  //   port: 5000, // Optional: Sets a preview server port
  // },
  base: "/", // Ensures correct path resolution
});
