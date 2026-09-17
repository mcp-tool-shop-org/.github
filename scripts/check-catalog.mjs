#!/usr/bin/env node
// Consistency gate: docs/ECOSYSTEM.md prose must agree with docs/catalog.yaml.
// Offline and fast. Run from the repository root; exits non-zero on disagreement.
//
//   node scripts/check-catalog.mjs
//
// This exists because the prose repeats facts the catalog owns, and repeated
// facts drift. It has caught a wrong count in the spec once already.

import fs from 'fs';
import { execFileSync } from 'child_process';

const CAT = 'docs/catalog.yaml';
const MD = 'docs/ECOSYSTEM.md';

for (const f of [CAT, MD]) {
  if (!fs.existsSync(f)) { console.error(`missing ${f} - run from the repository root`); process.exit(2); }
}

const cat = JSON.parse(execFileSync('npx', ['--yes', 'js-yaml', CAT], { encoding: 'utf8', shell: true }));
const md = fs.readFileSync(MD, 'utf8');
const problems = [];

// Slice a "#### <title>" section: from its heading to the next heading of any level.
function section(title) {
  const lines = md.split('\n');
  const start = lines.findIndex(l => l.trim() === '#### ' + title);
  if (start === -1) return null;
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) {
    if (/^#{1,6}\s/.test(lines[i])) { end = i; break; }
  }
  return lines.slice(start + 1, end).join('\n');
}

const known = new Set(cat.repos.map(r => r.name));

for (const area of cat.areas) {
  const body = section(area.title);
  if (body === null) { problems.push(`no "#### ${area.title}" section in ${MD}`); continue; }
  const listed = (body.match(/`[A-Za-z0-9._-]+`/g) || []).map(s => s.replace(/`/g, ''));
  const expected = cat.repos.filter(r => r.area === area.id).map(r => r.name);
  const missing = expected.filter(n => !listed.includes(n));
  const wrongArea = listed.filter(n => known.has(n) && !expected.includes(n));
  if (missing.length) problems.push(`${area.title}: in catalog but not in prose -> ${missing.join(', ')}`);
  if (wrongArea.length) problems.push(`${area.title}: prose lists repos of another area -> ${wrongArea.join(', ')}`);
  if (area.count !== expected.length) problems.push(`${area.title}: area count says ${area.count}, membership is ${expected.length}`);
}

// Numeric claims the prose spells out in words, which drift silently.
const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
const word = n => {
  if (n <= 20) return WORDS[n][0].toUpperCase() + WORDS[n].slice(1);
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  return n % 10 === 0 ? tens[Math.floor(n / 10)] : `${tens[Math.floor(n / 10)]}-${WORDS[n % 10]}`;
};
const alsoN = cat.repos.filter(r => r.also).length;
const instN = cat.repos.filter(r => r.install).length;
const srcN = cat.repos.filter(r => !r.install).length;
if (!md.includes(`${word(alsoN)} do.`)) problems.push(`prose "also" count is not ${alsoN} (${word(alsoN)})`);
if (!md.includes(`| ${instN} |`)) problems.push(`prose summary table does not carry the install count ${instN}`);
if (!md.includes(`${word(srcN)} repositories are source-only`)) problems.push(`prose source-only count is not ${srcN} (${word(srcN)})`);

// Structural invariants of the catalog itself.
const total = cat.counts.catalogued;
if (cat.repos.length !== total) problems.push(`counts.catalogued=${total} but there are ${cat.repos.length} entries`);
const areaSum = cat.areas.reduce((a, x) => a + x.count, 0);
if (areaSum !== total) problems.push(`area counts sum to ${areaSum}, expected ${total}`);

const seen = new Set();
for (const r of cat.repos) {
  if (seen.has(r.name)) problems.push(`${r.name}: listed more than once`);
  seen.add(r.name);
  // The load-bearing safety property: never publish an install command for a
  // package this organization does not own.
  if (r.install && !r.package) problems.push(`${r.name}: install command with no package block`);
  if (r.package && !r.install) problems.push(`${r.name}: package block with no install command`);
  if (r.visibility !== 'public') problems.push(`${r.name}: non-public entry in a public catalog`);
  if (!['shipped', 'in-development', 'archive'].includes(r.lane)) problems.push(`${r.name}: unknown lane "${r.lane}"`);
  if (!cat.areas.some(a => a.id === r.area)) problems.push(`${r.name}: unknown area "${r.area}"`);
  for (const a of r.also || []) {
    if (!cat.areas.some(x => x.id === a)) problems.push(`${r.name}: unknown "also" area "${a}"`);
    if (a === r.area) problems.push(`${r.name}: "also" repeats its primary area`);
  }
  for (const d of [...(r.depends_on || []), ...(r.consumers || [])]) {
    if (!known.has(d)) problems.push(`${r.name}: relation names "${d}", which is not in the catalog`);
  }
}

for (const p of cat.paths) {
  for (const s of p.starters) {
    if (!known.has(s)) problems.push(`path ${p.id}: starter "${s}" is not in the catalog`);
    else if (!cat.repos.find(r => r.name === s).starter) problems.push(`path ${p.id}: "${s}" is not flagged starter: true`);
  }
}

if (problems.length) {
  console.error('catalog/spec consistency: FAIL');
  for (const p of problems) console.error('  - ' + p);
  console.error('\nIf the organization changed, rerun: node scripts/build-catalog.mjs');
  process.exit(1);
}
console.log(`catalog/spec consistency: OK (${total} repos, ${cat.areas.length} areas, ${instN} installable, ${srcN} source-only)`);
