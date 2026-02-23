# .github

[![Docs Quality](https://github.com/mcp-tool-shop-org/.github/actions/workflows/docs-quality.yml/badge.svg)](https://github.com/mcp-tool-shop-org/.github/actions/workflows/docs-quality.yml)

Org-level community health files, brand assets, and CI guardrails for [MCP Tool Shop](https://mcp-tool-shop.github.io/).

## Contents

- **Community health files** — CODE_OF_CONDUCT.md, CONTRIBUTING.md, SECURITY.md, SUPPORT.md, LICENSE
- **Org profile** — profile/README.md (appears on the org's GitHub page)
- **Brand assets** — brand/ directory with palette and OG manifests
- **CI guardrails** — Docs quality checks and org drift guard workflows
- **Org docs** — Releasing, versioning, maintenance, branch policy, badges

## Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `docs-quality.yml` | Push/PR on `**/*.md` | Markdown lint + link check |
| `org-guard.yml` | PR on workflows/docs | Org standards compliance scanner |

## License

MIT
