# Create Feature Skill (2026 Pro Version)

## Architecture

All code must live inside:

features/<feature-name>/

Structure:

features/<feature-name>/
├── components/
├── hooks/
├── types/
├── utils/
├── constants/
├── services/
├── actions/
├── store/
└── index.ts

Feature = bounded domain context. No cross-feature coupling except shared primitives.

---

## Core Principles

- Feature-based architecture is mandatory
- Each feature is a bounded domain context
- Prefer composition over abstraction
- Keep locality of logic over artificial separation
- Avoid premature generalization
- React Compiler handles most rendering optimization; avoid manual memoization unless measurable need exists
- Server is the default execution environment

---

## Client / Server Model (Next.js App Router 2026)

- Server Components are default
- Client Components only when required:
  - interactivity
  - browser APIs
  - local ephemeral UI state
- Do not use client boundaries as architectural grouping
- Keep client scope minimal and localized

---

## Responsibility Rules

### actions/
- Server Actions only (mutation layer)
- Must contain no UI logic

### services/
- Isomorphic data access layer (fetch wrappers)
- No state, no UI, no side effects
- Must be safe for server and client usage

### store/
- Zustand only
- UI state only (ephemeral or feature-local shared state)
- No business logic
- No async side effects

### components/
- Pure UI components only
- No domain logic
- No data fetching logic

### hooks/
- Client orchestration logic
- Composition of UI + state + effects
- No direct business logic implementation

### utils/
- Pure functions only
- No side effects

### types/
- Domain types only (feature-scoped)

### constants/
- Static configuration only

No duplication of domain logic across layers.

---

## Data Ownership Model (IMPORTANT)

- Server owns truth (source of data)
- Client derives UI state
- Store holds ephemeral UI synchronization state only
- Services are transport layer only

No layer overrides server truth.

---

## Data Fetching Model

- Prefer Server Components for data fetching
- Use Server Actions for mutations
- Avoid client fetching unless strictly necessary
- Centralize API access in services/actions
- Define explicit caching and revalidation strategy per operation

---

## Mutation Model (CRITICAL)

- All mutations must go through Server Actions
- Every mutation must define its revalidation strategy explicitly
- Prefer optimistic updates only when UX-critical
- Avoid duplicating mutation logic in client layers

---

## State Management

- Local state first
- Zustand only for shared UI state inside feature
- No async logic inside store
- No side effects inside store
- No global store unless explicitly cross-feature domain

---

## Forms

- Prefer Server Actions over client-heavy forms
- React Hook Form only for complex or highly interactive forms
- Keep form state local by default
- Explicitly handle loading, success, error states
- Prefer progressive enhancement over full client-side forms

---

## Naming Conventions

- folders: kebab-case
- files: kebab-case (project-specific standard)
- components: PascalCase
- hooks: useX pattern
- functions: camelCase
- event handlers: handleX pattern

---

## File Creation Rules

- Do not over-split by default
- Co-locate related logic when it improves locality
- Split only when:
  - file exceeds reasonable complexity
  - logic is reused across multiple modules
  - separation improves readability or maintainability
- File name must reflect domain intent, not technical role

---

## Server / Client Boundary Rules

- Do not pass non-serializable values across boundaries
- No functions or class instances across Server → Client boundary
- Server Components must remain pure data providers
- Client Components must remain UI consumers

---

## React Compiler Rules (2026)

- Do not use memoization for performance by default
- Avoid premature useMemo / useCallback
- Optimize only when measurable performance issues exist
- Trust compiler-level optimizations first

---

## Anti-patterns

- Mixing responsibilities between actions/services/store
- Async logic inside Zustand stores
- Overuse of client components
- Premature abstraction
- Global state without explicit cross-feature justification
- Manual performance optimization without evidence

---

## Naming Constraints (Strict)

- File names must match their domain responsibility
- No generic naming (e.g. "component", "utils", "helper")
- Imports must be consistent with kebab-case file resolution

---

## Goal

Produce code that is:

- feature-isolated
- minimal but production-ready
- aligned with Next.js App Router (2026)
- server-first by default
- scalable without architectural overengineering
- compatible with React Compiler model