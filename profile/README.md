<div align="center">

# MCP Tool Shop

**Production-grade MCP servers and AI tooling for local-first development**

[![Website](https://img.shields.io/badge/mcptoolshop.com-222?style=for-the-badge&logo=googlechrome&logoColor=white)](https://mcptoolshop.com)

</div>

---

## What We Build

MCP servers, desktop tools, and AI infrastructure that run on **your hardware**.
No cloud dependencies. No API keys for core functionality.
Designed for developers with local GPU workstations who want
AI-assisted workflows without vendor lock-in.

**Core stack:** MCP · Ollama · HNSW · FastMCP · .NET MAUI · WinUI 3

---

## Ecosystem

```text
                       ┌──────────────────────┐
                       │   Claude Code / Any   │
                       │     MCP Client        │
                       └──────────┬───────────┘
                                  │ MCP Protocol
              ┌───────────────────┼───────────────────┐
              │                   │                   │
     ┌────────▼───────┐ ┌────────▼───────┐ ┌────────▼───────┐
     │ Tool Compass   │ │ File Compass   │ │ Brain-Dev      │
     │ discover tools │ │ search files   │ │ analyze code   │
     └────────────────┘ └────────────────┘ └────────────────┘
              │                   │                   │
     ┌────────▼───────┐ ┌────────▼───────┐ ┌────────▼───────┐
     │ Comfy-Headless │ │ Backpropagate  │ │ Voice Engine   │
     │ image/video    │ │ fine-tuning    │ │ TTS + speech   │
     └────────────────┘ └────────────────┘ └────────────────┘
              │                   │                   │
              └───────────────────┼───────────────────┘
                                  │
                       ┌──────────▼───────────┐
                       │   Local Hardware      │
                       │  Ollama · CUDA · RTX  │
                       └──────────────────────┘
```

---

## Flagship MCP Servers

<table>
<tr>
<td width="50%">

**[Tool Compass](https://github.com/mcp-tool-shop-org/tool-compass)** · Python
<br>Semantic MCP tool discovery — find tools by describing what you need.
<br>`compass() → describe() → execute()`
<br>115+ tools · 6 backends · HNSW search

</td>
<td width="50%">

**[File Compass](https://github.com/mcp-tool-shop-org/file-compass)** · Python
<br>Semantic file search with HNSW indexing and local embeddings.
<br>Multi-language AST chunking · JSON/YAML key splitting
<br><100ms search · 10K+ files · 402 tests

</td>
</tr>
<tr>
<td width="50%">

**[Brain-Dev](https://github.com/mcp-tool-shop-org/brain-dev)** · Python
<br>AI-powered code analysis — test generation, security audits (49 patterns), code health scoring across 11 categories.

</td>
<td width="50%">

**[Context Window Manager](https://github.com/mcp-tool-shop-org/context-window-manager)** · Python
<br>Lossless LLM context restoration via KV cache persistence.

</td>
</tr>
<tr>
<td width="50%">

**[MCP Voice Soundboard](https://github.com/mcp-tool-shop-org/mcp-voice-soundboard)** · Python
<br>TTS MCP server for AI agents — 12 voices, emotion spans, SSML-lite, multi-speaker dialogue, SFX tags, guardrails.

</td>
<td width="50%">

**[MCP File Forge](https://github.com/mcp-tool-shop-org/mcp-file-forge)** · TypeScript
<br>File operations and project scaffolding — Windows-first, secure, sandboxed.

</td>
</tr>
<tr>
<td width="50%">

**[WebSketch MCP](https://github.com/mcp-tool-shop-org/websketch-mcp)** · JavaScript
<br>Expose WebSketch IR tools for LLM agents — grammar-based UI representation.

</td>
<td width="50%">

**[Stresskit MCP](https://github.com/mcp-tool-shop-org/stresskit-mcp)** · Python
<br>MCP server health and security testing — trustable evidence for server readiness.

</td>
</tr>
</table>

---

## AI Generation & Training

<table>
<tr>
<td width="50%">

**[Comfy-Headless](https://github.com/mcp-tool-shop-org/comfy-headless)** · Python
<br>Production-ready headless ComfyUI client with AI-powered prompt intelligence, video generation, and Gradio UI.

</td>
<td width="50%">

**[Backpropagate](https://github.com/mcp-tool-shop-org/backpropagate)** · Python
<br>Headless LLM fine-tuning. Smart defaults, multi-run SLAO training, GGUF export for Ollama/llama.cpp. Full Windows support.

</td>
</tr>
<tr>
<td width="50%">

**[Audiobooker](https://github.com/mcp-tool-shop-org/audiobooker)** · Python
<br>Convert EPUB/TXT books into professionally narrated audiobooks using multi-voice synthesis.

</td>
<td width="50%">

**[ASPIRE-AI](https://github.com/mcp-tool-shop-org/aspire-ai)** · Python
<br>Adversarial Student-Professor Internalized Reasoning Engine — teaching AI through internalized mentorship.

</td>
</tr>
</table>

---

## Voice & Speech

<table>
<tr>
<td width="33%">

**[Soundboard Plugin](https://github.com/mcp-tool-shop-org/soundboard-plugin)** · Python
<br>Give Claude Code a voice. Emotion-aware speech, dialogue, narration.

</td>
<td width="33%">

**[MCP Voice Engine](https://github.com/mcp-tool-shop-org/mcp-voice-engine)** · TypeScript
<br>Core voice synthesis engine.

</td>
<td width="33%">

**[Soundboard MAUI](https://github.com/mcp-tool-shop-org/soundboard-maui)** · C#
<br>Cross-platform .NET MAUI desktop client.

</td>
</tr>
</table>

---

## Code Quality & Security

<table>
<tr>
<td width="50%">

**[Code-Covered](https://github.com/mcp-tool-shop-org/code-covered)** · Python
<br>Find coverage gaps and generate missing tests.

</td>
<td width="50%">

**[Tool-Scan](https://github.com/mcp-tool-shop-org/tool-scan)** · Python
<br>Security scanner for MCP tools.

</td>
</tr>
<tr>
<td width="50%">

**[CodeClone Suite](https://github.com/mcp-tool-shop-org/codeclone-suite)** · TypeScript
<br>Deterministic code coverage analysis as a protocol.

</td>
<td width="50%">

**[MCP Stress Test](https://github.com/mcp-tool-shop-org/mcp-stress-test)** · Python
<br>Red team toolkit for stress-testing MCP security scanners.

</td>
</tr>
</table>

---

## Accessibility

<table>
<tr>
<td width="33%">

**[A11y-Lint](https://github.com/mcp-tool-shop-org/a11y-lint)** · Python
<br>CLI output linter for accessible error patterns.

</td>
<td width="33%">

**[A11y-Evidence-Engine](https://github.com/mcp-tool-shop-org/a11y-evidence-engine)** · JavaScript
<br>Headless accessibility evidence with provenance.

</td>
<td width="33%">

**[A11y-CI](https://github.com/mcp-tool-shop-org/a11y-ci)** · Python
<br>CI gate for accessibility scorecards.

</td>
</tr>
</table>

---

## Windows Desktop Apps

<table>
<tr>
<td width="50%">

**[InControl-Desktop](https://github.com/mcp-tool-shop-org/InControl-Desktop)** · C# / WinUI 3
<br>Local AI inference dashboard.

</td>
<td width="50%">

**[LeaseGate-Lite](https://github.com/mcp-tool-shop-org/LeaseGate-Lite)** · C# / MAUI
<br>Throttle AI workloads on Windows. Smoother calls, less stutter.

</td>
</tr>
<tr>
<td width="50%">

**[Attestia-Desktop](https://github.com/mcp-tool-shop-org/Attestia-Desktop)** · C# / MAUI
<br>Financial truth infrastructure for Windows.

</td>
<td width="50%">

**[ScalarScope-Desktop](https://github.com/mcp-tool-shop-org/ScalarScope-Desktop)** · C# / MAUI
<br>ASPIRE training dynamics visualizer.

</td>
<td width="50%">

**[Build-Governor](https://github.com/mcp-tool-shop-org/build-governor)** · C#
<br>Prevents build system memory exhaustion on Windows.

</td>
</tr>
</table>

---

## VS Code Extensions

| Extension | Description |
|-----------|-------------|
| **[CodeComfy VS Code](https://github.com/mcp-tool-shop-org/codecomfy-vscode)** | Run ComfyUI workflows from VS Code |
| **[RunForge VS Code](https://github.com/mcp-tool-shop-org/runforge-vscode)** | Push-button ML training with presets |
| **[MCP App Builder](https://github.com/mcp-tool-shop-org/mcp-app-builder)** | Build MCP servers with interactive UI |
| **[WebSketch Extension](https://github.com/mcp-tool-shop-org/websketch-extension)** | Capture web pages as WebSketch IR |

---

## Infrastructure & Governance

<table>
<tr>
<td width="50%">

**[Nexus Suite](https://github.com/mcp-tool-shop-org/nexus-suite)** · Python
<br>Governance, attestation, and routing for MCP tool ecosystems.

</td>
<td width="50%">

**[ThrottleAI](https://github.com/mcp-tool-shop-org/ThrottleAI)** · TypeScript
<br>Token-based lease governor for AI calls.

</td>
</tr>
<tr>
<td width="50%">

**[Attestia](https://github.com/mcp-tool-shop-org/Attestia)** · TypeScript
<br>Financial truth infrastructure — deterministic accounting across chains.

</td>
<td width="50%">

**[Prov-Spec](https://github.com/mcp-tool-shop-org/prov-spec)** · Python
<br>Language-neutral specification for verifiable provenance.

</td>
</tr>
<tr>
<td width="50%">

**[Witness](https://github.com/mcp-tool-shop-org/witness)** · Python
<br>Append-only event journal for human-AI work. Cryptographically verifiable.

</td>
<td width="50%">

**[Registrum](https://github.com/mcp-tool-shop-org/Registrum)** · TypeScript
<br>Structural registrar for maintaining legibility in evolving systems.

</td>
</tr>
</table>

---

## WebSketch IR

Grammar-based UI representation for LLMs — capture web pages as semantic primitives.

| Repo | Description |
|------|-------------|
| **[websketch-ir](https://github.com/mcp-tool-shop-org/websketch-ir)** | Core grammar and TypeScript SDK |
| **[websketch-mcp](https://github.com/mcp-tool-shop-org/websketch-mcp)** | MCP server for LLM agents |
| **[websketch-cli](https://github.com/mcp-tool-shop-org/websketch-cli)** | CLI — render, fingerprint, diff |
| **[websketch-extension](https://github.com/mcp-tool-shop-org/websketch-extension)** | Chrome extension |

---

## CLI Tools & Distribution


| Tool | Description |
|------|-------------|
| **[headless-wheel-builder](https://github.com/mcp-tool-shop-org/headless-wheel-builder)** | Universal headless Python wheel builder |
| **[venvkit](https://github.com/mcp-tool-shop-org/venvkit)** | Python venv diagnostic toolkit for Windows ML workflows |

---

## Community

Questions, ideas, or something you built? **[Join Discussions](https://github.com/orgs/mcp-tool-shop-org/discussions)**
Bugs and reproducible defects go in [Issues](https://github.com/orgs/mcp-tool-shop-org/repositories) on the relevant repo.

---

## Principles

| | |
|---|---|
| **Local-first** | Everything runs on your machine. No cloud required. |
| **MCP-native** | Tools compose through MCP. Works with Claude, Cursor, VS Code, any MCP client. |
| **Windows-first** | Full Windows support. MAUI and WinUI 3 desktop apps. RTX 5080 / Blackwell optimized. |
| **Append-only** | Ledgers, event journals, and journey engines that never lose history. |
| **Production-grade** | CI/CD, tests, error handling, security hardening, semantic versioning. |
| **Accessible** | Low-vision-first CLI output. WCAG compliance tooling. Accessibility baked in. |

---

## By the Numbers

<div align="center">

| | |
|:---:|:---:|
| **99** repos | **39** Python · **25** C# · **18** TypeScript |
| **8+** MCP servers | **11** desktop apps & extensions |
| **5** accessibility tools | **5** WebSketch modules |

</div>

---

<div align="center">

**[mcptoolshop.com](https://mcptoolshop.com)** · **[All Repositories](https://github.com/orgs/mcp-tool-shop-org/repositories)**

*Syntropy above all else*

</div>
