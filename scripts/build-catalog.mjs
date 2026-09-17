#!/usr/bin/env node
// Regenerates docs/catalog.yaml from live GitHub and registry state.
//
//   node scripts/build-catalog.mjs            # write docs/catalog.yaml
//   node scripts/build-catalog.mjs --dry-run  # print a summary, write nothing
//
// Requires the `gh` CLI, authenticated. Takes two to three minutes: it probes
// npm and PyPI for every repository twice (by repository name, and again by the
// name each repository's own manifest declares).
//
// The one hand-maintained part is AREAS / CLASS / PATHS / RELATIONS below. When
// a repository is added, renamed or archived, edit CLASS and rerun. The script
// refuses to write if any public repository is missing from CLASS, so the
// catalog cannot silently fall behind the organization.
//
// Ownership rule, which is the whole point of the package fields: a package name
// existing on a registry proves nothing. Several repository names here collide
// with unrelated packages published by other people. A package is ours only if
// it is in the @mcptoolshop npm scope, or its npm repository URL points at this
// organization, or its PyPI metadata carries the organization publishing identity.

import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';

const ORG = 'mcp-tool-shop-org';
// Optional, and deliberately not committed: an npm maintainer account to accept as
// ours. The two rules below already cover every package this organization owns, so
// this stays empty in git and lives in the environment of whoever regenerates.
const NPM_MAINTAINER = process.env.NPM_MAINTAINER || null;
const PYPI_IDENTITY = 'mcp-tool-shop';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'docs', 'catalog.yaml');
const DRY = process.argv.includes('--dry-run');

const AREAS = [
  ['mcp-servers', 'MCP servers',
   'Servers and gateways that speak the Model Context Protocol, plus the tooling that tests them.'],
  ['training-and-datasets', 'Training and datasets',
   'The local-model lifecycle: fine-tuning, datasets, training-step proof, and hardware capacity planning.'],
  ['image-and-media-pipelines', 'Image and media pipelines',
   'Programmatic generation and verification of images, 3D, video and audio.'],
  ['agent-infrastructure', 'Agent infrastructure',
   'What a coding agent runs on: orchestration, context routing, knowledge substrates, verification, health.'],
  ['developer-tooling', 'Developer tooling',
   'Release gates, registries, site scaffolding and the machinery of shipping.'],
  ['games-and-game-tooling', 'Games and game tooling',
   'Shipped games and the authoring tools that produce them.'],
  ['ledger-and-verification', 'Ledger and verification',
   'Attestation, receipts and on-ledger proof for releases and financial truth.'],
];

// Primary area = the artifact a user installs it to get. `also` = a real secondary use.
const CLASS = {
  'tool-compass': ['mcp-servers', []],
  'ollama-intern-mcp': ['mcp-servers', []],
  'mcp-voice-soundboard': ['mcp-servers', ['image-and-media-pipelines']],
  'polyglot-mcp': ['mcp-servers', []],
  'plain-sight': ['mcp-servers', ['image-and-media-pipelines']],
  'ai-eyes-mcp': ['mcp-servers', ['image-and-media-pipelines']],
  'sensor-humor': ['mcp-servers', []],
  'mcp-tool-registry': ['mcp-servers', []],
  'mcp-stress-test': ['mcp-servers', []],
  'mcp-arcade': ['mcp-servers', ['games-and-game-tooling']],

  'backpropagate': ['training-and-datasets', []],
  'style-dataset-lab': ['training-and-datasets', ['image-and-media-pipelines']],
  'repo-dataset': ['training-and-datasets', []],
  'backprop-trace': ['training-and-datasets', ['ledger-and-verification']],
  'runforge-vscode': ['training-and-datasets', ['developer-tooling']],
  'bytefit': ['training-and-datasets', []],
  'gpu-container': ['training-and-datasets', []],
  'engine-room': ['training-and-datasets', []],
  'portlight-ships': ['training-and-datasets', ['image-and-media-pipelines']],

  'comfy-headless': ['image-and-media-pipelines', []],
  'comfy-preflight': ['image-and-media-pipelines', []],
  'sprite-foundry': ['image-and-media-pipelines', ['games-and-game-tooling']],
  'armature': ['image-and-media-pipelines', []],
  'audiobooker': ['image-and-media-pipelines', []],
  'facet': ['image-and-media-pipelines', ['games-and-game-tooling']],
  'asset-forge': ['image-and-media-pipelines', ['games-and-game-tooling']],
  'prompt-craft': ['image-and-media-pipelines', []],
  'codecomfy-vscode': ['image-and-media-pipelines', ['developer-tooling']],
  'sprite-foundry-packs': ['image-and-media-pipelines', ['games-and-game-tooling']],
  'fx-dub': ['image-and-media-pipelines', ['ledger-and-verification']],
  'vocal-synth-engine': ['image-and-media-pipelines', []],
  'ai-jam-sessions': ['image-and-media-pipelines', ['mcp-servers']],
  'stillpoint': ['image-and-media-pipelines', []],

  'role-os': ['agent-infrastructure', []],
  'loadout-os': ['agent-infrastructure', []],
  'prism-verify': ['agent-infrastructure', ['ledger-and-verification']],
  'claude-guardian': ['agent-infrastructure', []],
  'research-os': ['agent-infrastructure', []],
  'knowledge-core': ['agent-infrastructure', []],
  'multi-claude': ['agent-infrastructure', []],
  'websketch-ir': ['agent-infrastructure', []],
  'taste-engine': ['agent-infrastructure', []],
  'record-index': ['agent-infrastructure', []],
  'readouts': ['agent-infrastructure', []],
  'research-packs': ['agent-infrastructure', []],
  'claude-synergy': ['agent-infrastructure', ['training-and-datasets']],
  'db-cluster': ['agent-infrastructure', ['ledger-and-verification']],
  'synthesis': ['agent-infrastructure', []],

  'shipcheck': ['developer-tooling', []],
  'site-theme': ['developer-tooling', []],
  'repo-knowledge': ['developer-tooling', ['agent-infrastructure']],
  'registry-stats': ['developer-tooling', []],
  'npm-launcher': ['developer-tooling', []],
  'registry-sync': ['developer-tooling', []],
  'forkctl': ['developer-tooling', ['mcp-servers']],
  'brand': ['developer-tooling', []],
  'accessibility-suite': ['developer-tooling', []],
  'commandui': ['developer-tooling', []],
  'rig-bridge': ['developer-tooling', []],
  'LeaseGate-Lite': ['developer-tooling', []],
  'prototypes': ['developer-tooling', []],

  'ai-rpg-engine': ['games-and-game-tooling', []],
  'world-forge': ['games-and-game-tooling', []],
  'motif': ['games-and-game-tooling', []],
  'saints-mile': ['games-and-game-tooling', []],
  'roll': ['games-and-game-tooling', []],
  'ai-rpg-stage': ['games-and-game-tooling', []],
  'star-freight': ['games-and-game-tooling', []],
  'star-freight-client': ['games-and-game-tooling', []],
  'claude-rpg': ['games-and-game-tooling', []],
  'escape-the-valley': ['games-and-game-tooling', []],
  'portlight': ['games-and-game-tooling', []],
  'sovereign': ['games-and-game-tooling', []],
  'sovereignty': ['games-and-game-tooling', []],
  'glyphstudio': ['games-and-game-tooling', ['image-and-media-pipelines']],
  'storyboard-os': ['games-and-game-tooling', []],
  'mcp-arcade-cabinets': ['games-and-game-tooling', ['mcp-servers']],
  'ai-playtest': ['games-and-game-tooling', ['agent-infrastructure']],

  'attestia': ['ledger-and-verification', []],
  'xrpl-lab': ['ledger-and-verification', []],
  'xrpl-camp': ['ledger-and-verification', []],
  'repomesh': ['ledger-and-verification', []],
  'xrpl-creator-capsule': ['ledger-and-verification', []],
};

// Dual-use calls that were contested and are now settled. Ratified 2026-09-17.
// The reasoning is kept so the call is arguable later rather than looking arbitrary.
const CLASSIFICATION_NOTE = {
  'prism-verify': 'Dual-use, ratified 2026-09-17. You install it to adjudicate a model answer inside an agent loop; the signed receipts are how it proves a verdict, not why it exists. Agent infrastructure, also ledger.',
  'ai-rpg-engine': 'Ratified 2026-09-17. It is the simulation, not a title. Contributors looking for RPG tooling look under Games, so it stays here.',
  'mcp-arcade': 'Dual-use, ratified 2026-09-17. The product is GameDay testing over the JSON-RPC wire: the experiments look like games, but the oracle is the wire. MCP servers, also games.',
  'mcp-arcade-cabinets': 'Dual-use, ratified 2026-09-17. Playable cabinets that speak MCP because they replay tapes, not because they are a test harness. Games, also MCP servers.',
};

const PATHS = {
  'a-mcp-servers': ['tool-compass', 'ollama-intern-mcp', 'polyglot-mcp', 'mcp-voice-soundboard'],
  'b-ai-agents': ['role-os', 'loadout-os', 'research-os', 'repo-knowledge'],
  'c-game-tooling': ['world-forge', 'sprite-foundry', 'roll', 'motif'],
  'd-verification': ['shipcheck', 'prism-verify', 'attestia', 'synthesis'],
  'e-local-ai': ['ollama-intern-mcp', 'comfy-headless', 'backpropagate', 'tool-compass'],
};
const PATHTITLE = {
  'a-mcp-servers': 'A - MCP servers',
  'b-ai-agents': 'B - AI agents',
  'c-game-tooling': 'C - Game tooling',
  'd-verification': 'D - Verification',
  'e-local-ai': 'E - Local AI workflows',
};

const RELATIONS = {
  'tool-compass': { depends_on: ['mcp-tool-registry'], consumers: [] },
  'ollama-intern-mcp': { depends_on: [], consumers: [] },
  'role-os': { depends_on: ['knowledge-core', 'loadout-os'], consumers: [] },
  'loadout-os': { depends_on: [], consumers: ['role-os'] },
  'research-os': { depends_on: ['research-packs'], consumers: [] },
  'repo-knowledge': { depends_on: [], consumers: ['role-os'] },
  'world-forge': { depends_on: [], consumers: ['ai-rpg-engine'] },
  'sprite-foundry': { depends_on: ['comfy-headless'], consumers: ['sprite-foundry-packs'] },
  'roll': { depends_on: [], consumers: ['ai-rpg-engine'] },
  'motif': { depends_on: [], consumers: [] },
  'shipcheck': { depends_on: [], consumers: [] },
  'prism-verify': { depends_on: [], consumers: [] },
  'attestia': { depends_on: [], consumers: [] },
  'synthesis': { depends_on: [], consumers: [] },
  'comfy-headless': { depends_on: [], consumers: ['sprite-foundry', 'facet', 'armature', 'comfy-preflight'] },
  'backpropagate': { depends_on: [], consumers: ['backprop-trace'] },
  'mcp-voice-soundboard': { depends_on: [], consumers: [] },
  'polyglot-mcp': { depends_on: [], consumers: [] },
};

// Repositories that are public but are not products of this organization.
const EXCLUDE = {
  '.github': 'organization configuration and profile, not a product',
  'mcp-registry': 'a fork of the official Docker MCP registry, not a Tool Shop product',
};
const LANE_OVERRIDE = { 'prototypes': 'archive', 'sprite-foundry-packs': 'shipped' };
const NOTES = {
  'sprite-foundry-packs': 'Releases are asset-pack tags (pirate-raiders-3d-2-v1.0.0), not semver product releases.',
  'prototypes': 'The Archive lane itself: retired prototypes and reusable patterns.',
  'gpu-container': 'Five releases, all pre-release; no stable tag yet.',
  'mcp-tool-registry': 'Declares an @mcptoolshop npm name that has never been published. Consume from the repository.',
  'multi-claude': 'Declares an @mcptoolshop npm name that has never been published. Consume from the repository.',
};

const gh = (args, json = true) => {
  const out = execFileSync('gh', args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, shell: true });
  return json ? JSON.parse(out) : out;
};
const say = (...a) => console.error(...a);

async function getJSON(url) {
  try {
    const r = await fetch(url, { headers: { 'user-agent': 'mcp-tool-shop-catalog' } });
    if (!r.ok) return null;
    return await r.json();
  } catch { return null; }
}
async function getText(url) {
  try { const r = await fetch(url); return r.ok ? await r.text() : null; } catch { return null; }
}
async function pool(items, n, fn) {
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => {
    while (i < items.length) { const k = i++; await fn(items[k]); }
  }));
}

async function npmOwned(name) {
  const d = await getJSON('https://registry.npmjs.org/' + name.replace('@', '%40'));
  if (!d || !d['dist-tags'] || !d['dist-tags'].latest) return null; // absent or never published
  if (name.startsWith('@mcptoolshop/')) return name;
  const maint = (d.maintainers || []).map(m => m.name);
  const latest = d.versions?.[d['dist-tags'].latest];
  const repoUrl = String(latest?.repository?.url || d.repository?.url || '');
  if (repoUrl.includes(ORG)) return name;
  return (NPM_MAINTAINER && maint.includes(NPM_MAINTAINER)) ? name : null;
}
async function pypiOwned(name) {
  const d = await getJSON('https://pypi.org/pypi/' + name + '/json');
  if (!d || !d.info) return null;
  const blob = JSON.stringify(d.info);
  return (blob.includes(PYPI_IDENTITY) || blob.includes(ORG)) ? name : null;
}

async function main() {
  say('Collecting repositories...');
  const repos = gh(['repo', 'list', ORG, '--limit', '300', '--json',
    'name,visibility,isArchived,isFork,description,primaryLanguage,updatedAt']);

  const products = repos
    .filter(r => r.visibility === 'PUBLIC' && !r.isArchived && !r.isFork && !EXCLUDE[r.name])
    .map(r => r.name).sort((a, b) => a.localeCompare(b));

  const unclassified = products.filter(n => !CLASS[n]);
  const stale = Object.keys(CLASS).filter(n => !products.includes(n));
  if (unclassified.length || stale.length) {
    if (unclassified.length) say('\nERROR: public repositories missing from CLASS:\n  ' + unclassified.join('\n  '));
    if (stale.length) say('\nERROR: CLASS entries that are no longer public products:\n  ' + stale.join('\n  '));
    say('\nEdit CLASS in this script, then rerun. Refusing to write a partial catalog.');
    process.exit(1);
  }

  say(`Collecting releases for ${products.length} repositories...`);
  const q = 'query{' + products.map((n, i) =>
    `r${i}:repository(owner:"${ORG}",name:"${n}"){name homepageUrl licenseInfo{spdxId} releases{totalCount} latestRelease{tagName publishedAt}}`
  ).join('\n') + '}';
  const qf = path.join(ROOT, '.catalog-query.graphql');
  fs.writeFileSync(qf, q);
  let relRows;
  try {
    relRows = Object.values(gh(['api', 'graphql', '--field', 'query=@' + qf]).data).filter(Boolean);
  } finally { fs.unlinkSync(qf); }
  const rel = Object.fromEntries(relRows.map(r => [r.name, r]));

  say('Probing npm and PyPI (two passes per repository)...');
  const pkg = {};
  await pool(products, 8, async (n) => {
    const found = { npm: null, pypi: null };
    // Pass 1: the repository name.
    found.npm = await npmOwned('@mcptoolshop/' + n) || await npmOwned(n);
    found.pypi = await pypiOwned(n.toLowerCase());
    // Pass 2: the name the repository's own manifest declares. Catches packages
    // published under a different name (armature -> armature-studio, and others).
    if (!found.npm) {
      const t = await getText(`https://raw.githubusercontent.com/${ORG}/${n}/main/package.json`);
      if (t) { try { const j = JSON.parse(t); if (j.name && !j.private) found.npm = await npmOwned(j.name); } catch { /* not JSON */ } }
    }
    if (!found.pypi) {
      for (const f of ['pyproject.toml', 'setup.py']) {
        const t = await getText(`https://raw.githubusercontent.com/${ORG}/${n}/main/${f}`);
        const m = t && t.match(/^\s*name\s*=\s*["']([^"']+)["']/m);
        if (m) { found.pypi = await pypiOwned(m[1]); break; }
      }
    }
    pkg[n] = found;
  });

  const byName = Object.fromEntries(repos.map(r => [r.name, r]));
  const q2 = s => JSON.stringify(s == null ? '' : String(s));
  const isSemver = t => /^v?\d+\.\d+\.\d+$/.test(t || '');
  const laneOf = (n) => {
    if (LANE_OVERRIDE[n]) return LANE_OVERRIDE[n];
    const tag = rel[n]?.latestRelease?.tagName;
    return (isSemver(tag) && parseInt(String(tag).replace(/^v/, ''), 10) >= 1) ? 'shipped' : 'in-development';
  };
  const starters = new Set(Object.values(PATHS).flat());
  const pathOf = n => Object.entries(PATHS).filter(([, v]) => v.includes(n)).map(([k]) => k);

  const today = new Date().toISOString().slice(0, 10);
  const out = [];
  out.push('# MCP Tool Shop - machine-readable ecosystem catalog');
  out.push('# Companion to docs/ECOSYSTEM.md. Covers every PUBLIC, UNARCHIVED repository in the organization.');
  out.push('# Private repositories are never listed here.');
  out.push('# Generated by scripts/build-catalog.mjs. Do not hand-edit: rerun the script.');
  out.push('---');
  out.push('schema: 1');
  out.push('org: ' + ORG);
  out.push('generated: ' + today);
  out.push('provenance:');
  out.push('  repos: live gh repo list of ' + ORG);
  out.push('  releases: GitHub GraphQL latestRelease and releases.totalCount');
  out.push('  packages: >-');
  out.push('    registry.npmjs.org and pypi.org probed per repository, and again from each repository manifest.');
  out.push('    Ownership is confirmed against the @mcptoolshop npm scope and maintainer account, and against the');
  out.push('    PyPI publishing identity of this organization. A package name that exists on a registry but belongs');
  out.push('    to someone else carries no install command.');
  out.push('counts:');
  const counts = {
    public_total: repos.filter(r => r.visibility === 'PUBLIC').length,
    public_unarchived: repos.filter(r => r.visibility === 'PUBLIC' && !r.isArchived).length,
    public_archived: repos.filter(r => r.visibility === 'PUBLIC' && r.isArchived).length,
    catalogued: products.length,
    forks_excluded: repos.filter(r => r.isFork).length,
    org_config_excluded: 1,
  };
  for (const [k, v] of Object.entries(counts)) out.push('  ' + k + ': ' + v);
  out.push('excluded:');
  for (const [name, reason] of Object.entries(EXCLUDE)) {
    out.push('  - name: ' + name);
    out.push('    reason: ' + reason);
  }
  out.push('archived:');
  for (const r of repos.filter(r => r.visibility === 'PUBLIC' && r.isArchived).sort((a, b) => a.name.localeCompare(b.name))) {
    out.push('  - name: ' + r.name);
    out.push('    lane: archive');
  }
  out.push('areas:');
  for (const [id, title, desc] of AREAS) {
    out.push('  - id: ' + id);
    out.push('    title: ' + q2(title));
    out.push('    description: ' + q2(desc));
    out.push('    count: ' + products.filter(n => CLASS[n][0] === id).length);
  }
  out.push('paths:');
  for (const [id, list] of Object.entries(PATHS)) {
    out.push('  - id: ' + id);
    out.push('    title: ' + q2(PATHTITLE[id]));
    out.push('    starters: [' + list.join(', ') + ']');
  }
  out.push('sister_org:');
  out.push('  name: dogfood-lab');
  out.push('  url: https://github.com/dogfood-lab');
  out.push('  note: a separate organization, not an area of this one');
  out.push('  repos: [testing-os, study-swarm]');
  out.push('repos:');
  for (const n of products) {
    const g = byName[n];
    const r = rel[n] || {};
    const [area, also] = CLASS[n];
    const tag = r.latestRelease ? r.latestRelease.tagName : null;
    const { npm: npmP, pypi: pyP } = pkg[n];
    out.push('  - name: ' + n);
    out.push('    area: ' + area);
    if (also.length) out.push('    also: [' + also.join(', ') + ']');
    out.push('    lane: ' + laneOf(n));
    out.push('    visibility: public');
    out.push('    language: ' + (g.primaryLanguage ? g.primaryLanguage.name : 'null'));
    out.push('    license: ' + (r.licenseInfo ? r.licenseInfo.spdxId : 'null'));
    out.push('    summary: ' + q2((g.description || '').replace(/\s+/g, ' ').trim()));
    out.push('    url: https://github.com/' + ORG + '/' + n);
    if (r.homepageUrl) out.push('    docs: ' + r.homepageUrl);
    out.push('    releases: ' + (r.releases ? r.releases.totalCount : 0));
    out.push('    latest_release: ' + (tag ? q2(tag + ' (' + r.latestRelease.publishedAt.slice(0, 10) + ')') : 'null'));
    if (npmP || pyP) {
      out.push('    package:');
      if (npmP) out.push('      npm: ' + q2(npmP));
      if (pyP) out.push('      pypi: ' + q2(pyP));
      out.push('    install: ' + q2(npmP ? 'npx ' + npmP : 'pip install ' + pyP));
    } else {
      out.push('    package: null');
      out.push('    install: null');
    }
    if (starters.has(n)) {
      out.push('    starter: true');
      out.push('    paths: [' + pathOf(n).join(', ') + ']');
    }
    const relat = RELATIONS[n];
    if (relat) {
      if (relat.depends_on.length) out.push('    depends_on: [' + relat.depends_on.join(', ') + ']');
      if (relat.consumers.length) out.push('    consumers: [' + relat.consumers.join(', ') + ']');
    }
    if (CLASSIFICATION_NOTE[n]) out.push('    classification_note: ' + q2(CLASSIFICATION_NOTE[n]));
    if (NOTES[n]) out.push('    note: ' + q2(NOTES[n]));
  }

  const yaml = out.join('\n') + '\n';
  const withInstall = products.filter(n => pkg[n].npm || pkg[n].pypi).length;
  say('');
  for (const [id, title] of AREAS) say('  ' + String(products.filter(n => CLASS[n][0] === id).length).padStart(2) + '  ' + title);
  say(`\n  ${products.length} repositories, ${withInstall} installable, ${products.length - withInstall} source-only`);

  if (DRY) { say('\n--dry-run: not written.'); return; }
  fs.writeFileSync(OUT, yaml);
  say('\nWrote ' + path.relative(ROOT, OUT) + '. Now run: node scripts/check-catalog.mjs');
}

main().catch(e => { say('FAILED: ' + e.message); process.exit(1); });
