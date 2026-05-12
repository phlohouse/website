import { createFileRoute } from '@tanstack/react-router'
import { DocsLanding } from '../components/docs/DocsShell'

export const Route = createFileRoute('/docs/')({
  component: DocsLanding,
})
