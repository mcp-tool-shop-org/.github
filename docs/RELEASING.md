# Releasing

How to ship a release for any MCP Tool Shop repo.

## Prerequisites

- All CI checks pass on `main`
- CHANGELOG.md is updated with the release notes under the new version heading
- Version bumped in the package manifest (`pyproject.toml`, `*.csproj`, `package.json`)

## Release Flow

```
1. Update CHANGELOG.md  (move Unreleased → vX.Y.Z)
2. Bump version in manifest
3. Commit: "release: vX.Y.Z"
4. Push to main
5. Create GitHub Release (tag: vX.Y.Z)
6. Publish workflows trigger automatically
```

### Step by Step

1. **Update CHANGELOG.md** — Move everything under `## Unreleased` into a new `## X.Y.Z - YYYY-MM-DD` section. Add a link diff at the bottom.

2. **Bump version** — Update the version string in the canonical manifest:
   - Python: `pyproject.toml` → `[project] version`
   - Node: `package.json` → `version`
   - .NET: `*.csproj` → `<Version>`

3. **Commit and push** — Single commit: `release: vX.Y.Z`

4. **Create GitHub Release** — Go to the repo's Releases page → Draft a new release:
   - Tag: `vX.Y.Z` (create on publish)
   - Title: `vX.Y.Z`
   - Body: copy from CHANGELOG.md
   - Check "Set as the latest release"

5. **Automated publishing** — The `release: [published]` trigger fires the publish workflow (PyPI / npm / NuGet / Docker).

## Rollback

If a release is broken:

1. **npm/PyPI**: yank the version (`npm deprecate` / `pip install --force` won't find it)
2. **NuGet**: unlist the version
3. **Docker**: delete the tag from GHCR
4. **GitHub**: delete the release and tag
5. **Hotfix**: create `vX.Y.Z+1` with the fix — don't reuse the old tag

## Pre-release Versions

Use SemVer pre-release suffixes:
- `1.0.0-alpha` → early development
- `1.0.0-beta` → feature-complete, testing
- `1.0.0-rc.1` → release candidate

GitHub Release: check "Set as a pre-release" for these.
