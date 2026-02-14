export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <span className="text-[var(--color-accent)]">◆</span>
          <span>Phlo — Modern Data Lakehouse Platform</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/iamgp/phlo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            GitHub
          </a>
          <a
            href="https://github.com/iamgp/phlo/blob/main/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            Docs
          </a>
        </div>
      </div>
    </footer>
  )
}
