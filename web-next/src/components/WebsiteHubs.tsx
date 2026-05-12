import { Footer } from './Footer'
import { Header } from './Header'
import { RoutedLink } from './RoutedLink'
import { SectionRibbon } from './Flourishes'
import { docSections, type DocPage, type DocSection } from '../lib/content'

type HubTone = 'brand' | 'teal' | 'amber'

const HUB_META: Record<
  string,
  {
    eyebrow: string
    title: string
    intro: string
    primary: string
    secondary: string
    tone: HubTone
  }
> = {
  packages: {
    eyebrow: 'Package Catalogue',
    title: 'Choose the integrations your Phlo project runs on.',
    intro:
      'Packages are the user-facing way Phlo grows: services, connectors, quality checks, observability, and Observatory extensions installed into one project.',
    primary: 'Open package catalogue',
    secondary: 'Read service package guide',
    tone: 'brand',
  },
  guides: {
    eyebrow: 'Guides',
    title: 'Build with Phlo from project shape to production runs.',
    intro:
      'Practical paths for choosing components, modelling assets, composing services, extending Phlo, and operating materialized pipelines.',
    primary: 'Browse guides',
    secondary: 'Start with components',
    tone: 'teal',
  },
  setup: {
    eyebrow: 'Setup',
    title: 'Wire the services around a Phlo project deliberately.',
    intro:
      'Setup pages cover the operational services that make a lakehouse usable: credentials, security, observability, metadata, and service endpoints.',
    primary: 'Browse setup',
    secondary: 'Security setup',
    tone: 'amber',
  },
  operations: {
    eyebrow: 'Operations',
    title: 'Keep materialized assets healthy after they ship.',
    intro:
      'Operational guidance for testing, audit logging, production readiness, troubleshooting, migrations, and release workflows.',
    primary: 'Browse operations',
    secondary: 'Production readiness',
    tone: 'brand',
  },
  reference: {
    eyebrow: 'Reference',
    title: 'Look up the contracts behind Phlo projects and packages.',
    intro:
      'Reference material for CLI commands, configuration, plugin APIs, quality checks, architecture, auth, and common errors.',
    primary: 'Browse reference',
    secondary: 'CLI reference',
    tone: 'teal',
  },
}

const PACKAGE_GROUPS = [
  {
    title: 'Run the lakehouse',
    match: ['dagster', 'minio', 'nessie', 'trino', 'iceberg', 'delta', 'postgres'],
  },
  {
    title: 'Move and model data',
    match: ['dlt', 'dbt', 'sling', 'pandera', 'testing'],
  },
  {
    title: 'Expose and explore',
    match: ['api', 'hasura', 'postgrest', 'superset', 'openmetadata', 'observatory'],
  },
  {
    title: 'Observe and secure',
    match: ['grafana', 'prometheus', 'loki', 'otel', 'alloy', 'alerting', 'oauth2', 'traefik'],
  },
  {
    title: 'Extend Phlo',
    match: ['mcp', 'lineage', 'core-plugins', 'clickstack', 'pgweb', 'rustfs'],
  },
]

export function PackagesHub({ section }: { section: DocSection }) {
  const groups = PACKAGE_GROUPS.map((group) => ({
    ...group,
    pages: section.pages.filter((page) =>
      group.match.some((term) => page.slug.includes(term)),
    ),
  }))
  const groupedUrls = new Set(groups.flatMap((group) => group.pages.map((page) => page.url)))
  const remaining = section.pages.filter(
    (page) => page.slug !== 'index' && !groupedUrls.has(page.url),
  )

  return (
    <HubFrame>
      <HubHero section={section} meta={HUB_META.packages}>
        <div className="hub-metric-strip">
          <Metric value={String(section.pages.length - 1)} label="installable pages" />
          <Metric value="5" label="package families" />
          <Metric value="1" label="project surface" />
        </div>
      </HubHero>

      <section className="hub-section">
        <div className="hub-section-heading">
          <span>Catalogue</span>
          <p>
            Start from the job you need the package to do, then open the
            package page for commands, configuration, and operating notes.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {groups.map((group) => (
            <PackageGroup key={group.title} title={group.title} pages={group.pages} />
          ))}
          {remaining.length ? (
            <PackageGroup title="Additional packages" pages={remaining} />
          ) : null}
        </div>
      </section>
    </HubFrame>
  )
}

export function SectionHub({ section }: { section: DocSection }) {
  const meta = HUB_META[section.id] ?? HUB_META.guides
  const featured = section.pages.filter((page) => page.slug !== 'index').slice(0, 3)
  const rest = section.pages.filter(
    (page) => page.slug !== 'index' && !featured.some((item) => item.url === page.url),
  )

  return (
    <HubFrame>
      <HubHero section={section} meta={meta}>
        <div className="hub-flow-preview">
          {featured.map((page, index) => (
            <RoutedLink key={page.url} to={page.url} className="hub-flow-node">
              <span>{String(index + 1).padStart(2, '0')}</span>
              {page.title}
            </RoutedLink>
          ))}
        </div>
      </HubHero>

      <section className="hub-section">
        <div className="hub-section-heading">
          <span>{section.title}</span>
          <p>{section.description}</p>
        </div>

        <div className="hub-link-grid">
          {[...featured, ...rest].map((page, index) => (
            <HubPageCard key={page.url} page={page} index={index} />
          ))}
        </div>
      </section>
    </HubFrame>
  )
}

function HubFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-clip bg-surface docs-canvas">
      <Header />
      <main className="relative isolate border-t border-line/70">
        <div className="docs-ribbon" aria-hidden="true" />
        {children}
      </main>
      <Footer />
    </div>
  )
}

function HubHero({
  section,
  meta,
  children,
}: {
  section: DocSection
  meta: (typeof HUB_META)[string]
  children: React.ReactNode
}) {
  const docsSection = docSections.find((item) => item.id === section.id)
  const firstPage = section.pages.find((page) => page.slug !== 'index')

  return (
    <section className="relative mx-auto grid max-w-[92rem] gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(24rem,0.64fr)] lg:items-end lg:py-20">
      <SectionRibbon className="opacity-60" />
      <div>
        <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
          {meta.eyebrow}
        </div>
        <h1 className="font-display mt-5 max-w-[13ch] text-[3.4rem] font-semibold leading-[0.98] text-ink sm:text-[5.4rem]">
          {meta.title}
        </h1>
        <p className="mt-6 max-w-3xl text-[1.05rem] leading-8 text-body">
          {meta.intro}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <RoutedLink to={docsSection?.url ?? section.url} className="hub-primary">
            {meta.primary}
            <Arrow />
          </RoutedLink>
          {firstPage ? (
            <RoutedLink to={firstPage.url} className="hub-secondary">
              {meta.secondary}
            </RoutedLink>
          ) : null}
        </div>
      </div>
      {children}
    </section>
  )
}

function PackageGroup({ title, pages }: { title: string; pages: DocPage[] }) {
  if (!pages.length) return null

  return (
    <div className="hub-package-group">
      <div className="hub-package-group-title">{title}</div>
      <div className="mt-4 grid gap-2">
        {pages
          .filter((page) => page.slug !== 'index')
          .map((page) => (
            <RoutedLink key={page.url} to={page.url} className="hub-package-link">
              <span>
                <strong>{page.title}</strong>
                <small>{page.description}</small>
              </span>
              <Arrow />
            </RoutedLink>
          ))}
      </div>
    </div>
  )
}

function HubPageCard({ page, index }: { page: DocPage; index: number }) {
  return (
    <RoutedLink to={page.url} className="hub-page-card">
      <span className="hub-page-number">{String(index + 1).padStart(2, '0')}</span>
      <h2>{page.title}</h2>
      <p>{page.description}</p>
      <span className="hub-page-arrow">
        <Arrow />
      </span>
    </RoutedLink>
  )
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}

function Arrow() {
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
