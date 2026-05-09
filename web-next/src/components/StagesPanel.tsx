// Right column of the product workflow section.

const STAGES = [
  {
    name: 'Ingest data',
    tone: 'brand' as const,
    icon: 'in',
    desc: 'Fetch from APIs, files, and databases, then stage data before it reaches tables.',
  },
  {
    name: 'Store and branch',
    tone: 'teal' as const,
    icon: 'br',
    desc: 'Write to Iceberg-backed storage with catalog branches for reviewable lakehouse changes.',
  },
  {
    name: 'Transform and check',
    tone: 'amber' as const,
    icon: '✓',
    desc: 'Run dbt or Python workflows and evaluate quality checks during materialization.',
  },
  {
    name: 'Observe the run',
    tone: 'orange' as const,
    icon: 'ui',
    desc: 'Use Observatory, logs, lineage, and metrics to understand pipeline health.',
  },
]

const toneStyles: Record<string, { ring: string; text: string; bg: string }> = {
  brand: { ring: 'ring-brand/20', text: 'text-brand', bg: 'bg-brand-soft' },
  teal: { ring: 'ring-teal/20', text: 'text-teal', bg: 'bg-teal-soft' },
  amber: { ring: 'ring-amber/20', text: 'text-amber', bg: 'bg-[#FFFBEB]' },
  orange: {
    ring: 'ring-orange-500/20',
    text: 'text-orange-500',
    bg: 'bg-orange-50',
  },
}

export function StagesPanel() {
  return (
    <ol className="flex flex-col gap-3">
      {STAGES.map((s, i) => {
        const tone = toneStyles[s.tone]
        return (
          <li
            key={s.name}
            className="group flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-px hover:shadow-elev"
          >
            <div
              className={`grid size-10 shrink-0 place-items-center rounded-xl ring-1 ${tone.ring} ${tone.bg} ${tone.text} text-lg font-semibold`}
              aria-hidden="true"
            >
              {s.icon}
            </div>
            <div className="min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-mono text-muted">0{i + 1}</span>
                <h3 className="text-base font-semibold text-ink">{s.name}</h3>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-body">{s.desc}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
