---
description: Standard procedure for designing, composing, and structuring React hooks in a scalable architecture
---

# Hook Composition Skill

This skill defines how hooks must be designed, composed, and structured to avoid logic leakage, over-orchestration, and hidden coupling.

It MUST align with:
- hooks.mdc
- reactivity-runtime.mdc
- server-state.mdc
- state.mdc
- feature-architecture.mdc

It MUST NOT:
- contain UI logic
- replace feature architecture
- duplicate server-state responsibilities

---

# 1. Core Principle

Hooks are composition units, not system owners.

Rule:
- hooks orchestrate behavior, they do not define domain truth

---

# 2. Responsibility Boundaries

Each hook must have a single clear responsibility:

Allowed responsibilities:
- state encapsulation
- behavior composition
- adapter over server-state
- local UI coordination

Forbidden:
- full feature orchestration
- business rule ownership
- cross-domain coordination without explicit orchestrator

Rule:
- one hook = one responsibility axis

---

# 3. Hook Classification Model

Hooks must be categorized:

## 3.1 Primitive Hooks
- local state
- simple behavior
- no external dependencies

## 3.2 Adapter Hooks
- wrap server-state
- transform data for UI
- normalize API responses

## 3.3 Orchestrator Hooks
- combine multiple hooks
- coordinate flows between hooks
- expose unified UI API

Rule:
- classification must be explicit in design intent

---

# 4. Orchestrator Hook Rules

Rules:

- only create orchestrators when multiple hooks must coordinate
- orchestrators must not contain business logic
- orchestrators must remain thin composition layers
- orchestrators must expose only UI-facing API

Flow:
primitive hooks → adapter hooks → orchestrator hook → UI

Rule:
- orchestrators coordinate, they do not own logic

---

# 5. Composition Rules

Rules:

- prefer composing small hooks over creating large ones
- avoid deeply nested hook dependency chains
- avoid hidden dependencies between hooks
- avoid circular hook relationships

Rule:
- composition must remain linear and predictable

---

# 6. State Ownership in Hooks

Rules:

- hooks may own local UI state
- hooks must not duplicate server-state
- hooks must not mirror props into state without transformation need
- derived state must not be stored

Rule:
- hooks own behavior, not data truth

---

# 7. Server-State Interaction

Rules:

- hooks must not bypass server-state layer
- hooks must consume server-state only through adapters
- hooks may transform server-state for UI consumption

Rule:
- server-state is external dependency, not internal state

---

# 8. Effects Usage in Hooks

Rules:

- avoid using effects for orchestration
- effects only for synchronization with external systems
- avoid effect chains between hooks
- avoid reactive loops between hooks

Rule:
- effects are side-effect boundary tools, not logic engines

---

# 9. API Design of Hooks

Rules:

- hooks must expose stable and predictable APIs
- prefer explicit return objects
- avoid leaking internal intermediate state
- avoid exposing implementation details

Rule:
- hook API is a contract, not implementation exposure

---

# 10. Anti-Patterns

Forbidden:

- hooks acting as full feature controllers
- hooks duplicating server-state logic
- deeply nested hook chains
- hidden inter-hook dependencies
- mixing UI state + server-state + business logic in one hook
- oversized “god hooks”