# Create Hook Skill (UI Logic Layer Spec) — Next.js / React / TypeScript — 2026

## 0. Scope (IMPORTANT)

This document defines rules ONLY for custom React hooks.

Hooks are a **UI orchestration layer**, not a domain or data ownership layer.

This file does NOT define:

- architecture
- server/client model
- feature structure
- data ownership rules

Those are defined in `frontend-architecture-spec.md`.

---

## 1. Core Hook Principles

- Hooks exist to orchestrate UI behavior
- Hooks must NOT own domain logic
- Hooks must remain client-side only
- Hooks must stay focused and composable
- Hooks should reduce component complexity, not introduce abstraction overhead

---

## 2. Hook Responsibility Model

A hook can be responsible for:

- UI state orchestration
- interaction logic (open/close, toggle, selection)
- browser API integration
- subscriptions and external synchronization
- async client-side behavior (when strictly necessary)

---

A hook must NOT be responsible for:

- server data fetching
- business rules or domain logic
- data ownership or persistence logic
- duplicating server state as client truth
- acting as a global state container

---

## 3. Data Ownership Rule (CRITICAL)

- Server owns truth (data source)
- Hooks only consume derived data
- Hooks must never redefine server state
- Hooks may transform UI representation, not domain truth

---

## 4. State Model

### Allowed state inside hooks:

- UI state (open/close, toggles)
- ephemeral interaction state
- input state
- local UI derivations

---

### Forbidden state:

- server state duplication
- domain state ownership
- global application state
- persistent business state

---

## 5. Effect Model (useEffect Rules)

### Allowed uses:

- DOM synchronization
- browser event listeners
- subscriptions
- integration with external browser APIs
- cleanup of side effects

---

### Forbidden uses:

- data fetching logic
- business logic execution
- derived state computation
- state derivation that can be computed synchronously

---

### Effect Rule:

useEffect is ONLY a synchronization mechanism, not a computation or architecture layer.

---

## 6. Async Logic Rules

- Async logic is allowed only for client-side interactions
- Must handle:
  - loading state
  - error state
  - cancellation (AbortController when needed)
- Must avoid race conditions
- Must not duplicate server mutation logic (Server Actions own mutations)

---

## 7. Server / Client Boundary Rule

- Hooks are strictly client-side
- Hooks MUST NOT call Server Actions directly as domain logic
- Hooks may trigger actions via callbacks passed from server/client boundary
- Hooks must assume data is already provided

---

## 8. State Management Integration

### Local state first

- Always prefer local hook state

---

### Zustand usage

- Allowed only for shared UI state within feature
- Must NOT contain business logic
- Must NOT contain async side effects
- Must NOT act as server-state replacement

---

## 9. Derived State Rules

- Derived state should NOT be stored in state
- Derived values should be computed inline or via memoized selectors only when necessary
- Avoid duplication of computed values

---

## 10. Performance Rules (React Compiler Era 2026)

- Do NOT use memoization by default
- Avoid `useMemo`, `useCallback` unless:
  - performance issue is measured
  - rendering bottleneck is proven
- Prefer simplicity over optimization
- React Compiler handles most optimization automatically

---

## 11. Hook Composition Rules

- Prefer multiple small hooks over a single large hook
- Hooks must remain single-responsibility
- Avoid deep hook chaining unless composition improves clarity
- Do not build abstraction layers without reuse necessity

---

## 12. Return API Design

Hooks must expose minimal and explicit APIs.

### Preferred:

- flat structure
- explicit naming
- stable references

Example shape:

```ts id="hook-return-api"
{
  (isOpen, open, close, toggle);
}
```

### Avoid:

deeply nested return objects
unclear abstractions
exposing internal implementation details

## Browser API Rules

When using browser APIs:

- always cleanup event listeners
- always cleanup timers and observers
- guard against SSR execution
- avoid direct window/document access outside safe effects

## Naming Rules

- Hooks must be prefixed with use
- Names must be domain-oriented

### Avoid generic names like:
    - useData
    - useHelper
    - useManager

### Good examples:

- useSidebarState
- useArticleFilters
- useDashboardMetrics
- useModalState

##  File Organization

- Hooks must live inside feature boundaries:
  features/<feature-name>/hooks/

- Extract shared hooks only when:
  - reused across multiple features
  - domain-agnostic behavior exists

---

##  Anti-patterns

- Hooks owning business logic
- Hooks duplicating server state
- Overusing useEffect for computation
- Global state misuse via hooks
- Over-abstraction of simple UI logic
- Large monolithic hooks
- Premature hook extraction without reuse

---

##  Output Requirements (When Generating Hooks)

When generating hooks:

- must be strictly typed (TypeScript)
- must include cleanup when needed
- must handle async states when applicable
- must maintain stable API surface
- must avoid unnecessary abstraction
- must be production-ready and UI-focused

---

##  Goal

Hooks must produce:

- clean UI orchestration logic
- minimal complexity inside components
- predictable and stable behavior
- strict separation from domain/business logic
- compatibility with Next.js App Router architecture (2026)
- React Compiler optimized patterns by default