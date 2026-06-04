---
description: Standard procedure for building, structuring, and organizing UI composition across shared and feature layers
---

# UI Composition Skill

UI structure and layer separation for this codebase.

**Align with:**
- `.cursor/rules/architecture/ui-architecture.mdc`
- `.cursor/rules/architecture/styling-system.mdc`
- `.cursor/rules/ux/accessibility.mdc`
- `.cursor/rules/ux/content.mdc`

---

# 1. Layer Hierarchy (strict)

```
shared/components/ui (shadcn)
  → shared/components (compositions)
    → entities/*/components
      → features/*/components
        → app/ + shared/layout
```

Dependencies flow **downward** only.

---

# 2. Layer Responsibilities

| Layer | Path | Rules |
|-------|------|-------|
| Primitives | `shared/components/ui/` | Domain-agnostic, token-based |
| Shared compositions | `shared/components/` | Reusable, no domain copy |
| Entity UI | `entities/*/components/` | UI bound to a business concept (e.g. `PrescriptionForm`) — placement: `global-architecture.mdc` §1.3 |
| Feature UI | `features/*/components/` | Domain presentation + entry |
| Layout | `shared/layout/`, `app/` | Structure; shell copy from `app/` props |

---

# 3. Before Creating a Component

1. Check `shared/components/ui/`
2. Check `shared/components/`
3. Check `entities/*/components/`
4. Check existing feature components
5. Create new only if none fit

---

# 4. Feature Entry Components

Root feature UI lives in `components/`:

- `features/tools/catalog/components/catalog.tsx`
- `features/tools/lens-thickness/components/lens-thickness-simulator.tsx`

Exported via feature `index.ts`.

---

# 5. Shared Copy Rule

`content.mdc` §1.1 — single locale:

- Domain copy → `features/*/constants/`, `messages.ts`
- Shell/navigation labels → `app/` passes props to `shared/layout`
- `ErrorPage`, `AppSidebar`: no hardcoded product strings in shared

---

# 6. Hooks in UI

- Feature components: feature hooks OK
- Shared components: no feature/entity hooks
- Primitives: visual-only hooks if needed

---

# 7. Anti-Patterns

- Business logic in components
- Shared importing features/entities
- Feature-specific design tokens
- Hardcoded hex / arbitrary Tailwind in features
- Entry components at feature root (use `components/`)
