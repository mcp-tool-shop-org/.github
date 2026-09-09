<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.md">English</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

**用于本地优先 AI 开发的开源工具。** MCP 服务器、命令行工具、训练和数据集流水线以及游戏制作工具，这些工具都可以在您自己的硬件上运行。采用 MIT 许可。

此仓库包含 [mcp-tool-shop-org](https://github.com/mcp-tool-shop-org) 组织的全局文件：[组织资料](profile/README.md)、社区健康文件、品牌工具包、CI 规范和描述组织中每个仓库如何发布和维护的文档。

## 内容

| 路径 | 内容描述 |
|------|------------|
| `profile/README.md` | 在 [github.com/mcp-tool-shop-org](https://github.com/mcp-tool-shop-org) 上显示的公共资料 |
| `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`, `SUPPORT.md`, `LICENSE` | 每个未定义自己的社区健康文件 |
| `.github/ISSUE_TEMPLATE/`, `.github/DISCUSSION_TEMPLATE/`, `.github/pull_request_template.md` | 默认的 issue、讨论和 pull request 模板 |
| `docs/` | [Releasing](docs/RELEASING.md), [versioning](docs/VERSIONING.md), [branch policy](docs/BRANCH_POLICY.md), [maintenance](docs/MAINTENANCE.md), [badges](docs/BADGES.md), [provenance](docs/PROVENANCE.md) |
| `brand/` | [调色板](brand/palette.md)、排版和风格、社交预览模板和生成器 |
| `site/` | 在 [mcp-tool-shop-org.github.io/.github](https://mcp-tool-shop-org.github.io/.github/) 上的 Astro 登录页面 |
| `llms.txt` | 为 AI 代理提供的组织概要 |

## 工作流程

| 工作流程 | 触发器 | 目的 |
|----------|---------|---------|
| `docs-quality.yml` | 推送或 PR 触及 `**/*.md` | Markdown 语法检查和链接检查 |
| `org-guard.yml` | PR 触及工作流程或文档 | 组织标准合规性扫描 |
| `pages.yml` | 推送触及 `site/**` | 构建并部署登录页面 |

## 开始使用这些工具

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

完整的目录，包含每个仓库的安装命令和发布历史，请访问 [mcptoolshop.com/tools](https://mcptoolshop.com/tools/)。

## 组织的发布流程

- **本地优先。** 核心功能绝不需要 API 密钥或托管服务。
- **发布门控。** 每个带标签的发布版本都通过 [shipcheck](https://github.com/mcp-tool-shop-org/shipcheck)：安全策略和威胁模型、带有退出代码的结构化错误、最新的文档和变更日志、干净的打包。请参阅 [docs/RELEASING.md](docs/RELEASING.md)。
- **语义版本控制。** 发布版本在 GitHub 上进行标记，并通过 CI 发布到 npm 或 PyPI。请参阅 [docs/VERSIONING.md](docs/VERSIONING.md)。
- **三种状态。** 每个 README 都会说明该仓库是已发布、正在开发还是已存档。请参阅 [docs/MAINTENANCE.md](docs/MAINTENANCE.md)。
- **八种语言。** 大多数仓库都提供英语、日语、中文、西班牙语、法语、印地语、意大利语和巴西葡萄牙语的 README 文件，这些文件使用 [polyglot-mcp](https://github.com/mcp-tool-shop-org/polyglot-mcp) 进行本地翻译。

## 支持和安全

- 问题和想法：[GitHub Discussions](https://github.com/orgs/mcp-tool-shop-org/discussions)
- 错误和功能请求：在相关仓库中创建一个 issue。 [SUPPORT.md](SUPPORT.md) 列出了需要包含的内容。
- 安全：在受影响的仓库中使用私有漏洞报告。不要公开创建 issue。请参阅 [SECURITY.md](SECURITY.md)。

## 许可

MIT。请参阅 [LICENSE](LICENSE)。
