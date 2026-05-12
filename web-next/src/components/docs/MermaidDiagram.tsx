import { renderMermaidSVG } from 'beautiful-mermaid'
import { useMemo } from 'react'

export default function MermaidDiagram({ code }: { code: string }) {
  const result = useMemo(() => {
    try {
      return {
        svg: renderMermaidSVG(code, {
          bg: 'oklch(0.995 0.004 248)',
          fg: 'oklch(0.22 0.055 260)',
          line: 'oklch(0.7 0.14 182)',
          accent: 'oklch(0.56 0.22 263)',
          muted: 'oklch(0.56 0.03 255)',
          surface: 'oklch(0.975 0.012 245)',
          border: 'oklch(0.9 0.02 248)',
          font: 'Inter, ui-sans-serif, system-ui, sans-serif',
          padding: 34,
          nodeSpacing: 34,
          layerSpacing: 54,
          transparent: true,
        }),
        error: undefined,
      }
    } catch (error) {
      return {
        svg: undefined,
        error: error instanceof Error ? error.message : String(error),
      }
    }
  }, [code])

  if (result.error) {
    return (
      <figure className="docs-mermaid docs-mermaid-error">
        <figcaption>Diagram could not render</figcaption>
        <pre>
          <code>{code}</code>
        </pre>
      </figure>
    )
  }

  return (
    <figure className="docs-mermaid">
      <div
        className="docs-mermaid-stage"
        dangerouslySetInnerHTML={{ __html: result.svg ?? '' }}
      />
    </figure>
  )
}
