<p align="center">
  <b>Open-source research and tooling for local-first AI.</b><br>
  Measured research, datasets whose answers are proven by code, and the MCP servers, CLIs and training pipelines that research needs. All of it runs on your own hardware.
</p>

<p align="center">
  <a href="https://mcptoolshop.com"><img src="https://img.shields.io/badge/Website-mcptoolshop.com-3b82f6?style=flat-square&logo=google-chrome&logoColor=white" alt="Website"></a>
  <a href="https://mcptoolshop.com/tools/"><img src="https://img.shields.io/badge/Catalog-Tools-8b5cf6?style=flat-square&logo=gear&logoColor=white" alt="Tool Catalog"></a>
  <a href="https://github.com/orgs/mcp-tool-shop-org/discussions"><img src="https://img.shields.io/badge/Discussions-Join-10b981?style=flat-square&logo=github&logoColor=white" alt="Discussions"></a>
  <a href="https://www.npmjs.com/search?q=%40mcptoolshop"><img src="https://img.shields.io/badge/npm-%40mcptoolshop-cb3837?style=flat-square&logo=npm&logoColor=white" alt="npm"></a>
  <br>
  <a href="https://mcp-tool-shop-org.github.io/rnd/"><img src="https://img.shields.io/badge/Newsletter-The%20Bench-f59e0b?style=flat-square" alt="The Bench, the research newsletter"></a>
  <a href="https://huggingface.co/mcp-tool-shop"><img src="https://img.shields.io/badge/Hugging%20Face-mcp--tool--shop-ffcc4d?style=flat-square&logo=huggingface&logoColor=black" alt="Hugging Face"></a>
  <br>
  <img src="https://img.shields.io/badge/Public%20repos-110+-1e3a5f?style=flat-square" alt="110+ public repositories">
  <img src="https://img.shields.io/badge/License-MIT-60a5fa?style=flat-square" alt="MIT License">
  <img src="https://img.shields.io/badge/Languages-8-1e3a5f?style=flat-square" alt="8 Languages">
</p>

---

<h2 align="center">Research in the open</h2>

<p align="center">The research comes first, and the tools below are what it needs. Numbers about hardware come from runs on our own workstation (an RTX 5090), with each run's record committed beside the result.</p>

| | What it is |
|:---:|:---:|
| [The Bench](https://mcp-tool-shop-org.github.io/rnd/) | The research newsletter from [rnd](https://github.com/mcp-tool-shop-org/rnd): one issue each weekday on what was measured that day, with charts. Also on [npm](https://www.npmjs.com/package/@rnd-news/newsletter), [PyPI](https://pypi.org/project/mcptoolshop-rnd-newsletter/) and [Hugging Face](https://huggingface.co/datasets/mcp-tool-shop/rnd-newsletter) |
| [readouts](https://mcp-tool-shop-org.github.io/readouts/) | Verified, source-backed knowledge bases. A topic moves here from rnd once its claims are checked |
| Dataset labs | [reasoning-dataset-lab](https://github.com/mcp-tool-shop-org/reasoning-dataset-lab) (puzzles and verification items) and [understanding-dataset-lab](https://github.com/mcp-tool-shop-org/understanding-dataset-lab) (multi-party scenes, a prototype): code makes every answer key, and a model only writes the words |
| [Hugging Face](https://huggingface.co/mcp-tool-shop) | Public datasets, fine-tuned models and demo Spaces |

---

<h2 align="center">Quick start</h2>

<table align="center">
<tr>
<td width="50%" align="center">

<div align="center"><b>Find MCP tools by intent</b></div>

```bash
npx @mcptoolshop/tool-compass
```

<div align="center"><b>Drive ComfyUI from Python</b></div>

```bash
pip install comfy-headless
```

</td>
<td width="50%" align="center">

<div align="center"><b>Fine-tune and export GGUF</b></div>

```bash
pip install backpropagate
```

<div align="center"><b>Run the release quality gate</b></div>

```bash
npx @mcptoolshop/shipcheck audit
```

</td>
</tr>
</table>

<p align="center">MCP servers work with Claude Code, Claude Desktop, Cursor, VS Code, and any other MCP client.</p>

---

<h2 align="center">What we build</h2>

<div align="center">

<p align="center">MCP Tool Shop is an independent software studio. We build the tools we use to develop AI-assisted software and games, and we publish them as open source. Everything is designed to run locally: on a workstation GPU, with Ollama, ComfyUI, and the Model Context Protocol, and with no cloud dependency for core functionality.</p>

<details>
<summary align="center"><b>📦 Areas of work (expand for full catalog)</b></summary>

| Area | Repositories | What they do |
|:---:|:---:|:---:|
| **MCP servers** | [tool-compass](https://github.com/mcp-tool-shop-org/tool-compass) · [ollama-intern-mcp](https://github.com/mcp-tool-shop-org/ollama-intern-mcp) · [mcp-voice-soundboard](https://github.com/mcp-tool-shop-org/mcp-voice-soundboard) · [polyglot-mcp](https://github.com/mcp-tool-shop-org/polyglot-mcp) · [plain-sight](https://github.com/mcp-tool-shop-org/plain-sight) | Tool discovery by intent, local-model job delegation, text-to-speech, GPU translation, image description |
| **Research** | [rnd](https://github.com/mcp-tool-shop-org/rnd) · [readouts](https://github.com/mcp-tool-shop-org/readouts) · [aspire-si](https://github.com/mcp-tool-shop-org/aspire-si) · [interlock](https://github.com/mcp-tool-shop-org/interlock) · [offrig](https://github.com/mcp-tool-shop-org/offrig) | Research bench and newsletter, verified knowledge bases, judgment training with a learned critic, a measured device router for local models, priced rented-GPU runs |
| **Datasets and training** | [reasoning-dataset-lab](https://github.com/mcp-tool-shop-org/reasoning-dataset-lab) · [understanding-dataset-lab](https://github.com/mcp-tool-shop-org/understanding-dataset-lab) · [style-dataset-lab](https://github.com/mcp-tool-shop-org/style-dataset-lab) · [dataset-desk](https://github.com/mcp-tool-shop-org/dataset-desk) · [repo-dataset](https://github.com/mcp-tool-shop-org/repo-dataset) · [backpropagate](https://github.com/mcp-tool-shop-org/backpropagate) | Datasets with answer keys proven by code, visual canon datasets, visual dataset review, contamination-checked code datasets, headless fine-tuning with GGUF export |
| **Image and media pipelines** | [comfy-headless](https://github.com/mcp-tool-shop-org/comfy-headless) · [comfy-preflight](https://github.com/mcp-tool-shop-org/comfy-preflight) · [sprite-foundry](https://github.com/mcp-tool-shop-org/sprite-foundry) · [armature](https://github.com/mcp-tool-shop-org/armature) · [audiobooker](https://github.com/mcp-tool-shop-org/audiobooker) | Programmatic ComfyUI, pre-submission workflow gates, sprite generation, GLB-driven video, multi-voice audiobooks |
| **Agent infrastructure** | [role-os](https://github.com/mcp-tool-shop-org/role-os) · [loadout-os](https://github.com/mcp-tool-shop-org/loadout-os) · [prism-verify](https://github.com/mcp-tool-shop-org/prism-verify) · [claude-guardian](https://github.com/mcp-tool-shop-org/claude-guardian) · [research-os](https://github.com/mcp-tool-shop-org/research-os) | Multi-agent orchestration, context routing, cross-family output verification, runtime health, research control plane |
| **Developer tooling** | [shipcheck](https://github.com/mcp-tool-shop-org/shipcheck) · [site-theme](https://github.com/mcp-tool-shop-org/site-theme) · [repo-knowledge](https://github.com/mcp-tool-shop-org/repo-knowledge) · [registry-stats](https://github.com/mcp-tool-shop-org/registry-stats) · [npm-launcher](https://github.com/mcp-tool-shop-org/npm-launcher) · [housekeeping](https://github.com/mcp-tool-shop-org/housekeeping) | Release quality gates, Astro site templates, repo knowledge base, package download stats, verified binary launcher, organization-wide CI and hygiene audits |
| **Games and game tooling** | [ai-rpg-engine](https://github.com/mcp-tool-shop-org/ai-rpg-engine) · [world-forge](https://github.com/mcp-tool-shop-org/world-forge) · [motif](https://github.com/mcp-tool-shop-org/motif) · [saints-mile](https://github.com/mcp-tool-shop-org/saints-mile) · [roll](https://github.com/mcp-tool-shop-org/roll) | Deterministic RPG simulation, 2D/2.5D world authoring, adaptive soundtracks, a frontier JRPG, dice and probability engine |
| **Ledger and verification** | [attestia](https://github.com/mcp-tool-shop-org/attestia) · [xrpl-lab](https://github.com/mcp-tool-shop-org/xrpl-lab) · [xrpl-camp](https://github.com/mcp-tool-shop-org/xrpl-camp) · [repomesh](https://github.com/mcp-tool-shop-org/repomesh) | Financial truth infrastructure, XRPL training, release verification for repo networks |

<p align="center">The table above is a selection. Every public repository is classified by area, lane and install path in the <a href="https://github.com/mcp-tool-shop-org/.github/blob/main/docs/ECOSYSTEM.md">Ecosystem Specification</a>, with a machine-readable <a href="https://github.com/mcp-tool-shop-org/.github/blob/main/docs/catalog.yaml">catalog.yaml</a>.</p>

<p align="center">The full catalog, with install commands and release history, is at <a href="https://mcptoolshop.com/tools/">mcptoolshop.com/tools</a>.</p>

</details>

---

<h2 align="center">How we ship</h2>

> **Local-first.**
> Core functionality never requires an API key or a hosted service. Optional cloud routing is opt-in and falls back to local.

> **A release gate, not a vibe check.**
> Every tagged release passes [shipcheck](https://github.com/mcp-tool-shop-org/shipcheck): security policy and threat model, structured errors with exit codes, current docs and changelog, clean packaging.

> **Mapped and audited.**
> Repositories carry an [Atlas](https://github.com/dogfood-lab/testing-os) map of how they work, checked in CI, and [housekeeping](https://github.com/mcp-tool-shop-org/housekeeping) audits the whole organization against written rules: CI, pull requests, releases, Actions cost and dependency advisories.

> **Documented in eight languages.**
> Most repositories ship READMEs in English, Japanese, Chinese, Spanish, French, Hindi, Italian, and Brazilian Portuguese, translated locally with [polyglot-mcp](https://github.com/mcp-tool-shop-org/polyglot-mcp).

---

<h2 align="center">Sister organization: dogfood-lab</h2>

<p align="center">Testing methods live in <a href="https://github.com/dogfood-lab">dogfood-lab</a>, an open workshop for how AI-assisted software should be verified.</p>

| Project | What it is | Install |
|:---:|:---:|:---:|
| [testing-os](https://github.com/dogfood-lab/testing-os) | Operating system for testing in the AI era: protocols, provenance-confirmed evidence stores, and learning loops. [Handbook](https://dogfood-lab.github.io/testing-os/) | `npx @dogfood-lab/dogfood-swarm` |
| [study-swarm](https://github.com/dogfood-lab/study-swarm) | Ground design decisions in cited research, then verify every citation with a different model family before it becomes canon. [Handbook](https://dogfood-lab.github.io/study-swarm/) | `npx @dogfood-lab/study-swarm` |

---

<h2 align="center">Repository lanes</h2>

<p align="center">Every repository's README states which lane it is in:</p>

| Lane | Meaning |
|:---:|:---:|
| 🟢 **Shipped** | Tagged releases, CI, an install command, and a support policy |
| 🟡 **In development** | Active work, pre-1.0 or not yet released. APIs may change |
| ⚪ **Archive** | Retired work, no longer maintained or published |

---

<h2 align="center">Community and support</h2>

<p align="center">
<b>Questions and ideas:</b> <a href="https://github.com/orgs/mcp-tool-shop-org/discussions">GitHub Discussions</a><br>
<b>Bugs and feature requests:</b> open an issue on the relevant repository. See <a href="https://github.com/mcp-tool-shop-org/.github/blob/main/SUPPORT.md">SUPPORT.md</a> for what to include.<br>
<b>Security:</b> use private vulnerability reporting on the affected repository. Do not open a public issue. See <a href="https://github.com/mcp-tool-shop-org/.github/blob/main/SECURITY.md">SECURITY.md</a>.<br>
<b>Contributing:</b> <a href="https://github.com/mcp-tool-shop-org/.github/blob/main/CONTRIBUTING.md">CONTRIBUTING.md</a> and the <a href="https://github.com/mcp-tool-shop-org/.github/blob/main/CODE_OF_CONDUCT.md">Code of Conduct</a>.
</p>

---

<p align="center">
  <a href="https://mcptoolshop.com">mcptoolshop.com</a> · 
  <a href="https://github.com/orgs/mcp-tool-shop-org/repositories">All repositories</a> · 
  <a href="https://github.com/mcp-tool-shop-org/.github/blob/main/LICENSE">MIT License</a>
</p>

</div>
