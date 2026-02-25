<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
</p>

<p align="center">
  <img src="assets/logo.png" alt="MCP Tool Shop" width="400">
</p>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/.github/actions/workflows/docs-quality.yml"><img src="https://github.com/mcp-tool-shop-org/.github/actions/workflows/docs-quality.yml/badge.svg" alt="Docs Quality"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License"></a>
  <a href="https://mcp-tool-shop-org.github.io/.github/"><img src="https://img.shields.io/badge/Landing_Page-live-blue" alt="Landing Page"></a>
</p>

**面向开发者，专为配备本地GPU工作站的开发者打造的、生产级MCP服务器、桌面应用程序和AI基础设施。**

无需云服务。核心功能无需API密钥。可在Ollama、RTX以及您自己的硬件上运行。

## 内容

- **社区健康文件** — CODE_OF_CONDUCT.md, CONTRIBUTING.md, SECURITY.md, SUPPORT.md, LICENSE
- **组织简介** — profile/README.md（显示在组织的GitHub页面上）
- **品牌资源** — brand/ 目录，包含配色方案和OG配置文件
- **CI约束** — 文档质量检查和组织规范检查工作流程
- **组织文档** — 发布、版本控制、维护、分支策略、徽章

## 工作流程

| 工作流程 | 触发器 | 目的 |
| ---------- | --------- | --------- |
| `docs-quality.yml` | 对 `**/*.md` 文件进行推送/拉取请求 | Markdown 语法检查 + 链接检查 |
| `org-guard.yml` | 对 workflows/docs 目录进行拉取请求 | 组织规范合规性扫描器 |

## 快速开始

```bash
# Discover and run MCP Tool Shop tools
pip install mcpt
mcpt search "semantic file search"
```

请访问 [主页](https://mcp-tool-shop-org.github.io/.github/)，查看完整的工具目录。

## 许可证

MIT
