import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
