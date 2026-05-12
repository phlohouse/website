import { createFileRoute, notFound } from '@tanstack/react-router'
import { DocsShell } from '../components/docs/DocsShell'
import { getDoc } from '../lib/content'

export const Route = createFileRoute('/docs/$section/$page')({
  component: DocsPageRoute,
})

function DocsPageRoute() {
  const { section, page: slug } = Route.useParams()
  const doc = getDoc(section, slug)

  if (!doc) throw notFound()

  return <DocsShell page={doc} />
}
