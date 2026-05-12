import { createFileRoute } from '@tanstack/react-router'
import { SectionHub } from '../components/WebsiteHubs'
import { getSection } from '../lib/content'

export const Route = createFileRoute('/operations/')({
  component: OperationsIndexRoute,
})

function OperationsIndexRoute() {
  return <SectionHub section={getSection('operations')!} />
}
