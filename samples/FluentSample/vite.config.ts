import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  server: {
    host: "::",
    port: 5173,
  },
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase warning limit to 1000kB to suppress the warning
    rollupOptions: {
      output: {
        manualChunks: {
          // Combine Fluent UI packages into a single fluent-ui chunk to avoid circular init
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'fluent-ui': ['@fluentui/react-components','@fluentui/react-icons','@fluentui/tokens'],
        }
      }
    }
  },
});
