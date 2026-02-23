# Versioning

All MCP Tool Shop repos follow [Semantic Versioning 2.0.0](https://semver.org/).

## Format

```text
MAJOR.MINOR.PATCH[-PRERELEASE]
```

## What Triggers Each Increment

### MAJOR (breaking)

- Removing or renaming a public API, CLI command, or MCP tool
- Changing the type signature of a public function in a breaking way
- Dropping support for a runtime version (Python 3.10, Node 18, .NET 8)
- Changing a default behavior that existing users depend on
- Schema changes that break existing stored data

### MINOR (feature)

- Adding a new CLI command, MCP tool, or public API method
- Adding a new optional parameter with a backward-compatible default
- New configuration options
- Performance improvements with no behavior change
- Adding support for a new runtime version

### PATCH (fix)

- Bug fixes that correct behavior to match documented intent
- Security patches
- Documentation fixes (if docs are versioned)
- Dependency updates that don't change public behavior
- Test-only changes

## Pre-release

- `X.Y.Z-alpha` — Experimental, API may change
- `X.Y.Z-beta` — Feature-complete, stabilizing
- `X.Y.Z-rc.N` — Release candidate, only bug fixes

## Rules

1. **Never reuse a version number.** Once published, a version is immutable.
2. **0.x.y is development.** Breaking changes are allowed in minor bumps during 0.x.
3. **Tag matches manifest.** The git tag `vX.Y.Z` must match the version in `pyproject.toml` / `package.json` / `*.csproj`.
4. **CHANGELOG is mandatory.** Every version bump must have a corresponding CHANGELOG entry.
