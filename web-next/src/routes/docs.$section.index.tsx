import { createFileRoute, notFound } from '@tanstack/react-router'
import { SectionLanding } from '../components/docs/DocsShell'
import { getSection } from '../lib/content'

export const Route = createFileRoute('/docs/$section/')({
  component: DocsSectionIndexRoute,
})

function DocsSectionIndexRoute() {
  const { section: sectionId } = Route.useParams()
  const section = getSection(sectionId)

  if (!section) throw notFound()

  return <SectionLanding section={section} />
}
