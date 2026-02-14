import { createFileRoute, Link } from '@tanstack/react-router'
import { getPost } from '../lib/blog'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => getPost(params.slug),
  component: BlogPostPage,
})

function BlogPostPage() {
  const post = Route.useLoaderData()

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h1 className="mb-4 text-3xl font-bold">Post not found</h1>
        <Link
          to="/blog"
          className="text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
        >
          ← Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link
        to="/blog"
        className="mb-8 inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-white"
      >
        ← Back to Blog
      </Link>

      <div className="mb-8">
        <span className="mb-2 block text-sm text-zinc-500">
          Part {post.number} · {post.readTime} read
        </span>
        <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
      </div>

      <article
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  )
}
