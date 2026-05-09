# Napkin

## Corrections
| Date | Source | What Went Wrong | What To Do Instead |
|------|--------|----------------|-------------------|

## User Preferences
- Follow repository `AGENTS.md` tool mappings when present.

## Patterns That Work
- Use `images/landing-hero-2.png` as the available reference when the user says `images/landing-hero2.png`; the no-hyphen filename does not exist in this repo.
- Phlo's brand direction is captured in `images/brand.png`: Instrument Sans for display, Inter for body, JetBrains Mono for code, bright white/tinted-blue surfaces, vivid blue/teal/green/amber, and ribbon waves as structured accents.

## Patterns That Don't Work
- Do not assume all referenced image filenames are exact; verify with `file` or `rg --files`.
- Do not push Phlo into a gothic/editorial serif direction. The user agreed the desired direction is clear, fluid, exact, avoiding AI SaaS templates and over-editorial treatment.
- Pillow is not installed in the local Python environment; use ImageMagick (`magick`) for quick image crops/contact sheets.

## Domain Notes
- The repo contains both `web/` and `web-next/`; the latter appears to be the newer landing-page implementation.
