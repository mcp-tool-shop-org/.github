<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.md">English</a>
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

**Ferramentas de código aberto para o desenvolvimento de IA com foco no uso local.** Servidores MCP, ferramentas de linha de comando, pipelines de treinamento e conjuntos de dados, e ferramentas de produção de jogos que são executados em seu próprio hardware. Licença MIT.

Este repositório contém os arquivos da organização para [mcp-tool-shop-org](https://github.com/mcp-tool-shop-org): o [perfil da organização](profile/README.md), arquivos de saúde da comunidade, o kit de marca, as diretrizes de CI e os documentos que descrevem como cada repositório da organização é lançado e mantido.

## Conteúdo

| Caminho | O que é |
|------|------------|
| `profile/README.md` | O perfil público exibido em [github.com/mcp-tool-shop-org](https://github.com/mcp-tool-shop-org) |
| `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`, `SUPPORT.md`, `LICENSE` | Arquivos de saúde da comunidade herdados por cada repositório que não define os seus próprios |
| `.github/ISSUE_TEMPLATE/`, `.github/DISCUSSION_TEMPLATE/`, `.github/pull_request_template.md` | Modelos padrão para emissões, discussões e solicitações de pull |
| `docs/` | [Releasing](docs/RELEASING.md), [versioning](docs/VERSIONING.md), [branch policy](docs/BRANCH_POLICY.md), [maintenance](docs/MAINTENANCE.md), [badges](docs/BADGES.md), [provenance](docs/PROVENANCE.md) |
| `brand/` | [Paleta](brand/palette.md), tipografia e tom, modelo e gerador de visualização para redes sociais |
| `site/` | A página inicial do Astro em [mcp-tool-shop-org.github.io/.github](https://mcp-tool-shop-org.github.io/.github/) |
| `llms.txt` | Um resumo em texto simples da organização para agentes de IA |

## Fluxos de trabalho

| Fluxo de trabalho | Gatilho | Objetivo |
|----------|---------|---------|
| `docs-quality.yml` | Push ou PR que afeta `**/*.md` | Análise de código Markdown e verificação de links |
| `org-guard.yml` | PR que afeta os fluxos de trabalho ou a documentação | Análise de conformidade com os padrões da organização |
| `pages.yml` | Push que afeta `site/**` | Criação e implantação da página inicial |

## Comece a usar as ferramentas

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

O catálogo completo, com comandos de instalação e histórico de lançamentos para cada repositório, está em [mcptoolshop.com/tools](https://mcptoolshop.com/tools/).

## Como a organização opera

- **Prioridade para o uso local.** A funcionalidade principal nunca requer uma chave de API ou um serviço hospedado.
- **Um portão de lançamento.** Cada lançamento com tag passa por [shipcheck](https://github.com/mcp-tool-shop-org/shipcheck): política de segurança e modelo de ameaças, erros estruturados com códigos de saída, documentação e registro de alterações atuais, empacotamento limpo. Consulte [docs/RELEASING.md](docs/RELEASING.md).
- **Versionamento semântico.** Os lançamentos são marcados no GitHub e publicados no npm ou PyPI a partir do CI. Consulte [docs/VERSIONING.md](docs/VERSIONING.md).
- **Três categorias.** Cada arquivo README indica se o repositório está em produção, em desenvolvimento ou arquivado. Consulte [docs/MAINTENANCE.md](docs/MAINTENANCE.md).
- **Oito idiomas.** A maioria dos repositórios possui arquivos README em inglês, japonês, chinês, espanhol, francês, hindi, italiano e português brasileiro, traduzidos localmente com [polyglot-mcp](https://github.com/mcp-tool-shop-org/polyglot-mcp).

## Suporte e segurança

- Perguntas e ideias: [Discussões do GitHub](https://github.com/orgs/mcp-tool-shop-org/discussions)
- Bugs e solicitações de recursos: abra uma solicitação no repositório relevante. [SUPPORT.md](SUPPORT.md) lista o que incluir.
- Segurança: use o relatório privado de vulnerabilidades no repositório afetado. Não abra uma solicitação pública. Consulte [SECURITY.md](SECURITY.md).

## Licença

MIT. Consulte [LICENSE](LICENSE).
