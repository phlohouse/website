import { createFileRoute, Link } from '@tanstack/react-router'
import { fetchPlugin } from '../lib/api'

export const Route = createFileRoute('/registry/$name')({
  loader: ({ params }) => fetchPlugin(params.name),
  component: PluginDetailPage,
})

function PluginDetailPage() {
  const plugin = Route.useLoaderData()

  if (!plugin) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h1 className="mb-4 text-3xl font-bold">Plugin not found</h1>
        <Link
          to="/registry"
          className="text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
        >
          ← Back to Registry
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        to="/registry"
        className="mb-8 inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-white"
      >
        ← Back to Registry
      </Link>

      <div className="mb-8 flex items-start justify-between">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">{plugin.name}</h1>
            <span className="rounded-md bg-[var(--color-accent)]/15 px-3 py-1 text-sm font-medium text-[var(--color-accent)]">
              {plugin.type}
            </span>
          </div>
          <p className="text-zinc-400">{plugin.description}</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Install */}
        <div className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="border-b border-[var(--color-border)] px-4 py-2.5 text-xs font-medium text-zinc-500">
            Install
          </div>
          <pre className="p-4 text-sm">
            <code>
              <span className="text-emerald-400">$</span>{' '}
              <span className="text-zinc-300">
                phlo plugin install {plugin.name}
              </span>
            </code>
          </pre>
        </div>

        {/* Details */}
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <h2 className="mb-4 text-sm font-medium text-zinc-500">Details</h2>
          <dl className="space-y-3">
            <div className="flex items-center justify-between">
              <dt className="text-sm text-zinc-500">Package</dt>
              <dd className="text-sm font-mono text-zinc-300">
                {plugin.package}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-sm text-zinc-500">Version</dt>
              <dd className="text-sm text-zinc-300">{plugin.version}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-sm text-zinc-500">Author</dt>
              <dd className="text-sm text-zinc-300">{plugin.author}</dd>
            </div>
            {plugin.homepage && (
              <div className="flex items-center justify-between">
                <dt className="text-sm text-zinc-500">Homepage</dt>
                <dd>
                  <a
                    href={plugin.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
                  >
                    {plugin.homepage}
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </div>

        {/* Tags */}
        {plugin.tags.length > 0 && (
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <h2 className="mb-4 text-sm font-medium text-zinc-500">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {plugin.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Badges */}
        <div className="flex items-center gap-4">
          {plugin.verified && (
            <span className="flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-400">
              ✓ Verified
            </span>
          )}
          {plugin.core && (
            <span className="flex items-center gap-1.5 rounded-lg border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/10 px-3 py-1.5 text-sm text-[var(--color-accent)]">
              ◆ Core
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
