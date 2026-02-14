# MCP Tool Shop — Brand Kit

Canonical source of truth for visual identity across all repos.

## Typography

| Context | Font | Weight | Size |
|---------|------|--------|------|
| Repo name (OG image) | Segoe UI / system-ui | 700 (Bold) | 56px |
| Tagline (OG image) | Segoe UI / system-ui | 400 (Regular) | 24px |
| Tech badges | Segoe UI / monospace | 600 (Semibold) | 14px |
| Footer / org name | Segoe UI / system-ui | 500 (Medium) | 18px |
| README headings | GitHub default (Markdown) | — | — |

Letter-spacing on repo name: `-1` (tighter tracking for display weight).

## Tone

- **Technical, not salesy.** Lead with what the tool does, not superlatives.
- **Concrete over abstract.** Prefer "12 voices, SSML-lite" over "powerful features."
- **Short sentences.** If a tagline needs a comma, split it.
- **Active voice.** "Scans MCP tools for threats" not "A tool that can be used to scan."

## Naming

- Organization: **MCP Tool Shop** (three words, capitalized)
- Repo slugs: lowercase with hyphens (`mcp-voice-soundboard`)
- Display names in OG images: Title Case, may abbreviate (`Voice Soundboard`)

## Do

- Use the shared SVG template for all OG images
- Keep OG images at exactly **1280×640**
- Include both a LANG badge and a FRAME badge on every preview
- Use palette colors only (see [`palette.md`](palette.md))
- Keep taglines under 60 characters

## Don't

- Don't use gradients other than the two defined (`bg`, `accent`)
- Don't add logos, icons, or illustrations to OG images beyond the grid mark
- Don't use colors outside the palette
- Don't use "AI-powered" in taglines (everything here involves AI — it's noise)
- Don't capitalize MCP as "Mcp" or "mCP"

## Assets

| File | Purpose |
|------|---------|
| [`social-preview-template.svg`](social-preview-template.svg) | Master OG image template (1280×640) |
| [`generate-previews.py`](generate-previews.py) | Chrome headless PNG generator |
| [`og/manifest.json`](og/manifest.json) | Repo → image → tagline mapping |
| [`palette.md`](palette.md) | Color system with hex values and usage |
| [`SOCIAL-PREVIEWS.md`](SOCIAL-PREVIEWS.md) | Per-repo copy table and generation instructions |
