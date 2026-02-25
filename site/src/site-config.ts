import type { SiteConfig } from '@mcptoolshop/site-theme';

export const config: SiteConfig = {
  title: 'MCP Tool Shop',
  description: 'Production-grade MCP servers, desktop apps, and AI infrastructure — built for developers with local GPU workstations. No cloud required.',
  logoBadge: 'MT',
  brandName: 'MCP Tool Shop',
  repoUrl: 'https://github.com/mcp-tool-shop-org',
  footerText: 'MIT Licensed — <a href="https://github.com/mcp-tool-shop-org" style="color:var(--color-muted);text-decoration:underline">mcp-tool-shop-org</a>',

  hero: {
    badge: 'Open Source · Local-First',
    headline: 'AI tooling that runs',
    headlineAccent: 'on your machine.',
    description: 'Production-grade MCP servers, desktop apps, and AI infrastructure for developers with local GPU workstations. No cloud dependencies. No API keys for core functionality. Runs on Ollama, RTX, and your own hardware.',
    primaryCta: { href: 'https://github.com/orgs/mcp-tool-shop-org/repositories', label: 'Browse all tools' },
    secondaryCta: { href: '#tools', label: 'Flagship tools' },
    previews: [
      {
        label: 'Discover tools',
        code: '# mcpt — discover and run MCP Tool Shop tools\npip install mcpt\n\nmcpt search "semantic file search"\n# → file-compass · HNSW · multi-language AST\n\nmcpt search "typing practice developer"\n# → dev-op-typer · WinUI 3 · adaptive Elo\n\nmcpt info tool-compass\n# → 115+ tools · 6 backends · local embeddings',
      },
      {
        label: 'Use with Claude',
        code: '# Add to claude_desktop_config.json:\n{\n  "mcpServers": {\n    "tool-compass": {\n      "command": "uvx",\n      "args": ["tool-compass"]\n    },\n    "file-compass": {\n      "command": "uvx",\n      "args": ["file-compass", "--root", "/your/project"]\n    },\n    "brain-dev": {\n      "command": "uvx",\n      "args": ["brain-dev"]\n    }\n  }\n}',
      },
      {
        label: 'Homebrew',
        code: '# Official Homebrew tap\nbrew tap mcp-tool-shop-org/mcp-tools\n\nbrew install tool-compass\nbrew install file-compass\nbrew install brain-dev\n\n# Or discover everything\npip install mcpt && mcpt search "."',
      },
    ],
  },

  sections: [
    {
      kind: 'features',
      id: 'what-we-build',
      title: 'Built for the agentic era',
      subtitle: 'Everything runs on your hardware. MCP-native from day one.',
      features: [
        {
          title: 'MCP servers',
          desc: '8+ production-grade MCP servers. Tool discovery, semantic file search, code analysis, voice synthesis, WebSketch IR, file operations, and more. Drop them into Claude Code, Cursor, or any MCP client.',
        },
        {
          title: 'Windows desktop apps',
          desc: '11+ desktop apps and VS Code extensions. WinUI 3 and .NET MAUI — native Windows experiences for AI inference, budgeting, training dynamics, typing practice, and voice. RTX 5080 / Blackwell optimized.',
        },
        {
          title: 'AI generation & training',
          desc: 'Headless ComfyUI client, LLM fine-tuning with GGUF export, audiobook generation from EPUB. All local. No subscription. Your GPU, your data, your models.',
        },
      ],
    },
    {
      kind: 'data-table',
      id: 'tools',
      title: 'Flagship tools by category',
      subtitle: '99 repos across MCP servers, desktop apps, AI tooling, and developer infrastructure.',
      columns: ['Category', 'Key Tools', 'Stack'],
      rows: [
        ['MCP Servers', 'Tool Compass · File Compass · Brain-Dev · WebSketch MCP · MCP Voice Soundboard', 'Python · TypeScript'],
        ['Desktop Apps', 'Dev-Op-Typer · NextLedger · ScalarScope · InControl · Attestia', 'C# · WinUI 3 · MAUI'],
        ['AI Generation', 'Comfy-Headless · Backpropagate · Audiobooker · ASPIRE-AI', 'Python · CUDA'],
        ['VS Code Extensions', 'CodeComfy · RunForge · MCP App Builder · WebSketch Extension', 'TypeScript'],
        ['Accessibility', 'A11y-Lint · A11y-Evidence-Engine · A11y-CI', 'Python · JavaScript'],
        ['Infrastructure', 'Nexus Suite · Attestia · Witness · ThrottleAI · Prov-Spec', 'Python · TypeScript'],
      ],
    },
    {
      kind: 'code-cards',
      id: 'get-started',
      title: 'Get started',
      cards: [
        {
          title: 'Discover tools',
          code: 'pip install mcpt\n\n# Search by what you need\nmcpt search "semantic code search"\nmcpt search "voice synthesis mcp"\nmcpt search "budget windows app"\n\n# Get details on any tool\nmcpt info file-compass',
        },
        {
          title: 'Add MCP servers',
          code: '# Quickest way — uvx (no install needed)\n# Works in Claude Code, Cursor, VS Code\n\n{\n  "mcpServers": {\n    "tool-compass": {\n      "command": "uvx",\n      "args": ["tool-compass"]\n    }\n  }\n}',
        },
        {
          title: 'WebSketch IR',
          code: '# Capture any web page as LLM-readable IR\nnpm install -g websketch-cli\n\n# Render a page to semantic primitives\nwebsketch render https://example.com\n\n# Use via MCP server\nnpx websketch-mcp',
        },
        {
          title: 'Community',
          code: '# Community health files live here:\n#   CODE_OF_CONDUCT.md\n#   CONTRIBUTING.md\n#   SECURITY.md\n#   SUPPORT.md\n#\n# Report issues on individual repos.\n# Org-wide discussions:\n# github.com/orgs/mcp-tool-shop-org/discussions',
        },
      ],
    },
    {
      kind: 'features',
      id: 'principles',
      title: 'Principles',
      subtitle: 'Every tool in the org is built to these standards.',
      features: [
        {
          title: 'Local-first',
          desc: 'Everything runs on your machine. No cloud required. No telemetry. Designed for RTX / Blackwell workstations — Ollama, CUDA, and local embeddings are first-class citizens.',
        },
        {
          title: 'MCP-native',
          desc: 'Tools compose through the Model Context Protocol. Works with Claude Code, Cursor, VS Code, and any MCP client. The protocol is the interface — not a vendor SDK.',
        },
        {
          title: 'Production-grade',
          desc: 'CI/CD on every repo. Tests, error handling, security hardening, semantic versioning. Accessibility baked in. WCAG compliance tooling. Low-vision-first CLI output. Both names are on every commit.',
        },
      ],
    },
  ],
};
