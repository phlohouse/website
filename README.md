# Phlo Website

Static website for [Phlo](https://github.com/iamgp/phlo) — a modern data lakehouse platform.

Deployed to GitHub Pages at `phlohouse.com`.

## Development

```bash
cd web-next
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
cd web-next
npm run build   # outputs to dist/client/
```

The build uses the committed MDX files in `web-next/content/phlo-docs/` as the website source of truth.

## Documentation Content

Documentation pages live in `web-next/content/phlo-docs/`. Update those files directly when changing public website documentation.

Do not add private audit notes, temporary investigation reports, or one-off internal release proposals to the public docs tree.
