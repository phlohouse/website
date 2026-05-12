import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/docs/$section')({
  component: Outlet,
})
