import type { SiteConfig } from '@mcptoolshop/site-theme';

const ORG = 'https://github.com/mcp-tool-shop-org';

export const config: SiteConfig = {
  title: 'MCP Tool Shop',
  description:
    'Open-source tooling for local-first AI development: MCP servers, command-line tools, training and dataset pipelines, and game-production tooling that run on your own hardware.',
  logoBadge: 'M',
  brandName: 'MCP Tool Shop',
  repoUrl: ORG,
  npmUrl: 'https://www.npmjs.com/search?q=%40mcptoolshop',
  footerText:
    'MIT Licensed — <a href="https://mcptoolshop.com" style="color:var(--color-muted);text-decoration:underline">mcptoolshop.com</a> · <a href="https://github.com/mcp-tool-shop-org" style="color:var(--color-muted);text-decoration:underline">mcp-tool-shop-org</a>',

  hero: {
    badge: 'Open source · MIT · Local-first',
    headline: 'Tooling for local-first',
    headlineAccent: 'AI development.',
    description:
      'MCP servers, command-line tools, training and dataset pipelines, and game-production tooling from an independent studio. Built to run on your own hardware: a workstation GPU, Ollama, ComfyUI, and the Model Context Protocol. No API key or hosted service is required for core functionality.',
    primaryCta: { href: 'https://mcptoolshop.com/tools/', label: 'Browse the catalog' },
    secondaryCta: { href: '#areas', label: 'Areas of work' },
    previews: [
      {
        label: 'Install',
        code: '# Find MCP tools by describing what you need\nnpx @mcptoolshop/tool-compass\n\n# Drive ComfyUI from Python, no node canvas\npip install comfy-headless\n\n# Fine-tune a local model, export GGUF for Ollama\npip install backpropagate\n\n# Run the release gate on your own repo\nnpx @mcptoolshop/shipcheck audit',
      },
      {
        label: 'Use with an MCP client',
        code: '// Claude Code, Claude Desktop, Cursor, VS Code\n{\n  "mcpServers": {\n    "tool-compass": {\n      "command": "npx",\n      "args": ["-y", "@mcptoolshop/tool-compass"]\n    },\n    "ollama-intern": {\n      "command": "npx",\n      "args": ["-y", "ollama-intern-mcp"]\n    }\n  }\n}',
      },
      {
        label: 'Ship a release',
        code: '# Copy the Ship Gate checklist and templates\nnpx @mcptoolshop/shipcheck init\n\n# Work through SHIP_GATE.md, then audit\nnpx @mcptoolshop/shipcheck audit\n# exit 0 = every hard gate passes:\n#   security policy + threat model\n#   structured errors + exit codes\n#   current docs + changelog\n#   clean packaging',
      },
    ],
  },

  sections: [
    {
      kind: 'data-table',
      id: 'areas',
      title: 'Areas of work',
      subtitle: 'About 80 public repositories, developed in the open. The full catalog with install commands and release history is at mcptoolshop.com/tools.',
      columns: ['Area', 'Repositories', 'What they do'],
      rows: [
        ['MCP servers', 'tool-compass · ollama-intern-mcp · mcp-voice-soundboard · polyglot-mcp · plain-sight', 'Tool discovery by intent, local-model job delegation, text-to-speech, GPU translation, image description'],
        ['Training and datasets', 'backpropagate · style-dataset-lab · repo-dataset · backprop-trace · runforge-vscode', 'Headless fine-tuning with GGUF export, canon-bound visual datasets, contamination-checked code datasets, training-step verification'],
        ['Image and media pipelines', 'comfy-headless · comfy-preflight · sprite-foundry · armature · audiobooker', 'Programmatic ComfyUI, pre-submission workflow gates, sprite generation, GLB-driven video, multi-voice audiobooks'],
        ['Agent infrastructure', 'role-os · loadout-os · prism-verify · claude-guardian · research-os', 'Multi-agent orchestration, context routing, cross-family output verification, runtime health, research control plane'],
        ['Developer tooling', 'shipcheck · site-theme · repo-knowledge · registry-stats · npm-launcher', 'Release quality gates, Astro site templates, repo knowledge base, package download stats, verified binary launcher'],
        ['Games and game tooling', 'ai-rpg-engine · world-forge · motif · saints-mile · roll', 'Deterministic RPG simulation, 2D/2.5D world authoring, adaptive soundtracks, a frontier JRPG, dice and probability engine'],
        ['Ledger and verification', 'attestia · xrpl-lab · xrpl-camp · repomesh', 'Financial truth infrastructure, XRPL training, release verification for repo networks'],
        ['Testing (sister org dogfood-lab)', 'testing-os · study-swarm', 'Provenance-confirmed test evidence stores and learning loops; research-grounded design decisions with externally verified citations'],
      ],
    },
    {
      kind: 'features',
      id: 'how-we-ship',
      title: 'How we ship',
      subtitle: 'The same standards apply to every repository in the organization.',
      features: [
        {
          title: 'Local-first',
          desc: 'Core functionality never requires an API key or a hosted service. Where a tool offers cloud routing, it is opt-in and falls back to local execution. No telemetry.',
        },
        {
          title: 'MCP-native',
          desc: 'Tools compose through the Model Context Protocol rather than vendor SDKs. Servers work with Claude Code, Claude Desktop, Cursor, VS Code, and any other MCP client.',
        },
        {
          title: 'Gated releases',
          desc: 'Every tagged release passes the shipcheck gate: security policy and threat model, structured errors with exit codes, current docs and changelog, clean packaging. Semantic versioning; published to npm or PyPI from CI.',
        },
        {
          title: 'Documented in eight languages',
          desc: 'Most repositories ship READMEs in English, Japanese, Chinese, Spanish, French, Hindi, Italian, and Brazilian Portuguese, translated locally with polyglot-mcp.',
        },
        {
          title: 'Accessible by default',
          desc: 'Low-vision-first CLI output and WCAG tooling from accessibility-suite, built in rather than bolted on.',
        },
        {
          title: 'Three lanes',
          desc: 'Every README states its lane. Shipped: tagged releases, CI, an install command. In development: active, pre-1.0, APIs may change. Archive: retired prototypes kept in the prototypes repository.',
        },
      ],
    },
    {
      kind: 'code-cards',
      id: 'this-repo',
      title: 'What lives in this repository',
      subtitle: 'The .github repository carries the organization-wide files that every other repo inherits.',
      cards: [
        {
          title: 'Community health files',
          code: 'CODE_OF_CONDUCT.md\nCONTRIBUTING.md\nSECURITY.md      # private vulnerability reporting\nSUPPORT.md       # what to include in a bug report\nLICENSE          # MIT\n\n.github/ISSUE_TEMPLATE/\n.github/DISCUSSION_TEMPLATE/\n.github/pull_request_template.md',
        },
        {
          title: 'Org docs',
          code: 'docs/RELEASING.md      # tag, publish, announce\ndocs/VERSIONING.md     # semantic versioning policy\ndocs/BRANCH_POLICY.md  # main is protected\ndocs/MAINTENANCE.md    # what "maintained" means\ndocs/BADGES.md         # README badge standards\ndocs/PROVENANCE.md     # build provenance',
        },
        {
          title: 'Brand kit',
          code: 'brand/palette.md            # color system\nbrand/README.md             # typography, tone, naming\nbrand/og/manifest.json      # social-preview copy per repo\nbrand/social-preview-template.svg\nbrand/generate-previews.py  # 1280x640 OG images',
        },
        {
          title: 'Community',
          code: '# Questions and ideas\ngithub.com/orgs/mcp-tool-shop-org/discussions\n\n# Bugs and feature requests\n# -> Issues on the relevant repository\n\n# Security\n# -> private vulnerability reporting, never a public issue',
        },
      ],
    },
  ],
};
