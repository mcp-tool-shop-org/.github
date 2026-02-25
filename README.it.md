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

**Server MCP di livello professionale, applicazioni desktop e infrastruttura AI, progettati per gli sviluppatori che utilizzano workstation locali con GPU.**

Non è richiesto alcun cloud. Nessuna chiave API per le funzionalità principali. Funziona su Ollama, RTX e sul vostro hardware.

## Contenuti

- **File relativi alla comunità** — CODE_OF_CONDUCT.md, CONTRIBUTING.md, SECURITY.md, SUPPORT.md, LICENSE
- **Profilo dell'organizzazione** — profile/README.md (visualizzato nella pagina GitHub dell'organizzazione)
- **Risorse del marchio** — directory "brand/" con palette e manifest OG
- **Linee guida per l'integrazione continua** — Controlli di qualità della documentazione e flussi di lavoro per prevenire derive dell'organizzazione
- **Documentazione dell'organizzazione** — Rilascio, versionamento, manutenzione, policy dei rami, badge

## Flussi di lavoro

| Flusso di lavoro | Trigger | Scopo |
| ---------- | --------- | --------- |
| `docs-quality.yml` | Push/PR su `**/*.md` | Controllo della sintassi Markdown e verifica dei link |
| `org-guard.yml` | PR su workflows/docs | Scanner di conformità agli standard dell'organizzazione |

## Guida rapida

```bash
# Discover and run MCP Tool Shop tools
pip install mcpt
mcpt search "semantic file search"
```

Consultare la [pagina di presentazione](https://mcp-tool-shop-org.github.io/.github/) per l'elenco completo degli strumenti.

## Licenza

MIT
