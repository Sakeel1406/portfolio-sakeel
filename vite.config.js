import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This tells Vite: use a subfolder for GitHub, but root for Vercel
  base: process.env.VERCEL ? '/' : '/portfolio-sakeel/',
})
