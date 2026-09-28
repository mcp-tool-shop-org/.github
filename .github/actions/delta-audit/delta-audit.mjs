#!/usr/bin/env node
// Delta dependency audit for pull requests.
//
// A lockfile-wide `npm audit --audit-level=high` on a PR fails on every
// advisory in the tree, including ones the PR did not touch -- so a one-package
// Dependabot bump fails on its unfixed siblings, and the gate blocks precisely
// the PRs that reduce the number it measures. That deadlocked 10 PRs across 4
// repos on 2026-09-17. The verdict is also a function of (lockfile, wall-clock):
// a green PR goes red with no commit when a new advisory publishes.
//
// This gate asks a different question: does the PR INTRODUCE an advisory at or
// above the threshold that the base branch did not already have? It answers
// from the npm registry directly, so it does not depend on GitHub's dependency
// graph -- which was found to be empty (SBOM 404, zero alerts against real
// criticals) in 69 of the org's 99 repos and is not repopulated by pushes.
//
// Usage (in a workflow, after checkout with fetch-depth: 0):
//   node delta-audit.mjs <lockfile-dir> <base-ref> [--level high]
// Exit 1 only on newly introduced advisories. Standing debt is printed but does
// not fail the PR; that belongs to the push-time audit on the default branch.
import { execFileSync, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const [dir = '.', baseRef = 'origin/main', ...rest] = process.argv.slice(2);
const LEVELS = ['info', 'low', 'moderate', 'high', 'critical'];
const level = rest.includes('--level') ? rest[rest.indexOf('--level') + 1] : 'high';
const floor = LEVELS.indexOf(level);
if (floor < 0) { console.error(`unknown --level ${level}`); process.exit(2); }

/** Advisory ids at or above the floor for one lockfile, keyed for a stable diff. */
function audit(lockDir) {
  // --json exits non-zero when vulnerabilities exist; that is data, not failure.
  const r = spawnSync('npm', ['audit', '--package-lock-only', '--json'], {
    cwd: lockDir, encoding: 'utf8', shell: process.platform === 'win32', maxBuffer: 64e6,
  });
  let j;
  try { j = JSON.parse(r.stdout); } catch {
    console.error(`npm audit produced no JSON in ${lockDir}:\n${(r.stderr || '').slice(0, 800)}`);
    process.exit(2);   // an unreadable audit is UNKNOWN, never "clean"
  }
  const found = new Map();
  for (const [name, v] of Object.entries(j.vulnerabilities ?? {})) {
    if (LEVELS.indexOf(v.severity) < floor) continue;
    for (const via of v.via ?? []) {
      if (typeof via !== 'object' || !via.url) continue;   // string = transitive pointer
      found.set(`${via.url}`, { name, severity: v.severity, title: via.title, range: v.range });
    }
  }
  return found;
}

// Materialise the base branch's lockfile + manifest into a scratch dir. Only
// those two files matter to --package-lock-only, so the checkout stays tiny.
const rel = path.relative(process.cwd(), path.resolve(dir)).split(path.sep).join('/');
const prefix = rel && rel !== '.' ? rel + '/' : '';
const scratch = fs.mkdtempSync(path.join(os.tmpdir(), 'delta-audit-'));
const show = (f) => execFileSync('git', ['show', `${baseRef}:${prefix}${f}`], { encoding: 'utf8', maxBuffer: 64e6, stdio: ['ignore', 'pipe', 'ignore'] });
// actions/checkout defaults to depth 1 of the PR head, so the base ref is not
// in the clone. Fetch just that ref at depth 1 rather than asking every
// consumer to set fetch-depth: 0 -- two files are all that is needed here.
const ensureBase = () => {
  try { show('package.json'); return; } catch { /* fall through to fetch */ }
  const m = /^(?:origin|[^/]+)\/(.+)$/.exec(baseRef);
  if (!m) return;
  spawnSync('git', ['fetch', '--depth=1', 'origin', `${m[1]}:refs/remotes/origin/${m[1]}`],
    { stdio: 'ignore', shell: process.platform === 'win32' });
};
ensureBase();
let baseHas = true;
for (const f of ['package.json', 'package-lock.json']) {
  try { fs.writeFileSync(path.join(scratch, f), show(f)); } catch { baseHas = false; }
}

const head = audit(path.resolve(dir));
const base = baseHas ? audit(scratch) : new Map();
fs.rmSync(scratch, { recursive: true, force: true });

const introduced = [...head].filter(([id]) => !base.has(id));
const standing = [...head].filter(([id]) => base.has(id));
const fixed = [...base].filter(([id]) => !head.has(id));

const line = ([id, a]) => `  ${a.severity.padEnd(8)} ${a.name.padEnd(28)} ${a.title ?? ''}\n           ${id}`;
console.log(`delta audit (${level}+) for ${prefix || './'} against ${baseRef}${baseHas ? '' : ' (no lockfile on base: everything counts as introduced)'}`);
if (fixed.length) console.log(`\nfixed by this PR (${fixed.length}):\n${fixed.map(line).join('\n')}`);
if (standing.length) console.log(`\nstanding on ${baseRef} already, NOT this PR's to fix (${standing.length}):\n${standing.map(line).join('\n')}`);
if (introduced.length) {
  console.log(`\n::error::this PR introduces ${introduced.length} ${level}+ advisor${introduced.length === 1 ? 'y' : 'ies'} not present on ${baseRef}:\n${introduced.map(line).join('\n')}`);
  process.exit(1);
}
console.log(`\nno new ${level}+ advisories introduced.`);
