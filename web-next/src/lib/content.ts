import { lazy, type ComponentType } from 'react'

export type DocSectionId =
  | 'getting-started'
  | 'guides'
  | 'packages'
  | 'setup'
  | 'operations'
  | 'reference'

export type DocPage = {
  section: DocSectionId
  slug: string
  path: string
  url: string
  title: string
  description: string
  Component: ComponentType
  headings: Array<{ id: string; text: string; level: 2 | 3 }>
  order: number
}

export type DocSection = {
  id: DocSectionId
  title: string
  description: string
  url: string
  pages: DocPage[]
}

type MdxModule = {
  default: ComponentType
}

const mdxModules = import.meta.glob('../../content/phlo-docs/**/*.mdx') as Record<
  string,
  () => Promise<MdxModule>
>

const rawDocs = import.meta.glob('../../content/phlo-docs/**/*.mdx', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, unknown>

const SECTION_META: Record<
  DocSectionId,
  { title: string; description: string; order: number }
> = {
  'getting-started': {
    title: 'Getting Started',
    description: 'Install Phlo, create a project, and run the first lakehouse workflow.',
    order: 1,
  },
  guides: {
    title: 'Guides',
    description: 'Practical guides for building and operating Phlo projects.',
    order: 2,
  },
  packages: {
    title: 'Packages',
    description: 'The installable packages that connect Phlo to lakehouse services.',
    order: 3,
  },
  setup: {
    title: 'Setup',
    description: 'Service setup, credentials, security, and deployment preparation.',
    order: 4,
  },
  operations: {
    title: 'Operations',
    description: 'Production readiness, testing, migrations, and day-two workflows.',
    order: 5,
  },
  reference: {
    title: 'Reference',
    description: 'CLI, configuration, plugin APIs, quality checks, glossary, and FAQ.',
    order: 6,
  },
}

const PREFERRED_ORDER = [
  'index',
  'installation',
  'quickstart',
  'core-concepts',
  'choosing-components',
  'developer-workflow',
  'workflow-development',
  'data-modeling',
  'service-packages',
  'operations-guide',
  'production-readiness',
  'troubleshooting',
  'cli-reference',
  'configuration-reference',
  'quality-checks-catalog',
  'glossary',
  'faq',
]

const DESCRIPTION_OVERRIDES: Record<string, string> = {
  'guides/choosing-components':
    'Compare the main Phlo package choices across APIs, table formats, storage, observability, and extension work.',
  'guides/developer-workflow':
    'A day-to-day workflow for changing a Phlo project, running services, materializing assets, and inspecting results.',
  'guides/workflow-development':
    'Develop lakehouse workflows with branches, checks, review loops, and repeatable materialization commands.',
  'guides/data-modeling':
    'Model raw lakehouse data into governed assets with schemas, transforms, semantic layers, and quality checks.',
  'guides/service-packages':
    'Package services, resources, checks, connectors, and Observatory extensions without changing Phlo core.',
  'guides/capability-primitives':
    'Understand the primitives packages use to contribute services, routes, resources, checks, and workflow behavior.',
  'guides/compose-generation':
    'Generate and adapt Docker Compose stacks from the packages selected in a Phlo project.',
  'guides/integration-profiles':
    'Use package profiles to assemble common stacks for ingestion, observability, APIs, and local development.',
  'guides/plugin-development':
    'Build custom Phlo packages that add integrations, services, checks, resources, or UI extensions.',
  'guides/dagster-assets':
    'Connect Phlo projects to Dagster assets, schedules, checks, and execution metadata.',
  'guides/dbt-development':
    'Use dbt inside Phlo projects for transformations, development loops, and materialized lakehouse models.',
  'guides/testing-strategy':
    'Test package behavior, project configuration, generated services, and materialized asset contracts.',
  'setup/hasura': 'Configure Hasura as a GraphQL surface for selected Phlo-backed datasets.',
  'setup/observability':
    'Wire logs, metrics, traces, dashboards, and alerts around Phlo services and materialized runs.',
  'setup/openmetadata':
    'Connect OpenMetadata for catalogue, schema, lineage, ownership, and discovery workflows.',
  'setup/postgrest': 'Expose database-backed REST APIs for selected tables with PostgREST.',
  'setup/security':
    'Configure identity, access, service credentials, audit posture, and regulated-mode boundaries.',
  'setup/service-credentials':
    'Set up least-privilege credentials for services instead of relying on one shared admin identity.',
  'operations/operations-guide':
    'Operate a Phlo project after launch: runbooks, checks, service state, failures, and recovery.',
  'operations/production-readiness':
    'Review the practical readiness checklist before a Phlo project becomes a production surface.',
  'operations/troubleshooting':
    'Diagnose common local, service, package, and materialization failures.',
  'operations/audit-logging':
    'Understand audit events, log shape, and how operational actions are traced.',
  'operations/testing': 'Test Phlo workflows, packages, generated services, and data contracts.',
  'reference/cli-reference': 'Command reference for creating projects, managing services, and materializing assets.',
  'reference/configuration-reference':
    'Reference for Phlo project configuration, package settings, profiles, and environment variables.',
  'reference/quality-checks-catalog':
    'Catalogue of quality checks that can attach to materialized assets and pipeline runs.',
  'reference/plugin-api': 'API reference for package authors extending Phlo with integrations and services.',
  'reference/api-surfaces':
    'Reference for Phlo-native, REST, GraphQL, and ingress-gated API surfaces.',
  'reference/architecture':
    'Architecture reference for Phlo core, packages, services, workflow adapters, and project boundaries.',
}

const PACKAGE_DESCRIPTIONS: Record<string, string> = {
  'phlo-alerting': 'Routes alerts from quality failures, telemetry events, and pipeline errors to configured destinations.',
  'phlo-alloy': 'Collects Docker logs and OTLP telemetry with Grafana Alloy for downstream observability backends.',
  'phlo-api': 'Provides Phlo-native API endpoints for project behavior, Observatory backends, and controlled integrations.',
  'phlo-clickhouse': 'Adds ClickHouse as an analytical store for fast queries, metrics, and event-style workloads.',
  'phlo-clickstack': 'Installs a compact ClickHouse-based observability stack for logs, metrics, and traces.',
  'phlo-core-plugins': 'Bundles core package primitives and extension points used by Phlo integrations.',
  'phlo-dagster': 'Runs Phlo workflows through Dagster assets, jobs, schedules, and materialization metadata.',
  'phlo-dbt': 'Adds dbt transformations and model execution to a Phlo lakehouse project.',
  'phlo-delta': 'Adds Delta Lake table support for teams standardized on Delta-compatible tooling.',
  'phlo-dlt': 'Adds dlt ingestion pipelines for moving external data into lakehouse tables.',
  'phlo-grafana': 'Adds Grafana dashboards for inspecting Phlo services, metrics, logs, and run health.',
  'phlo-hasura': 'Adds Hasura for GraphQL access over selected database-backed surfaces.',
  'phlo-iceberg': 'Adds Apache Iceberg table support, the default path for Nessie-backed lakehouse branches.',
  'phlo-lineage': 'Captures and exposes lineage across assets, packages, services, and materialized runs.',
  'phlo-loki': 'Adds Loki log storage and querying for Phlo services and package-provided workloads.',
  'phlo-mcp': 'Adds MCP integration points for tools and agents working with Phlo project context.',
  'phlo-minio': 'Adds S3-compatible object storage for local and deployed lakehouse assets.',
  'phlo-nessie': 'Adds Nessie catalog branches for comparing, promoting, and governing lakehouse changes.',
  'phlo-oauth2-proxy': 'Adds OAuth2 proxy support for protecting browser-facing services.',
  'phlo-observatory': 'Adds the Observatory UI surface for inspecting Phlo projects, assets, packages, and runs.',
  'phlo-observatory-example': 'Example Observatory extension package for learning UI slots, routes, and settings.',
  'phlo-openmetadata': 'Connects OpenMetadata for discovery, schema context, lineage, ownership, and governance.',
  'phlo-otel': 'Adds OpenTelemetry collection and export for traces, metrics, and logs.',
  'phlo-pandera': 'Adds Pandera data validation checks for dataframes, tables, and materialized assets.',
  'phlo-pgweb': 'Adds pgweb for lightweight browser access to Postgres-backed Phlo services.',
  'phlo-postgres': 'Adds Postgres as a backing service for metadata, APIs, and operational state.',
  'phlo-postgrest': 'Adds PostgREST for database-native REST APIs over selected tables.',
  'phlo-prometheus': 'Adds Prometheus metrics collection for Phlo services and generated workloads.',
  'phlo-rustfs': 'Adds a Rust-based S3-compatible object storage option for lakehouse assets.',
  'phlo-sling': 'Adds Sling data movement jobs for database and file ingestion workflows.',
  'phlo-superset': 'Adds Superset for dashboards and BI exploration over Phlo-managed data.',
  'phlo-testing': 'Adds package and project testing utilities for generated services and workflow contracts.',
  'phlo-traefik': 'Adds Traefik ingress routing for local and deployed Phlo service surfaces.',
  'phlo-trino': 'Adds Trino SQL querying across lakehouse tables and object storage.',
}

export const allDocs = Object.entries(rawDocs)
  .map(([path, raw]) =>
    toDocPage(path, rawString(raw), mdxModules[path] ? lazy(mdxModules[path]) : undefined),
  )
  .filter((page): page is DocPage => Boolean(page))
  .sort((a, b) => {
    const sectionDelta = SECTION_META[a.section].order - SECTION_META[b.section].order
    if (sectionDelta !== 0) return sectionDelta
    return a.order - b.order || a.title.localeCompare(b.title)
  })

export const docSections: DocSection[] = (
  Object.keys(SECTION_META) as DocSectionId[]
).map((id) => {
  const meta = SECTION_META[id]
  return {
    id,
    title: meta.title,
    description: meta.description,
    url: `/docs/${id}`,
    pages: allDocs.filter((page) => page.section === id),
  }
})

export function getDoc(section: string | undefined, slug?: string) {
  if (!isSection(section)) return undefined
  const normalizedSlug = slug ?? 'index'
  return allDocs.find(
    (page) => page.section === section && page.slug === normalizedSlug,
  )
}

export function getSection(section: string | undefined) {
  if (!isSection(section)) return undefined
  return docSections.find((item) => item.id === section)
}

export function getSectionDocs(section: DocSectionId) {
  return allDocs.filter((page) => page.section === section)
}

export function docHref(section: DocSectionId, slug = 'index') {
  return slug === 'index' ? `/docs/${section}` : `/docs/${section}/${slug}`
}

export function guideHref(slug = 'index') {
  return slug === 'index' ? '/guides' : `/guides/${slug}`
}

export function packageHref(slug = 'index') {
  return slug === 'index' ? '/packages' : `/packages/${slug}`
}

export function sectionAliasHref(section: DocSectionId, slug = 'index') {
  if (section === 'guides') return guideHref(slug)
  if (section === 'packages') return packageHref(slug)
  if (section === 'reference') return slug === 'index' ? '/reference' : `/reference/${slug}`
  if (section === 'setup') return slug === 'index' ? '/setup' : `/setup/${slug}`
  if (section === 'operations') return slug === 'index' ? '/operations' : `/operations/${slug}`
  return docHref(section, slug)
}

function toDocPage(
  path: string,
  raw: string,
  Component: ComponentType | undefined,
): DocPage | undefined {
  const relative = path.replace('../../content/phlo-docs/', '')
  const parts = relative.split('/')
  const section = parts[0]

  if (!isSection(section) || parts.length < 2 || !Component) return undefined

  const filename = parts.at(-1)?.replace(/\.mdx$/, '') ?? 'index'
  const slug = filename
  const body = raw.trim()
  const title = extractTitle(body) || titleize(slug)
  const descriptionKey = `${section}/${slug}`
  const description =
    DESCRIPTION_OVERRIDES[descriptionKey] ||
    (section === 'packages' ? PACKAGE_DESCRIPTIONS[slug] : undefined) ||
    extractDescription(body) ||
    SECTION_META[section].description
  const headings = extractHeadings(body)
  const preferredIndex = PREFERRED_ORDER.indexOf(slug)

  return {
    section,
    slug,
    path: relative,
    url: docHref(section, slug),
    title,
    description,
    Component,
    headings,
    order: preferredIndex === -1 ? 1000 : preferredIndex,
  }
}

function rawString(raw: unknown): string {
  if (typeof raw === 'string') return raw
  if (isRecord(raw) && typeof raw.default === 'string') return raw.default
  if (
    isRecord(raw) &&
    isRecord(raw.default) &&
    typeof raw.default.default === 'string'
  ) {
    return raw.default.default
  }
  return ''
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === 'object')
}

function isSection(value: string | undefined): value is DocSectionId {
  return Boolean(value && value in SECTION_META)
}

function extractTitle(body: string) {
  return body.match(/^#\s+(.+)$/m)?.[1]?.trim()
}

function extractDescription(body: string) {
  const withoutTitle = body.replace(/^#\s+.+$/m, '').trim()
  return withoutTitle
    .split(/\n{2,}/)
    .find((block) => block && !block.startsWith('```') && !block.startsWith('|'))
    ?.replace(/\s+/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .slice(0, 180)
}

function extractHeadings(body: string) {
  return body
    .split('\n')
    .map((line) => {
      const match = line.match(/^(#{2,3})\s+(.+)$/)
      if (!match) return undefined
      const text = stripMarkdown(match[2]).trim()
      return {
        id: slugify(text),
        text,
        level: match[1].length as 2 | 3,
      }
    })
    .filter((heading): heading is { id: string; text: string; level: 2 | 3 } =>
      Boolean(heading),
    )
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/`([^`]+)`/g, '$1')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function titleize(value: string) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function stripMarkdown(value: string) {
  return value
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
}
