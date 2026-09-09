<p align="center">
  <a href="README.md">English</a> | <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
</p>

<p align="center">
  <img src="assets/mark.svg" alt="MCP Tool Shop" width="96" height="96">
</p>

<h1 align="center">MCP Tool Shop</h1>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/.github/actions/workflows/docs-quality.yml"><img src="https://github.com/mcp-tool-shop-org/.github/actions/workflows/docs-quality.yml/badge.svg" alt="Docs Quality"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License"></a>
  <a href="https://mcp-tool-shop-org.github.io/.github/"><img src="https://img.shields.io/badge/landing_page-live-blue" alt="Landing page"></a>
</p>

**Open-source tooling for local-first AI development.** MCP servers, command-line tools, training and dataset pipelines, and game-production tooling that run on your own hardware. MIT licensed.

This repository holds the organization-wide files for [mcp-tool-shop-org](https://github.com/mcp-tool-shop-org): the [org profile](profile/README.md), community health files, the brand kit, CI guardrails, and the documents that describe how every repository in the organization is released and maintained.

## Contents

| Path | What it is |
|------|------------|
| `profile/README.md` | The public profile shown at [github.com/mcp-tool-shop-org](https://github.com/mcp-tool-shop-org) |
| `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`, `SUPPORT.md`, `LICENSE` | Community health files inherited by every repository that does not define its own |
| `.github/ISSUE_TEMPLATE/`, `.github/DISCUSSION_TEMPLATE/`, `.github/pull_request_template.md` | Default issue, discussion, and pull request templates |
| `docs/` | [Releasing](docs/RELEASING.md), [versioning](docs/VERSIONING.md), [branch policy](docs/BRANCH_POLICY.md), [maintenance](docs/MAINTENANCE.md), [badges](docs/BADGES.md), [provenance](docs/PROVENANCE.md) |
| `brand/` | [Palette](brand/palette.md), typography and tone, social-preview template and generator |
| `site/` | The Astro landing page at [mcp-tool-shop-org.github.io/.github](https://mcp-tool-shop-org.github.io/.github/) |
| `llms.txt` | A plain-text summary of the organization for AI agents |

## Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `docs-quality.yml` | Push or PR touching `**/*.md` | Markdown lint and link check |
| `org-guard.yml` | PR touching workflows or docs | Org standards compliance scan |
| `pages.yml` | Push touching `site/**` | Build and deploy the landing page |

## Get started with the tools

```bash
# Find MCP tools by describing what you need
npx @mcptoolshop/tool-compass

# Drive ComfyUI from Python, no node canvas required
pip install comfy-headless

# Fine-tune a local model and export GGUF for Ollama
pip install backpropagate

# Run the release quality gate on your own repository
npx @mcptoolshop/shipcheck audit
```

The full catalog, with install commands and release history for every repository, is at [mcptoolshop.com/tools](https://mcptoolshop.com/tools/).

## How the organization ships

- **Local-first.** Core functionality never requires an API key or a hosted service.
- **A release gate.** Every tagged release passes [shipcheck](https://github.com/mcp-tool-shop-org/shipcheck): security policy and threat model, structured errors with exit codes, current docs and changelog, clean packaging. See [docs/RELEASING.md](docs/RELEASING.md).
- **Semantic versioning.** Releases are tagged on GitHub and published to npm or PyPI from CI. See [docs/VERSIONING.md](docs/VERSIONING.md).
- **Three lanes.** Every README states whether the repository is shipped, in development, or archived. See [docs/MAINTENANCE.md](docs/MAINTENANCE.md).
- **Eight languages.** Most repositories ship READMEs in English, Japanese, Chinese, Spanish, French, Hindi, Italian, and Brazilian Portuguese, translated locally with [polyglot-mcp](https://github.com/mcp-tool-shop-org/polyglot-mcp).

## Support and security

- Questions and ideas: [GitHub Discussions](https://github.com/orgs/mcp-tool-shop-org/discussions)
- Bugs and feature requests: open an issue on the relevant repository. [SUPPORT.md](SUPPORT.md) lists what to include.
- Security: use private vulnerability reporting on the affected repository. Do not open a public issue. See [SECURITY.md](SECURITY.md).

## License

MIT. See [LICENSE](LICENSE).
