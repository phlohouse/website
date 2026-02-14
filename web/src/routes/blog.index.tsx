import { createFileRoute, Link } from '@tanstack/react-router'
import { listPosts } from '../lib/blog'
import type { BlogPostMeta } from '../lib/blog'

export const Route = createFileRoute('/blog/')({
  loader: () => listPosts(),
  component: BlogIndex,
})

function BlogIndex() {
  const posts = Route.useLoaderData()

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Blog</h1>
        <p className="text-zinc-400">
          A 16-part series on building a production-ready data lakehouse with
          Phlo.
        </p>
      </div>

      <div className="space-y-3">
        {posts.map((post: BlogPostMeta) => (
          <Link
            key={post.slug}
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="group flex items-baseline gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-zinc-600"
          >
            <span className="shrink-0 font-mono text-sm text-zinc-600">
              {String(post.number).padStart(2, '0')}
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="mb-1 font-semibold text-white group-hover:text-[var(--color-accent)] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-zinc-500">{post.description}</p>
            </div>
            <span className="shrink-0 text-xs text-zinc-600">
              {post.readTime}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
