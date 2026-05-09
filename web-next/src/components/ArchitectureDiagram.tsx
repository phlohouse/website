// Hub-and-spoke diagram: a Phlo project loads installed packages, then runs on
// open lakehouse systems.

const PARTNERS = [
  'Dagster',
  'MinIO',
  'Nessie',
  'Trino',
  'dbt',
  'Observatory',
] as const

export function ArchitectureDiagram() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-white to-surface-2 p-8 shadow-card sm:p-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
        {/* Top: installed packages */}
        <div className="flex items-center gap-3 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink shadow-card">
          <span className="grid size-6 place-items-center rounded-md bg-brand-soft text-brand">
            <PythonLogo />
          </span>
          Installed packages
        </div>

        {/* Vertical connector */}
        <Connector />

        {/* Center: Phlo engine */}
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-brand/10 via-teal/10 to-amber/10 blur-2xl" />
          <div className="rounded-2xl border border-line bg-white px-8 py-6 text-center shadow-elev">
            <div className="flex items-center justify-center gap-3">
              <PhloMark />
              <span className="text-base font-semibold text-ink">Phlo project</span>
            </div>
            <p className="mt-1 text-xs text-muted">
              CLI · services · checks · materialization
            </p>
          </div>
        </div>

        {/* Branching lines from engine to partners */}
        <BranchLines />

        {/* Bottom: partner logos */}
        <div className="relative grid w-full grid-cols-3 gap-3 sm:grid-cols-6">
          {PARTNERS.map((p) => (
            <div
              key={p}
              className="relative z-10 flex items-center justify-center rounded-xl border border-line bg-white px-3 py-3 text-[12px] font-medium text-body shadow-card"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Connector() {
  return (
    <svg
      viewBox="0 0 8 32"
      className="h-8 w-2 text-line"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 0 V 30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 4"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* Hub-and-spoke branching connectors from the Phlo engine card to the
 * six partner pills below. Built from positioned divs so 1px lines stay
 * crisp and dots stay perfectly round at any width. */
function BranchLines() {
  const cols = 6
  // Centre of each column as a percentage of the container width.
  const xs = Array.from(
    { length: cols },
    (_, i) => ((i * 2 + 1) * 100) / (cols * 2),
  )
  const TRUNK_H = 28 // px
  const DROP_H = 36 // px
  return (
    <div
      className="relative w-full"
      style={{ height: TRUNK_H + DROP_H + 4 }}
      aria-hidden="true"
    >
      {/* Trunk: short vertical from top center down */}
      <span
        className="absolute left-1/2 top-0 -translate-x-1/2 bg-brand/50"
        style={{ width: 1, height: TRUNK_H }}
      />

      {/* Crossbar: from first to last spoke at the trunk junction */}
      <span
        className="absolute bg-brand/50"
        style={{
          left: `${xs[0]}%`,
          right: `${100 - xs[xs.length - 1]}%`,
          top: TRUNK_H,
          height: 1,
        }}
      />

      {/* Drops + terminator dots */}
      {xs.map((leftPct) => (
        <span key={leftPct}>
          <span
            className="absolute bg-brand/40"
            style={{
              left: `${leftPct}%`,
              top: TRUNK_H,
              height: DROP_H,
              width: 1,
              transform: 'translateX(-0.5px)',
            }}
          />
          <span
            className="absolute size-1.5 rounded-full bg-brand"
            style={{
              left: `${leftPct}%`,
              top: TRUNK_H + DROP_H - 3,
              transform: 'translateX(-50%)',
            }}
          />
        </span>
      ))}

      {/* Trunk junction dot */}
      <span
        className="absolute size-2 rounded-full bg-brand"
        style={{
          left: '50%',
          top: TRUNK_H - 4,
          transform: 'translateX(-50%)',
        }}
      />
    </div>
  )
}

function PythonLogo() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden="true">
      <path
        d="M11.5 2c-3.5 0-3.2 1.5-3.2 1.5v1.6h3.3v.5H7.1S5 5.4 5 9s1.8 3.5 1.8 3.5h1.4v-2.1s-.1-1.8 1.7-1.8h3.3s1.7 0 1.7-1.6V3.6S15.2 2 11.5 2z"
        fill="currentColor"
      />
    </svg>
  )
}

function PhloMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id="hub-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="60%" stopColor="#2DD4BF" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <path
        d="M9 26V6h9.5a6.5 6.5 0 0 1 0 13H13"
        stroke="url(#hub-mark)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
