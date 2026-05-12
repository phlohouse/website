import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { RoutedLink } from '../RoutedLink'
import { docSections, type DocPage, type DocSection } from '../../lib/content'
import { MdxArticle } from './MdxArticle'

export function DocsShell({
  page,
  section,
  children,
}: {
  page?: DocPage
  section?: DocSection
  children?: ReactNode
}) {
  const activeSection = section?.id ?? page?.section
  const activeSectionTitle = docSections.find((item) => item.id === activeSection)?.title

  return (
    <div className="min-h-screen overflow-x-clip bg-surface docs-canvas">
      <Header />
      <main className="relative isolate border-t border-line/70">
        <div className="docs-ribbon" aria-hidden="true" />
        <div className="mx-auto grid max-w-[92rem] gap-8 px-6 py-9 sm:px-10 lg:grid-cols-[14.5rem_minmax(0,1fr)_10.5rem] lg:py-12 xl:gap-12">
          <DocsSidebar activeSection={activeSection} activePath={page?.url} />

          <div className="min-w-0">
            {page ? (
              <>
                <div className="mb-10">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-muted">
                    <Link
                      to="/docs"
                      className="text-brand transition hover:text-brand-deep"
                    >
                      docs
                    </Link>
                    <span className="text-line">/</span>
                    <RoutedLink
                      to={`/docs/${page.section}`}
                      className="text-brand transition hover:text-brand-deep"
                    >
                      {activeSectionTitle?.toLowerCase()}
                    </RoutedLink>
                    <span className="text-line">/</span>
                    <span>{page.slug}</span>
                  </div>
                  <h1 className="font-display mt-5 max-w-[12ch] text-[3.2rem] font-semibold leading-[0.98] text-ink sm:text-[4.6rem]">
                    {page.title}
                  </h1>
                  <p className="mt-5 max-w-3xl text-[1.02rem] leading-8 text-body">
                    {page.description}
                  </p>
                  <DocFlowMark section={activeSectionTitle ?? 'Docs'} page={page.title} />
                </div>
                <MdxArticle page={page} />
              </>
            ) : (
              children
            )}
          </div>

          <aside className="hidden lg:block">
            {page?.headings.length ? (
              <div className="sticky top-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand">
                  page flow
                </div>
                <nav className="mt-4 space-y-2.5">
                  {page.headings.slice(0, 12).map((heading) => (
                    <a
                      key={`${heading.id}-${heading.text}`}
                      href={`#${heading.id}`}
                      className={`block text-[13px] leading-snug text-body transition hover:text-ink ${
                        heading.level === 3 ? 'pl-3' : ''
                      }`}
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
            ) : null}
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export function DocsLanding() {
  return (
    <DocsShell>
      <section className="relative pb-8">
        <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
          Phlo Documentation
        </div>
        <h1 className="font-display mt-5 max-w-[13ch] text-[3.5rem] font-semibold leading-[0.98] text-ink sm:text-[5.4rem]">
          Build the lakehouse path, step by step.
        </h1>
        <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-body">
          Project setup, package choices, service wiring, operations, and
          reference material from the Phlo source docs.
        </p>
      </section>

      <div className="docs-path-list mt-6">
        {docSections.map((item, index) => (
          <SectionPath key={item.id} section={item} index={index} />
        ))}
      </div>
    </DocsShell>
  )
}

export function SectionLanding({ section }: { section: DocSection }) {
  return (
    <DocsShell section={section}>
      <section className="pb-7">
        <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
          Phlo Docs
        </div>
        <h1 className="font-display mt-5 max-w-[12ch] text-[3.4rem] font-semibold leading-[0.98] text-ink sm:text-[5rem]">
          {section.title}
        </h1>
        <p className="mt-5 max-w-2xl text-[1.03rem] leading-8 text-body">
          {section.description}
        </p>
      </section>

      <div className="docs-path-list mt-4">
        {section.pages.map((page, index) => (
          <DocPath key={page.url} page={page} index={index} />
        ))}
      </div>
    </DocsShell>
  )
}

function DocsSidebar({
  activeSection,
  activePath,
}: {
  activeSection?: string
  activePath?: string
}) {
  return (
    <aside className="docs-sidebar-scroll lg:sticky lg:top-8 lg:self-start">
      <div className="docs-rail">
        <Link
          to="/docs"
          className="block font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand transition hover:text-brand-deep"
        >
          Documentation
        </Link>
        <nav className="mt-6 space-y-5">
          {docSections.map((section) => (
            <div key={section.id}>
              <RoutedLink
                to={section.url}
                className={`docs-rail-section ${
                  activeSection === section.id
                    ? 'text-ink'
                    : 'text-ink hover:bg-surface-2'
                }`}
              >
                <span className="docs-rail-dot" aria-hidden="true" />
                {section.title}
              </RoutedLink>
              {section.id !== 'packages' ? (
                <div className="mt-1.5 space-y-0.5 pl-5">
                  {section.pages.slice(0, 8).map((page) => (
                    <RoutedLink
                      key={page.url}
                      to={page.url}
                      className={`block rounded-md px-2 py-1.5 text-[13px] leading-snug transition ${
                        activePath === page.url
                          ? 'bg-brand-soft font-medium text-brand'
                          : 'text-body hover:bg-surface-2 hover:text-ink'
                      }`}
                    >
                      {page.title}
                    </RoutedLink>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}

function DocFlowMark({ section, page }: { section: string; page: string }) {
  return (
    <div className="mt-8 hidden max-w-xl grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 sm:grid">
      {['project', section, page].map((item, index) => (
        <div
          key={`${item}-${index}`}
          className="rounded-lg border border-line bg-white/80 px-3 py-2 font-mono text-[11px] text-ink shadow-card"
        >
          {item.toLowerCase()}
        </div>
      )).flatMap((node, index, array) =>
        index === array.length - 1
          ? [node]
          : [
              node,
              <span
                key={`arrow-${index}`}
                className="h-px w-8 bg-gradient-to-r from-brand via-teal to-amber"
                aria-hidden="true"
              />,
            ],
      )}
    </div>
  )
}

function SectionPath({ section, index }: { section: DocSection; index: number }) {
  return (
    <RoutedLink
      to={section.url}
      className="docs-path group"
    >
      <span className="docs-path-number">{String(index + 1).padStart(2, '0')}</span>
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold leading-tight text-ink">
              {section.title}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-body">
              {section.description}
            </p>
          </div>
          <span className="docs-path-arrow">→</span>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {section.pages.slice(0, 5).map((page) => (
            <span key={page.url} className="docs-chip">
              {page.title}
            </span>
          ))}
        </div>
      </div>
    </RoutedLink>
  )
}

function DocPath({ page, index }: { page: DocPage; index: number }) {
  return (
    <RoutedLink to={page.url} className="docs-path group">
      <span className="docs-path-number">{String(index + 1).padStart(2, '0')}</span>
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold leading-tight text-ink">
              {page.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-body">
              {page.description}
            </p>
          </div>
          <span className="docs-path-arrow">→</span>
        </div>
      </div>
    </RoutedLink>
  )
}
