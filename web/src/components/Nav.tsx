import { Link } from '@tanstack/react-router'

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="text-[var(--color-accent)]">◆</span>
          <span>Phlo</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/registry"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Registry
          </Link>
          <Link
            to="/blog"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Blog
          </Link>
          <a
            href="https://github.com/iamgp/phlo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://github.com/iamgp/phlo"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}
