export interface Plugin {
  name: string
  type: string
  package: string
  version: string
  description: string
  author: string
  homepage: string | null
  tags: string[]
  verified: boolean
  core: boolean
}

interface RegistryData {
  plugins: Record<string, Omit<Plugin, 'name'>>
}

let _cache: Plugin[] | null = null

async function loadPlugins(): Promise<Plugin[]> {
  if (_cache) return _cache
  const res = await fetch('/plugins.json')
  const data: RegistryData = await res.json()
  _cache = Object.entries(data.plugins).map(([name, info]) => ({
    name,
    ...info,
  }))
  return _cache
}

export async function fetchPlugins(): Promise<Plugin[]> {
  return loadPlugins()
}

export async function fetchPlugin(name: string): Promise<Plugin | null> {
  const plugins = await loadPlugins()
  return plugins.find((p) => p.name === name) || null
}
