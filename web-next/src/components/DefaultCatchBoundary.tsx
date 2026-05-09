import { ErrorComponent, useRouter } from '@tanstack/react-router'

export function DefaultCatchBoundary({ error }: { error: Error }) {
  const router = useRouter()
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">
        Something went wrong
      </h1>
      <p className="mt-3 text-muted">An unexpected error occurred.</p>
      <ErrorComponent error={error} />
      <button
        type="button"
        onClick={() => router.invalidate()}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-deep"
      >
        Try again
      </button>
    </div>
  )
}
