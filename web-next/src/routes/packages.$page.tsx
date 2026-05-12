import { createFileRoute, notFound } from '@tanstack/react-router'
import { DocsShell } from '../components/docs/DocsShell'
import { getDoc } from '../lib/content'

export const Route = createFileRoute('/packages/$page')({
  component: PackagePageRoute,
})

function PackagePageRoute() {
  const { page } = Route.useParams()
  const doc = getDoc('packages', page)

  if (!doc) throw notFound()

  return <DocsShell page={doc} />
}
