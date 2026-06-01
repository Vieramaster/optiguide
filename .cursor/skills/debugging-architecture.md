---
description: Standard procedure for detecting architectural drift, coupling issues, and violations across frontend layers
---

# Debugging Architecture Skill

Detect violations and drift against current rules.

**Align with:**
- `.cursor/rules/architecture/global-architecture.mdc`
- `.cursor/rules/architecture/cursor-enforcement.mdc`
- `.cursor/rules/RULES-INDEX.mdc`

See: `docs/ARQUITECTURA.md` (anti-patterns section).

---

# 1. Core Principle

Structure violations are defects, not exceptions.

---

# 2. Dependency Violations

Check:

```bash
# Cross-feature
rg "from [\"']@/features/" features/ --glob "*.{ts,tsx}"

# shared → app layers (forbidden upward)
rg "from [\"']@/(features|entities|app)/" shared/ --glob "*.{ts,tsx}"

# entities → features
rg "from [\"']@/features/" entities/ --glob "*.{ts,tsx}"

# Deep imports from app
rg "@/features/[^/]+/(components|hooks|logic|queries|config)/" app/

# Deep entity imports
rg "@/entities/[^/]+/(components|types|hooks|logic)/" --glob "*.{ts,tsx}"
```

---

# 3. Barrel / Server-Client Violations

- Server-only (`fs`, queries) exported from client `index.ts`
- Missing `index.ts` on domain with external consumers
- `shared/actions/` folder usage

---

# 4. Hook Violations

- Business rules in hooks instead of `logic/`
- View assembly inline in orchestrator returns
- Effect chains / props → state mirroring
- God hooks replacing composition

---

# 5. Logic Violations

- `utils/` folders in features/entities
- Legacy `rules.ts` at entity root (→ `logic/`)
- Duplicated parse/validate across feature and entity

---

# 6. UI Violations

- Fetch in presentation components
- Domain copy in `shared/`
- Cross-layer imports (shared → features)
- Entry components outside `components/`

---

# 7. Form Violations

- Validation duplicated outside entity/feature `logic/`
- Forms as global state managers

---

# 8. Drift Indicators

- New deep imports from `app/`
- Growing cross-feature coupling
- Shared abstractions with single consumer
- Logic creeping into components/hooks

---

# 9. Fix Order

1. Critical: dependency direction, server/client barrels
2. Structural: move logic, entry components, entity legacy
3. Cleanup: dead code, premature shared abstractions
4. Cosmetic: relative vs absolute intra-feature imports

---

# 10. Anti-Patterns

- Rationalizing violations as one-offs
- Fixing symptoms (lint ignore) instead of structure
- Creating `shared/` abstractions without 2+ proven consumers
