# Supply Chain & Provenance

How MCP Tool Shop artifacts are built, versioned, and distributed.

## Build Pipeline

All published artifacts are built in GitHub Actions CI:

| Ecosystem | Build Environment | Publish Trigger |
|-----------|------------------|-----------------|
| PyPI | `ubuntu-latest` | `release: [published]` |
| npm | `ubuntu-latest` | `release: [published]` |
| NuGet | `windows-latest` | `release: [published]` |
| Docker (GHCR) | `ubuntu-latest` | `release: [published]` |

No artifacts are built or published from developer machines.

## Version Tagging

- Tags follow SemVer: `vMAJOR.MINOR.PATCH`
- The tag must match the version in the canonical manifest (`pyproject.toml`, `package.json`, or `*.csproj`)
- Tags are created when a GitHub Release is published
- See [VERSIONING.md](VERSIONING.md) for SemVer rules

## Dependency Updates

- **GitHub Actions**: Dependabot (weekly, org-wide via `.github/dependabot.yml`)
- **npm/pip/NuGet**: Manual per-repo; Dependabot ecosystem scanning is opt-in per repo
- **Lock files**: `package-lock.json` (npm), no lock file standard for pip (pinned in CI via `pip install -e ".[dev]"`)

## Signing

**Current stance:** Not yet implemented.

Planned:

- [ ] Sigstore/cosign for container images
- [ ] npm provenance (`--provenance` flag in publish workflow)
- [ ] PyPI Trusted Publishers (already using OIDC where available)

## SBOM (Software Bill of Materials)

**Current stance:** Not yet generated.

Planned:

- [ ] `syft` or `trivy` SBOM generation in release workflows
- [ ] Attach SBOM as release artifact (SPDX or CycloneDX format)
- [ ] Container SBOM via `docker sbom` or build-time generation

## Reproducibility

- Python packages: built from `pyproject.toml` with pinned build backend
- npm packages: built from `package.json` + `package-lock.json`
- .NET packages: built from `*.csproj` with `Directory.Packages.props` for central package management
- Docker images: multi-stage builds with pinned base images (where feasible)

## Trusted Publishers

Repos that use PyPI Trusted Publishers (OIDC, no API token):

- Configured per-repo in PyPI project settings
- Publish workflow uses `pypa/gh-action-pypi-publish` with `permissions: id-token: write`

## Reporting Issues

If you find a supply chain concern (compromised dependency,
unexpected artifact contents, signing mismatch),
report it via [SECURITY.md](../SECURITY.md).
