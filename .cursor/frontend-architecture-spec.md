# Frontend Architecture System Spec (Next.js / React / TypeScript) — 2026 Standard

## 0. Scope

This document defines the unified architecture rules for building frontend applications using:

- Next.js (App Router)
- React 19+ (React Compiler era)
- TypeScript strict mode
- TailwindCSS
- Server Components + Server Actions model

It unifies:
- Feature architecture
- Component design
- Data ownership
- Mutation model
- Client/server boundaries

---

## 1. System Principles

### Priority Order

1. Correctness
2. Data integrity
3. Maintainability
4. Locality of logic
5. Clarity
6. Performance (measured only)

---

### Core Rules

- Server is the default execution environment
- Client is an exception, not a default
- Features are isolated bounded contexts
- Avoid abstraction without proven reuse
- Prefer colocation over artificial separation
- Avoid duplication of domain logic across layers

---

## 2. Feature Architecture

### Structure

features/<feature-name>/

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

---

### Feature Rules

- Each feature is a bounded domain context
- No cross-feature imports except shared primitives
- Features must be self-sufficient
- No global coupling through shared business logic

---

### File Naming Conventions

- folders: kebab-case
- files: kebab-case
- components: PascalCase
- hooks: useX
- functions: camelCase
- handlers: handleX

---

## 3. Layer Responsibilities

### components/
- UI only
- No domain logic
- No data fetching
- No business rules

---

### hooks/
- Client orchestration logic
- Composition layer between UI and state
- No direct domain ownership

---

### services/
- Data access layer (fetch wrappers)
- Isomorphic (server/client safe)
- No state
- No UI logic

---

### actions/
- Server Actions only
- Mutation entry point
- Must define revalidation behavior

---

### store/
- Zustand only
- UI state only
- No business logic
- No async side effects

---

### utils/
- Pure functions only
- No side effects

---

### types/
- Domain models only

---

### constants/
- Static configuration only

---

## 4. Data Ownership Model (CRITICAL)

### Ownership Hierarchy

1. Server = source of truth
2. Client = derived UI state
3. Store = ephemeral UI synchronization state

---

### Rules

- Server data must never be duplicated as independent client truth
- Client state must be derived or UI-only
- Store must never contain business logic
- Services never override server truth

---

## 5. Server / Client Model

### Defaults

- Server Components are default
- Client Components only when required

---

### Client Component Conditions

Use only if:

- browser APIs required
- interactive UI state required
- DOM manipulation required
- client-only libraries required

---

### Boundary Rules

- No functions passed from Server → Client
- No class instances across boundary
- Only serializable data allowed
- Server Components must remain pure

---

## 6. Mutation Model (SERVER ACTIONS)

### Rules

- All mutations must go through Server Actions
- Server Actions are single source of mutation truth
- No client-side mutation duplication

---

### Revalidation

Each mutation must explicitly define:

- revalidatePath OR
- revalidateTag OR
- equivalent cache invalidation strategy

---

### Optimistic Updates

Allowed only if:

- UX-critical interaction
- rollback strategy is defined
- server remains source of truth

---

## 7. Data Fetching Model

- Server Components handle primary fetching
- Services abstract API access
- Client fetching is last resort

---

### Rules

- Avoid useEffect for data fetching
- Avoid client duplication of server data
- Centralize API logic in services/actions
- Define caching strategy explicitly per request

---

## 8. State Management Model

### Local First Principle

- Prefer local state always

---

### Zustand Rules

- Only for shared UI state within feature
- No business logic
- No async logic
- No side effects

---

### Global State

- Forbidden unless explicit cross-feature domain justification exists

---

## 9. Forms Model

- Prefer Server Actions over client forms
- Use React Hook Form only for complex cases
- Keep form state local
- Explicit handling of:
  - loading
  - success
  - error

---

## 10. Component Design Model

### Principles

- Single responsibility components
- UI should not contain domain logic
- Composition preferred over configuration-heavy props

---

### Props Rules

- Explicit TypeScript types required
- Avoid excessive boolean flags
- Prefer composable APIs over configuration-heavy components

---

## 11. useEffect Rules

### Allowed Use Cases

- external subscriptions
- browser event listeners
- synchronization with external systems

---

### Forbidden Use Cases

- derived state
- data transformation
- data fetching
- business logic

---

## 12. React Compiler Era Rules (2026)

- Do NOT use memoization by default
- Avoid useMemo/useCallback unless performance issue is measured
- Trust compiler optimization
- Optimize only when necessary and proven

---

## 13. Styling System

- TailwindCSS is primary system
- shadcn/ui as base component system
- Use cn() for class merging

---

## 14. Accessibility Rules

- Semantic HTML required
- Keyboard navigation required
- Inputs must have labels
- ARIA only when necessary

---

## 15. UI State Requirements

All meaningful UI flows must include:

- loading state
- error state
- empty state

Only implement if it adds user value.

---

## 16. Anti-patterns

- Monolithic components
- Business logic inside JSX
- useEffect used as architecture layer
- Async logic inside store
- Duplicating server/client state
- Overuse of client components
- Premature abstractions
- Global state without domain justification
- Manual optimization without evidence

---

## 17. Export Strategy

- Named exports preferred
- Default exports only for:
  - Next.js route pages
  - framework-required entry points

---

## 18. System Goal

This architecture must produce systems that are:

- feature-isolated
- server-first
- minimal but production-grade
- scalable without over-engineering
- aligned with React Compiler model (2026)
- consistent under team scaling