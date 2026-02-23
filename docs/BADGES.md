# Badge Standards

## Style

All badges use **`flat-square`** via shields.io. No other styles.

```text
?style=flat-square
```

## Layout

Badges go in a centered block immediately after the logo (if present)
and before the repo title or description.

```html
<p align="center">
  <!-- badges here, separated by single spaces -->
</p>
```

## Standard Order

1. **CI status** (GitHub Actions workflow)
2. **Coverage** (Codecov — if configured)
3. **Package version** (PyPI / npm / NuGet — if published)
4. **Runtime** (Python / Node.js / .NET version)
5. **License**

Optional, after the standard set:

- GitHub stars (social style)
- Docker-ready badge (if applicable)
- Downloads badge (if published)

## Minimal Sets by Repo Type

### Python Package (PyPI)

```markdown
[![CI](https://img.shields.io/github/actions/workflow/status/mcp-tool-shop-org/REPO/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/mcp-tool-shop-org/REPO/actions/workflows/ci.yml)
[![Codecov](https://img.shields.io/codecov/c/github/mcp-tool-shop-org/REPO?style=flat-square)](https://codecov.io/gh/mcp-tool-shop-org/REPO)
[![PyPI](https://img.shields.io/pypi/v/PACKAGE?style=flat-square&logo=pypi&logoColor=white)](https://pypi.org/project/PACKAGE/)
[![Python](https://img.shields.io/badge/python-3.10%2B-blue?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![License](https://img.shields.io/github/license/mcp-tool-shop-org/REPO?style=flat-square)](LICENSE)
```

### TypeScript / Node Package (npm)

```markdown
[![CI](https://img.shields.io/github/actions/workflow/status/mcp-tool-shop-org/REPO/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/mcp-tool-shop-org/REPO/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/PACKAGE?style=flat-square&logo=npm)](https://www.npmjs.com/package/PACKAGE)
[![Node](https://img.shields.io/badge/node-20%2B-green?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![License](https://img.shields.io/github/license/mcp-tool-shop-org/REPO?style=flat-square)](LICENSE)
```

### .NET Desktop App

```markdown
[![CI](https://img.shields.io/github/actions/workflow/status/mcp-tool-shop-org/REPO/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/mcp-tool-shop-org/REPO/actions/workflows/ci.yml)
[![.NET](https://img.shields.io/badge/.NET-8-purple?style=flat-square&logo=dotnet)](https://dotnet.microsoft.com)
[![WinUI](https://img.shields.io/badge/WinUI-3-blue?style=flat-square)](https://learn.microsoft.com/windows/apps/winui/winui3/)
[![License](https://img.shields.io/github/license/mcp-tool-shop-org/REPO?style=flat-square)](LICENSE)
```

### Tool / No-Package Repo

```markdown
[![CI](https://img.shields.io/github/actions/workflow/status/mcp-tool-shop-org/REPO/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/mcp-tool-shop-org/REPO/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/mcp-tool-shop-org/REPO?style=flat-square)](LICENSE)
```

## Rules

1. **Owner is always `mcp-tool-shop-org`**, never `mcp-tool-shop`.
2. **Branch is always `main`** in any badge URL that takes a branch parameter.
3. **No static test-count badges** (e.g., "295 passing"). Use the live
   CI workflow badge instead — it stays current automatically.
4. **CI badge must link to the workflow run page**, not just the repo.
5. **License badge must link to the LICENSE file**, not shields.io.
6. All badges in a single `<p align="center">` block, one per line for
   readable diffs.
