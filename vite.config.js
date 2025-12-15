import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/repo-restaurant-app/',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
    esbuild: {
    legalComments: "none",
  },
  build: {
    sourcemap: false, // 👈 evita que React use eval()
  }
})

