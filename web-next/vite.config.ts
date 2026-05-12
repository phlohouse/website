import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    // Prerender the marketing landing page at build time.
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: false,
      },
    }),
    mdx({
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            properties: {
              className: ['heading-anchor'],
              ariaHidden: true,
              tabIndex: -1,
            },
            content: {
              type: 'text',
              value: '#',
            },
          },
        ],
      ],
    }),
    // React's Vite plugin must come AFTER Start's plugin.
    viteReact(),
    tailwindcss(),
  ],
})
