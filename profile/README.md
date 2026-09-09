<div align="center">

<img src="https://raw.githubusercontent.com/mcp-tool-shop-org/.github/main/assets/mark.svg" alt="" width="88" height="88">

# MCP Tool Shop

**Open-source tooling for local-first AI development.**

MCP servers, command-line tools, training and dataset pipelines, and game-production tooling<br>
that run on your own hardware. MIT licensed.

[**Website**](https://mcptoolshop.com) · [**Tool catalog**](https://mcptoolshop.com/tools/) · [**Releases**](https://mcptoolshop.com/releases/) · [**npm**](https://www.npmjs.com/search?q=%40mcptoolshop) · [**Discussions**](https://github.com/orgs/mcp-tool-shop-org/discussions)

</div>

---

## What we build

MCP Tool Shop is an independent software studio. We build the tools we use to develop AI-assisted software and games, and we publish them as open source. Everything is designed to run locally: on a workstation GPU, with Ollama, ComfyUI, and the Model Context Protocol, and with no cloud dependency for core functionality.

## Areas of work

| Area | Repositories | What they do |
|---|---|---|
| **MCP servers** | [tool-compass](https://github.com/mcp-tool-shop-org/tool-compass) · [ollama-intern-mcp](https://github.com/mcp-tool-shop-org/ollama-intern-mcp) · [mcp-voice-soundboard](https://github.com/mcp-tool-shop-org/mcp-voice-soundboard) · [polyglot-mcp](https://github.com/mcp-tool-shop-org/polyglot-mcp) · [plain-sight](https://github.com/mcp-tool-shop-org/plain-sight) | Tool discovery by intent, local-model job delegation, text-to-speech, GPU translation, image description |
| **Training and datasets** | [backpropagate](https://github.com/mcp-tool-shop-org/backpropagate) · [style-dataset-lab](https://github.com/mcp-tool-shop-org/style-dataset-lab) · [repo-dataset](https://github.com/mcp-tool-shop-org/repo-dataset) · [backprop-trace](https://github.com/mcp-tool-shop-org/backprop-trace) · [runforge-vscode](https://github.com/mcp-tool-shop-org/runforge-vscode) | Headless fine-tuning with GGUF export, canon-bound visual datasets, contamination-checked code datasets, training-step verification |
| **Image and media pipelines** | [comfy-headless](https://github.com/mcp-tool-shop-org/comfy-headless) · [comfy-preflight](https://github.com/mcp-tool-shop-org/comfy-preflight) · [sprite-foundry](https://github.com/mcp-tool-shop-org/sprite-foundry) · [armature](https://github.com/mcp-tool-shop-org/armature) · [audiobooker](https://github.com/mcp-tool-shop-org/audiobooker) | Programmatic ComfyUI, pre-submission workflow gates, sprite generation, GLB-driven video, multi-voice audiobooks |
| **Agent infrastructure** | [role-os](https://github.com/mcp-tool-shop-org/role-os) · [loadout-os](https://github.com/mcp-tool-shop-org/loadout-os) · [prism-verify](https://github.com/mcp-tool-shop-org/prism-verify) · [claude-guardian](https://github.com/mcp-tool-shop-org/claude-guardian) · [research-os](https://github.com/mcp-tool-shop-org/research-os) | Multi-agent orchestration, context routing, cross-family output verification, runtime health, research control plane |
| **Developer tooling** | [shipcheck](https://github.com/mcp-tool-shop-org/shipcheck) · [site-theme](https://github.com/mcp-tool-shop-org/site-theme) · [repo-knowledge](https://github.com/mcp-tool-shop-org/repo-knowledge) · [registry-stats](https://github.com/mcp-tool-shop-org/registry-stats) · [npm-launcher](https://github.com/mcp-tool-shop-org/npm-launcher) | Release quality gates, Astro site templates, repo knowledge base, package download stats, verified binary launcher |
| **Games and game tooling** | [ai-rpg-engine](https://github.com/mcp-tool-shop-org/ai-rpg-engine) · [world-forge](https://github.com/mcp-tool-shop-org/world-forge) · [motif](https://github.com/mcp-tool-shop-org/motif) · [saints-mile](https://github.com/mcp-tool-shop-org/saints-mile) · [roll](https://github.com/mcp-tool-shop-org/roll) | Deterministic RPG simulation, 2D/2.5D world authoring, adaptive soundtracks, a frontier JRPG, dice and probability engine |
| **Ledger and verification** | [attestia](https://github.com/mcp-tool-shop-org/attestia) · [xrpl-lab](https://github.com/mcp-tool-shop-org/xrpl-lab) · [xrpl-camp](https://github.com/mcp-tool-shop-org/xrpl-camp) · [repomesh](https://github.com/mcp-tool-shop-org/repomesh) | Financial truth infrastructure, XRPL training, release verification for repo networks |

The full catalog, with install commands and release history, is at [mcptoolshop.com/tools](https://mcptoolshop.com/tools/).

## Get started

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

MCP servers work with Claude Code, Claude Desktop, Cursor, VS Code, and any other MCP client.

## How we ship

- **Local-first.** Core functionality never requires an API key or a hosted service. Optional cloud routing is opt-in and falls back to local.
- **A release gate, not a vibe check.** Every tagged release passes [shipcheck](https://github.com/mcp-tool-shop-org/shipcheck): security policy and threat model, structured errors with exit codes, current docs and changelog, clean packaging.
- **Semantic versioning.** Every release is tagged on GitHub and published to npm or PyPI from CI.
- **Documented in eight languages.** Most repositories ship READMEs in English, Japanese, Chinese, Spanish, French, Hindi, Italian, and Brazilian Portuguese, translated locally with [polyglot-mcp](https://github.com/mcp-tool-shop-org/polyglot-mcp).
- **Accessible by default.** Low-vision-first CLI output and WCAG tooling via [accessibility-suite](https://github.com/mcp-tool-shop-org/accessibility-suite).

## Repository status

Every repository's README states which lane it is in:

| Lane | Meaning |
|---|---|
| **Shipped** | Tagged releases, CI, an install command, and a support policy |
| **In development** | Active work, pre-1.0 or not yet released. APIs may change |
| **Archive** | Retired prototypes and reusable patterns, kept in [prototypes](https://github.com/mcp-tool-shop-org/prototypes) |

## Community and support

- **Questions and ideas:** [GitHub Discussions](https://github.com/orgs/mcp-tool-shop-org/discussions)
- **Bugs and feature requests:** open an issue on the relevant repository. See [SUPPORT.md](https://github.com/mcp-tool-shop-org/.github/blob/main/SUPPORT.md) for what to include.
- **Security:** use private vulnerability reporting on the affected repository. Do not open a public issue. See [SECURITY.md](https://github.com/mcp-tool-shop-org/.github/blob/main/SECURITY.md).
- **Contributing:** [CONTRIBUTING.md](https://github.com/mcp-tool-shop-org/.github/blob/main/CONTRIBUTING.md) and the [Code of Conduct](https://github.com/mcp-tool-shop-org/.github/blob/main/CODE_OF_CONDUCT.md).

---

<div align="center">

[mcptoolshop.com](https://mcptoolshop.com) · [All repositories](https://github.com/orgs/mcp-tool-shop-org/repositories) · [MIT License](https://github.com/mcp-tool-shop-org/.github/blob/main/LICENSE)

</div>
