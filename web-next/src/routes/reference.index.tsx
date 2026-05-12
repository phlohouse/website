import { createFileRoute } from '@tanstack/react-router'
import { SectionHub } from '../components/WebsiteHubs'
import { getSection } from '../lib/content'

export const Route = createFileRoute('/reference/')({
  component: ReferenceIndexRoute,
})

function ReferenceIndexRoute() {
  return <SectionHub section={getSection('reference')!} />
}
