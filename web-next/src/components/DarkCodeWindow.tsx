const command = 'text-[#22D3EE]'
const string = 'text-[#34D399]'
const comment = 'text-[#64748B]'
const output = 'text-emerald-400'

export function DarkCodeWindow({ className = '' }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-xl bg-ink shadow-elev ring-1 ring-white/10 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="ml-3 flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300">
          <TerminalGlyph />
          phlo quickstart
        </div>
        <div className="ml-auto hidden text-[11px] font-medium text-slate-500 xl:block">
          my-lakehouse
        </div>
      </div>

      <pre className="overflow-x-auto px-5 py-4 font-mono text-[12px] leading-[1.7] text-slate-200 sm:text-[12.5px]">
        <code>
          <span className={comment}># choose the lakehouse services you need</span>
          {'\n'}
          <span className={command}>$</span> uv pip install <span className={string}>phlo[defaults]</span>
          {'\n'}
          <span className={command}>$</span> phlo init my-lakehouse
          {'\n'}
          <span className={command}>$</span> phlo services start
          {'\n'}
          <span className={output}>  dagster  minio  nessie  trino</span>
          {'\n\n'}
          <span className={comment}># materialize assets with checks and lineage</span>
          {'\n'}
          <span className={command}>$</span> phlo materialize --select{' '}
          <span className={string}>"dlt_glucose_entries+"</span>
          {'\n'}
          <span className={output}>  checks passed · lineage updated</span>
          {'\n'}
          <span className={command}>$</span> phlo logs --asset glucose_entries
        </code>
      </pre>
    </div>
  )
}

function TerminalGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="12" height="10" rx="2" stroke="#22D3EE" strokeWidth="1.3" />
      <path d="M4.5 6.5 6.5 8l-2 1.5M8 10h3.5" stroke="#FBBF24" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
