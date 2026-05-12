import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

export default function ShikiCodeBlock({
  code,
  language,
}: {
  code: string
  language: string
}) {
  const [html, setHtml] = useState<string>()

  useEffect(() => {
    let cancelled = false

    codeToHtml(code, {
      lang: normalizeLanguage(language),
      theme: 'github-dark',
      transformers: [
        {
          pre(node) {
            this.addClassToHast(node, 'docs-shiki-pre')
          },
          code(node) {
            this.addClassToHast(node, 'docs-shiki-code')
          },
        },
      ],
    })
      .then((nextHtml) => {
        if (!cancelled) setHtml(nextHtml)
      })
      .catch(() => {
        if (!cancelled) setHtml(undefined)
      })

    return () => {
      cancelled = true
    }
  }, [code, language])

  if (!html) {
    return (
      <pre className="docs-shiki-pre docs-shiki-fallback">
        <code>{code}</code>
      </pre>
    )
  }

  return <div className="docs-shiki" dangerouslySetInnerHTML={{ __html: html }} />
}

function normalizeLanguage(language: string) {
  if (!language || language === 'text') return 'text'
  if (language === 'bash' || language === 'shell' || language === 'sh') return 'bash'
  if (language === 'yaml' || language === 'yml') return 'yaml'
  if (language === 'py') return 'python'
  if (language === 'ts') return 'typescript'
  if (language === 'js') return 'javascript'
  return language
}
