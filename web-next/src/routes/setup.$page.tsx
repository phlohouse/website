import { createFileRoute, notFound } from '@tanstack/react-router'
import { DocsShell } from '../components/docs/DocsShell'
import { getDoc } from '../lib/content'

export const Route = createFileRoute('/setup/$page')({
  component: SetupPageRoute,
})

function SetupPageRoute() {
  const { page } = Route.useParams()
  const doc = getDoc('setup', page)

  if (!doc) throw notFound()

  return <DocsShell page={doc} />
}
