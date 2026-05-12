import { MDXProvider } from '@mdx-js/react'
import {
  isValidElement,
  lazy,
  Suspense,
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode,
} from 'react'
import { RoutedLink } from '../RoutedLink'
import type { DocPage } from '../../lib/content'

const MermaidDiagram = lazy(() => import('./MermaidDiagram'))
const ShikiCodeBlock = lazy(() => import('./ShikiCodeBlock'))

export function MdxArticle({ page }: { page: DocPage }) {
  const Component = page.Component

  return (
    <article className="docs-prose">
      <MDXProvider components={mdxComponents(page)}>
        <Suspense fallback={<p>Loading documentation…</p>}>
          <Component />
        </Suspense>
      </MDXProvider>
    </article>
  )
}

function mdxComponents(page: DocPage) {
  return {
    a(props: ComponentPropsWithoutRef<'a'>) {
      const href = rewriteHref(props.href, page)
      if (isRoutedHref(href)) {
        const { href: _href, ...rest } = props
        const [to, hash] = href!.split('#')
        return <RoutedLink {...rest} to={to} hash={hash} />
      }
      return <a {...props} href={href} />
    },
    pre(props: ComponentPropsWithoutRef<'pre'>) {
      const codeBlock = extractCodeBlock(props.children)
      if (codeBlock?.language === 'mermaid') {
        return (
          <Suspense
            fallback={
              <figure className="docs-mermaid">
                <div className="docs-mermaid-stage docs-mermaid-loading">
                  Rendering diagram…
                </div>
              </figure>
            }
          >
            <MermaidDiagram code={codeBlock.code} />
          </Suspense>
        )
      }

      if (codeBlock) {
        return (
          <Suspense
            fallback={
              <pre className="docs-shiki-pre docs-shiki-fallback">
                <code>{codeBlock.code}</code>
              </pre>
            }
          >
            <ShikiCodeBlock code={codeBlock.code} language={codeBlock.language} />
          </Suspense>
        )
      }

      return <pre {...props} />
    },
    table(props: ComponentPropsWithoutRef<'table'>) {
      return (
        <div className="docs-table">
          <table {...props} />
        </div>
      )
    },
  }
}

function extractCodeBlock(children: ReactNode) {
  if (!isValidElement(children)) return undefined

  const child = children as ReactElement<{
    className?: string
    children?: ReactNode
  }>

  const language = child.props.className?.match(/language-([A-Za-z0-9_-]+)/)?.[1]
  if (!language || typeof child.props.children !== 'string') return undefined

  return {
    code: child.props.children.trim(),
    language,
  }
}

function isRoutedHref(href: string | undefined) {
  if (!href) return false
  if (href.startsWith('#')) return false
  if (/^(https?:|mailto:)/.test(href)) return false
  return href.startsWith('/')
}

function rewriteHref(href: string | undefined, page: DocPage) {
  if (!href) return href
  if (/^(https?:|mailto:|#)/.test(href)) return href
  const [path, hash] = href.split('#')
  const cleaned = path.replace(/\.md$/, '').replace(/\/index$/, '').replace(/^index$/, '')
  const suffix = hash ? `#${hash}` : ''

  if (cleaned.startsWith('/')) return `${cleaned}${suffix}`
  if (cleaned.startsWith('../')) {
    return `/docs/${cleaned.replace(/^\.\.\//, '')}${suffix}`
  }
  if (cleaned.startsWith('./')) {
    return `/docs/${page.section}/${cleaned.replace(/^\.\//, '')}${suffix}`
  }
  return `/docs/${page.section}/${cleaned}${suffix}`
}
