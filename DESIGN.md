---
name: Phlo
description: Clear, fluid, exact visual system for a Python lakehouse framework.
colors:
  ink: "#0F172A"
  ink-2: "#1E293B"
  body: "#475569"
  muted: "#64748B"
  line: "#DCE7F3"
  line-2: "#F1F5F9"
  surface: "#FEFEFF"
  surface-2: "#F7FBFF"
  brand: "#2563EB"
  brand-deep: "#1D4ED8"
  brand-soft: "#E0F2FE"
  teal: "#14B8A6"
  teal-soft: "#F0FDFA"
  green: "#22C55E"
  amber: "#F59E0B"
  amber-soft: "#FFF7E6"
  code-bg: "#0F172A"
typography:
  display:
    fontFamily: "Instrument Sans, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.7rem, 5vw, 3.45rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "0"
  headline:
    fontFamily: "Instrument Sans, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.35rem, 4vw, 3.05rem)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "0"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0"
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.18em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.62
    letterSpacing: "0"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.surface}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.brand-deep}"
    textColor: "{colors.surface}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.title}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  badge-status:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  code-window:
    backgroundColor: "{colors.code-bg}"
    textColor: "{colors.surface}"
    typography: "{typography.mono}"
    rounded: "{rounded.lg}"
    padding: "16px 20px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: Phlo

## 1. Overview

**Creative North Star: "The Flow-Spec Sheet"**

Phlo should feel like a precise technical spec sheet that has learned how to move. The system is bright, quiet, and exact at rest, then uses vivid ribbon colors to explain relationships: branch, check, transform, publish. The dominant impression is not decoration, it is controlled flow.

This is a brand surface for a developer tool, so the interface must communicate before it transacts. Product artifacts carry the story: code windows, branch labels, status badges, lineage connectors, and open lakehouse stack logos. The surrounding visual system stays clean enough that those artifacts feel trustworthy.

The system explicitly rejects generic AI SaaS template patterns, over-editorial magazine serif treatment, and decorative flow lines that cross or reduce the readability of important text.

**Key Characteristics:**
- Bright technical surfaces with cool-blue neutral tint.
- Full-palette accents: blue, teal, green, and amber each have a job.
- Flow lines connect product ideas. They do not sit behind text for mood.
- Code and diagrams are first-class brand imagery.
- Spacing is airy, but component interiors stay crisp and operational.

## 2. Colors

The palette is a full product-brand spectrum: blue for trust and primary action, teal for flow and continuity, green for validation, amber for publishing and energy, all resting on cool lakehouse neutrals.

### Primary
- **Lakehouse Blue**: The primary brand action color. Use for primary CTAs, links with strong intent, active connector strands, and small label accents.
- **Deep Lakehouse Blue**: The hover and pressed state for Lakehouse Blue, and the fallback for moments needing stronger contrast.
- **Soft Blueprint Blue**: The low-chroma support tint for icons, chips, and status backgrounds.

### Secondary
- **Flow Teal**: The continuity color. Use for the word "flow", flowing lines, passed states when the state is about movement, and subtle optimistic emphasis.
- **Mist Teal**: The low-pressure teal surface for check icons, success chips, and light status areas.
- **Validation Green**: Use sparingly for confirmation and validation. Do not use it as a general brand accent.

### Tertiary
- **Publish Amber**: The publishing and energy accent. Use for production states, schema compatibility, final-stage nodes, and the warm end of ribbon imagery.
- **Soft Publish Amber**: The amber companion surface for icons and chips.

### Neutral
- **Ink Navy**: Primary text and the dark code-window surface.
- **Slate Body**: Body copy and explanatory text.
- **Muted Slate**: Metadata, helper text, timestamps, and secondary labels.
- **Blueprint Line**: Borders, rules, separators, and connector scaffolding.
- **Clean Surface**: Main page background and card background.
- **Cool Surface**: Alternating section background and secondary cards.

### Named Rules

**The Color Has a Job Rule.** Every saturated color must map to a product concept: blue for action, teal for flow, green for validation, amber for publish. If the color cannot explain its job, remove it.

**The Surface Stays Quiet Rule.** Large areas stay white or cool-blue tinted. The palette becomes vivid in strands, icons, code syntax, and CTAs, not in full-page floods.

## 3. Typography

**Display Font:** Instrument Sans, with Inter and system sans fallbacks.  
**Body Font:** Inter, with system sans fallbacks.  
**Label/Mono Font:** JetBrains Mono for code, branch names, commands, and tiny technical chips.

**Character:** The type system is clean and mechanical without being sterile. Instrument Sans preserves the brand board and gives headlines a rounded, engineered confidence. Inter carries product copy because it is calm, readable, and already embedded in the implementation. JetBrains Mono is reserved for literal code and machine-readable artifacts.

### Hierarchy

- **Display** (600, `clamp(2.7rem, 5vw, 3.45rem)`, `1.04`): Hero headline only. Keep it compact enough that the flow motif never crosses it.
- **Headline** (600, `clamp(2.35rem, 4vw, 3.05rem)`, `1.03`): Section headlines and major product claims.
- **Title** (600, `1rem`, `1.35`): Card titles, status labels, component headings, and navigation emphasis.
- **Body** (400, `1rem`, `1.75`): Explanatory copy. Keep body lines under 65 to 75 characters.
- **Label** (600, `0.6875rem`, `0.18em`, uppercase): Eyebrows and section markers only. Never use all-caps for body copy.
- **Mono** (500, `0.75rem`, `1.62`): Code samples, CLI commands, branch names, and install chips.

### Named Rules

**The Brand Font Rule.** Instrument Sans is the display voice because it is part of the Phlo brand board. Do not replace it with editorial serifs, gothic display type, or italic-heavy headline systems.

**The Mono Means Literal Rule.** Monospace is only for code, commands, branches, and machine labels. It is not a generic way to say "technical."

## 4. Elevation

Phlo uses a hybrid of tonal layering and soft elevation. Cards and diagrams sit on clean surfaces with fine blueprint borders, while important product artifacts such as code windows and active cards receive broad, cool shadows. Shadows should feel ambient and optical, not heavy or app-like.

### Shadow Vocabulary

- **Card Shadow** (`0 1px 2px rgba(35, 84, 135, 0.05), 0 10px 28px -12px rgba(35, 84, 135, 0.16)`): Default shadow for cards, status badges, chips, and small panels.
- **Elevated Shadow** (`0 4px 14px -4px rgba(35, 84, 135, 0.12), 0 28px 70px -28px rgba(35, 84, 135, 0.3)`): Use for the hero code window, modals if they ever exist, and important hover states.

### Named Rules

**The Blueprint Edge Rule.** Use a fine border plus soft shadow for structure. Do not rely on dark shadows alone for hierarchy.

**The Lift Responds Rule.** Hover lift should be small, usually `translateY(-1px)`. Large floating motion makes the page feel like a template.

## 5. Components

### Buttons

- **Shape:** Gently squared brand buttons (`8px`) for primary hero actions, fully rounded dark nav CTA (`9999px`) for compact header action.
- **Primary:** Lakehouse Blue background, clean surface text, `12px 20px` padding, semibold title typography.
- **Hover / Focus:** Hover shifts to Deep Lakehouse Blue and moves up `1px`. Focus uses a visible blue ring. Always include a focus-visible state.
- **Secondary:** Clean Surface background, Ink Navy text, Blueprint Line border, same height as primary.
- **Tertiary:** Use plain text links with arrow icons when the action is lower priority. Do not create more bordered buttons.

### Chips

- **Style:** Chips are small technical artifacts: rounded-full, fine border, cool surface fill, JetBrains Mono at `11px` to `12px`.
- **State:** Use color dots or icons plus text. Color alone never communicates state.

### Cards / Containers

- **Corner Style:** Most cards use `12px` to `16px`. Inner icons use `8px`. Avoid exaggerated pill cards.
- **Background:** Clean Surface for foreground cards, Cool Surface for section backgrounds, Ink Navy for code.
- **Shadow Strategy:** Use Card Shadow by default and Elevated Shadow only for hero artifacts or hover emphasis.
- **Border:** Blueprint Line border on all cards that sit on pale backgrounds.
- **Internal Padding:** Small cards use `16px` to `20px`; larger diagrams use `24px` to `32px`.

### Inputs / Fields

- **Style:** No full input system exists yet. Future fields should use Clean Surface, Blueprint Line border, `8px` radius, `12px 14px` padding, and Body typography.
- **Focus:** Shift border to Lakehouse Blue and add a low-opacity blue focus ring.
- **Error / Disabled:** Error should use a dedicated red token when introduced. Disabled states should reduce opacity and keep layout stable.

### Navigation

- **Style:** Header navigation is quiet and compact: `13px` semibold text, Ink Navy at reduced opacity, generous horizontal gaps.
- **Hover / Active:** Hover returns text to full Ink Navy. Active page state should use Lakehouse Blue plus a subtle underline or dot, not a filled pill.
- **Mobile:** Collapse into a compact menu only when navigation cannot fit. Preserve the Phlo mark and primary CTA.

### Code Windows

- **Character:** Code windows are product proof, not decoration. Keep them readable and short.
- **Shape:** Dark Ink Navy surface, `12px` radius, title bar, traffic-light dots, and JetBrains Mono.
- **Syntax:** Amber decorators, purple keywords, green strings, cyan function names, slate comments.
- **Rule:** Never let decorative ribbons reduce code contrast.

### Flow Diagrams

- **Character:** Flow diagrams are the signature component family. They should behave like data lineage diagrams, with visible handoffs and status.
- **Lines:** Use blue, teal, green, and amber strands to connect related nodes. Lines should connect components or mark section rhythm.
- **Cards:** Node cards may use icons, branch names, and status chips, but every node needs a plain text label.

## 6. Do's and Don'ts

### Do:

- **Do** use Instrument Sans for display headings and Inter for body text.
- **Do** use the real Phlo logo asset or a faithful vector from the brand board.
- **Do** keep large surfaces bright, cool, and readable.
- **Do** use blue, teal, green, and amber only when each color maps to action, flow, validation, or publish.
- **Do** use code samples, branch labels, checks, lineage, and stack logos as the core visual material.
- **Do** keep body copy concise, under 65 to 75 characters per line.
- **Do** make flow lines connect meaningful objects, such as code to status cards or stages to outputs.
- **Do** include reduced-motion behavior for any animated flow.

### Don't:

- **Don't** make Phlo look like a generic AI SaaS template: no decorative gradient blobs, oversized icon-card grids, vague startup copy, or ornamental polish that does not explain the product.
- **Don't** make Phlo look over-editorial: no magazine-serif identity, gothic display type, broadsheet composition, or italic-heavy headings.
- **Don't** make Phlo look like internal developer tooling: no dense terminal-first darkness, monochrome dashboards, or technical austerity that hides the warmth and motion of the brand.
- **Don't** let decorative flow lines cross or reduce the readability of important text.
- **Don't** use gradient text.
- **Don't** use glassmorphism as a default card treatment.
- **Don't** use side-stripe borders greater than `1px` as colored accents.
- **Don't** use em dashes in interface copy.
