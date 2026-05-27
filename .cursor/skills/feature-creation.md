---
description: Standard procedure for creating a new feature module aligned with architecture rules
---

# Feature Creation Skill

This skill defines the step-by-step process to create a new feature that is consistent with the system architecture.

It MUST align with:
- feature-architecture.mdc
- hooks.mdc
- state.mdc
- server-state.mdc
- ui-boundaries.mdc
- reactivity-runtime.mdc

It does NOT introduce new architectural concepts.

---

# 1. Feature Definition First

Before writing code:

- define the domain responsibility of the feature
- ensure it represents a single business capability
- avoid mixing unrelated workflows

Rule:
- one feature = one domain intent

---

# 2. Feature Boundary Check

Validate:

- does this feature already exist?
- is this truly a new domain?
- can this be part of an existing feature?

Rule:
- prefer extension over duplication

---

# 3. Internal Structure Model

A feature must be organized by responsibility, not by technical type:

Recommended structure:

- ui/ → presentational components
- hooks/ → feature-specific composition logic
- services/ → feature-level orchestration (if needed)
- types/ → domain types
- state/ → local feature state only if required

Rule:
- structure follows responsibility, not technology

---

# 4. State Assignment Decision

For every state inside the feature:

Decide explicitly:

- server-state → belongs to server-state.mdc layer
- local UI state → state.mdc rules
- derived state → computed, not stored
- form state → forms.mdc rules

Rule:
- no unclassified state is allowed

---

# 5. Server Data Integration

If the feature uses remote data:

- do NOT fetch directly in components
- use server-state layer as source of truth
- access data through hooks abstraction

Flow:
server-state → hook adapter → feature UI

Rule:
- server data must be normalized through abstraction layer

---

# 6. Hook Design Inside Feature

Rules:

- hooks must encapsulate single responsibility
- avoid oversized orchestrator hooks unless necessary
- hooks must not leak internal implementation to UI
- hooks act as adapters, not owners of domain truth

Rule:
- hooks are composition, not system logic

---

# 7. UI Composition Rules

Rules:

- UI must be built using ui-boundaries.mdc hierarchy
- feature UI must not leak into shared layer
- reusable UI must be promoted only if reuse is proven

Rule:
- UI reuse requires evidence, not assumption

---

# 8. Types Co-location

Rules:

- types must live close to feature domain
- avoid global type pollution
- avoid duplicating domain types across features

Rule:
- feature owns its domain model

---

# 9. Cross-Feature Isolation

Rules:

- features must not import each other directly
- shared behavior must go through shared-layer or hooks abstraction
- no hidden coupling allowed

Rule:
- features are independent systems

---

# 10. Anti-Patterns

Forbidden:

- mixing multiple domains inside a single feature
- direct server-state manipulation inside UI
- hooks acting as business layer
- duplicated state across layers
- cross-feature imports
- unclear state ownership