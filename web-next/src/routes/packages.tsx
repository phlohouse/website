import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/packages')({
  component: Outlet,
})
