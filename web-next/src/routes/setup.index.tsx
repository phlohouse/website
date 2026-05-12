import { createFileRoute } from '@tanstack/react-router'
import { SectionHub } from '../components/WebsiteHubs'
import { getSection } from '../lib/content'

export const Route = createFileRoute('/setup/')({
  component: SetupIndexRoute,
})

function SetupIndexRoute() {
  return <SectionHub section={getSection('setup')!} />
}
