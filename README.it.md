<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.md">English</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

**Strumenti open source per lo sviluppo di intelligenza artificiale con approccio "local-first".** Server MCP, strumenti a riga di comando, pipeline di addestramento e set di dati e strumenti per la produzione di giochi, che vengono eseguiti sul proprio hardware. Licenza MIT.

Questo repository contiene i file a livello di organizzazione per [mcp-tool-shop-org](https://github.com/mcp-tool-shop-org): il [profilo dell'organizzazione](profile/README.md), i file relativi alla salute della community, il kit di branding, le linee guida per la CI e i documenti che descrivono come ogni repository all'interno dell'organizzazione viene rilasciato e mantenuto.

## Contenuti

| Percorso | Descrizione |
|------|------------|
| `profile/README.md` | Il profilo pubblico visualizzato su [github.com/mcp-tool-shop-org](https://github.com/mcp-tool-shop-org) |
| `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`, `SUPPORT.md`, `LICENSE` | File relativi alla salute della community, ereditati da ogni repository che non ne definisce di propri |
| `.github/ISSUE_TEMPLATE/`, `.github/DISCUSSION_TEMPLATE/`, `.github/pull_request_template.md` | Modelli predefiniti per issue, discussioni e richieste di pull |
| `docs/` | [Releasing](docs/RELEASING.md), [versioning](docs/VERSIONING.md), [branch policy](docs/BRANCH_POLICY.md), [maintenance](docs/MAINTENANCE.md), [badges](docs/BADGES.md), [provenance](docs/PROVENANCE.md) |
| `brand/` | [Palette](brand/palette.md), tipografia e tono, modello e generatore per l'anteprima sui social media |
| `site/` | La pagina di destinazione Astro disponibile all'indirizzo [mcp-tool-shop-org.github.io/.github](https://mcp-tool-shop-org.github.io/.github/) |
| `llms.txt` | Un riepilogo in testo semplice dell'organizzazione per gli agenti di intelligenza artificiale |

## Flussi di lavoro

| Flusso di lavoro | Trigger | Scopo |
|----------|---------|---------|
| `docs-quality.yml` | Push o PR che modifica `**/*.md` | Controllo della sintassi Markdown e dei collegamenti |
| `org-guard.yml` | PR che modifica i flussi di lavoro o la documentazione | Scansione della conformità agli standard dell'organizzazione |
| `pages.yml` | Push che modifica `site/**` | Creazione e distribuzione della pagina di destinazione |

## Inizia a utilizzare gli strumenti

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

Il catalogo completo, con i comandi di installazione e la cronologia dei rilasci per ogni repository, è disponibile all'indirizzo [mcptoolshop.com/tools](https://mcptoolshop.com/tools/).

## Come l'organizzazione gestisce i rilasci

- **Approccio "local-first".** Le funzionalità principali non richiedono mai una chiave API o un servizio ospitato.
- **Controllo dei rilasci.** Ogni rilascio con tag supera [shipcheck](https://github.com/mcp-tool-shop-org/shipcheck): politica di sicurezza e modello di minaccia, errori strutturati con codici di uscita, documentazione e registro delle modifiche aggiornati, pacchettizzazione corretta. Consultare [docs/RELEASING.md](docs/RELEASING.md).
- **Versioning semantico.** I rilasci vengono contrassegnati su GitHub e pubblicati su npm o PyPI tramite CI. Consultare [docs/VERSIONING.md](docs/VERSIONING.md).
- **Tre categorie.** Ogni file README indica se il repository è in fase di rilascio, sviluppo o archiviazione. Consultare [docs/MAINTENANCE.md](docs/MAINTENANCE.md).
- **Otto lingue.** La maggior parte dei repository include file README in inglese, giapponese, cinese, spagnolo, francese, hindi, italiano e portoghese brasiliano, tradotti localmente con [polyglot-mcp](https://github.com/mcp-tool-shop-org/polyglot-mcp).

## Supporto e sicurezza

- Domande e idee: [Discussioni di GitHub](https://github.com/orgs/mcp-tool-shop-org/discussions)
- Bug e richieste di funzionalità: aprire un'issue nel repository pertinente. [SUPPORT.md](SUPPORT.md) elenca cosa includere.
- Sicurezza: utilizzare la segnalazione privata delle vulnerabilità nel repository interessato. Non aprire un'issue pubblica. Consultare [SECURITY.md](SECURITY.md).

## Licenza

MIT. Consultare [LICENSE](LICENSE).
