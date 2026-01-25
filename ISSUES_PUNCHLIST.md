# GitHub (Profile) — Comprehensive Punch List (GitHub Issues)

One issue per bullet. Acceptance criteria inline. P0/P1/P2 only.

## P0 — Must-fix (trust, correctness)

### Issue: Add automated link checking for README(s)
**Priority:** P0  
**Area:** docs correctness

**Problem:** Broken links/badges silently accumulate and reduce trust.

**Work:**
- Add CI job to check links in `profile/README.md` and `llms.txt`.
- Fail PRs on broken links (allow explicit allowlist).

**Acceptance criteria:**
- CI runs on PRs and pushes.
- A deliberately broken link causes CI to fail.
- Allowlist mechanism exists for known false positives.

---

### Issue: Add markdown linting to keep formatting consistent
**Priority:** P0  
**Area:** docs hygiene

**Problem:** Large READMEs drift in style, making changes harder to review.

**Work:**
- Add markdownlint CI.
- Add `.markdownlint.jsonc` with project-appropriate rules (line length, HTML allowed).

**Acceptance criteria:**
- CI fails on markdown style violations.
- README renders unchanged visually after auto-fixes (where applicable).

---

### Issue: Ensure profile README and llms.txt stay semantically consistent
**Priority:** P0  
**Area:** messaging consistency

**Problem:** Two top-level “front doors” can drift (tools listed, positioning, architecture).

**Work:**
- Define a single source-of-truth section list (Overview, Tools, Architecture, Getting Started, Support).
- Add a short checklist to PR template or CONTRIBUTING.

**Acceptance criteria:**
- Both files contain the same tool list and names.
- Both files share the same “what is this org” statement (allow minor formatting differences).
- PR checklist includes “Updated profile/README.md + llms.txt if applicable”.

---

## P1 — High leverage (growth, clarity, performance of onboarding)

### Issue: Add “Start here” section with a 3-step onboarding path
**Priority:** P1  
**Area:** onboarding

**Problem:** New users need a clear first action; long docs can overwhelm.

**Work:**
- Add a “Start here” block near the top:
  1) install prerequisites
  2) pick a tool (Tool Compass / File Compass / etc.)
  3) run a hello-world command

**Acceptance criteria:**
- README includes a 3-step path with concrete commands/links.
- A new user can reach a running example in <10 minutes.

---

### Issue: Add a “Compatibility” matrix (Python/Node/Docker) for the ecosystem
**Priority:** P1  
**Area:** supportability

**Problem:** Tools in the ecosystem have different requirements; unclear compatibility causes support churn.

**Work:**
- Add a small matrix listing required runtimes and optional extras.
- Link out to each tool’s detailed requirements.

**Acceptance criteria:**
- Matrix exists and includes at least: OS, Python, Node, Docker, GPU (if relevant).
- Each tool row links to its repo requirements section.

---

### Issue: Add a “Security & Trust” section summarizing defaults
**Priority:** P1  
**Area:** trust

**Problem:** Visitors need to know what runs locally vs what calls the network, and where secrets live.

**Work:**
- Add a short section:
  - local execution defaults
  - optional network calls
  - secrets handling guidance
  - recommended sandboxing for tools that execute code

**Acceptance criteria:**
- Security section exists in profile README.
- Includes at least one concrete “do this” recommendation for secrets + sandboxing.

---

## P2 — Maintainability (scale of docs + org)

### Issue: Add a lightweight PR template for docs changes
**Priority:** P2  
**Area:** process

**Work:**
- Add `.github/pull_request_template.md` with checkboxes:
  - links checked
  - llms.txt updated
  - screenshots updated (if any)
  - tool list consistent

**Acceptance criteria:**
- PR template is present and appears on new PRs.
- Checklist is minimal (<10 items).

---

### Issue: Add a “Tool Index” file that can be generated/updated easily
**Priority:** P2  
**Area:** docs structure

**Problem:** As tool count grows, manual badge lists become fragile.

**Work:**
- Add `TOOLS.md` containing a structured list (name, purpose, repo link, tags).
- Optionally add a script later to sync badges from TOOLS.md.

**Acceptance criteria:**
- TOOLS.md exists and lists all tools linked from profile README.
- Each entry includes a one-line description and canonical repo link.

