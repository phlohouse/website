import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    // Prerender the marketing landing page at build time.
    tanstackStart({
      prerender: {
        routes: ['/'],
        crawlLinks: true,
      },
    }),
    // React's Vite plugin must come AFTER Start's plugin.
    viteReact(),
    tailwindcss(),
  ],
})
