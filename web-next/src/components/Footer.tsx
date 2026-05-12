import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { PhloLogo } from './PhloLogo'
import { RoutedLink } from './RoutedLink'

const LINKS = {
  Product: [
    { label: 'Overview', href: '/#product' },
    { label: 'Workflow', href: '/#product' },
    { label: 'Architecture', href: '/guides/developer-guide' },
    { label: 'Guides', href: '/guides' },
  ],
  Developers: [
    { label: 'Docs', href: '/docs' },
    { label: 'API reference', href: '/reference' },
    { label: 'Packages', href: '/packages' },
    { label: 'GitHub', href: 'https://github.com/phlohouse' },
  ],
  Resources: [
    { label: 'Getting started', href: '/docs/getting-started' },
    { label: 'Plugin system', href: '/guides/plugin-development' },
    { label: 'Custom packages', href: '/guides/service-packages' },
    { label: 'Observatory extensions', href: '/packages/phlo-observatory' },
  ],
} as const

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface-2">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <PhloLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-body">
              The Python framework for building governed, branchable data
              workflows on the open lakehouse.
            </p>
            <a
              href="https://github.com/phlohouse"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-xs font-medium text-ink shadow-card transition hover:-translate-y-px hover:shadow-elev"
            >
              <GithubIcon />
              Star on GitHub
              <span className="rounded-full bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted">
                open
              </span>
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink">
                {heading}
              </div>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href}>
                      {item.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2026 Phlo</span>
            <span>Apache 2.0</span>
            <span className="hidden sm:inline">Built for open lakehouse teams</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="X" className="hover:text-ink">
              <XIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-ink">
              <LinkedinIcon />
            </a>
            <a href="#" aria-label="Slack" className="hover:text-ink">
              <SlackIcon />
            </a>
            <a href="#" aria-label="Email" className="hover:text-ink">
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  const className = 'text-sm text-body transition-colors hover:text-ink'
  if (href.startsWith('/')) {
    return (
      <RoutedLink to={href} className={className}>
        {children}
      </RoutedLink>
    )
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor" aria-hidden="true">
      <path d="M8 0a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.5c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.7 7.7 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3-1.8 3.7-3.6 3.9.3.3.5.8.5 1.6v2.4c0 .2.1.5.6.4A8 8 0 0 0 8 0z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M9.4 6.8 14.5 1h-1.2l-4.4 5L5.3 1H1l5.4 7.6L1 15h1.2l4.7-5.3L10.7 15H15L9.4 6.8zm-1.7 1.9-.5-.7L2.6 1.9h1.8l3.5 4.9.5.7 4.6 6.4h-1.8L7.7 8.7z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M3.4 1.5a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8zM1.7 6h3.4v8.5H1.7V6zm5.5 0h3.3v1.2h.1c.5-.9 1.6-1.4 2.7-1.4 2.9 0 3.5 1.9 3.5 4.4v4.3h-3.4v-3.8c0-.9 0-2.1-1.3-2.1-1.3 0-1.5 1-1.5 2v3.9H7.2V6z" />
    </svg>
  )
}

function SlackIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M3.4 9.9a1.5 1.5 0 1 1-1.5-1.5h1.5v1.5zm.7 0a1.5 1.5 0 0 1 3 0v3.7a1.5 1.5 0 0 1-3 0V9.9zm1.5-6.5a1.5 1.5 0 1 1 1.5-1.5v1.5H5.6zm0 .7a1.5 1.5 0 0 1 0 3H1.9a1.5 1.5 0 0 1 0-3h3.7zm6.5 1.5a1.5 1.5 0 1 1 1.5 1.5h-1.5V5.6zm-.7 0a1.5 1.5 0 0 1-3 0V1.9a1.5 1.5 0 0 1 3 0v3.7zm-1.5 6.5a1.5 1.5 0 1 1-1.5 1.5v-1.5h1.5zm0-.7a1.5 1.5 0 0 1 0-3h3.7a1.5 1.5 0 0 1 0 3h-3.7z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
      <rect x="1.5" y="3" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 4.5l6 4 6-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
