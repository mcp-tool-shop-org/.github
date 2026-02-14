# OG Image Safe Area Guide

GitHub crops social preview images differently across surfaces (repo page, link previews, Twitter cards, Slack unfurls). This guide defines the safe area.

## Canvas

- Full size: **1280 × 640 px**
- Aspect ratio: 2:1

## Safe Area

```
┌──────────────────────────────────────────────────┐
│ 4px accent bar                                    │
├──────────────────────────────────────────────────┤
│                                                    │
│   ┌──────────────────────────────────────────┐   │
│   │                                            │   │
│   │           SAFE AREA                        │   │
│   │           80px from left                   │   │
│   │           60px from top (below bar)        │   │
│   │           80px from right                  │   │
│   │           60px from bottom                 │   │
│   │                                            │   │
│   └──────────────────────────────────────────┘   │
│                                                    │
└──────────────────────────────────────────────────┘
```

**Safe area bounds:** `(80, 64)` to `(1200, 580)` — that's **1120 × 516 px**.

## Element Placement (from template)

| Element | X | Y | Notes |
|---------|---|---|-------|
| Accent bar | 0 | 0 | Full width, 4px tall |
| Logo mark | 80 | 180 | 48×48 geometric icon |
| Repo name | 80 | 300 | Baseline, 56px bold |
| Tagline | 80 | 360 | Baseline, 24px regular |
| Tech badges | 80 | 400 | Two 90×32 rounded rects |
| Footer (org) | 80 | 580 | Bottom of safe area |

## Cropping Scenarios

| Surface | Visible Area (approx) | Risk |
|---------|----------------------|------|
| GitHub repo page | Full 1280×640 | None |
| Twitter/X card | Center-cropped ~1200×600 | Edges clipped |
| Slack unfurl | Center-cropped, variable | Edges clipped |
| Discord embed | ~1280×640 or center-crop | Minor edge clip |
| Open Graph (generic) | Varies by client | Unpredictable edges |

**Rule:** Keep all meaningful content inside the safe area. The outer 80px on sides and 60px top/bottom is buffer.
