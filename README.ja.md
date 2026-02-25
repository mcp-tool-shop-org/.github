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

**開発者向けの、ローカルGPUワークステーションに対応した、高品質なMCPサーバー、デスクトップアプリケーション、およびAIインフラストラクチャ。**

クラウドは不要です。コア機能にはAPIキーは必要ありません。Ollama、RTX、およびお客様ご自身のハードウェア上で動作します。

## 内容

- **コミュニティに関するファイル** — CODE_OF_CONDUCT.md, CONTRIBUTING.md, SECURITY.md, SUPPORT.md, LICENSE
- **組織のプロフィール** — profile/README.md (組織のGitHubページに表示されます)
- **ブランドアセット** — brand/ ディレクトリ（カラースキームとOGマニフェストが含まれます）
- **CIの制約** — ドキュメントの品質チェックと、組織の逸脱を防ぐためのワークフロー
- **組織のドキュメント** — リリース、バージョン管理、メンテナンス、ブランチポリシー、バッジ

## ワークフロー

| ワークフロー | トリガー | 目的 |
| ---------- | --------- | --------- |
| `docs-quality.yml` | `**/*.md` へのプッシュ/プルリクエスト | Markdownのlintチェックとリンクチェック |
| `org-guard.yml` | workflows/docs へのプルリクエスト | 組織の基準への準拠をチェックするツール |

## クイックスタート

```bash
# Discover and run MCP Tool Shop tools
pip install mcpt
mcpt search "semantic file search"
```

詳細なツールリストについては、[こちらのページ](https://mcp-tool-shop-org.github.io/.github/)をご覧ください。

## ライセンス

MIT
