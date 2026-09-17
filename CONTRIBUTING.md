# Contributing

Thanks for helping improve MCP Tool Shop.

## Where to ask

- **Questions, setup help, troubleshooting** — [Discussions Q&A](https://github.com/orgs/mcp-tool-shop-org/discussions/categories/q-a)
- **Feature ideas and proposals** — [Discussions Ideas](https://github.com/orgs/mcp-tool-shop-org/discussions/categories/ideas)
- **Bugs with repro steps** — open an Issue in the relevant repo
- **Show off what you built** — [Discussions Show & Tell](https://github.com/orgs/mcp-tool-shop-org/discussions/categories/show-and-tell)

## Quick start

- Keep changes focused and small.
- Prefer links to authoritative docs.
- Update both `profile/README.md` and `llms.txt` when changing positioning, tool lists, or architecture diagrams.
- When a repository is added, renamed, archived, or moves between areas: edit the `CLASS` map in
  `scripts/build-catalog.mjs`, run `node scripts/build-catalog.mjs`, then
  `node scripts/check-catalog.mjs`. Do not hand-edit `docs/catalog.yaml` — it is generated, and the
  generator refuses to run if any public repository is missing from `CLASS`. `catalog.yaml` is the
  source of truth for classification; [docs/ECOSYSTEM.md](docs/ECOSYSTEM.md) is the prose over it.

## Docs quality gates (CI)

PRs run:

- Markdown lint
- Link checking
- Catalog consistency — `scripts/check-catalog.mjs`, which fails if
  [docs/ECOSYSTEM.md](docs/ECOSYSTEM.md) and `docs/catalog.yaml` disagree

If you need to temporarily ignore a flaky link, add it to `lychee.toml` exclusions with a short comment.

## Release / announcements

- Use consistent naming: **MCP Tool Shop**, and tool names as in badges.
- Keep badge links current and consistent with [docs/ECOSYSTEM.md](docs/ECOSYSTEM.md).
