<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.md">English</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

**Herramientas de código abierto para el desarrollo de IA con enfoque local.** Servidores MCP, herramientas de línea de comandos, flujos de trabajo de entrenamiento y conjuntos de datos, y herramientas de producción de juegos que se ejecutan en su propio hardware. Licencia MIT.

Este repositorio contiene los archivos a nivel de organización para [mcp-tool-shop-org](https://github.com/mcp-tool-shop-org): el [perfil de la organización](profile/README.md), archivos de salud de la comunidad, el kit de marca, las directrices de CI y los documentos que describen cómo se publican y mantienen todos los repositorios de la organización.

## Contenido

| Ruta | Qué es |
|------|------------|
| `profile/README.md` | El perfil público que se muestra en [github.com/mcp-tool-shop-org](https://github.com/mcp-tool-shop-org) |
| `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`, `SUPPORT.md`, `LICENSE` | Archivos de salud de la comunidad heredados por cada repositorio que no define los suyos propios |
| `.github/ISSUE_TEMPLATE/`, `.github/DISCUSSION_TEMPLATE/`, `.github/pull_request_template.md` | Plantillas predeterminadas para problemas, debates y solicitudes de extracción |
| `docs/` | [Releasing](docs/RELEASING.md), [versioning](docs/VERSIONING.md), [branch policy](docs/BRANCH_POLICY.md), [maintenance](docs/MAINTENANCE.md), [badges](docs/BADGES.md), [provenance](docs/PROVENANCE.md) |
| `brand/` | [Paleta](brand/palette.md), tipografía y tono, plantilla y generador para vistas previas en redes sociales |
| `site/` | La página de destino de Astro en [mcp-tool-shop-org.github.io/.github](https://mcp-tool-shop-org.github.io/.github/) |
| `llms.txt` | Un resumen en texto sin formato de la organización para agentes de IA |

## Flujos de trabajo

| Flujo de trabajo | Activador | Propósito |
|----------|---------|---------|
| `docs-quality.yml` | Envío o solicitud de extracción que afecta a `**/*.md` | Análisis de Markdown y verificación de enlaces |
| `org-guard.yml` | Solicitud de extracción que afecta a los flujos de trabajo o la documentación | Análisis de cumplimiento de los estándares de la organización |
| `pages.yml` | Envío que afecta a `site/**` | Creación e implementación de la página de destino |

## Comience a usar las herramientas

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

El catálogo completo, con comandos de instalación e historial de versiones para cada repositorio, está en [mcptoolshop.com/tools](https://mcptoolshop.com/tools/).

## Cómo opera la organización

- **Enfoque local.** La funcionalidad principal nunca requiere una clave de API ni un servicio alojado.
- **Control de lanzamiento.** Cada versión etiquetada pasa por [shipcheck](https://github.com/mcp-tool-shop-org/shipcheck): política de seguridad y modelo de amenazas, errores estructurados con códigos de salida, documentación y registro de cambios actualizados, empaquetado limpio. Consulte [docs/RELEASING.md](docs/RELEASING.md).
- **Versionado semántico.** Las versiones se etiquetan en GitHub y se publican en npm o PyPI desde CI. Consulte [docs/VERSIONING.md](docs/VERSIONING.md).
- **Tres categorías.** Cada archivo README indica si el repositorio está en funcionamiento, en desarrollo o archivado. Consulte [docs/MAINTENANCE.md](docs/MAINTENANCE.md).
- **Ocho idiomas.** La mayoría de los repositorios incluyen archivos README en inglés, japonés, chino, español, francés, hindi, italiano y portugués brasileño, traducidos localmente con [polyglot-mcp](https://github.com/mcp-tool-shop-org/polyglot-mcp).

## Soporte y seguridad

- Preguntas e ideas: [GitHub Discussions](https://github.com/orgs/mcp-tool-shop-org/discussions)
- Errores y solicitudes de funciones: abra un problema en el repositorio correspondiente. [SUPPORT.md](SUPPORT.md) enumera lo que debe incluir.
- Seguridad: utilice la notificación privada de vulnerabilidades en el repositorio afectado. No abra un problema público. Consulte [SECURITY.md](SECURITY.md).

## Licencia

MIT. Consulte [LICENSE](LICENSE).
