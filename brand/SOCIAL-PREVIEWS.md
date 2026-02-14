# Social Preview Images

OG images for GitHub repos. Consistent 1280x640, dark theme, blue-purple accent.

## How to generate

1. Open `social-preview-template.svg` in a text editor
2. Replace `REPO_NAME`, `ONE_LINER_HERE`, `LANG`, `FRAME`
3. Open in browser, screenshot at 1280x640 (or use Inkscape/rsvg-convert)
4. Upload: GitHub repo > Settings > Social preview > Edit > Upload

```bash
# CLI export (requires rsvg-convert or Inkscape)
rsvg-convert -w 1280 -h 640 social-preview-template.svg -o preview.png
# or
inkscape social-preview-template.svg --export-type=png --export-width=1280 --export-height=640
```

## Per-repo copy

| Repo | REPO_NAME | ONE_LINER | LANG | FRAME |
|------|-----------|-----------|------|-------|
| InControl-Desktop | InControl | Privacy-first local LLM chat for Windows | C# | WinUI 3 |
| Attestia-Desktop | Attestia Desktop | Financial intent verification for Windows | C# | WinUI 3 |
| ThrottleAI-Desktop | ThrottleAI | Visual control surface for AI lease governance | C# | MAUI |
| mcp-voice-soundboard | Voice Soundboard | Text-to-speech MCP server for AI agents | TS | MCP |
| mcp-voice-engine | Voice Engine | Streaming TTS inference backend | TS | Kokoro |
| ConsensusOS | ConsensusOS | Multi-chain consensus control plane | Python | FastAPI |
| code-batch | CodeBatch | Content-addressed batch execution engine | Python | CLI |
| tool-scan | Tool Scan | Security scanner for MCP tools | Python | MCP |
| file-compass | File Compass | Semantic file search with HNSW indexing | Python | MCP |
| tool-compass | Tool Compass | Semantic MCP tool discovery by intent | Python | MCP |
| backpropagate | Backpropagate | Headless LLM fine-tuning with smart defaults | Python | PyTorch |
| headless-wheel-builder | Wheel Builder | Universal headless Python wheel builder | Python | Docker |

## Brand spec

- **Background**: `#0f172a` to `#1e293b` diagonal gradient (Slate 900-800)
- **Accent**: `#3b82f6` to `#8b5cf6` (Blue 500 to Violet 500)
- **Text primary**: `#f8fafc` (Slate 50)
- **Text secondary**: `#94a3b8` (Slate 400)
- **Badge fill**: `#1e3a5f` with `#60a5fa` text
- **Font**: Segoe UI / system-ui (falls back gracefully)
- **Top accent bar**: 4px gradient strip
- **Grid**: 40px squares at 3% opacity (texture, not noise)
