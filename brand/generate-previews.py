"""Generate social preview PNGs using Chrome headless screenshots of SVG."""
import subprocess
import shutil
import tempfile
from pathlib import Path

TEMPLATE = Path(__file__).parent / "social-preview-template.svg"
OUT_DIR = Path(__file__).parent / "previews"
OUT_DIR.mkdir(exist_ok=True)

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

REPOS = [
    ("InControl-Desktop", "InControl", "Privacy-first local LLM chat for Windows", "C#", "WinUI 3"),
    ("Attestia-Desktop", "Attestia Desktop", "Financial intent verification for Windows", "C#", "WinUI 3"),
    ("ThrottleAI-Desktop", "ThrottleAI", "Visual control surface for AI lease governance", "C#", "MAUI"),
    ("mcp-voice-soundboard", "Voice Soundboard", "Text-to-speech MCP server for AI agents", "TS", "MCP"),
    ("mcp-voice-engine", "Voice Engine", "Streaming TTS inference backend", "TS", "Kokoro"),
    ("ConsensusOS", "ConsensusOS", "Multi-chain consensus control plane", "Python", "FastAPI"),
    ("code-batch", "CodeBatch", "Content-addressed batch execution engine", "Python", "CLI"),
    ("tool-scan", "Tool Scan", "Security scanner for MCP tools", "Python", "MCP"),
    ("file-compass", "File Compass", "Semantic file search with HNSW indexing", "Python", "MCP"),
    ("tool-compass", "Tool Compass", "Semantic MCP tool discovery by intent", "Python", "MCP"),
    ("backpropagate", "Backpropagate", "Headless LLM fine-tuning with smart defaults", "Python", "PyTorch"),
    ("headless-wheel-builder", "Wheel Builder", "Universal headless Python wheel builder", "Python", "Docker"),
]

svg_text = TEMPLATE.read_text(encoding="utf-8")

for repo_slug, name, liner, lang, frame in REPOS:
    custom = svg_text
    custom = custom.replace("REPO_NAME", name)
    custom = custom.replace("ONE_LINER_HERE", liner)
    custom = custom.replace(">LANG<", f">{lang}<", 1)
    custom = custom.replace(">FRAME<", f">{frame}<", 1)

    # Write temp SVG
    tmp = OUT_DIR / f"_tmp_{repo_slug}.svg"
    tmp.write_text(custom, encoding="utf-8")

    out_path = OUT_DIR / f"{repo_slug}.png"

    # Use Chrome headless to screenshot
    result = subprocess.run([
        CHROME,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        f"--screenshot={out_path}",
        "--window-size=1280,640",
        "--hide-scrollbars",
        f"--force-device-scale-factor=1",
        str(tmp.resolve()),
    ], capture_output=True, text=True, timeout=30)

    tmp.unlink()

    if out_path.exists():
        print(f"  OK  {repo_slug}.png ({out_path.stat().st_size // 1024}KB)")
    else:
        print(f"  FAIL  {repo_slug}: {result.stderr[:200]}")

print(f"\nDone. Check {OUT_DIR}")
