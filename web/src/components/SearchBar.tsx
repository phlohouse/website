interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
        🔍
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search plugins..."
        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] py-3 pl-12 pr-4 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-[var(--color-accent)]"
      />
    </div>
  )
}
