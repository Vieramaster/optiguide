# Create Component Skill (UI Layer Spec) — Next.js / React / TypeScript / Tailwind — 2026

## Scope (IMPORTANT)

This document ONLY defines rules for building UI components.

It does NOT define:
- architecture
- data ownership
- server/client model
- feature structure

Those are defined in `frontend-architecture-spec.md`.

This file focuses strictly on:
how to build React UI components correctly inside that system

---

## Core UI Principles

- Components must be UI-first, not logic-first
- Components must be deterministic based on props
- Business logic does not belong in UI
- Composition is preferred over configuration-heavy components
- Keep components small, readable, and predictable

---

## Component Responsibility

A component is only responsible for:

- rendering UI
- handling UI state (visual/interaction state)
- emitting events upward (via callbacks)
- composing other components

A component must NOT:

- fetch data directly
- implement business rules
- own domain state
- perform mutations directly
- duplicate server state

---

## Component Types (Conceptual Model)

### Presentational Components

- Pure UI
- Stateless or minimal local UI state
- Fully driven by props

---

### Interactive Components

- Local UI state allowed
- Event handling allowed
- Must not contain business logic

---

### Composed Components

- Combine smaller components
- No domain logic
- Acts as UI composition layer

---

## Props Design Rules

- Props must be explicit and strongly typed
- Prefer simple, flat structures
- Avoid excessive boolean flags

### Preferred pattern:

```ts
type Props = {
  title: string
  description?: string
  onClick: () => void
}
```

## Anti-patterns

- “config object soup”
- deeply nested props
- boolean explosion (isX, hasX, enableX)

---

## State Rules (UI Layer Only)

### Allowed state:
- hover state
- open/close UI state
- local form input state
- animation state

### Not allowed:
- server state duplication
- derived business state
- shared application state
- mutation state logic

---

## useEffect Rules

### Allowed:
- DOM synchronization
- subscriptions
- event listeners
- integration with browser APIs

### Forbidden:
- data fetching
- derived state computation
- business logic execution

---

## Component Composition Rules

- Prefer composition over conditional rendering complexity
- Avoid deeply nested ternaries
- Extract subcomponents when readability improves

---

## Rendering Rules

- Components must be deterministic
- Same props → same UI output
- Avoid side effects during render

---

## React Compiler Era Rules (2026)

- Do NOT use memoization by default
- Avoid useMemo, useCallback, memo unless:
  - performance issue is measured
  - there is clear rendering bottleneck
- Prefer simplicity over premature optimization

---

## Styling Rules

- TailwindCSS is the primary system
- shadcn/ui is the base component system
- Use cn() for class composition

Rules:
- No inline styles unless absolutely necessary
- Maintain consistency with spacing system
- Avoid multiple styling paradigms

---

## Accessibility Rules (Mandatory)

- Use semantic HTML by default
- Ensure keyboard navigation support
- Inputs must always have labels
- Use ARIA only when semantic HTML is insufficient

---

## Event Handling Rules

- Event handlers must be prefixed with `handle`
- Event handlers must not contain business logic
- Event handlers must delegate upward when needed

### Example:

```ts
const handleClick = () => {
  onClick()
}
```

## Summary Rule

This layer is strictly UI-only, deterministic, and composable. No business logic, no data ownership, no side-effect-driven architecture.