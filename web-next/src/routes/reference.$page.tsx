import { createFileRoute, notFound } from '@tanstack/react-router'
import { DocsShell } from '../components/docs/DocsShell'
import { getDoc } from '../lib/content'

export const Route = createFileRoute('/reference/$page')({
  component: ReferencePageRoute,
})

function ReferencePageRoute() {
  const { page } = Route.useParams()
  const doc = getDoc('reference', page)

  if (!doc) throw notFound()

  return <DocsShell page={doc} />
}
