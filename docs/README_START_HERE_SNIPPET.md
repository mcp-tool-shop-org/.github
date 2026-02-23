# README "Start Here" Snippet

Copy-paste this block into the top of any product repo's README,
right after the badges and one-liner tagline. Replace the placeholders.

---

## Start Here

```markdown
## Start Here

| | |
|---|---|
| **Install** | `pip install PACKAGE_NAME` or `npm install PACKAGE_NAME` or see [Installation](#installation) |
| **Quick Start** | [Quick Start](#quick-start) |
| **Docs** | [Documentation](./docs/) or [DOCS_LINK] |
| **Support** | [Discussions](https://github.com/mcp-tool-shop-org/REPO_NAME/discussions) for Q&A, [Issues](https://github.com/mcp-tool-shop-org/REPO_NAME/issues) for bugs |
| **Security** | [SECURITY.md](SECURITY.md) |
```

---

## Adaptation Notes

- **Python packages** (PyPI): use `pip install PACKAGE_NAME`
- **Node packages** (npm): use `npm install PACKAGE_NAME` or `npx PACKAGE_NAME`
- **.NET apps** (MSIX/NuGet): link to Releases page or NuGet badge
- **MCP servers**: show the MCP client config JSON snippet instead of a bare install command
- If the repo has no Discussions enabled, drop that line and point everything to Issues
- The table format keeps it scannable without adding visual noise

## Example (Python CLI)

```markdown
## Start Here

| | |
|---|---|
| **Install** | `pip install tool-scan` |
| **Quick Start** | [Quick Start](#quick-start) |
| **Docs** | [API Reference](#api-reference) · [CI/CD Integration](#cicd-integration) |
| **Support** | [Discussions](https://github.com/mcp-tool-shop-org/tool-scan/discussions) for Q&A, [Issues](https://github.com/mcp-tool-shop-org/tool-scan/issues) for bugs |
| **Security** | [SECURITY.md](SECURITY.md) |
```

## Example (MCP Server)

```markdown
## Start Here

| | |
|---|---|
| **Install** | `npx voice-soundboard` or `npm install -g voice-soundboard` |
| **Quick Start** | [Quick Start](#quick-start) |
| **Docs** | [Tools Reference](#tools) · [Voice List](#voices) |
| **Support** | [Discussions](https://github.com/mcp-tool-shop-org/mcp-voice-soundboard/discussions) for Q&A, [Issues](https://github.com/mcp-tool-shop-org/mcp-voice-soundboard/issues) for bugs |
| **Security** | [SECURITY.md](SECURITY.md) |
```

## Example (.NET Desktop App)

```markdown
## Start Here

| | |
|---|---|
| **Install** | Download from [Releases](https://github.com/mcp-tool-shop-org/InControl-Desktop/releases) |
| **Quick Start** | [Quick Start](#installation) |
| **Docs** | [Architecture](#architecture) · [NuGet Packages](#nuget-packages) |
| **Support** | [Discussions](https://github.com/mcp-tool-shop-org/InControl-Desktop/discussions) for Q&A, [Issues](https://github.com/mcp-tool-shop-org/InControl-Desktop/issues) for bugs |
| **Security** | [SECURITY.md](SECURITY.md) |
```
