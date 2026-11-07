# Ecosystem Specification

**Version 1** · Generated 2026-10-01 · Machine-readable companion: [catalog.yaml](./catalog.yaml)

This document explains how the repositories of MCP Tool Shop fit together, so that someone arriving at the
organization can pick three to five repositories and start shipping. It classifies every public, unarchived
repository. It does not describe the studio's internal production process, which is a separate concern with a
separate audience.

| | |
|---|---|
| Public repositories | 114 unarchived, 4 archived |
| Classified in this spec | 112 (excludes the `.github` configuration repo and one upstream fork) |
| Shipped / in development / archive | 72 / 40 / 0 |
| With a verified install command | 66 |
| License | MIT for the code in all 112; `rnd-data`'s data is CC BY 4.0 and `portlight-bounty` adds a licence for its art |

---

## 1. Vision

MCP Tool Shop is an independent software studio. It builds the tools it uses to develop AI-assisted software
and games, and it publishes them as open source.

Everything is designed to run on your own hardware: a workstation GPU, Ollama, ComfyUI, and the Model Context
Protocol. Core functionality never requires an API key or a hosted service. Where cloud routing exists it is
opt-in and falls back to local.

The organization is large because the studio actually uses all of it. It is not a portfolio of demos; it is a
working toolchain that happens to be public.

## 2. Philosophy

Four ideas explain most of the structure.

**A contributor owns a domain, not the organization.** A hundred and twelve repositories is too many to hold in
your head, and you never need to. Every repository belongs to exactly one of eight areas. Learn one area and you
can contribute without knowing the rest.

**Capabilities are verbs, not folders.** The organization provides discovery, execution, verification,
creation, and distribution. Those are things the tools *do*, and they cut across all eight areas: a discovery
tool and a verification tool routinely live in different areas and still belong to the same workflow. They are
deliberately not a ninth area. Section 7 shows what they look like in practice.

**Verification is a separate step performed by something else.** No tool grades its own output. This shows up
everywhere: a release passes `shipcheck` before it ships, a model's answer is adjudicated by `prism-verify`
running a different model family, a training step is re-derived by `backprop-trace`, a generated dub is
checked by `fx-dub` before anyone hears it.

**Local-first is a constraint, not a preference.** It is the reason the catalog contains a VRAM planner, a
GGUF exporter, a headless ComfyUI driver, and a local translation server. Those tools exist because the
alternative was an API bill.

## 3. Domain map

Eight areas. Research was added in November 2026, when the research bench, its data and its instruments became
public; the other seven are the taxonomy already published on the organization profile and in `llms.txt`.

| Area | Count | What lives here |
|---|---|---|
| [Research](#research) | 5 | The research bench, its data and receipts, and the instruments and studies that measure models, media and the world |
| [MCP servers](#mcp-servers) | 9 | Servers and gateways that speak the Model Context Protocol, and the tooling that tests them |
| [Training and datasets](#training-and-datasets) | 21 | The local-model lifecycle: datasets, fine-tuning, training-step proof, device routing, rented GPUs, local-model apps |
| [Image and media pipelines](#image-and-media-pipelines) | 19 | Programmatic generation and verification of images, 3D, video and audio |
| [Agent infrastructure](#agent-infrastructure) | 17 | What a coding agent runs on: orchestration, context routing, knowledge, verification, health |
| [Developer tooling](#developer-tooling) | 14 | Release gates, registries, site scaffolding, and the machinery of shipping |
| [Games and game tooling](#games-and-game-tooling) | 21 | Shipped games and the authoring tools that produce them |
| [Ledger and verification](#ledger-and-verification) | 6 | Attestation, receipts, and on-ledger proof for releases and financial truth |

**Sister organization.** Testing methodology lives in [dogfood-lab](https://github.com/dogfood-lab), a separate
organization owned by the same studio: `testing-os` (home of Atlas), `study-swarm` and `interface-audits`. It is not
an area of this organization, and its repositories are not in `catalog.yaml`.

### How a repository gets its area

**Primary area is what you install the tool to get.** A repository that produces a searchable corpus for
agents is agent infrastructure even though it also emits a training dataset. A repository whose output is an
MCP server is an MCP server even if the subject matter is music.

Repositories with a genuine second use carry an `also` field in `catalog.yaml`. Thirty-eight do. That field is
for real dual use, not for hedging.

Four of those calls were contested before being settled, and each carries a `classification_note` recording
why: `prism-verify`, `ai-rpg-engine`, `mcp-arcade` and `mcp-arcade-cabinets`. The note stays so the call can
be argued with later rather than looking arbitrary. One is worth stating here: **`ai-rpg-engine` is the
simulation, not a title** — it sits under Games because that is where someone looking for RPG tooling will
look for it.

### Areas in full

#### Research

`blindpanel` · `rnd` · `rnd-data` · `schumann-surface` · `sense-si`

`rnd` is the bench and its newsletter; `rnd-data` holds every run's receipts and outputs, each public file pinned
by SHA-256. Verified topics graduate to readouts, listed under Agent infrastructure because agents query it.

#### MCP servers

`mcp-arcade` · `mcp-stress-test` · `mcp-tool-registry` · `mcp-voice-soundboard` · `ollama-intern-mcp` ·
`plain-sight` · `polyglot-mcp` · `sensor-humor` · `tool-compass`

#### Training and datasets

`aspire-si` · `aspire-si-gates` · `backprop-trace` · `backpropagate` · `bytefit` · `dataset-desk` ·
`engine-room` · `gpu-container` · `incontrol` · `interlock` · `offrig` · `portlight-ships` ·
`reasoning-dataset-lab` · `repo-dataset` · `role-set` · `runforge` · `runforge-vscode` · `scalarscope` ·
`style-dataset-lab` · `understanding-dataset-lab` · `watchdog`

This area covers the whole local-model lifecycle, not only training: `bytefit`, `gpu-container`, `engine-room`,
`interlock`, `offrig` and `watchdog` are how a model gets planned, placed, routed, guarded and served on a real
rig or a rented one. The dataset labs make every answer key in code before a model words an item.

#### Image and media pipelines

`ai-jam-sessions` · `armature` · `asset-forge` · `audiobooker` · `codecomfy-vscode` · `comfy-headless` ·
`comfy-preflight` · `facet` · `fx-dub` · `portrait-forge` · `prompt-craft` · `si-jam-sessions` ·
`sprite-foundry` · `sprite-foundry-2p5d` · `sprite-foundry-packs` · `sprite-motion` · `sprite-motion-mcp` ·
`stillpoint` · `vocal-synth-engine`

#### Agent infrastructure

`chips` · `claude-guardian` · `claude-synergy` · `db-cluster` · `knowledge-core` · `loadout-os` ·
`multi-claude` · `prism-verify` · `readouts` · `record-index` · `research-os` · `research-packs` · `role-os` ·
`session-record` · `synthesis` · `taste-engine` · `websketch-ir`

#### Developer tooling

`accessibility-suite` · `brand` · `commandui` · `forkctl` · `housekeeping` · `LeaseGate-Lite` · `npm-launcher`
· `registry-stats` · `registry-sync` · `repo-knowledge` · `rig-bridge` · `shipcheck` · `site-theme` ·
`studio-harness`

#### Games and game tooling

`ai-playtest` · `ai-rpg-engine` · `ai-rpg-stage` · `claude-rpg` · `escape-the-valley` · `glyphstudio` ·
`lokey-typer` · `mcp-arcade-cabinets` · `motif` · `portlight` · `portlight-bounty` · `roll` · `saints-mile` ·
`si-rpg-engine` · `sovereign` · `sovereignty` · `star-freight` · `star-freight-client` · `storyboard-os` ·
`visual-design-bible` · `world-forge`

#### Ledger and verification

`attestia` · `cognate` · `repomesh` · `xrpl-camp` · `xrpl-creator-capsule` · `xrpl-lab`

## 4. Repository taxonomy

[catalog.yaml](./catalog.yaml) is the machine-readable index. Every public unarchived repository appears
exactly once. Private repositories never appear.

It is generated by `scripts/build-catalog.mjs` from live GitHub and registry state, not maintained by
hand, and the generator refuses to write if any public repository is missing from its classification map.
`scripts/check-catalog.mjs` runs in CI and fails if this document and the catalog disagree.

Each entry carries: `name`, `area`, optional `also`, `lane`, `visibility`, `language`, `license`, `summary`,
`url`, optional `docs`, `releases`, `latest_release`, `package`, `install`, and — for the starter set —
`starter`, `paths`, `depends_on`, `consumers`.

**Lane** is derived, not asserted. `shipped` means the latest release is a semver tag at v1.0.0 or above.
`in-development` means no release yet, or a pre-1.0 latest release. `archive` is retired work.
The organization keeps it privately, so no public repository carries this lane today.

A repository can carry many tags and still be `in-development`: `mcp-arcade-cabinets` has seventeen releases and
a latest of v0.13.2. The organization profile describes Shipped more loosely, as tagged releases plus CI and
an install command. Where the two disagree, the version number is the stricter test and this one governs.

**`package` and `install` are only present where this organization owns the name on the registry.** This is
the one field most likely to mislead, so it is verified rather than inferred: npm ownership by the
`@mcptoolshop` scope or the maintainer account, PyPI ownership by the publishing author identity. Several
repository names collide with unrelated packages published by other people — `motif`, `roll`, `shipcheck`,
`sovereign`, `synthesis` and others — and those entries carry `install: null` even though a package of that
name exists. Forty-six repositories are source-only: clone and run, no install command.

Six packages are published under a name that differs from their repository, which is why the field is
explicit rather than derived from the repository name.

## 5. Contributor paths

Five paths. Each names three to four starters. Everything named here is public, and every install command
shown is one this organization owns.

| Path | Starters | Install |
|---|---|---|
| **A · MCP servers** | `tool-compass`, `ollama-intern-mcp`, `polyglot-mcp`, `mcp-voice-soundboard` | all four |
| **B · AI agents** | `role-os`, `loadout-os`, `research-os`, `repo-knowledge` | all four |
| **C · Game tooling** | `world-forge`, `sprite-foundry`, `roll`, `motif` | `roll` only; the rest are source-only |
| **D · Verification** | `shipcheck`, `prism-verify`, `attestia`, `synthesis` | all four |
| **E · Local AI workflows** | `ollama-intern-mcp`, `comfy-headless`, `backpropagate`, `tool-compass` | all four |

Path D pairs naturally with [testing-os](https://github.com/dogfood-lab/testing-os) in the sister
organization.

Path C is the one path whose best starting points are mostly source-only. `world-forge`, `sprite-foundry` and
`motif` are the real entry points into game tooling, so they are named as starters and marked source-only,
rather than substituted for lesser tools that happen to be on a registry.

## 6. Standards

- **A release gate, not a vibe check.** Every tagged release passes
  [shipcheck](https://github.com/mcp-tool-shop-org/shipcheck): security policy and threat model, structured
  errors with exit codes, current documentation and changelog, clean packaging.
- **Lanes are stated.** Every repository README declares Shipped, In development, or Archive.
- **Semantic versioning.** Releases are tagged on GitHub and published to npm or PyPI from CI.
- **MIT, without exception.** All 83 classified repositories.
- **Eight languages.** Most repositories ship READMEs in English, Japanese, Chinese, Spanish, French, Hindi,
  Italian and Brazilian Portuguese, translated locally with
  [polyglot-mcp](https://github.com/mcp-tool-shop-org/polyglot-mcp).
- **No telemetry, and identity stays local.** Tools do not phone home, and published artifacts carry no
  machine paths, accounts, or network identity from the machine that built them.
- **Accessible by default.** Low-vision-first CLI output, with WCAG tooling in
  [accessibility-suite](https://github.com/mcp-tool-shop-org/accessibility-suite).

## 7. Workflow architecture

Capabilities cross areas. These are the six pipelines that most of the organization is arranged around; the
bracketed verb is the capability each step provides.

**Intent to a verified MCP server.**
`tool-compass` [discovery] → your server [execution] → `shipcheck` and `prism-verify` [verification]

**Local model, trained and proven.**
`backpropagate` [creation] → `backprop-trace` [verification] → `ollama-intern-mcp` [execution]

**Visual assets from canon.**
`style-dataset-lab` [creation] → `comfy-preflight` [verification] → `comfy-headless` [execution] →
`sprite-foundry` [creation]

**An agent crew with the right context.**
`loadout-os` [discovery] → `role-os` [execution] → `repo-knowledge` [verification]

**Game content to something playable.**
`world-forge` [creation] → `ai-rpg-engine` [execution] → `ai-rpg-stage` [distribution], scored by `motif`

**Release.**
`site-theme` [creation] → `shipcheck` [verification] → `polyglot-mcp` [distribution]

Each of these touches three or four areas. That is the point: the areas tell you where a repository lives, the
workflows tell you how they are used together.

## 8. Roles

Seven roles describe how people actually arrive. Each names three tools, a path, and one repository that is a
bad first step — usually because it consumes output you do not have yet.

| Role | Start with | Path | Do not start here |
|---|---|---|---|
| MCP server developer | `tool-compass`, `mcp-stress-test`, `shipcheck` | A | `mcp-arcade` — assumes a server already on the wire |
| Agent / orchestration engineer | `role-os`, `loadout-os`, `knowledge-core` | B | `readouts` — knowledge bases, not a tool |
| Local-model practitioner | `backpropagate`, `bytefit`, `ollama-intern-mcp` | E | `backprop-trace` — verifies a training step you must already produce |
| Media pipeline engineer | `comfy-headless`, `comfy-preflight`, `prompt-craft` | E | `sprite-foundry-packs` — asset output, not a tool |
| Game developer | `world-forge`, `ai-rpg-engine`, `roll` | C | `ai-rpg-stage` — renders a simulation you must already run |
| Release / quality engineer | `shipcheck`, `site-theme`, `registry-sync` | D | `brand` — internal asset management |
| Verification / ledger engineer | `prism-verify`, `repomesh`, `attestia` | D | `xrpl-camp` — a teaching workbook, not infrastructure |

This is a public summary. The studio's internal role system ([role-os](https://github.com/mcp-tool-shop-org/role-os))
defines 61 role contracts; it is a tool you can use, not a prerequisite for contributing.

## 9. Governance and release

**This repository is canonical for public claims about the organization** — what the areas are, which
repository belongs to which, and what is installable. When another document disagrees about a public fact,
this one wins. Product behaviour is owned by each repository's own README.

`catalog.yaml` is the source of truth for classification; `profile/README.md` and `llms.txt` are showcases
that point at it, and are not expected to list every repository.

Release policy is not restated here. It lives in [RELEASING.md](./RELEASING.md),
[VERSIONING.md](./VERSIONING.md), [BRANCH_POLICY.md](./BRANCH_POLICY.md),
[MAINTENANCE.md](./MAINTENANCE.md) and [BADGES.md](./BADGES.md).

Contribution process, support and security reporting are in
[CONTRIBUTING.md](../CONTRIBUTING.md), [SUPPORT.md](../SUPPORT.md) and [SECURITY.md](../SECURITY.md).

## 10. Roadmap

This specification is v1: two files and the pointers to them. It is deliberately not a portal.

- **v1.1** — the website consumes `catalog.yaml` instead of maintaining a parallel list.
- **v1.2** — `depends_on` and `consumers` extended from the starter set to the full catalog.
- **v1.3** — a role handbook, if the seven roles above prove useful.
- **Translations** — `ECOSYSTEM.md` in the other seven languages, after the English text settles.

Contested classifications are recorded as `classification_note` in `catalog.yaml` rather than silently
decided or silently settled. Four carry one today.
