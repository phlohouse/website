import { Link } from '@tanstack/react-router'
import type { AnchorHTMLAttributes, ComponentType, ReactNode } from 'react'

type RoutedLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string
  hash?: string
  children?: ReactNode
}

export function RoutedLink({ to, hash, children, ...props }: RoutedLinkProps) {
  const RouterLink = Link as unknown as ComponentType<{
    to: string
    hash?: string
  } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>>
  const [path, inlineHash] = to.split('#')
  const routeHash = hash ?? inlineHash

  return (
    <RouterLink to={path || '/'} hash={routeHash} {...props}>
      {children}
    </RouterLink>
  )
}
