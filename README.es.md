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

**Servidores MCP de calidad profesional, aplicaciones de escritorio e infraestructura de IA, diseñados para desarrolladores con estaciones de trabajo locales con GPU.**

No se requiere la nube. No se necesitan claves de API para las funciones principales. Funciona en Ollama, RTX y en su propio hardware.

## Contenido

- **Archivos de la comunidad** — CODE_OF_CONDUCT.md, CONTRIBUTING.md, SECURITY.md, SUPPORT.md, LICENSE
- **Perfil de la organización** — profile/README.md (aparece en la página de GitHub de la organización)
- **Activos de la marca** — directorio "brand/" con paleta y manifiestos OG
- **Controles de CI** — Verificaciones de calidad de la documentación y flujos de trabajo de protección contra la desviación de la organización
- **Documentación de la organización** — Lanzamiento, versionado, mantenimiento, política de ramas, insignias

## Flujos de trabajo

| Flujo de trabajo | Disparador | Propósito |
| ---------- | --------- | --------- |
| `docs-quality.yml` | Push/PR en `**/*.md` | Verificación de sintaxis Markdown + verificación de enlaces |
| `org-guard.yml` | PR en workflows/docs | Escáner de cumplimiento de los estándares de la organización |

## Inicio rápido

```bash
# Discover and run MCP Tool Shop tools
pip install mcpt
mcpt search "semantic file search"
```

Consulte la [página de inicio](https://mcp-tool-shop-org.github.io/.github/) para ver el directorio completo de herramientas.

## Licencia

MIT
