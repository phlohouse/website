import { access, mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { dirname, extname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const appRoot = join(here, '..')
const repoRoot = join(appRoot, '..')
const sourceRoot = join(repoRoot, '..', 'phlo', 'docs')
const targetRoot = join(appRoot, 'content', 'phlo-docs')

const INCLUDE = [
  'index.md',
  'getting-started',
  'guides',
  'packages',
  'setup',
  'operations',
  'reference',
]

await mkdir(targetRoot, { recursive: true })

try {
  await access(sourceRoot)
} catch (error) {
  if (error?.code === 'ENOENT') {
    console.warn(`Skipping docs sync; source not found at ${sourceRoot}`)
    process.exit(0)
  }
  throw error
}

for (const item of INCLUDE) {
  await copyMarkdown(join(sourceRoot, item), targetRoot)
}

async function copyMarkdown(source, targetBase) {
  const entries = await safeReaddir(source)

  if (!entries) {
    const rel = relative(sourceRoot, source).replace(/\.md$/, '.mdx')
    const target = join(targetBase, rel)
    await mkdir(dirname(target), { recursive: true })
    const raw = await readFile(source, 'utf8')
    await writeFile(target, sanitizeMdx(raw))
    return
  }

  for (const entry of entries) {
    const child = join(source, entry.name)
    if (entry.isDirectory()) {
      await copyMarkdown(child, targetBase)
    } else if (entry.isFile() && extname(entry.name) === '.md') {
      await copyMarkdown(child, targetBase)
    }
  }
}

async function safeReaddir(path) {
  try {
    return await readdir(path, { withFileTypes: true })
  } catch (error) {
    if (error?.code === 'ENOTDIR') return undefined
    throw error
  }
}

function sanitizeMdx(raw) {
  const withoutMatter = raw
    .replace(/^---\n[\s\S]*?\n---\n?/, '')
    .replace(/^import\s+.+$/gm, '')
    .replace(/^export\s+.+$/gm, '')

  return withoutMatter
    .split(/(```[\s\S]*?```)/g)
    .map((part) => {
      if (part.startsWith('```')) return part
      return part
        .replace(/</g, '&lt;')
        .replace(/{/g, '&#123;')
        .replace(/}/g, '&#125;')
    })
    .join('')
}
