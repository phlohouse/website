// Vertical column of feature badges sitting next to the hero code editor.

const ITEMS = [
  { label: 'Services', detail: 'dagster + nessie', tone: 'brand' },
  { label: 'Quality checks', detail: 'run with materializations', tone: 'teal' },
  { label: 'Lineage', detail: 'updated per run', tone: 'teal' },
  { label: 'Observatory', detail: 'pipeline visibility', tone: 'amber' },
] as const

export function StatusBadges({ className = '' }: { className?: string }) {
  const toneClass = {
    brand: 'bg-brand-soft text-brand',
    teal: 'bg-teal-soft text-teal',
    amber: 'bg-[#FFF7E6] text-amber',
  }

  return (
    <div className={`relative flex flex-col gap-3 ${className}`}>
      {ITEMS.map((item, i) => (
        <div
          key={item.label}
          className="group relative flex items-start gap-3 rounded-lg border border-line bg-white/95 px-4 py-3 shadow-card backdrop-blur transition hover:-translate-y-px hover:shadow-elev"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <span
            className={`grid size-8 shrink-0 place-items-center rounded-lg ${toneClass[item.tone]}`}
          >
            {item.tone === 'brand' ? <Branch /> : item.tone === 'amber' ? <Shield /> : <Check />}
          </span>
          <div className="min-w-0">
            <div className="text-sm font-semibold text-ink">{item.label}</div>
            <div className="mt-0.5 truncate text-[11px] font-medium text-muted">{item.detail}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
      <path
        d="M3.5 8.5l3 3 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Branch() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
      <circle cx="4" cy="3.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="4" cy="12.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="3.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 5v6M5.5 12.5C8.5 12 12 9.5 12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function Shield() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
      <path
        d="M8 1.8 13 3.7v3.9c0 3.1-1.9 5.3-5 6.6-3.1-1.3-5-3.5-5-6.6V3.7l5-1.9z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
