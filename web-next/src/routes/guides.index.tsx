import { createFileRoute } from '@tanstack/react-router'
import { SectionHub } from '../components/WebsiteHubs'
import { getSection } from '../lib/content'

export const Route = createFileRoute('/guides/')({
  component: GuidesIndexRoute,
})

function GuidesIndexRoute() {
  return <SectionHub section={getSection('guides')!} />
}
