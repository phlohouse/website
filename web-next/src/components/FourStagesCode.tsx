const comment = 'text-[#94A3B8]'
const command = 'text-[#2563EB]'
const string = 'text-[#0E9F6E]'
const output = 'text-[#0F766E]'

const STEPS = [
  { label: 'init', dot: 'bg-brand' },
  { label: 'services', dot: 'bg-teal' },
  { label: 'materialize', dot: 'bg-amber' },
  { label: 'inspect', dot: 'bg-orange-500' },
] as const

export function FourStagesCode() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
      <div className="flex flex-wrap items-center gap-2 border-b border-line-2 bg-surface-2 px-5 py-3">
        {STEPS.map((step) => (
          <span
            key={step.label}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-medium ring-1 ring-line"
          >
            <span className={`size-1.5 rounded-full ${step.dot}`} />
            <span className="font-mono text-ink">{step.label}</span>
          </span>
        ))}
      </div>

      <pre className="overflow-x-auto px-6 py-6 font-mono text-[12.5px] leading-[1.85]">
        <code>
          <span className={comment}># create the project and bring up the stack</span>
          {'\n'}
          <span className={command}>$</span> uv pip install <span className={string}>phlo[defaults]</span>
          {'\n'}
          <span className={command}>$</span> phlo init glucose-lakehouse
          {'\n'}
          <span className={command}>$</span> phlo services start
          {'\n'}
          <span className={output}>  dagster  minio  nessie  trino  observatory</span>
          {'\n\n'}

          <span className={comment}># run assets and inspect what happened</span>
          {'\n'}
          <span className={command}>$</span> phlo materialize --select{' '}
          <span className={string}>"dlt_glucose_entries+"</span>
          {'\n'}
          <span className={output}>  materialized assets, checks evaluated</span>
          {'\n'}
          <span className={command}>$</span> phlo logs --asset glucose_entries --since 1h
          {'\n'}
          <span className={command}>$</span> phlo lineage show glucose_entries
        </code>
      </pre>
    </div>
  )
}
