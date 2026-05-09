// Horizontal git-flow visualisation for the Developer Workflow section.

const NODES = [
  { id: 'ingest', label: 'ingest', state: 'passed' as const },
  { id: 'validate', label: 'validate', state: 'passed' as const },
  { id: 'transform', label: 'transform', state: 'passed' as const },
]

const RAILS = [
  { label: 'Quality gates passed', tone: 'teal' as const },
  { label: 'Ready to merge', tone: 'brand' as const },
  { label: 'Live', tone: 'amber' as const },
]

export function PipelineFlow() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
      {/* Branch label */}
      <div className="mb-6 flex items-center gap-3 text-sm">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-[12px] text-ink">
          <BranchIcon />
          feature/new-orders-logic
        </span>
        <span className="text-muted">→</span>
        <span className="font-mono text-[12px] text-muted">main</span>
      </div>

      {/* Pipeline nodes */}
      <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {NODES.map((n, i) => (
          <NodeAndConnector key={n.id} node={n} hasConnector={i < NODES.length - 1} />
        ))}
      </div>

      {/* Rail / outcomes */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {RAILS.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm"
          >
            <span className="font-medium text-ink">{r.label}</span>
            <Dot tone={r.tone} />
          </div>
        ))}
      </div>
    </div>
  )
}

function NodeAndConnector({
  node,
  hasConnector,
}: {
  node: { label: string; state: 'passed' }
  hasConnector: boolean
}) {
  return (
    <>
      <div className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 shadow-card">
        <span className="grid size-8 place-items-center rounded-lg bg-brand-soft text-brand">
          <BoltIcon />
        </span>
        <div className="min-w-0">
          <div className="font-mono text-[13px] text-ink">{node.label}</div>
          <div className="flex items-center gap-1.5 text-[11px] text-teal">
            <CheckSmall /> Passed
          </div>
        </div>
      </div>
      {hasConnector && (
        <div className="hidden items-center justify-center sm:flex">
          <Connector />
        </div>
      )}
    </>
  )
}

function Connector() {
  return (
    <svg
      viewBox="0 0 80 32"
      className="h-8 w-20"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="pf-strand"
          x1="0"
          y1="0.5"
          x2="1"
          y2="0.5"
        >
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#2DD4BF" />
          <stop offset="100%" stopColor="#4ADE80" />
        </linearGradient>
      </defs>
      <path
        d="M2 10 C 24 4, 56 4, 78 10"
        stroke="url(#pf-strand)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M2 16 H 78"
        stroke="url(#pf-strand)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M2 22 C 24 28, 56 28, 78 22"
        stroke="url(#pf-strand)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="78" cy="16" r="2.6" fill="#2DD4BF" opacity="0.8" />
    </svg>
  )
}

function BranchIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5" fill="none" aria-hidden="true">
      <circle cx="4" cy="3.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="4" cy="12.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="3.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 5v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M12 5c0 4-4 4-4 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
      <path
        d="M9 1L3 9h4l-1 6 6-8H8l1-6z"
        fill="currentColor"
      />
    </svg>
  )
}

function CheckSmall() {
  return (
    <svg viewBox="0 0 12 12" className="size-3" fill="none" aria-hidden="true">
      <path
        d="M2.5 6.5L5 9l4.5-5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Dot({ tone }: { tone: 'brand' | 'teal' | 'amber' }) {
  const map = {
    brand: 'bg-brand',
    teal: 'bg-teal',
    amber: 'bg-amber',
  }
  return (
    <span className="relative flex size-2.5">
      <span className={`absolute inset-0 rounded-full ${map[tone]} opacity-30`} />
      <span className={`m-0.5 rounded-full ${map[tone]} h-1.5 w-1.5`} />
    </span>
  )
}
