---
description: Standard procedure for designing, composing, and structuring React hooks in a scalable architecture
---

# Hook Composition Skill

How hooks must be designed and composed in this codebase.

**Align with:**
- `.cursor/rules/architecture/state-and-reactivity.mdc` §3
- `.cursor/rules/architecture/logic-discipline.mdc`
- `.cursor/rules/architecture/global-architecture.mdc` §2.4

Reference implementation: `features/tools/lens-thickness/hooks/`.

---

# 1. Core Principle

Hooks **coordinate**; `logic/` **decides and transforms**.

---

# 2. Location

Hooks live in `features/[domain]/hooks/` or `entities/[entity]/hooks/`.

---

# 3. Classification

| Type | Role | Example |
|------|------|---------|
| Primitive | Single concern, local state | `useLensComparison` |
| Adapter | Shape data for UI | `usePrescriptionSubmit` |
| Orchestrator | Compose 3+ hooks + call logic | `useSimulatorOrchestrator` |
| View hook | Orchestrator + `build-*` | `useLensThicknessSimulatorView` |

---

# 4. Orchestrator Rules (§3.1 SSOT)

- Create when component uses more than 2 business hooks
- May call `logic/` and `build-*`; must not inline domain formulas
- Components consume one orchestrated/view hook
- View objects assembled in `logic/build-*`, not in orchestrator return literals

Flow:

```
primitive hooks → orchestrator → logic/build-* → view hook → component
```

---

# 5. State in Hooks

- Own local UI state only
- Do not mirror props into state
- Derived values: compute via `logic/`, do not store
- Effects: external sync only (browser, subscriptions)

---

# 6. Server Data

- Reads via `queries/` consumed through hooks in Server Components, or explicit server boundaries
- No `useEffect` + fetch for critical data
- UI components do not fetch directly

---

# 7. API Design

- Explicit return objects
- Stable UI-facing contract
- Avoid god hooks

---

# 8. Anti-Patterns

- Business rules inside hooks (→ `logic/`)
- Inline view assembly in orchestrator returns (→ `build-*`)
- Effect chains between hooks
- Hooks as full business layer
