import { Link } from '@tanstack/react-router'
import { PhloLogo } from './PhloLogo'

const NAV = [
  { label: 'Product', href: '#product' },
  { label: 'Docs', href: '#docs' },
  { label: 'Guides', href: '#guides' },
  { label: 'GitHub', href: 'https://github.com/phlohouse' },
] as const

export function Header() {
  return (
    <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
      <Link to="/" aria-label="Phlo home" className="shrink-0">
        <PhloLogo className="h-11 sm:h-12" />
      </Link>

      <nav className="hidden items-center gap-8 text-[13px] font-semibold text-ink/70 md:flex">
        {NAV.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="transition-colors hover:text-ink"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <a
          href="#docs"
          className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-px hover:bg-ink-2 focus:outline-none focus:ring-2 focus:ring-brand/30"
        >
          Read docs
          <ArrowRight className="size-3.5" />
        </a>
      </div>
    </header>
  )
}

function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
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
