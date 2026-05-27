---
description: Standard procedure for integrating server state into features using a controlled cache and adapter layer
---

# Server State Integration Skill

This skill defines how features consume and interact with server-state in a controlled, consistent way.

It MUST align with:
- server-state.mdc
- hooks.mdc
- state.mdc
- feature-architecture.mdc
- reactivity-runtime.mdc

It MUST NOT bypass server-state abstraction.

---

# 1. Core Principle

Server state is never consumed directly by UI.

Rule:
- UI consumes only adapted data from hooks

Flow:
server-state → hook adapter → feature UI

---

# 2. Data Source Identification

Before integration:

- identify the backend resource
- determine if it already exists in server-state layer
- avoid duplicating fetch logic across features

Rule:
- one resource = one server-state entry

---

# 3. Server-State Access Rule

Rules:

- never call fetch/API directly in components
- never bypass server-state layer
- never replicate server data into local state manually

Rule:
- server-state is the single entry point for remote data

---

# 4. Hook Adapter Layer

All server-state consumption must go through a hook:

Responsibilities:
- expose clean UI-ready data
- handle loading/error mapping
- avoid leaking cache implementation details
- optionally transform raw server data into domain shape

Rule:
- hooks are adapters, not data owners

---

# 5. Caching Behavior Awareness

Rules:

- assume server-state may be stale by default
- do not force refetch unless required by invalidation rules
- avoid manual cache duplication in local state

Rule:
- cache is authoritative until invalidated

---

# 6. Mutation Handling

Rules:

- mutations must go through server-state layer
- UI must not mutate cached data directly
- optimistic updates are allowed only if rollback path exists

Flow:
UI → hook → server-state mutation → cache update

Rule:
- mutations must be centralized and traceable

---

# 7. Race Condition Prevention

Rules:

- avoid overlapping requests for same resource
- deduplicate concurrent fetches
- latest response must not overwrite newer state

Rule:
- request consistency > request speed

---

# 8. Loading & Error Mapping

Rules:

- loading state is scoped per request
- error state must not leak across unrelated queries
- hooks must normalize server-state lifecycle

Rule:
- UI never handles raw network state directly

---

# 9. Derived Data Strategy

Rules:

- derive transformed data inside hooks, not in UI
- avoid storing derived server data in state
- recompute derived values from cached source

Rule:
- derived data is computed, not stored

---

# 10. Anti-Patterns

Forbidden:

- direct fetch in components
- duplicating server state in local state
- mixing form state with server-state
- uncontrolled refetch loops
- storing API responses in multiple independent places
- bypassing server-state abstraction layer