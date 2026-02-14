import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { fetchPlugins } from '../lib/api'
import type { Plugin } from '../lib/api'
import { PluginCard } from '../components/PluginCard'
import { PluginTypeFilter } from '../components/PluginTypeFilter'
import { SearchBar } from '../components/SearchBar'

export const Route = createFileRoute('/registry/')({
  loader: () => fetchPlugins(),
  component: RegistryPage,
})

function RegistryPage() {
  const plugins = Route.useLoaderData()
  const [search, setSearch] = useState('')
  const [activeType, setActiveType] = useState('All')

  const filtered = plugins.filter((plugin: Plugin) => {
    const matchesSearch =
      !search ||
      plugin.name.toLowerCase().includes(search.toLowerCase()) ||
      plugin.description.toLowerCase().includes(search.toLowerCase()) ||
      plugin.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))

    const matchesType =
      activeType === 'All' ||
      plugin.type.toLowerCase() === activeType.toLowerCase() ||
      plugin.type.toLowerCase() === activeType.slice(0, -1).toLowerCase()

    return matchesSearch && matchesType
  })

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">
          Plugin Registry
        </h1>
        <p className="text-zinc-400">
          Discover and install plugins to extend your data lakehouse.
        </p>
      </div>

      <div className="mb-8 space-y-4">
        <SearchBar value={search} onChange={setSearch} />
        <PluginTypeFilter active={activeType} onChange={setActiveType} />
      </div>

      {filtered.length === 0 ? (
        <div className="py-24 text-center text-zinc-500">
          <p className="text-lg">No plugins found</p>
          <p className="mt-1 text-sm">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((plugin: Plugin) => (
            <PluginCard key={plugin.name} plugin={plugin} />
          ))}
        </div>
      )}
    </div>
  )
}
