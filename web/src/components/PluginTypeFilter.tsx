const PLUGIN_TYPES = ['All', 'Services', 'Sources', 'Quality', 'Hooks'] as const

interface PluginTypeFilterProps {
  active: string
  onChange: (type: string) => void
}

export function PluginTypeFilter({ active, onChange }: PluginTypeFilterProps) {
  return (
    <div className="flex gap-2">
      {PLUGIN_TYPES.map((type) => (
        <button
          key={type}
          onClick={() => onChange(type)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            active === type
              ? 'bg-[var(--color-accent)] text-white'
              : 'bg-[var(--color-surface)] text-zinc-400 hover:text-white'
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  )
}
