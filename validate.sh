#!/usr/bin/env bash
# validate.sh — Local org docs integrity checker
# Runs the same checks as org-guard.yml without needing CI.
# Usage: bash validate.sh

set -euo pipefail

RED='\033[0;31m'
YELLOW='\033[0;33m'
GREEN='\033[0;32m'
NC='\033[0m'

errors=0
warnings=0

pass()  { echo -e "  ${GREEN}✓${NC} $1"; }
warn()  { echo -e "  ${YELLOW}⚠${NC} $1"; warnings=$((warnings + 1)); }
fail()  { echo -e "  ${RED}✗${NC} $1"; errors=$((errors + 1)); }

cd "$(dirname "$0")"

echo "=== Required Org Docs ==="
for doc in SUPPORT.md SECURITY.md CODE_OF_CONDUCT.md CONTRIBUTING.md LICENSE; do
  if [ -f "$doc" ]; then
    pass "$doc exists"
  else
    fail "Missing required doc: $doc"
  fi
done

echo ""
echo "=== SUPPORT.md Discussions Links ==="
if [ -f "SUPPORT.md" ]; then
  count=$(grep -c '/discussions' SUPPORT.md || true)
  if [ "$count" -gt 0 ]; then
    pass "SUPPORT.md contains $count Discussions link(s)"
  else
    warn "SUPPORT.md has no /discussions links"
  fi
fi

echo ""
echo "=== Brand Assets ==="
for doc in brand/README.md brand/palette.md brand/og/manifest.json; do
  if [ -f "$doc" ]; then
    pass "$doc exists"
  else
    warn "Missing brand asset: $doc"
  fi
done

echo ""
echo "=== Release Policy Docs ==="
for doc in docs/RELEASING.md docs/VERSIONING.md docs/MAINTENANCE.md docs/BRANCH_POLICY.md docs/BADGES.md; do
  if [ -f "$doc" ]; then
    pass "$doc exists"
  else
    warn "Missing release doc: $doc"
  fi
done

echo ""
echo "=== Workflow Checks ==="
for f in .github/workflows/*.yml; do
  [ ! -f "$f" ] && continue
  name=$(basename "$f")

  # Skip org-guard itself
  [ "$name" = "org-guard.yml" ] && continue

  # Master branch references
  if grep -qE 'branches:.*master' "$f" 2>/dev/null; then
    fail "$name references 'master' branch — use 'main'"
  fi

  # Action version floors
  if grep -qE 'actions/checkout@v[1-5]' "$f" 2>/dev/null; then
    warn "$name: checkout below v6"
  fi
  if grep -qE 'actions/setup-python@v[1-5]' "$f" 2>/dev/null; then
    warn "$name: setup-python below v6"
  fi
  if grep -qE 'actions/setup-node@v[1-3]' "$f" 2>/dev/null; then
    warn "$name: setup-node below v4"
  fi
  if grep -qE 'actions/setup-dotnet@v[1-3]' "$f" 2>/dev/null; then
    warn "$name: setup-dotnet below v4"
  fi
  if grep -qE 'codecov/codecov-action@v[1-4]' "$f" 2>/dev/null; then
    warn "$name: codecov-action below v5"
  fi

  # Concurrency group
  if ! grep -q 'cancel-in-progress' "$f" 2>/dev/null; then
    warn "$name: missing concurrency cancel-in-progress"
  fi

  pass "$name passed remaining checks"
done

echo ""
echo "=== Internal Link Check ==="
broken=0
shopt -s nullglob
for md in *.md profile/*.md docs/*.md brand/*.md; do
  [ ! -f "$md" ] && continue
  # Extract relative markdown links like [text](path)
  while IFS= read -r link; do
    # Skip URLs, anchors, and mailto
    [[ "$link" =~ ^https?:// || "$link" =~ ^# || "$link" =~ ^mailto: ]] && continue
    # Strip anchor from link
    target="${link%%#*}"
    [ -z "$target" ] && continue
    if [ ! -f "$target" ] && [ ! -d "$target" ]; then
      warn "$md → broken link: $link"
      broken=$((broken + 1))
    fi
  done < <(grep -oP '\]\(\K[^)]+' "$md" 2>/dev/null || true)
done
if [ "$broken" -eq 0 ]; then
  pass "No broken internal links"
fi

echo ""
echo "==============================="
if [ "$errors" -gt 0 ]; then
  echo -e "${RED}FAIL${NC}: $errors error(s), $warnings warning(s)"
  exit 1
elif [ "$warnings" -gt 0 ]; then
  echo -e "${YELLOW}WARN${NC}: $warnings warning(s), 0 errors"
  exit 0
else
  echo -e "${GREEN}PASS${NC}: All checks passed"
  exit 0
fi
