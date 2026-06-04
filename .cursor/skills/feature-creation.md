---
description: Standard procedure for creating a new feature module aligned with architecture rules
---

# Feature Creation Skill

Process to create a feature consistent with the current architecture.

**Align with:**
- `.cursor/rules/architecture/global-architecture.mdc`
- `.cursor/rules/architecture/state-and-reactivity.mdc`
- `.cursor/rules/architecture/ui-architecture.mdc`
- `.cursor/rules/architecture/logic-discipline.mdc`
- `.cursor/rules/nextjs-and-performance.mdc`

See also: `docs/GUIA-DESARROLLO.md`, `docs/ARQUITECTURA.md`.

---

# 1. Feature Definition First

- One feature = one user-facing capability tied to a **route or user flow**
- Keep all code exclusive to that flow inside the feature
- Do not mix unrelated workflows in one feature

---

# 2. Feature Boundary Check

- Does this feature already exist?
- Can this extend an existing feature instead?
- Moving code out of the feature?
  - Stable business concept with identity (e.g. Prescription) → `entities/` — see `global-architecture.mdc` §1.3
  - Generic infrastructure without ophthalmic domain knowledge → `shared/`
  - Still belongs to this flow → **stay in the feature**
- **Forbidden:** extract to `entities/` for technical reuse alone

---

# 3. Internal Structure

Organize by responsibility (create folders only when needed):

```
features/[domain]/
├── index.ts              # Required — public client API
├── server.ts             # Optional — server-only barrel
├── components/           # UI including entry component
├── hooks/
├── logic/
├── types/
├── constants/
├── config/               # Sidebar, navigation
├── queries/              # Server reads
└── domain/               # Static catalogs (if applicable)
```

**Forbidden inside features:** `utils/`, `services/` (legacy → use `logic/`, `queries/`, `actions/`).

---

# 4. Public API

**`index.ts`** — client-safe exports only (components, hooks, types, config).

**`server.ts`** — queries/actions with Node/fs; never re-export from `index.ts`.

External consumers (`app/`, other layers) import **only** from these barrels.

---

# 5. State Assignment

| State type | Owner |
|------------|-------|
| Server data | `queries/` + `server.ts` |
| Feature workflow | `hooks/` |
| Form interaction | form boundary + entity/feature hooks |
| UI transient | local component state or UI hooks |
| Derived values | computed in hooks calling `logic/` — not stored |

---

# 6. Hook Design

- Small focused hooks; orchestrator when 3+ business hooks
- Orchestrator coordinates; business rules in `logic/`
- View assembly in `logic/build-*` (see `lens-thickness`)

---

# 7. UI

- Entry component in `components/` (not feature root)
- Built from `shared/components/ui` + shared compositions
- No fetch, no business rules in JSX

---

# 8. Cross-Feature Isolation

- No `features/A` → `features/B` imports
- Stable business concept → `entities/`; generic infra → `shared/` (see `global-architecture.mdc` §1.3)

---

# 9. Checklist

- [ ] `index.ts` created
- [ ] `server.ts` if server-only code exists
- [ ] Page in `app/` uses barrel import
- [ ] Sidebar config in `config/` if navigable
- [ ] `npm run build` passes

---

# 10. Anti-Patterns

- Multiple domains in one feature
- Deep imports from `app/`
- Server code in client barrel
- Business logic in components
- Cross-feature coupling
