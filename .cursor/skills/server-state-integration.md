---
description: Standard procedure for integrating server reads and server boundaries in features
---

# Server State Integration Skill

How features integrate server-side data in this codebase.

**Align with:**
- `.cursor/rules/architecture/global-architecture.mdc` §2.3
- `.cursor/rules/architecture/state-and-reactivity.mdc` §4
- `.cursor/rules/nextjs-and-performance.mdc`

Reference: `features/articles/queries/`, `features/articles/server.ts`.

---

# 1. Core Principle

Server I/O lives in `queries/` (reads) and `actions/` (mutations). UI and client hooks do not call `fs` or ad-hoc fetch for critical paths.

---

# 2. Folder Roles

| Folder | Role |
|--------|------|
| `queries/` | Server reads, `generateStaticParams` helpers |
| `actions/` | `"use server"` mutations only |
| `server/` | Internal server constants/helpers |
| `server.ts` | Public server barrel of the domain |

---

# 3. Client / Server Barriers

- **`index.ts`**: client-safe only — no `fs`, no Node APIs
- **`server.ts`**: server-only exports
- `app/` pages (RSC) import from `@/features/[domain]/server`

Example:

```ts
import { loadArticleMdx, getArticleStaticParams } from "@/features/articles/server";
```

---

# 4. Consumption Flow

```
queries/ (server)
  → server.ts barrel
    → app/ RSC page OR server action
      → serialized props to client components
        → hooks (client) if needed
```

This project does **not** require a dedicated cache library unless a concrete need arises (`state-and-reactivity.mdc` §4).

---

# 5. Rules

- No fetch in presentation components
- Hooks orchestrate client behavior; server reads stay in RSC/queries
- Cache/invalidation must be explicit when introduced

---

# 6. Anti-Patterns

- Exporting queries from client `index.ts`
- `useEffect(() => fetch(...))` for data available at build/request time
- Mixing reads into `actions/`
