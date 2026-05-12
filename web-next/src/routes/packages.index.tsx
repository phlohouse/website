import { createFileRoute } from '@tanstack/react-router'
import { PackagesHub } from '../components/WebsiteHubs'
import { getSection } from '../lib/content'

export const Route = createFileRoute('/packages/')({
  component: PackagesIndexRoute,
})

function PackagesIndexRoute() {
  return <PackagesHub section={getSection('packages')!} />
}
