---
description: Standard procedure for building, structuring, and organizing UI composition across shared and feature layers
---

# UI Composition Skill

This skill defines how UI must be structured, composed, and separated between feature-specific and reusable components.

It MUST align with:
- ui-boundaries.mdc
- feature-architecture.mdc
- shared-layer.mdc
- hooks.mdc

It MUST NOT:
- contain business logic
- depend on server-state directly
- leak feature internals into shared layer

---

# 1. Core Principle

UI is a composition of responsibilities, not a collection of reusable components.

Rule:
- reuse is a consequence, not a goal

---

# 2. UI Layer Classification

All UI must belong to one of these layers:

## 2.1 Primitives Layer
- low-level UI components
- no business context
- fully reusable

Examples:
- buttons
- inputs
- typography
- layout primitives

---

## 2.2 Shared UI Layer
- reusable domain-agnostic components
- built on primitives only
- no feature knowledge

Rule:
- shared UI must remain context-free

---

## 2.3 Feature UI Layer
- domain-specific UI composition
- may include local hooks
- may include feature-specific state

Rule:
- feature UI owns domain presentation logic

---

## 2.4 Layout Layer
- structural composition only
- no domain logic
- no state ownership

Rule:
- layout defines structure, not behavior

---

# 3. Component Creation Decision Flow

Before creating a component:

1. Does a primitive already solve this?
2. Does shared UI already cover this abstraction?
3. Is this specific to a feature?
4. Only then create new component

Rule:
- creation must follow hierarchy, not preference

---

# 4. Reusability Discipline

Rules:

- do not abstract prematurely
- do not extract shared components without repetition evidence
- prefer duplication over incorrect abstraction

Rule:
- reuse must be justified by multiple real usages

---

# 5. Feature vs Shared Boundary

Rules:

- feature components must never leak into shared
- shared must never depend on features
- shared components must remain domain-free

Rule:
- direction of dependency must always be downward

---

# 6. Composition Rules

Rules:

- prefer small composable components over large monoliths
- avoid deeply nested JSX logic
- separate layout concerns from business rendering

Rule:
- composition must improve readability, not abstraction

---

# 7. Hook Usage in UI

Rules:

- feature UI may use feature hooks
- shared UI must not depend on feature hooks
- primitives must not use hooks unless purely visual

Rule:
- hooks belong to behavior, not presentation primitives

---

# 8. Anti-Patterns

Forbidden:

- shared components with feature logic
- feature UI leaking into shared layer
- over-abstraction of reusable components
- mixing layout and business logic
- components acting as mini-features