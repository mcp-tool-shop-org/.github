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

**Servidores MCP de nível profissional, aplicativos para desktop e infraestrutura de IA — projetados para desenvolvedores com estações de trabalho locais com GPUs.**

Não requer nuvem. Não há chaves de API para as funcionalidades principais. Funciona no Ollama, RTX e no seu próprio hardware.

## Conteúdo

- **Arquivos de saúde da comunidade** — CODE_OF_CONDUCT.md, CONTRIBUTING.md, SECURITY.md, SUPPORT.md, LICENSE
- **Perfil da organização** — profile/README.md (aparece na página do GitHub da organização)
- **Recursos da marca** — diretório "brand/" com paleta de cores e arquivos de manifesto OG
- **Restrições de CI** — Verificações de qualidade da documentação e fluxos de trabalho para evitar desvios da organização
- **Documentação da organização** — Lançamentos, versionamento, manutenção, política de ramificação, selos

## Fluxos de trabalho

| Fluxo de trabalho | Gatilho | Propósito |
| ---------- | --------- | --------- |
| `docs-quality.yml` | Push/PR em `**/*.md` | Verificação de sintaxe Markdown + verificação de links |
| `org-guard.yml` | PR em workflows/docs | Scanner de conformidade com os padrões da organização |

## Início rápido

```bash
# Discover and run MCP Tool Shop tools
pip install mcpt
mcpt search "semantic file search"
```

Consulte a [página inicial](https://mcp-tool-shop-org.github.io/.github/) para ver o diretório completo de ferramentas.

## Licença

MIT
