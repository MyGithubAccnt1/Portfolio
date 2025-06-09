import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: import.meta.env.MODE === "production" && "/Portfolio/",
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true,
  },
})
