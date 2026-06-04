---
description: Decision guide for where state belongs in the layered architecture
---

# State Decision Skill

Where to place state in this codebase.

**Align with:**
- `.cursor/rules/architecture/state-and-reactivity.mdc`
- `.cursor/rules/architecture/forms.mdc`

---

# 1. Decision Tree

| Question | Answer → Owner |
|----------|----------------|
| Remote data from server? | `queries/` + RSC / `server.ts` |
| User typing in a form? | Form boundary (local); submit → hook → `logic/` |
| Domain workflow (filters, tabs, comparison)? | Feature `hooks/` |
| Pure function of other state? | Derived in hook via `logic/` — **do not store** |
| Transient UI (open, hover)? | Component local state |
| State of a stable business concept (e.g. Prescription form)? | `entities/[entity]/hooks/` — not global context by default |
| Belongs to one user flow only? | Feature `hooks/` |

---

# 2. Rules

- State as close as possible to usage
- Single owner per source of truth
- No props → state sync via effects without need
- Context for DI, not high-frequency reactive stores

---

# 3. Examples in Repo

| State | Location |
|-------|----------|
| Prescription form errors | `entities/prescription/hooks/use-prescription-form` |
| Lens comparison active tab | `features/tools/lens-thickness/hooks/use-lens-comparison` |
| Catalog filters | `features/tools/catalog/hooks/*` |
| Article slugs list | `features/articles/queries/get-article-static-params` |

---

# 4. Anti-Patterns

- Global state as default
- Duplicating server data in client state
- Storing derived business values
- Forms as app-wide state managers
