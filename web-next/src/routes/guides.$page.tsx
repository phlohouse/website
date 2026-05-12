import { createFileRoute, notFound } from '@tanstack/react-router'
import { DocsShell } from '../components/docs/DocsShell'
import { getDoc } from '../lib/content'

export const Route = createFileRoute('/guides/$page')({
  component: GuidePageRoute,
})

function GuidePageRoute() {
  const { page } = Route.useParams()
  const doc = getDoc('guides', page)

  if (!doc) throw notFound()

  return <DocsShell page={doc} />
}
