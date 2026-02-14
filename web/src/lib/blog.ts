import blogIndex from '../generated/blog-index.json'

export interface BlogPost {
  slug: string
  title: string
  number: number
  description: string
  readTime: string
  html: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  number: number
  description: string
  readTime: string
}

export function listPosts(): BlogPostMeta[] {
  return blogIndex
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const mod = await import(`../generated/blog-posts/${slug}.json`)
    return mod.default
  } catch {
    return null
  }
}
