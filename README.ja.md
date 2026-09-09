<p align="center">
  <a href="README.md">English</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

**ローカル優先のAI開発のためのオープンソースツール。** 独自のハードウェアで実行される、MCPサーバー、コマンドラインツール、トレーニングおよびデータセットのパイプライン、ゲーム制作ツール。MITライセンス。

このリポジトリには、[mcp-tool-shop-org](https://github.com/mcp-tool-shop-org)の組織全体で使用されるファイルが含まれています。これには、[組織プロファイル](profile/README.md)、コミュニティの健全性に関するファイル、ブランドキット、CIのガードレール、および組織内のすべてのリポジトリがどのようにリリースおよび維持されるかを説明するドキュメントが含まれます。

## 内容

| パス | 概要 |
|------|------------|
| `profile/README.md` | [github.com/mcp-tool-shop-org](https://github.com/mcp-tool-shop-org)に表示される公開プロファイル |
| `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`, `SUPPORT.md`, `LICENSE` | 独自のものを定義していないすべてのリポジトリによって継承される、コミュニティの健全性に関するファイル |
| `.github/ISSUE_TEMPLATE/`, `.github/DISCUSSION_TEMPLATE/`, `.github/pull_request_template.md` | デフォルトの課題、ディスカッション、プルリクエストのテンプレート |
| `docs/` | [Releasing](docs/RELEASING.md), [versioning](docs/VERSIONING.md), [branch policy](docs/BRANCH_POLICY.md), [maintenance](docs/MAINTENANCE.md), [badges](docs/BADGES.md), [provenance](docs/PROVENANCE.md) |
| `brand/` | [パレット](brand/palette.md)、タイポグラフィとトーン、ソーシャルプレビューのテンプレートとジェネレーター |
| `site/` | [mcp-tool-shop-org.github.io/.github](https://mcp-tool-shop-org.github.io/.github/)にあるAstroランディングページ |
| `llms.txt` | AIエージェント向けの、組織の概要を記述したプレーンテキスト |

## ワークフロー

| ワークフロー | トリガー | 目的 |
|----------|---------|---------|
| `docs-quality.yml` | `**/*.md`に触れるプッシュまたはPR | Markdownのlintとリンクチェック |
| `org-guard.yml` | ワークフローまたはドキュメントに触れるPR | 組織の標準への準拠チェック |
| `pages.yml` | `site/**`に触れるプッシュ | ランディングページのビルドとデプロイ |

## ツールの使用を開始する

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

すべてのリポジトリの完全なカタログ（インストールコマンドとリリース履歴を含む）は、[mcptoolshop.com/tools](https://mcptoolshop.com/tools/)にあります。

## 組織がどのように製品をリリースするか

- **ローカル優先。** コア機能では、APIキーやホストされたサービスは必要ありません。
- **リリースゲート。** すべてのタグ付きリリースは、[shipcheck](https://github.com/mcp-tool-shop-org/shipcheck)を通過します。これには、セキュリティポリシーと脅威モデル、終了コード付きの構造化されたエラー、最新のドキュメントと変更履歴、クリーンなパッケージが含まれます。詳細については、[docs/RELEASING.md](docs/RELEASING.md)を参照してください。
- **セマンティックバージョニング。** リリースはGitHubでタグ付けされ、CIからnpmまたはPyPIに公開されます。詳細については、[docs/VERSIONING.md](docs/VERSIONING.md)を参照してください。
- **3つのレーン。** すべてのREADMEには、リポジトリがリリース中、開発中、またはアーカイブされているかが記載されています。詳細については、[docs/MAINTENANCE.md](docs/MAINTENANCE.md)を参照してください。
- **8つの言語。** ほとんどのリポジトリでは、READMEを英語、日本語、中国語、スペイン語、フランス語、ヒンディー語、イタリア語、およびブラジルポルトガル語で提供しており、[polyglot-mcp](https://github.com/mcp-tool-shop-org/polyglot-mcp)を使用してローカルで翻訳しています。

## サポートとセキュリティ

- 質問とアイデア：[GitHub Discussions](https://github.com/orgs/mcp-tool-shop-org/discussions)
- バグと機能リクエスト：関連するリポジトリで課題を作成してください。[SUPPORT.md](SUPPORT.md)には、含めるべき内容が記載されています。
- セキュリティ：影響を受けるリポジトリで、プライベートな脆弱性報告を使用してください。公開された課題は作成しないでください。詳細については、[SECURITY.md](SECURITY.md)を参照してください。

## ライセンス

MIT。詳細については、[LICENSE](LICENSE)を参照してください。
