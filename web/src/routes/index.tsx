import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const FEATURES = [
  {
    icon: '🎯',
    title: 'Decorator-Driven',
    description:
      'Define ingestion pipelines with simple Python decorators. No boilerplate, no config files.',
  },
  {
    icon: '🔒',
    title: 'Write-Audit-Publish',
    description:
      'Built-in WAP pattern ensures data quality gates before any data reaches production.',
  },
  {
    icon: '✅',
    title: 'Type-Safe Quality',
    description:
      'Pandera schemas provide compile-time and runtime data validation with full type safety.',
  },
  {
    icon: '🧩',
    title: 'Plugin Architecture',
    description:
      'Extensible plugin system for sources, services, quality checks, and more.',
  },
  {
    icon: '📊',
    title: 'Observatory UI',
    description:
      'Real-time monitoring dashboard for pipeline health, data quality, and lineage.',
  },
  {
    icon: '🚀',
    title: 'Production-Ready',
    description:
      'Battle-tested stack with Dagster, DLT, Iceberg, and Trino. Deploy with confidence.',
  },
]

const TECH_STACK = [
  { name: 'Dagster', role: 'Orchestration' },
  { name: 'DLT', role: 'Ingestion' },
  { name: 'Apache Iceberg', role: 'Table Format' },
  { name: 'Nessie', role: 'Catalog' },
  { name: 'dbt', role: 'Transforms' },
  { name: 'Trino', role: 'Query Engine' },
]

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-32 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-[0.07]" />
        <div className="relative mx-auto max-w-4xl">
          <h1 className="gradient-text mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Modern Data Lakehouse Platform
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 md:text-xl">
            Decorator-driven development. Write-Audit-Publish. Type-safe
            quality.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/iamgp/phlo"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-hover)]"
            >
              Get Started
            </a>
            <Link
              to="/registry"
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-3.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white"
            >
              Browse Plugins
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
          Everything you need
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-zinc-400">
          A complete platform for building, testing, and deploying data
          pipelines with confidence.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="gradient-border p-6"
            >
              <div className="mb-3 text-2xl">{feature.icon}</div>
              <h3 className="mb-2 font-semibold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
          Get started in seconds
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-zinc-400">
          Three commands to a fully running data lakehouse.
        </p>
        <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-xs text-zinc-500">terminal</span>
          </div>
          <pre className="overflow-x-auto p-6 text-sm leading-relaxed">
            <code>
              <span className="text-zinc-500">{'# Install phlo'}</span>
              {'\n'}
              <span className="text-emerald-400">$</span>{' '}
              <span className="text-zinc-300">pip install phlo</span>
              {'\n\n'}
              <span className="text-zinc-500">
                {'# Initialize a new project'}
              </span>
              {'\n'}
              <span className="text-emerald-400">$</span>{' '}
              <span className="text-zinc-300">phlo init my-lakehouse</span>
              {'\n\n'}
              <span className="text-zinc-500">{'# Start all services'}</span>
              {'\n'}
              <span className="text-emerald-400">$</span>{' '}
              <span className="text-zinc-300">phlo services start</span>
              {'\n\n'}
              <span className="text-[var(--color-accent)]">
                {'✓ Dagster webserver  → http://localhost:3000'}
              </span>
              {'\n'}
              <span className="text-[var(--color-accent)]">
                {'✓ Trino              → http://localhost:8443'}
              </span>
              {'\n'}
              <span className="text-[var(--color-accent)]">
                {'✓ Nessie catalog     → http://localhost:19120'}
              </span>
              {'\n'}
              <span className="text-[var(--color-accent)]">
                {'✓ MinIO              → http://localhost:9001'}
              </span>
            </code>
          </pre>
        </div>
      </section>

      {/* Architecture */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
          Built on proven technology
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-zinc-400">
          Best-in-class open-source tools, unified under one platform.
        </p>
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center transition-colors hover:border-zinc-600"
            >
              <span className="mb-2 text-lg font-semibold text-white">
                {tech.name}
              </span>
              <span className="text-sm text-zinc-500">{tech.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-32 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-[0.05]" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to build?
          </h2>
          <p className="mb-8 text-zinc-400">
            Start building your data lakehouse in minutes.
          </p>
          <div className="mx-auto inline-flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3.5">
            <span className="text-emerald-400">$</span>
            <code className="text-sm text-zinc-300">pip install phlo</code>
            <button
              onClick={() =>
                navigator.clipboard.writeText('pip install phlo')
              }
              className="ml-2 text-zinc-500 transition-colors hover:text-white"
              title="Copy to clipboard"
            >
              📋
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
