# Branch Policy

## Default Branch

The default branch across every repo in `mcp-tool-shop-org` is **`main`**.

`master` is deprecated and must not receive new commits.

## Naming Conventions

| Branch type | Pattern | Example |
|---|---|---|
| Default | `main` | — |
| Feature | `feat/<slug>` | `feat/badge-normalization` |
| Fix | `fix/<slug>` | `fix/ci-paths-filter` |
| Docs | `docs/<slug>` | `docs/branch-policy` |
| Release | `release/v<semver>` | `release/v2.1.0` |

## Stale Branch Deletion Criteria

A branch qualifies for deletion when **all** of the following are true:

1. It is **not** the default branch (`main`).
2. No open PRs use it as a base or head.
3. No workflow file references it by name (check `.github/workflows/**`).
4. No README badge URLs contain `branch=<name>`.
5. No docs or scripts hardcode the branch name.
6. Its last commit is older than 30 days **or** its work has been merged.

## Deletion Procedure

```bash
# 1. Verify no open PRs reference the branch
gh pr list --repo mcp-tool-shop-org/REPO --head BRANCH --state open
gh pr list --repo mcp-tool-shop-org/REPO --base BRANCH --state open

# 2. Search for branch name in workflow files and docs
grep -r "BRANCH" .github/workflows/ README.md docs/

# 3. Delete remote branch
git push origin --delete BRANCH

# 4. Delete local tracking branch (if present)
git branch -d BRANCH
```

## Recovery

If a branch is deleted by mistake:

- **Last 90 days:** GitHub retains deleted branch refs. Navigate to
  the repo's branch list → "Restore" button, or use the
  [Events API](https://docs.github.com/en/rest/activity/events).
- **After 90 days:** Recreate from the last known tag or `main`:
  ```bash
  git checkout -b BRANCH v1.2.3   # from tag
  git checkout -b BRANCH main     # from current main
  ```

## Enforcement

The [Org Drift Guard](../.github/workflows/org-guard.yml) workflow
runs weekly and flags:

- Workflow files that trigger on `master`.
- README badges containing `branch=master`.
- Any `master` references in docs or scripts.
