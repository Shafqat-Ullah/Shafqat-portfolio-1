import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build for Netlify / Vercel (site served at root domain)
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist-netlify'
  }
})
