---
description: Standard procedure for designing form state, validation, and submission flows in a layered architecture
---

# Form Design Skill

This skill defines how forms must be structured, how state is managed, and how server interaction is integrated without breaking architecture boundaries.

It MUST align with:
- forms.mdc
- state.mdc
- hooks.mdc
- server-state.mdc
- reactivity-runtime.mdc

It MUST NOT:
- directly own server truth
- bypass server-state layer
- duplicate business logic from backend

---

# 1. Core Principle

Forms are temporary user input containers, not sources of truth.

Rule:
- form state is always a draft state

---

# 2. State Classification in Forms

Every form state must be explicitly classified:

## 2.1 Draft state
- user input
- local to form
- mutable

## 2.2 Server snapshot
- initial values from server-state
- read-only baseline

## 2.3 Derived state
- computed from draft + snapshot
- never stored permanently

Rule:
- mixing state types is forbidden

---

# 3. Form Initialization Flow

Rules:

- initial values come from server-state via hooks
- forms must not fetch data directly
- snapshot is copied into draft state

Flow:
server-state → hook → form initialization → draft state

Rule:
- server-state is never mutated directly

---

# 4. Submission Flow

Rules:

- form submits through a controlled action layer (hook or service)
- submission must go through server-state mutation pipeline
- optimistic updates only if rollback exists

Flow:
form → hook → server-state mutation → cache update

Rule:
- form never communicates directly with API layer

---

# 5. Synchronization Rules

Rules:

- avoid syncing server-state into form after initialization unless explicitly required
- avoid bi-directional syncing between form and server-state
- avoid effects that continuously overwrite form state

Rule:
- forms are not reactive mirrors of server data

---

# 6. Validation Strategy

Rules:

- validation must be colocated with form logic or extracted into domain utilities
- avoid duplicating backend validation rules blindly
- validation errors must be clearly mapped to fields

Rule:
- validation is local UX logic, not backend replication

---

# 7. Hook Integration

Rules:

- forms must be controlled through hooks
- hooks manage submission lifecycle
- hooks expose loading/error states
- forms remain UI-driven only

Rule:
- form logic lives in hooks, not in components

---

# 8. Effects Usage

Rules:

- avoid effects for syncing server-state into forms
- effects only for external integrations if strictly needed
- avoid cascading form effects

Rule:
- forms must not depend on effect chains

---

# 9. Anti-Patterns

Forbidden:

- treating forms as source of truth
- syncing form state continuously with server-state
- mixing server-state and form state in same object
- direct API calls from forms
- business logic inside form components
- uncontrolled form resets driven by effects