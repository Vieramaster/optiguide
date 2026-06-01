# Plan de implementación — `.cursor/rules/`

Estado: **implementado** en `.cursor/rules/` (reconciliación Phase 0–4). Validar con grep en `cursor-enforcement.mdc` §8.

---

## Decisiones finales adicionales (cerradas)

### D1 — cursor-enforcement: clasificación multi-responsabilidad

Reemplazar "exactly ONE category" por:
- Un cambio puede afectar múltiples responsabilidades.
- Identificar siempre: responsabilidad **primaria** + secundarias (opcional).
- No forzar categoría única cuando varias responsabilidades son legítimas.

### D2 — state-and-reactivity: sin capa server-state dedicada

- Este proyecto **no requiere** capa server-state/cache dedicada.
- Lecturas → `queries/`; mutaciones → `actions/`.
- Introducir caching solo cuando exista necesidad concreta.

### D3 — external services eliminado

Cross-domain reuse **solo** vía `entities/` y `shared/`. Nunca feature-to-feature directo.
Eliminar "external services" como mecanismo de reutilización en global-architecture §2.

### D4 — Política final de barrels

- Barrels **encouraged** (incl. `export *` en APIs públicas e internas).
- Evitar solo: circulares, colisiones de nombres, cadenas opacas multi-hop.
- Muchos exports **no** es razón para evitar barrels.
- Eliminar prohibición global de `export *` opaco en global-architecture §4.

---

## Plan de edición por archivo

### 1. `architecture/global-architecture.mdc` (SSOT — ampliación; conservar tono)

| Acción | Detalle | Corrige |
|--------|---------|---------|
| **Globs** | `+entities/**`, `+lib/**`, `+public/**`, `+docs/**`; `−src/**` | Cobertura; src inexistente |
| **§1 flujo** | Infra → `queries/`, `actions/`, `server/`, `lib/`; data flow sin "services" abstracto | services/ raíz |
| **§1.1** | Organización raíz (app, features, entities, shared, lib, public, docs) | Capas faltantes |
| **§1.2** | Grafo permitido + P3 `app→lib` + P8 `features↛features` | Deps incompletas |
| **§2 intro** | **D3:** cross-domain solo `entities/` + `shared/`; **eliminar** "external services" | §2 L39 actual |
| **§2.1** | Responsabilidades opcionales (+ `actions/`); **−Standard/UI-Heavy**; legacy mapping | Plantillas obsoletas |
| **§2.2** | P4 API pública; deep imports intra-dominio; **D4 barrels encouraged** + ejemplo `export *`; eliminar anti-opaco | §4 L106; P4 |
| **§2.3** | P1+P2: server.ts, server/, queries/, actions/ | Server ambiguo |
| **§2.4–2.5** | hooks/logic; P5 schemas; P7 utils | services/model |
| **§2.6–2.7** | Escalabilidad; reuse discipline | — |
| **§3.3** | `lib/` vendor-only; **eliminar** equivalencia `shared/utils/` | §3.3 actual |
| **§3.4** | P12: components/ui vs components/; image/ opcional | shared/ui |
| **§4** | Anti-patterns; **−** opaque barrel forbidden; **−** layouts/; **+§4.1** app/ | layouts; D4 |
| **§5.3** | Entity structure + index.ts + hooks/logic | entities |

**No reescribir** secciones no listadas si siguen válidas tras ampliación.

---

### 2. `architecture/ui-architecture.mdc` (cambios puntuales)

| Acción | Detalle | Corrige |
|--------|---------|---------|
| **Globs** | `−src/**`, `−components/**`; `+entities/**` | Globs obsoletos |
| **§1 jerarquía** | `shared/components/ui` → `entities/*/components` → features → `app/` + `shared/layout` | shared/ui; layouts |
| **§1.2–1.5, §2, §4** | Reemplazar todas las refs `shared/ui`, `entities/ui`, `layouts` | Rutas reales |
| **§1.3** | "orchestrates domain logic from `logic/` via hooks" (no "domain logic via hooks") | hooks vs logic |
| **§3 Forbidden** | Añadir: externalize to `logic/`, `formatters/`, `mappers/` (cross-ref global) | Sin delegación |

**No redefinir** hooks/logic más allá de §1.3; cross-ref global-architecture.

---

### 3. `architecture/cursor-enforcement.mdc`

| Acción | Detalle | Corrige |
|--------|---------|---------|
| **§1** | `shared/components/ui`; añadir **Entity change**; infra → `server/`, `queries/`, `actions/` | shared/ui; services/ |
| **§1 clasificación** | **D1:** reemplazar ONE category por primary + secondary responsibilities + ejemplo logic/hooks/types | D1 |
| **§2** | Explicit `features → features` forbidden; UI infra vía hooks → `logic/`/`queries/`/`actions/` | P8; services |
| **§4** | Añadir **Entity isolation check** (2+ features?) | entities ausente |
| **§6** | "2+ bounded contexts (features)" | vocabulario |

---

### 4. `architecture/state-and-reactivity.mdc`

| Acción | Detalle | Corrige |
|--------|---------|---------|
| **Globs** | `+entities/**`, `+entities/**/hooks/**` | entities hooks |
| **§3 L62** | "colocated with owning feature **or entity**" | solo features |
| **§3.1** | Orchestrators delegate rules to `logic/` | lógica en hooks |
| **§4 intro + §4.1** | **D2:** no dedicated server-state/cache required; use queries/actions; cache only when needed; suavizar "Do NOT bypass server-state layer" | §4 L80 |
| **§5 L104** | business logic → `logic/` (not services/model) | services/model |

---

### 5. `architecture/services.mdc`

| Acción | Detalle | Corrige |
|--------|---------|---------|
| **L11** | "reusable business logic inside `logic/`" (not services or actions) | services ambiguity |
| **L11–L14** | Side effects in `queries/`, `actions/`, `server/`; actions orchestrate only | P1 |
| **Scope L39** | `+entities/**/logic/`, `+**/mappers/`; remove `services/` folder from scope | services/ folder |
| **Nota breve** top | "services" = orchestration concept, not domain folder | naming file |

**Conservar intacto** pure return discipline (§35–223).

---

### 6. `architecture/forms.mdc`

| Acción | Detalle | Corrige |
|--------|---------|---------|
| **§2.1** | Forms in features **and entities**; form owns orchestration, rules in `logic/` | prescription entity |
| **§3** | Domain validation/schemas → `logic/`; generic → `shared/validation/` | P5 |

---

### 7. `architecture/naming.mdc`

| Acción | Detalle |
|--------|---------|
| **Globs** | `+entities/**` |

Sin cambios de cuerpo salvo necesidad.

---

### 8. `nextjs-and-performance.mdc`

| Acción | Detalle |
|--------|---------|
| **Globs** | `−src/app/**`; `+entities/**` |
| **§4** | Cross-ref: mutations → `actions/`, reads → `queries/`, optional `server.ts`; keep `app/api/` route handlers |

---

### 9. `architecture/styling-system.mdc`

| Acción | Detalle |
|--------|---------|
| **Globs** | `−src/**`, `−components/**`; `+entities/**` |

---

### 10. `ux/accessibility.mdc`, `ux/content.mdc`, `ux/animations.mdc`

| Acción | Detalle |
|--------|---------|
| **Globs** | `−components/**`; `+shared/components/**`, `+entities/**` |

---

### 11. No modificar (salvo grep post-edit)

- `architecture/typescript.mdc`

---

## Orden de ejecución

1. `global-architecture.mdc` (SSOT + D3 + D4)
2. `ui-architecture.mdc`
3. `cursor-enforcement.mdc` (D1)
4. `state-and-reactivity.mdc` (D2)
5. `services.mdc`
6. `forms.mdc`
7. Globs: naming, nextjs, styling, ux
8. Grep validación
9. Reporte inconsistencias residuales

---

## Checklist grep post-edición

```bash
rg "shared/ui|entities/\\*/ui|layouts/pages|Standard Feature|UI-Heavy|exactly ONE category|external services|Opaque barrel|equivalent to \`shared/utils/|belongs in \`services/|belongs in \`model/" .cursor/rules/
rg "\"src/\\*\\*\"" .cursor/rules/
rg "\"components/\\*\\*\"" .cursor/rules/
```

Legacy mapping (`model/`, `services/` as legacy) en global §2.1 OK.

---

## Alcance excluido

- Código producto
- `docs/`
- Nuevas rules
