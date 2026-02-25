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

**Serveurs MCP de qualité professionnelle, applications de bureau et infrastructure d'IA, conçus pour les développeurs utilisant des stations de travail locales équipées de GPU.**

Pas besoin de cloud. Pas de clés API pour les fonctionnalités de base. Fonctionne sur Ollama, RTX et votre propre matériel.

## Contenu

- **Fichiers relatifs à la communauté** — CODE_OF_CONDUCT.md, CONTRIBUTING.md, SECURITY.md, SUPPORT.md, LICENSE
- **Profil de l'organisation** — profile/README.md (apparaît sur la page GitHub de l'organisation)
- **Ressources de la marque** — répertoire "brand/" contenant la palette de couleurs et les fichiers de configuration OG
- **Contrôles de la CI** — Vérifications de la qualité de la documentation et flux de travail de prévention de la dérive de l'organisation
- **Documentation de l'organisation** — Publication, versionnage, maintenance, politique de branche, badges

## Flux de travail

| Flux de travail | Déclencheur | Objectif |
| ---------- | --------- | --------- |
| `docs-quality.yml` | Push/PR sur `**/*.md` | Vérification de la syntaxe Markdown et des liens |
| `org-guard.yml` | PR sur workflows/docs | Analyseur de conformité aux normes de l'organisation |

## Démarrage rapide

```bash
# Discover and run MCP Tool Shop tools
pip install mcpt
mcpt search "semantic file search"
```

Consultez la [page d'accueil](https://mcp-tool-shop-org.github.io/.github/) pour consulter l'ensemble des outils.

## Licence

MIT
