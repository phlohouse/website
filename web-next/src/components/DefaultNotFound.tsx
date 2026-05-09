import { Link } from '@tanstack/react-router'

export function DefaultNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
        Page not found
      </h1>
      <p className="mt-3 text-muted">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-deep"
      >
        Go home
      </Link>
    </div>
  )
}
