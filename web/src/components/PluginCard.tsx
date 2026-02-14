import { Link } from '@tanstack/react-router'
import type { Plugin } from '../lib/api'

interface PluginCardProps {
  plugin: Plugin
}

export function PluginCard({ plugin }: PluginCardProps) {
  return (
    <Link
      to="/registry/$name"
      params={{ name: plugin.name }}
      className="gradient-border block p-6 transition-transform hover:-translate-y-0.5"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold text-white">{plugin.name}</h3>
        <span className="rounded-md bg-[var(--color-accent)]/15 px-2.5 py-0.5 text-xs font-medium text-[var(--color-accent)]">
          {plugin.type}
        </span>
      </div>

      <p className="mb-4 line-clamp-2 text-sm text-zinc-400">
        {plugin.description}
      </p>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {plugin.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2">
        {plugin.verified && (
          <span className="flex items-center gap-1 text-xs text-emerald-400">
            ✓ Verified
          </span>
        )}
        {plugin.core && (
          <span className="flex items-center gap-1 text-xs text-[var(--color-accent)]">
            ◆ Core
          </span>
        )}
        <span className="ml-auto text-xs text-zinc-500">v{plugin.version}</span>
      </div>
    </Link>
  )
}
