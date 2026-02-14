import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'
import { renderMermaid } from 'beautiful-mermaid'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BLOG_DIR = path.resolve(__dirname, '../content/blog')
const GEN_DIR = path.resolve(__dirname, '../src/generated')
const POSTS_DIR = path.join(GEN_DIR, 'blog-posts')

const MERMAID_THEME = {
  bg: '#18181b',
  fg: '#e4e4e7',
  accent: '#6366f1',
  muted: '#71717a',
  surface: '#27272a',
  border: '#3f3f46',
  line: '#52525b',
}

function extractTitle(content) {
  const match = content.match(/^#\s+(.+)$/m)
  if (!match) return 'Untitled'
  return match[1].replace(/^Part\s+\d+:\s*/i, '')
}

function extractNumber(slug) {
  const match = slug.match(/^(\d+)/)
  return match ? parseInt(match[1], 10) : 0
}

function estimateReadTime(content) {
  const words = content.split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min`
}

function stripFirstH1(md) {
  return md.replace(/^#\s+.+$/m, '').trimStart()
}

function rewriteBlogLinks(md) {
  return md.replace(/\]\((\d{2}-[a-z0-9-]+)\.md(#[^)]*?)?\)/g, '](/blog/$1$2)')
}

function cleanMermaidSource(src) {
  return src
    // ["Label<br/>Subtitle"] → [Label · Subtitle]
    .replace(/\["([^"]*?)"\]/g, (_, label) => {
      const cleaned = label.replace(/<br\s*\/?>/gi, ' · ')
      return `[${cleaned}]`
    })
    // ("Label<br/>Subtitle") → (Label · Subtitle)
    .replace(/\("([^"]*?)"\)/g, (_, label) => {
      const cleaned = label.replace(/<br\s*\/?>/gi, ' · ')
      return `(${cleaned})`
    })
    // Remove style directives (beautiful-mermaid uses its own theming)
    .replace(/^\s*style\s+\w+\s+fill:.*$/gm, '')
}

async function renderMermaidBlocks(md) {
  const parts = md.split(/(```mermaid\n[\s\S]*?```)/g)
  const rendered = await Promise.all(
    parts.map(async (part) => {
      const match = part.match(/^```mermaid\n([\s\S]*?)```$/)
      if (!match) return part
      try {
        const cleaned = cleanMermaidSource(match[1].trim())
        const svg = await renderMermaid(cleaned, MERMAID_THEME)
        return `<div class="mermaid-diagram">${svg}</div>`
      } catch (err) {
        console.warn('Mermaid render failed, keeping as code block:', err.message)
        return part
      }
    }),
  )
  return rendered.join('')
}

function tagFileTreeBlocks(html) {
  return html.replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/g, (match, attrs, content) => {
    if (/[├└│──]|\/\s*$/.test(content) && /[├└]/.test(content)) {
      return `<pre class="file-tree"><code${attrs}>${content}</code></pre>`
    }
    return match
  })
}

async function renderMarkdown(content) {
  const withMermaid = await renderMermaidBlocks(content)
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight, { detect: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(withMermaid)
  return tagFileTreeBlocks(String(result))
}

async function main() {
  fs.mkdirSync(GEN_DIR, { recursive: true })
  fs.mkdirSync(POSTS_DIR, { recursive: true })

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md') && f !== 'README.md')
    .sort()

  const index = []

  for (const file of files) {
    const slug = file.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8')
    const { data, content } = matter(raw)

    const title = data.title || extractTitle(content)
    const number = extractNumber(slug)
    const description = data.description || ''
    const readTime = estimateReadTime(content)
    const html = await renderMarkdown(rewriteBlogLinks(stripFirstH1(content)))

    index.push({ slug, title, number, description, readTime })

    fs.writeFileSync(
      path.join(POSTS_DIR, `${slug}.json`),
      JSON.stringify({ slug, title, number, description, readTime, html }),
    )

    console.log(`  ${slug}`)
  }

  index.sort((a, b) => a.number - b.number)
  fs.writeFileSync(path.join(GEN_DIR, 'blog-index.json'), JSON.stringify(index, null, 2))

  console.log(`Built ${index.length} blog posts → src/generated/`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
