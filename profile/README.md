# 🛠️ MCP Tool Shop

> **Production-grade MCP servers for the agentic future**
> Semantic search • Code analysis • AI orchestration • Verifiable provenance

[![CID Registry Spec](https://img.shields.io/badge/CID-Registry%20Spec-22c55e)](https://mcptoolshop.com/cid-registry.html)
[![Tool Compass](https://img.shields.io/badge/Tool-Compass-6366f1)](https://github.com/mcp-tool-shop-org/tool-compass)
[![File Compass](https://img.shields.io/badge/File-Compass-8b5cf6)](https://github.com/mcp-tool-shop-org/file-compass)
[![Comfy Headless](https://img.shields.io/badge/Comfy-Headless-ec4899)](https://github.com/mcp-tool-shop-org/comfy-headless)

**Website:** [mcptoolshop.com](https://mcptoolshop.com) • **Philosophy:** *Syntropy above all else*

---

## 🌐 Ecosystem Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    🔐 CID Registry Spec                         │
│         Content-Addressed Tool Registry with Crypto Verify      │
│           (24 test vectors • Ed25519 • dag-cbor CIDs)          │
└──────────────┬──────────────────────────────────┬──────────────┘
               │                                  │
┌──────────────▼──────────────────────────────────▼──────────────┐
│                      🧭 Tool Compass                            │
│            Semantic MCP Tool Discovery Engine                   │
│          (115+ tools • 6 backends • HNSW search)               │
└──────────────┬──────────────────────────────────┬──────────────┘
               │                                  │
    ┌──────────▼──────────┐          ┌──────────▼──────────┐
    │  📁 File Compass    │          │  🧠 Dev-Brain       │
    │  Semantic File      │          │  Code Analysis      │
    │  Search Engine      │          │  & Health Scoring   │
    └─────────────────────┘          └─────────────────────┘
               │                                  │
    ┌──────────▼──────────┐          ┌──────────▼──────────┐
    │  🎨 Comfy-Headless  │          │  🔬 Backpropagate   │
    │  AI Image/Video     │          │  LLM Fine-Tuning    │
    │  Generation         │          │  Framework          │
    └─────────────────────┘          └─────────────────────┘
               │
    ┌──────────▼──────────┐
    │  🎛️ Integradio      │
    │  Vector-Embedded    │
    │  UI Components      │
    └─────────────────────┘
```

---

## 📦 Repository Map

### 🔐 **Trust & Verification**

#### [CID Registry Spec](https://mcptoolshop.com/cid-registry.html)
**Content-Addressed Tool Registry**
- Cryptographic tool verification via CIDs
- Ed25519 signatures with verifiable provenance
- 24 conformance test vectors
- Deterministic 9-step verification pipeline
- **Status:** ✅ v0.1.1 Released • **Docs:** [Verifier Rulebook](https://mcptoolshop.com/spec/registry/v0.1.1/docs/verifier-rulebook.v0.1.md)

#### [prov-spec](https://github.com/mcp-tool-shop-org/prov-spec)
**Formal Provenance Specification**
- Language-neutral provenance standard
- Cryptographic attestation chains
- **Status:** ✅ Production • **Stack:** Spec + TypeScript reference

---

### 🎯 **Discovery & Orchestration**

#### [Tool Compass](https://github.com/mcp-tool-shop-org/tool-compass)
**Semantic MCP Tool Discovery**
- Find tools by intent, not memory
- 115+ indexed tools across 6 backends
- Progressive disclosure: `compass() → describe() → execute()`
- Tool chains and workflow detection
- **Status:** ✅ Production • **Stack:** Python, HNSW, Ollama

#### [File Compass](https://github.com/mcp-tool-shop-org/file-compass)
**Semantic File Search for AI Workstations**
- Sub-100ms search across 10k+ file codebases
- Project-aware context boundaries
- Integrates with Tool Compass
- **Status:** ✅ Production • **Stack:** Python, HNSW, Ollama

---

### 🤖 **AI Generation & Inference**

#### [Comfy-Headless](https://github.com/mcp-tool-shop-org/comfy-headless)
**Production-Ready ComfyUI Client**
- Headless ComfyUI orchestration
- AI-powered prompt intelligence
- Video generation workflows
- Modern Gradio UI
- **Status:** ✅ Production • **Stack:** Python, ComfyUI, Gradio

#### [Backpropagate](https://github.com/mcp-tool-shop-org/backpropagate)
**Headless LLM Fine-Tuning**
- Simple Python API with smart defaults
- Multi-run SLAO training
- GGUF export for Ollama/llama.cpp
- Full Windows + WSL2 support
- **Status:** ✅ Production • **Stack:** Python, Hugging Face

---

### 💻 **Code Analysis & Development**

#### [Dev-Brain](https://github.com/mcp-tool-shop-org/dev-brain)
**AI-Powered Code Analysis MCP**
- Test generation (unit, integration, e2e)
- Security audits (49 detection patterns)
- Code health scoring across 11 categories
- Multi-language: Python, JS/TS, PowerShell, CSS, HTML
- **Status:** ✅ Production • **Stack:** Python, FastMCP

#### [Integradio](https://github.com/mcp-tool-shop-org/integradio)
**Vector-Embedded Gradio Components**
- Semantic codebase navigation
- AI-native UI components
- Context-aware search
- **Status:** 🚧 Active Development • **Stack:** Python, Gradio

---

## 🔗 Tool Integration Patterns

### Pattern 1: **Semantic Code Discovery**
```
User Query → Tool Compass (find relevant tools)
           → File Compass (locate implementation)
           → Dev-Brain (analyze code health)
```

### Pattern 2: **AI-Assisted Development**
```
Code Changes → Dev-Brain (security audit + tests)
            → File Compass (find related files)
            → Tool Compass (suggest refactoring tools)
```

### Pattern 3: **Multimodal Asset Generation**
```
Text Prompt → Comfy-Headless (generate image/video)
           → Tool Compass (find post-processing tools)
           → File Compass (store in asset library)
```

### Pattern 4: **Model Customization**
```
Training Data → Backpropagate (fine-tune model)
             → Tool Compass (deploy to inference)
             → Dev-Brain (validate outputs)
```

---

## 🚀 Quick Start

### 1. Install Tool Compass (Orchestrator)
```bash
git clone https://github.com/mcp-tool-shop-org/tool-compass
cd tool-compass
pip install -e .
```

### 2. Configure Your Backends
```json
{
  "mcpServers": {
    "tool-compass": {
      "command": "python",
      "args": ["-m", "tool_compass"]
    }
  }
}
```

### 3. Discover Tools by Intent
```python
# Natural language tool discovery
tools = compass("semantic file search")
# Returns: file-compass, integradio, etc.
```

---

## 🏗️ Architecture Principles

| Principle | Implementation |
|-----------|----------------|
| **Local-First** | All tools run on local infrastructure (RTX 5080 optimized) |
| **Semantic Search** | HNSW + Ollama embeddings across all layers |
| **Production-Ready** | Error handling, logging, analytics, monitoring |
| **Modular Design** | Tools compose via MCP protocol |
| **FastMCP Framework** | Built on modern Python MCP SDK |

---

## 📊 Performance Characteristics

| Tool | Operation | Latency | Scale |
|------|-----------|---------|-------|
| Tool Compass | Tool discovery | <20ms | 115+ tools |
| File Compass | File search | <100ms | 10k+ files |
| Comfy-Headless | Image generation | 2-3x speedup | TensorRT |
| Dev-Brain | Code scan | ~50ms/file | 49 patterns |

---

## 🛠️ Technology Stack

**Core Technologies:**
- Model Context Protocol (MCP)
- FastMCP (Python MCP SDK)
- HNSW (hnswlib) for vector search
- Ollama (nomic-embed-text embeddings)

**AI Infrastructure:**
- ComfyUI (image/video generation)
- TensorRT (inference optimization)
- vLLM (LLM serving)
- Hugging Face (model training)

**Frameworks:**
- Gradio (web UIs)
- FastAPI (REST APIs)
- SQLite + ChromaDB (persistence)

---

## 📚 Documentation Standards

All repositories include:
- ✅ Comprehensive README with quickstart
- ✅ `llms.txt` for AI context (GitMCP compatible)
- ✅ Semantic versioning with Git tags
- ✅ GitHub Actions CI/CD
- ✅ Production-grade error handling
- ✅ API/tool reference documentation

---

## 🎯 Use Cases

**For AI Agents:**
- Discover and orchestrate 115+ tools by intent
- Navigate codebases semantically, not textually
- Generate test suites and security audits automatically
- Create visual assets on-demand

**For Developers:**
- Reference architecture for production MCP servers
- Integrate semantic search into applications
- Fine-tune models for specific domains
- Automate code quality workflows

---

## 🌟 Featured Integrations

- **Claude Desktop** - Native MCP client
- **VS Code** - via MCP extension
- **Cursor** - AI-native code editor
- **Windsurf** - Cloud development
- **Custom Clients** - Any MCP-compatible tool

---

## 📈 Roadmap

- [ ] MCP Registry submissions for all servers
- [ ] Cross-tool workflow automation
- [ ] Distributed context mesh (CID-based addressing)
- [ ] Enhanced analytics and observability
- [ ] Community server templates

---

## 🤝 Contributing

We welcome contributions! Each repository has its own contribution guidelines. General principles:

1. **Syntropy first** - Systematic, production-ready solutions
2. **Comprehensive docs** - READMEs, llms.txt, API references
3. **Error handling** - No silent failures
4. **Tests** - Unit, integration, e2e where applicable
5. **Semantic versioning** - Tag releases properly

---

## 📞 Support & Community

- **Organization**: [@mcp-tool-shop](https://github.com/mcp-tool-shop)
- **Issues**: Use individual repository issue trackers
- **Discussions**: Coming soon
- **Philosophy**: [Syntropy Manifesto](./SYNTROPY.md) *(planned)*

---

## 📄 License

Each repository maintains its own license. Check individual repos for details.

---

<div align="center">

**Built with 🧠 by developers, for AI agents**

*Syntropy above all else*

</div>
