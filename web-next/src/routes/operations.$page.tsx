import { createFileRoute, notFound } from '@tanstack/react-router'
import { DocsShell } from '../components/docs/DocsShell'
import { getDoc } from '../lib/content'

export const Route = createFileRoute('/operations/$page')({
  component: OperationsPageRoute,
})

function OperationsPageRoute() {
  const { page } = Route.useParams()
  const doc = getDoc('operations', page)

  if (!doc) throw notFound()

  return <DocsShell page={doc} />
}
