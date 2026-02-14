# MCP Tool Shop — Color Palette

All colors derive from Tailwind CSS Slate + Blue/Violet.

## Core Palette

### Backgrounds

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| BG Dark | `#0f172a` | Slate 900 | OG image gradient start, primary dark surface |
| BG Light | `#1e293b` | Slate 800 | OG image gradient end, secondary dark surface |

Gradient: diagonal from top-left (`#0f172a`) to bottom-right (`#1e293b`).

### Accent

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Accent Blue | `#3b82f6` | Blue 500 | Accent gradient start, logo mark, footer dot |
| Accent Violet | `#8b5cf6` | Violet 500 | Accent gradient end |

Gradient: horizontal left-to-right for the 4px top bar.

### Text

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Primary | `#f8fafc` | Slate 50 | Repo name, primary headings |
| Secondary | `#94a3b8` | Slate 400 | Tagline, supporting text |
| Muted | `#475569` | Slate 600 | Footer text (org name, tagline) |

### Badges

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Badge BG | `#1e3a5f` | Custom (Blue 900-ish) | Tech badge background fill |
| Badge Text | `#60a5fa` | Blue 400 | Tech badge label text |

## Grid Overlay

- Color: `#ffffff` at 3% opacity
- Pattern: 40px squares
- Stroke: 0.5px

## Usage Notes

- The accent gradient should **only** appear as the top bar and logo mark — never as text color or large fills.
- Badge BG is intentionally darker than Slate 800 to create contrast against the grid.
- All text sizes and weights are defined in the brand [`README.md`](README.md).
