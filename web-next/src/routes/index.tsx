import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { DarkCodeWindow } from '../components/DarkCodeWindow'
import { StatusBadges } from '../components/StatusBadges'
import { StagesPanel } from '../components/StagesPanel'
import { FourStagesCode } from '../components/FourStagesCode'
import { ArchitectureDiagram } from '../components/ArchitectureDiagram'
import { HeroRibbon, FooterRibbon, SectionRibbon } from '../components/Flourishes'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="overflow-x-clip bg-[#f8fbff]">
      <Header />
      <main>
        <Hero />
        <DeveloperWorkflow />
        <CodeFirstPipelines />
        <ArchitectureGovernance />
        <LearningResources />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

/* ────────────────────────────────────────────── HERO */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line/70 bg-surface">
      <HeroRibbon />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-10 sm:px-10 md:grid-cols-12 md:pb-20 md:pt-14 lg:gap-10">
        {/* Copy */}
        <div className="relative z-10 md:col-span-5 lg:col-span-5">
          <Eyebrow icon="code">PYTHON FRAMEWORK FOR LAKEHOUSES</Eyebrow>
          <h1 className="font-display mt-5 max-w-[17ch] text-[2.7rem] font-semibold leading-[1.04] text-ink sm:text-[3.25rem] lg:text-[3.45rem]">
            Build data workflows that{' '}
            <span className="script text-teal">flow</span> to production.
          </h1>
          <p className="mt-6 max-w-[34rem] text-[15px] leading-7 text-body sm:text-base">
            Phlo is a modular Python framework for lakehouse applications. Add
            packages for orchestration, storage, ingestion, quality,
            observability, and UI extensions, then run the platform from one
            project.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#docs"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-px hover:bg-brand-deep focus:outline-none focus:ring-2 focus:ring-brand/30"
            >
              Read the docs
              <ArrowRight />
            </a>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white/90 px-5 py-3 text-sm font-semibold text-ink shadow-card backdrop-blur transition hover:-translate-y-px hover:shadow-elev focus:outline-none focus:ring-2 focus:ring-brand/20"
            >
              Get started
            </a>
            <span className="ml-1 hidden items-center gap-2 rounded-full border border-line bg-white/70 px-3 py-1.5 font-mono text-[11px] text-muted shadow-card backdrop-blur sm:inline-flex">
              <span className="size-1.5 rounded-full bg-teal" />
              pip install phlo
            </span>
          </div>
        </div>

        <div className="relative md:col-span-7 lg:col-span-7">
          <div className="relative z-10 grid items-center gap-4 lg:grid-cols-[minmax(0,1fr)_13.5rem]">
            <div>
              <DarkCodeWindow />
            </div>
            <StatusBadges className="lg:gap-3" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────── DEVELOPER WORKFLOW */

function DeveloperWorkflow() {
  const points = [
    {
      title: 'Bootstrap a project',
      desc: 'Create the workspace, configuration, env files, and workflow folders Phlo expects.',
    },
    {
      title: 'Start the lakehouse stack',
      desc: 'Bring up the services your project uses: orchestration, storage, catalog, query, and UI.',
    },
    {
      title: 'Materialize and inspect',
      desc: 'Run assets, evaluate checks, then inspect lineage, logs, metrics, and service state.',
    },
  ]

  return (
    <Section id="product" alt>
      <SectionRibbon className="opacity-80" />
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <Eyebrow tag>PROJECT WORKFLOW</Eyebrow>
          <h2 className="font-display mt-4 max-w-[12ch] text-[2.5rem] font-semibold leading-[1.02] text-ink sm:text-[3.25rem] lg:text-[3.7rem]">
            Run a lakehouse as one{' '}
            <span className="script text-teal">project</span>.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-body">
            Phlo wraps the moving parts of a lakehouse into a Python project:
            services, workflows, materializations, checks, lineage, and
            observability.
          </p>

          <ol className="mt-9 space-y-5">
            {points.map((point, i) => (
              <li key={point.title} className="grid grid-cols-[2.25rem_1fr] gap-4">
                <span className="grid size-9 place-items-center rounded-lg border border-line bg-white font-mono text-[12px] font-semibold text-brand shadow-card">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-body">
                    {point.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <LakehouseStack />
      </div>
    </Section>
  )
}

function LakehouseStack() {
  const layers = [
    { name: 'Project', role: 'phlo.yaml, env, workflows', tone: 'brand' },
    { name: 'Services', role: 'Dagster, MinIO, Nessie, Trino', tone: 'teal' },
    { name: 'Pipelines', role: 'DLT ingestion, dbt transforms', tone: 'amber' },
    { name: 'Quality', role: 'schemas and checks on runs', tone: 'brand' },
    { name: 'Catalog', role: 'branches, tables, lineage', tone: 'teal' },
    { name: 'Observe', role: 'Observatory, logs, metrics', tone: 'amber' },
  ] as const

  const toneMap = {
    brand: 'bg-brand-soft text-brand',
    teal: 'bg-teal-soft text-teal',
    amber: 'bg-[#FFF7E6] text-amber',
  }

  return (
    <div className="relative">
      <div className="absolute -left-6 top-8 hidden h-[72%] w-px bg-gradient-to-b from-brand/0 via-brand/30 to-teal/0 lg:block" />
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
        <div className="grid gap-px bg-line sm:grid-cols-2">
          {layers.map((layer) => (
            <div key={layer.name} className="bg-white p-5">
              <div className="flex items-start gap-3">
                <span
                  className={`mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg ${toneMap[layer.tone]}`}
                >
                  <PackageIcon />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-ink">{layer.name}</h3>
                  <p className="mt-1 text-sm text-body">{layer.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-line bg-surface-2 p-5">
          <div className="grid gap-3 font-mono text-[12px] text-ink sm:grid-cols-3">
            <span className="rounded-lg bg-white px-3 py-2 ring-1 ring-line">
              phlo init
            </span>
            <span className="rounded-lg bg-white px-3 py-2 ring-1 ring-line">
              phlo services start
            </span>
            <span className="rounded-lg bg-white px-3 py-2 ring-1 ring-line">
              phlo materialize
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-body">
            The point is not the plumbing. The point is a repeatable run with
            data, checks, lineage, and service state in one place.
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-6 -right-8 h-28 w-56 rounded-full bg-teal/10 blur-2xl" />
    </div>
  )
}

/* ────────────────────────────────────────────── CODE-FIRST PIPELINES */

function CodeFirstPipelines() {
  return (
    <Section>
      <SectionRibbon flip className="opacity-70" />
      <Eyebrow tag>WHAT PHLO DOES</Eyebrow>
      <Headline>
        Move from source data to{' '}
        <span className="script text-brand">governed</span> assets.
      </Headline>
      <Sub>
        Phlo gives the common lakehouse path a project shape: ingest data,
        merge it into tables, transform it, validate the run, and make the
        result observable.
      </Sub>

      <div className="mt-14 grid items-start gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <FourStagesCode />
        </div>
        <div className="md:col-span-5">
          <StagesPanel />
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <ValueCard
          title="One project surface"
          desc="Configuration, workflows, services, schemas, and transforms live in the same project."
          icon={<PythonGlyph />}
        />
        <ValueCard
          title="Open lakehouse stack"
          desc="Phlo coordinates tools like Dagster, MinIO, Nessie, Trino, dbt, and Observatory."
          icon={<BlocksIcon />}
        />
        <ValueCard
          title="Run visibility"
          desc="Materializations carry checks, logs, lineage, metrics, and enough context to debug."
          icon={<EyeIcon />}
        />
      </div>
    </Section>
  )
}

/* ────────────────────────────────────────────── ARCHITECTURE & GOVERNANCE */

function ArchitectureGovernance() {
  const grid: Array<{
    t: string
    d: string
    Icon: () => React.ReactElement
    tone: 'brand' | 'teal' | 'amber' | 'violet'
  }> = [
    { t: 'Services', d: 'Postgres, MinIO, Nessie, Trino, Dagster, and optional stack packages.', Icon: PlugGlyph, tone: 'brand' },
    { t: 'Sources', d: 'Connector packages bring APIs, databases, files, and domain inputs into the lakehouse.', Icon: OpenGlyph, tone: 'teal' },
    { t: 'Quality', d: 'Checks run with materialized assets and pipeline executions.', Icon: ShieldGlyph, tone: 'violet' },
    { t: 'Transformations', d: 'dbt and Python packages turn raw tables into modeled assets.', Icon: LayersGlyph, tone: 'amber' },
    { t: 'Cataloging', d: 'Nessie and OpenMetadata packages track branches, schema, and lineage.', Icon: BranchGlyph, tone: 'teal' },
    { t: 'Observability', d: 'Prometheus, Grafana, Loki, logs, metrics, and alerts plug in as packages.', Icon: LineageGlyph, tone: 'brand' },
    { t: 'Observatory', d: 'UI extension packages add routes, slots, settings, and dashboards.', Icon: SealGlyph, tone: 'amber' },
    { t: 'Runtime', d: 'Adapters translate package contributions into the active workflow engine.', Icon: KeyGlyph, tone: 'violet' },
  ]
  const toneClass: Record<string, string> = {
    brand: 'bg-brand-soft text-brand',
    teal: 'bg-teal-soft text-teal',
    amber: 'bg-[#FFFBEB] text-amber',
    violet: 'bg-[#F5F3FF] text-[#7C3AED]',
  }

  return (
    <Section alt id="docs">
      <SectionRibbon className="opacity-80" />
      <Eyebrow tag>ARCHITECTURE &amp; GOVERNANCE</Eyebrow>
      <Headline>
        Designed for <span className="script text-brand">open</span> lakehouse
        stacks
      </Headline>
      <Sub>
        Phlo's core stays small. Packages bring the lakehouse services and
        integrations, while open formats keep the data portable.
      </Sub>

      <div className="mt-12">
        <ArchitectureDiagram />
      </div>

      <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {grid.map((c) => (
          <div key={c.t} className="group relative bg-white p-6 transition hover:bg-surface-2">
            <span
              className={`grid size-9 place-items-center rounded-lg ring-1 ring-inset ring-current/10 ${toneClass[c.tone]}`}
            >
              <c.Icon />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-ink">{c.t}</h3>
            <p className="mt-1 text-[13px] leading-relaxed text-body">{c.d}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ────────────────────────────────────────────── LEARNING RESOURCES */

function LearningResources() {
  const resources = [
    {
      title: 'Getting started',
      desc: 'Install phlo, add the packages you need, start services, and materialize the first pipeline.',
      href: '/blog/02-setup-guide',
      label: 'Guide 01',
    },
    {
      title: 'Plugin system',
      desc: 'How to build custom sources, quality checks, transformations, and services for Phlo.',
      href: '/blog/14-plugin-system',
      label: 'Guide 02',
    },
    {
      title: 'Custom packages',
      desc: 'How teams package domain assets, resources, services, and reusable integration logic.',
      href: '/blog/16-building-custom-packages',
      label: 'Guide 03',
    },
    {
      title: 'Observatory extensions',
      desc: 'How packages add routes, dashboard slots, settings, and UI modules to Observatory.',
      href: '/blog/15-observatory-extensions',
      label: 'Guide 04',
    },
  ]

  return (
    <Section id="guides">
      <SectionRibbon flip className="opacity-80" />
      <Eyebrow tag>READ THE SYSTEM</Eyebrow>
      <Headline center>
        Guides that explain the{' '}
        <span className="script text-teal">shape</span> of Phlo
      </Headline>
      <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-body">
        Start with the package model that users install and operate, then go
        deeper only when you are authoring an integration package.
      </p>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {resources.map((resource) => (
          <a
            key={resource.title}
            href={resource.href}
            className="group relative min-h-[19rem] bg-white p-6 transition hover:bg-surface-2"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand">
              {resource.label}
            </span>
            <h3 className="mt-8 max-w-[11rem] text-xl font-semibold leading-tight text-ink">
              {resource.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-body">
              {resource.desc}
            </p>
            <span className="absolute bottom-6 left-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
              Read guide
              <ArrowRight />
            </span>
            <span className="absolute right-5 top-5 h-24 w-px rotate-[28deg] bg-gradient-to-b from-brand/0 via-teal/35 to-amber/0 transition group-hover:rotate-[34deg]" />
          </a>
        ))}
      </div>
    </Section>
  )
}

/* ────────────────────────────────────────────── FINAL CTA */

function FinalCTA() {
  return (
    <section
      id="get-started"
      className="relative isolate overflow-hidden pt-16 md:pt-24"
    >
      <FooterRibbon />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 sm:px-10 md:pb-32">
        <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-white shadow-elev sm:p-14 lg:p-20">
          {/* Decorative blob */}
          <div className="pointer-events-none absolute -right-20 -top-20 size-[420px] rounded-full bg-gradient-to-br from-brand/40 via-teal/30 to-amber/20 blur-3xl" />

          <div className="relative grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <Eyebrow dark>READY WHEN YOU ARE</Eyebrow>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
                Ship <span className="script text-teal">governed</span> data
                workflows with confidence.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
                Install core Phlo, add the packages your stack needs, start the
                services, and materialize assets with checks attached to the run.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#install"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow transition hover:bg-slate-100"
                >
                  Install Phlo
                  <ArrowRight />
                </a>
                <a
                  href="#docs"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
                >
                  Read the docs
                </a>
              </div>
            </div>

            <InstallTerminal />
          </div>
        </div>
      </div>
    </section>
  )
}

function InstallTerminal() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1220] shadow-elev">
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5 text-xs text-slate-400">
        <span className="size-2.5 rounded-full bg-[#FF5F57]" />
        <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="size-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono">~/my-lakehouse</span>
      </div>
      <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-7 text-slate-200">
        <span className="text-teal">$</span> uv pip install phlo{'\n'}
        <span className="text-teal">$</span> uv add phlo-dagster phlo-nessie phlo-minio phlo-trino{'\n'}
        <span className="text-teal">$</span> uv add phlo-dbt phlo-quality phlo-observatory{'\n'}
        <span className="text-teal">$</span> phlo init my-lakehouse{'\n'}
        <span className="text-teal">$</span> phlo services start{'\n'}
        <span className="text-emerald-400">  services ready: dagster, minio, nessie, trino</span>{'\n'}
        <span className="text-teal">$</span> phlo materialize --select "dlt_glucose_entries+"{'\n'}
        <span className="text-slate-500">  materialized assets with package-provided checks</span>
      </pre>
    </div>
  )
}

/* ────────────────────────────────────────────── PRIMITIVES */

function Section({
  children,
  alt = false,
  id,
}: {
  children: React.ReactNode
  alt?: boolean
  id?: string
}) {
  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden ${
        alt ? 'bg-surface-2' : 'bg-white/85'
      } border-t border-line/70`}
    >
      <div className="mx-auto max-w-7xl px-6 py-18 sm:px-10 md:py-24">
        {children}
      </div>
    </section>
  )
}

function Eyebrow({
  children,
  tag = false,
  dark = false,
  icon,
}: {
  children: React.ReactNode
  tag?: boolean
  dark?: boolean
  icon?: 'code'
}) {
  const color = dark ? 'text-teal' : 'text-brand'
  return (
    <div
      className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] ${color}`}
    >
      {(tag || icon) && <span className="font-mono opacity-70">&lt;/&gt;</span>}
      {children}
    </div>
  )
}

function Headline({
  children,
  center = false,
}: {
  children: React.ReactNode
  center?: boolean
}) {
  return (
    <h2
      className={`font-display mt-4 max-w-3xl text-[2.35rem] font-semibold leading-[1.03] text-ink sm:text-[3.05rem] ${
        center ? 'mx-auto text-center' : ''
      }`}
    >
      {children}
    </h2>
  )
}

function Sub({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 max-w-2xl text-base leading-relaxed text-body">
      {children}
    </p>
  )
}

function MiniCard({
  icon,
  title,
  desc,
  code,
}: {
  icon: React.ReactNode
  title: string
  desc?: string
  code?: string
}) {
  return (
    <div className="rounded-xl border border-line bg-white p-5 shadow-card">
      <div className="flex items-center gap-3">
        <span className="grid size-8 place-items-center rounded-lg bg-brand-soft text-brand">
          {icon}
        </span>
        <h4 className="text-sm font-semibold text-ink">{title}</h4>
      </div>
      {desc && <p className="mt-3 text-sm leading-relaxed text-body">{desc}</p>}
      {code && (
        <pre className="mt-3 overflow-x-auto rounded-lg bg-surface-2 p-3 font-mono text-[12px] text-ink">
          {code}
        </pre>
      )}
    </div>
  )
}

function ValueCard({
  title,
  desc,
  icon,
}: {
  title: string
  desc: string
  icon: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-line bg-white p-6 shadow-card">
      <span className="grid size-9 place-items-center rounded-lg bg-brand-soft text-brand">
        {icon}
      </span>
      <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-body">{desc}</p>
    </div>
  )
}

/* ────────────────────────────────────────────── BACKGROUND */

/* ────────────────────────────────────────────── ICONS */

function ArrowRight() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
      <path
        d="M3 8h10m0 0L9 4m4 4l-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PackageIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
      <path
        d="M2.5 4.5 8 1.8l5.5 2.7v7L8 14.2l-5.5-2.7v-7z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M2.8 4.7 8 7.3l5.2-2.6M8 7.3v6.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
      <path
        d="M8 1v4M8 11v4M1 8h4M11 8h4M3.5 3.5l2.8 2.8M9.7 9.7l2.8 2.8M12.5 3.5L9.7 6.3M3.5 12.5l2.8-2.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function TerminalIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
      <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M4.5 6.5l2 2-2 2M8.5 10.5h3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DocIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
      <path
        d="M3 1.5h6.5L13 5v9.5H3V1.5z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M9.5 1.5V5H13" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M5.5 8h5M5.5 10.5h5M5.5 12.5h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function PythonGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        d="M11.5 2c-3.5 0-3.2 1.5-3.2 1.5v1.6h3.3v.5H7.1S5 5.4 5 9s1.8 3.5 1.8 3.5h1.4v-2.1s-.1-1.8 1.7-1.8h3.3s1.7 0 1.7-1.6V3.6S15.2 2 11.5 2z"
        fill="currentColor"
      />
    </svg>
  )
}

function BlocksIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="9" y="1.5" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="1.5" y="9" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="9" y="9" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
      <path
        d="M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8s-2.5 4.5-6.5 4.5S1.5 8 1.5 8z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="8" cy="8" r="1.75" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function BranchGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden="true">
      <circle cx="5" cy="4" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="5" cy="16" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="15" cy="4" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 6v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M15 6c0 5-5 4-5 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ShieldGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden="true">
      <path
        d="M10 2l6 2v5c0 4-3 7-6 9-3-2-6-5-6-9V4l6-2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7 10l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LineageGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden="true">
      <circle cx="4" cy="4" r="1.8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="10" r="1.8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="4" cy="16" r="1.8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.5 5.5L14.5 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5.5 14.5L14.5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function OpenGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6 6V4a3 3 0 016 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="10" cy="11.5" r="1.4" fill="currentColor" />
    </svg>
  )
}

function PlugGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden="true">
      <path
        d="M7 2v3M13 2v3M5 5h10v4a5 5 0 01-5 5 5 5 0 01-5-5V5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M10 14v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function LayersGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden="true">
      <path
        d="M10 2L2 6l8 4 8-4-8-4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M2 10l8 4 8-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M2 14l8 4 8-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

function KeyGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden="true">
      <circle cx="6.5" cy="13.5" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9 11l8-8M14 5l2 2M12 7l2 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SealGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden="true">
      <path
        d="M10 2l2.4 1.7 2.9-.3.6 2.8 2.5 1.5-1.5 2.5.7 2.9-2.8.6-1.7 2.4-2.6-1.4-2.6 1.4L6 13.7l-2.8-.6.7-2.9L2.4 7.7l2.5-1.5.6-2.8 2.9.3L10 2z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M7 10l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
