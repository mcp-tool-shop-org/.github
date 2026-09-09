<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.md">English</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

**Outils open source pour le développement d’IA axé sur le local.** Serveurs MCP, outils en ligne de commande, pipelines d’entraînement et d’ensembles de données, et outils de production de jeux qui fonctionnent sur votre propre matériel. Licence MIT.

Ce dépôt contient les fichiers de l’ensemble de l’organisation pour [mcp-tool-shop-org](https://github.com/mcp-tool-shop-org) : le [profil de l’organisation](profile/README.md), les fichiers relatifs à la santé de la communauté, la charte graphique, les règles de conformité CI et les documents décrivant la manière dont chaque dépôt de l’organisation est publié et maintenu.

## Contenu

| Chemin | Description |
|------|------------|
| `profile/README.md` | Le profil public affiché sur [github.com/mcp-tool-shop-org](https://github.com/mcp-tool-shop-org) |
| `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`, `SUPPORT.md`, `LICENSE` | Fichiers relatifs à la santé de la communauté, hérités par chaque dépôt qui ne définit pas les siens |
| `.github/ISSUE_TEMPLATE/`, `.github/DISCUSSION_TEMPLATE/`, `.github/pull_request_template.md` | Modèles par défaut pour les problèmes, les discussions et les demandes de fusion |
| `docs/` | [Releasing](docs/RELEASING.md), [versioning](docs/VERSIONING.md), [branch policy](docs/BRANCH_POLICY.md), [maintenance](docs/MAINTENANCE.md), [badges](docs/BADGES.md), [provenance](docs/PROVENANCE.md) |
| `brand/` | [Palette](brand/palette.md), typographie et ton, modèle et générateur pour l’aperçu sur les réseaux sociaux |
| `site/` | La page d’accueil Astro sur [mcp-tool-shop-org.github.io/.github](https://mcp-tool-shop-org.github.io/.github/) |
| `llms.txt` | Un résumé en texte brut de l’organisation pour les agents d’IA |

## Flux de travail

| Flux de travail | Déclencheur | Objectif |
|----------|---------|---------|
| `docs-quality.yml` | Envoi ou demande de fusion affectant `**/*.md` | Analyse de la syntaxe Markdown et vérification des liens |
| `org-guard.yml` | Demande de fusion affectant les flux de travail ou la documentation | Analyse de conformité aux normes de l’organisation |
| `pages.yml` | Envoi affectant `site/**` | Création et déploiement de la page d’accueil |

## Démarrez avec les outils

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

Le catalogue complet, avec les commandes d’installation et l’historique des versions pour chaque dépôt, est disponible sur [mcptoolshop.com/tools](https://mcptoolshop.com/tools/).

## Comment l’organisation procède

- **Axé sur le local.** Les fonctionnalités de base ne nécessitent jamais de clé API ni de service hébergé.
- **Une étape de validation de la publication.** Chaque version marquée passe par [shipcheck](https://github.com/mcp-tool-shop-org/shipcheck) : politique de sécurité et modèle de menace, erreurs structurées avec des codes de sortie, documentation et journal des modifications actuels, empaquetage propre. Voir [docs/RELEASING.md](docs/RELEASING.md).
- **Versionnement sémantique.** Les versions sont marquées sur GitHub et publiées sur npm ou PyPI à partir de CI. Voir [docs/VERSIONING.md](docs/VERSIONING.md).
- **Trois voies.** Chaque fichier README indique si le dépôt est publié, en développement ou archivé. Voir [docs/MAINTENANCE.md](docs/MAINTENANCE.md).
- **Huit langues.** La plupart des dépôts contiennent des fichiers README en anglais, en japonais, en chinois, en espagnol, en français, en hindi, en italien et en portugais brésilien, traduits localement avec [polyglot-mcp](https://github.com/mcp-tool-shop-org/polyglot-mcp).

## Support et sécurité

- Questions et idées : [Discussions GitHub](https://github.com/orgs/mcp-tool-shop-org/discussions)
- Bogues et demandes de fonctionnalités : ouvrez un problème dans le dépôt concerné. [SUPPORT.md](SUPPORT.md) répertorie ce qu’il faut inclure.
- Sécurité : utilisez le signalement privé des vulnérabilités dans le dépôt concerné. N’ouvrez pas un problème public. Voir [SECURITY.md](SECURITY.md).

## Licence

MIT. Voir [LICENSE](LICENSE).
