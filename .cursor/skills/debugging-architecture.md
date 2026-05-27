---
description: Standard procedure for detecting architectural drift, coupling issues, and violations across frontend layers
---

# Debugging Architecture Skill

This skill defines how to detect architectural violations, coupling issues, and system drift in an existing codebase.

It MUST align with:
- boundaries.mdc
- feature-architecture.mdc
- server-state.mdc
- hooks.mdc
- state.mdc
- ui-boundaries.mdc

It MUST NOT:
- change architecture rules
- introduce new patterns
- justify existing violations

---

# 1. Core Principle

Architecture issues are detected, not rationalized.

Rule:
- if structure violates rules, it is a defect, not a trade-off

---

# 2. Server-State Violations

Check for:

- direct fetch inside components
- duplicate API calls across features
- bypassing server-state layer
- uncontrolled cache updates
- inconsistent data sources

Rule:
- server-state must remain single source of truth for remote data

---

# 3. Hook Violations

Check for:

- hooks acting as business layer
- oversized orchestrator hooks
- hidden cross-hook dependencies
- duplicated logic across hooks
- hooks duplicating server-state logic

Rule:
- hooks must remain compositional, not systemic

---

# 4. State Violations

Check for:

- mirrored state (props → state duplication)
- duplicated server-state in local state
- derived values stored as state
- global mutable state without ownership

Rule:
- each state must have a single authority

---

# 5. Form Violations

Check for:

- forms directly calling APIs
- mixing server-state and form state
- uncontrolled sync loops between backend and UI
- business logic inside form components

Rule:
- forms are UI drafts, not system controllers

---

# 6. UI Boundary Violations

Check for:

- shared components depending on features
- feature UI leaking into shared layer
- layout containing business logic
- improper abstraction of reusable components

Rule:
- UI layers must strictly follow dependency hierarchy

---

# 7. Coupling Detection

Check for:

- cross-feature imports
- implicit shared state
- hidden dependency chains
- circular module relationships

Rule:
- features must remain isolated systems

---

# 8. Reactivity Violations

Check for:

- effect chains between hooks
- cascading state updates
- uncontrolled synchronization loops
- unstable dependency patterns

Rule:
- reactive flows must be predictable and linear

---

# 9. System Drift Detection

Indicators:

- increasing hook size over time
- repeated logic across features
- growing server-state bypass usage
- rising UI complexity without abstraction discipline

Rule:
- complexity growth must be intentional, not accidental

---

# 10. Anti-Pattern Summary

Forbidden:

- rationalizing violations as exceptions
- fixing symptoms instead of structure
- duplicating logic instead of abstracting correctly
- ignoring boundary rules under pressure