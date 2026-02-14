# Phlo Website & Plugin Registry

Static website and plugin registry for [Phlo](https://github.com/iamgp/phlo) — a modern data lakehouse platform.

Deployed to GitHub Pages at `phlohouse.com`. The CLI fetches `phlohouse.com/plugins.json` for the plugin registry.

## Development

```bash
cd web
npm install
npm run dev     # http://localhost:3000
```

Or with pm2 from the root:

```bash
make dev        # start
make logs       # tail
make stop       # kill
```

## Build

```bash
cd web
npm run build   # outputs to dist/
```

The build script pre-processes blog markdown into JSON and Vite builds a static SPA.

## Adding Blog Posts

Drop a `.md` file into `web/content/blog/` with frontmatter:

```yaml
---
title: "Your Post Title"
description: "One-sentence summary for the listing page."
---
# Your Post Title

Content here...
```

Files are numbered (`01-slug.md`, `02-slug.md`) to control ordering.

## Plugin Registry

`web/public/plugins.json` is the static registry. The phlo CLI fetches this file directly. Update it when plugins change.
