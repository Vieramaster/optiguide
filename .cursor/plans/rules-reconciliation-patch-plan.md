# RULES RECONCILIATION PATCH PLAN

**Alcance:** Solo `.cursor/rules/**`, alineación con `docs/**` (no código de aplicación).  
**Rama de contexto:** `migration/rules-architecture-alignment`  
**Relacionado:** [rules-implementation-spec.md](rules-implementation-spec.md) (ejecución técnica parcial ya especificada).

**Estado:** Implementado (Phase 0–4) — ver commit en `.cursor/rules/` y `docs/ARQUITECTURA.md`.

---

## 1. Executive Summary

| Métrica | Valor |
|---------|-------|
| **Salud del sistema de reglas** | **6.0 / 10** |
| **Estabilidad** | Media-baja (SSOT fuerte en teoría, referencias rotas y gaps de enforcement en práctica) |
| **Riesgo** | **Alto** para agentes humanos/IA: reglas contradictorias, ejemplos obsoletos, y `alwaysApply` desigual generan drift en generación de código |

**Diagnóstico:** El núcleo (`global-architecture`, `ui-architecture`, `state-and-reactivity`) está bien unificado conceptualmente. La inestabilidad viene de (1) **deuda de migración** (`features/prescription` → `entities/prescription` no reflejada en ejemplos), (2) **referencias a MDC eliminados**, (3) **solapamiento hooks vs `logic/` vs `services` pure-return**, (4) **cero enforcement automático**, y (5) **`docs/ARQUITECTURA.md` desautorizado pero aún citado por equipos**.

---

## 2. Conflict Matrix

| ID | Tipo | Regla A | Regla B / Realidad | Capa | Resolución propuesta |
|----|------|---------|-------------------|------|---------------------|
| C01 | rule vs rule | `state-and-reactivity` §2.3: derived state en hooks/orchestrators | `services` §37–42: pure return en `build-*` en `logic/` | Data flow / React | Precedence: orchestrators **invocan** `logic/`; cálculos de dominio en `build-*`, no en return de hook |
| C02 | rule vs rule | `global-architecture` §2.4: hooks no calculan dominio | `state-and-reactivity` §2.3: orchestrators centralizan derived state | Hooks | Aclarar: orchestrator puede **llamar** `logic/`, no **implementar** reglas |
| C03 | rule vs rule | `naming.mdc`: arrow en helpers | shadcn `function` en `shared/components/ui` | Naming | Excepción explícita: primitivos vendor |
| C04 | rule vs rule | `content.mdc` + global §3.2: no copy localizado en shared | Producto monolingüe español; copy en shared/layout | Shared / UX | Añadir § "Product copy exception" o mover copy a `app/` props |
| C05 | rule vs rule | `global-architecture` §actions: solo `"use server"` | `cursor-enforcement` §1: infra incluye `shared/actions/` | Architecture | Renombrar carpeta en reglas a `shared/client-actions/` o prohibir nombre `actions/` sin directive |
| C06 | rule vs code | global §2.2: `index.ts` requerido por feature/entity | `features/articles` sin `index.ts`; `entities/prescription` sin `index.ts` | Architecture | Regla correcta; marcar código como **transitional debt** en global §2.2 nota |
| C07 | rule vs code | global §3.2: shared sin dominio | `ArticleItem`, `ArticlesNav`, `toolsSidebar` en shared/layout | Shared | Regla correcta; código viola — no relajar regla |
| C08 | rule vs code | global §2.4: validación en `logic/` | `entities/prescription/rules.ts` en raíz | Entities | Regla correcta; nota de migración permitida |
| C09 | rule vs doc | global: `entities/prescription` | `docs/ARQUITECTURA.md`: `features/prescription` | Documentation | Parche docs en Phase 0 (no SSOT) |
| C10 | rule vs doc | articles `index.ts` en docs | No existe en repo | Documentation | Igual |
| C11 | rule vs tooling | Prohibición cross-layer imports | ESLint solo `import/order` | Enforcement | Añadir `no-restricted-imports` (plan separado eslint, no producto) |
| C12 | meta | `typescript.mdc` "It does NOT define: boundaries.mdc" | Archivo no existe | Meta | Reemplazar refs |
| C13 | meta | UX rules → `design-tokens.mdc`, `hooks.mdc` | No existen; existe `styling-system.mdc` | Meta | Reemplazar refs en 4 archivos |
| C14 | precedence | `forms.mdc` `alwaysApply: false` | Formularios críticos (prescription, catalog) | Application | Subir a `true` o globs `entities/**/components/*form*` |
| C15 | precedence | `nextjs-and-performance` `alwaysApply: false` | App Router es stack principal | Next.js | `alwaysApply: true` o merge §1–2 en global §4.1 |
| C16 | rule vs code | global: deep imports prohibidos externamente | 8+ deep imports `@/entities/prescription/...` | Architecture | Mantener regla; documentar grace period hasta barrels |
| C17 | rule vs rule | `services` redundant intermediate forbidden | `state` permite `return orchestratorState` variable | Style | Acotar anti-patrón solo a `logic/`/`build-*` |
| C18 | structural | `features/[domain]/` | `features/tools/catalog` (path anidado) | Architecture | Añadir §2.1 nota: `features/tools/*` son dominios hermanos, no un feature padre |

---

## 3. Rule Classification Inventory

Clasificación por archivo **único** (13 MDC; duplicados Windows path son el mismo archivo).

| Archivo | Clase | Notas |
|---------|-------|-------|
| [`architecture/global-architecture.mdc`](../rules/architecture/global-architecture.mdc) | **A + C** | SSOT sólido; ejemplo L142 `@/features/prescription` **CONFLICTING**; §2.1 legacy OK como **LEGACY** |
| [`architecture/ui-architecture.mdc`](../rules/architecture/ui-architecture.mdc) | **A** | Alineado con código y global |
| [`architecture/state-and-reactivity.mdc`](../rules/architecture/state-and-reactivity.mdc) | **A + D** | Correcto; ambigüedad orchestrator vs `logic/` (**C01**) |
| [`architecture/services.mdc`](../rules/architecture/services.mdc) | **A + D + E** | Pure-return **E**; nombre "services" **D**; reconciliación hooks ya parcial en §217 |
| [`architecture/typescript.mdc`](../rules/architecture/typescript.mdc) | **A + C** | Cuerpo **A**; cabecera refs rotas **C** |
| [`architecture/naming.mdc`](../rules/architecture/naming.mdc) | **A + D** | Falta excepción shadcn **D** |
| [`architecture/styling-system.mdc`](../rules/architecture/styling-system.mdc) | **A** | Coherente con Tailwind v4 |
| [`architecture/cursor-enforcement.mdc`](../rules/architecture/cursor-enforcement.mdc) | **A + C** | `shared/actions/` en §1 **C** con global §2.3 |
| [`architecture/forms.mdc`](../rules/architecture/forms.mdc) | **A + D** | Contenido alineado; `alwaysApply: false` reduce autoridad **D** |
| [`nextjs-and-performance.mdc`](../rules/nextjs-and-performance.mdc) | **A + D + E** | Correcto pero no siempre aplicado; RSC-first **E** |
| [`ux/accessibility.mdc`](../rules/ux/accessibility.mdc) | **A + C** | Cuerpo **A**; refs rotas **C**; globs omiten `shared/layout` |
| [`ux/content.mdc`](../rules/ux/content.mdc) | **A + C + D** | Copy en shared **D** vs monolingüe |
| [`ux/animations.mdc`](../rules/ux/animations.mdc) | **A + C** | Cuerpo **A**; refs rotas **C** |

**No existen archivos MDC separados** para: `boundaries.mdc`, `state.mdc`, `reactivity-runtime.mdc`, `ui-boundaries.mdc`, `design-tokens.mdc`, `hooks.mdc` — tratar como **LEGACY (absorbed)**.

**Documentación (no regla, alineación):**

| Archivo | Clase |
|---------|-------|
| [`docs/ARQUITECTURA.md`](../../docs/ARQUITECTURA.md) | **LEGACY** — contradice global y código |
| [`.cursor/plans/rules-implementation-spec.md`](rules-implementation-spec.md) | **A** — plan de ejecución válido; completar lo pendiente |

---

## 4. Rule Precedence Model

### 4.1 Jerarquía obligatoria (mayor → menor autoridad)

```
1. global-architecture.mdc          ← SSOT capas, deps, features/entities/shared
2. cursor-enforcement.mdc         ← Proceso pre-flight; NO redefine arquitectura
3. Capa específica (mismo nivel entre sí; gana el más específico por path):
   - ui-architecture.mdc           ← UI/composición
   - state-and-reactivity.mdc      ← Runtime React/state/hooks
   - services.mdc                  ← logic/build pure-return + colocación negocio
   - forms.mdc                     ← Formularios (cuando aplica por glob)
   - nextjs-and-performance.mdc    ← App Router / RSC / performance
4. typescript.mdc                   ← Tipos (no contradice capas)
5. naming.mdc                     ← Convenciones identificadores
6. styling-system.mdc               ← Tokens/visual (subordinado a ui-architecture)
7. UX: accessibility.mdc > content.mdc > animations.mdc
      (accesibilidad gana sobre copy/animación en conflicto UX)
8. docs/**, comentarios, ejemplos históricos  ← NO autoritativos
```

### 4.2 Reglas de resolución de conflictos

| Situación | Gana | Por qué |
|-----------|------|---------|
| Dep graph vs cualquier otra regla | `global-architecture` | SSOT explícito |
| Hook con cálculo vs "negocio en logic/" | `global-architecture` §2.4 + `services` | Orchestrator delega; implementación en `logic/` |
| Pure return vs derived state en hook | `services` para `logic/`/`build-*`; `state-and-reactivity` para hooks | Scopes distintos (ver §4.3) |
| UI estructura vs styling | `ui-architecture` > `styling-system` | Separación responsabilidades |
| Copy accesible vs copy marketing | `accessibility` > `content` | Inclusión |
| Ejemplo en global vs código actual | **Regla** (código es deuda transitoria) | Ejemplos deben corregirse, no debilitar regla |
| `docs/` vs `.cursor/rules/` | **`.cursor/rules/`** | Documentado en este plan |

### 4.3 Cuándo fusionar vs override

- **Merge (no override):** `state-and-reactivity` + `services` → añadir párrafo cruzado "Orchestrator boundary" en ambos (3–5 líneas).
- **Override:** Nunca debilitar §1 deps de global por conveniencia UX o naming.
- **Clarify, no delete:** `content.mdc` monolingüe — añadir excepción, no eliminar regla de props.

### 4.4 Matriz `alwaysApply` (meta-regla propuesta)

| alwaysApply | Archivos |
|-------------|----------|
| `true` (mantener) | global, ui-architecture, state, services, typescript, naming, styling, cursor-enforcement, ux/* |
| `true` (cambiar) | `nextjs-and-performance` (recomendado) |
| `true` (evaluar) | `forms` |
| N/A | docs |

Añadir en `cursor-enforcement.mdc` §0: "When rules conflict, apply Rule Precedence Model (link to RULES-INDEX.mdc)."

---

## 5. Patch Plan (per file) — cambios quirúrgicos

**Orden de ejecución:** 0 → 1 → 2 → 3 (igual que [rules-implementation-spec](rules-implementation-spec.md)).

### Phase 0 — Nuevo archivo índice (ADD)

**ADD** [`.cursor/rules/RULES-INDEX.mdc`](../rules/RULES-INDEX.mdc) (~40 líneas):

- Lista de 13 reglas activas + precedencia §4.
- Tabla "Absorbed legacy rules" → reemplazos.
- Nota: `docs/ARQUITECTURA.md` secondary; sync checklist on global changes.
- `alwaysApply: true`, `globs: **/*`.

### Phase 1 — SSOT

#### [`architecture/global-architecture.mdc`](../rules/architecture/global-architecture.mdc)

| Acción | Detalle |
|--------|---------|
| **CHANGE** L142 | `@/features/prescription` → `@/entities/prescription` |
| **ADD** §2.1 (~5 líneas) | `features/tools/{name}/` = bounded contexts hermanos; prohibido importar `features/tools` como paquete |
| **ADD** §2.2 (~8 líneas) | **Transitional debt:** barrels faltantes (`articles`, `prescription`) — external consumers must not add new deep imports |
| **ADD** §3.2 (~4 líneas) | **Product-language exception:** single-locale apps may pass Spanish copy via props from `app/`; shared defaults discouraged, not forbidden for shell UI |
| **CHANGE** §3.4 | `shared/actions/` → renombrar a `shared/client-handlers/` en texto O aclarar: "folder MUST NOT be named `actions/` unless files contain `\"use server\"`" |
| **KEEP** | Legacy mapping §2.1, barrel policy D4, D3 cross-domain |

#### [`architecture/cursor-enforcement.mdc`](../rules/architecture/cursor-enforcement.mdc)

| Acción | Detalle |
|--------|---------|
| **ADD** §0 | Link a RULES-INDEX + precedence one-liner |
| **CHANGE** §1 L23 | `shared/actions/` → `shared/client-handlers/` OR `app/api/` only for non-Server-Action helpers use `shared/` sin carpeta `actions/` |
| **ADD** §4 | Entity isolation: existe solo si 2+ features; no feature imports |
| **ADD** §8 | Post-edit grep checklist (from implementation-spec) |

### Phase 2 — Capas y meta-refs

#### [`architecture/typescript.mdc`](../rules/architecture/typescript.mdc)

| Acción | Detalle |
|--------|---------|
| **CHANGE** L13–17 | `boundaries.mdc` → `global-architecture.mdc`; `state.mdc` → `state-and-reactivity.mdc`; `ui-boundaries.mdc` → `ui-architecture.mdc`; `reactivity-runtime.mdc` → `state-and-reactivity.mdc` |
| **ADD** §4 (~3 líneas) | Nullable estados transitorios permitidos cuando migración incremental; prefer unions en APIs públicas nuevas |

#### [`architecture/state-and-reactivity.mdc`](../rules/architecture/state-and-reactivity.mdc)

| Acción | Detalle |
|--------|---------|
| **ADD** §3.1 (~6 líneas) | **Orchestrator boundary:** may call `logic/`/`build-*`; must not contain domain formulas inline |
| **CHANGE** §2.3 | "Centralize derived state in hooks **by calling** `logic/`" |
| **ADD** cross-ref | "Pure view assembly: see `services.mdc`" |

#### [`architecture/services.mdc`](../rules/architecture/services.mdc)

| Acción | Detalle |
|--------|---------|
| **ADD** top § | Scope exclusion: React hooks/components exempt from pure-return; orchestrators exempt but must delegate domain work |
| **ADD** §37 | Explicit: `useMemo` in hooks OK; `build-*` in `logic/` must follow pure-return |
| **KEEP** | Pure-return body intact |

#### [`architecture/ui-architecture.mdc`](../rules/architecture/ui-architecture.mdc)

| Acción | Detalle |
|--------|---------|
| **ADD** §2.1 step | Check `entities/*/components` before feature components |
| **ADD** §1.4 | `shared/layout` receives nav config via props from `app/` (no domain types in shared) |

#### [`architecture/forms.mdc`](../rules/architecture/forms.mdc)

| Acción | Detalle |
|--------|---------|
| **CHANGE** frontmatter | `alwaysApply: true` OR expand globs: `entities/**`, `features/**/components/*form*` |
| **ADD** §3 | Validation modules at `entities/*/logic/` OR `rules.ts` legacy — new code only in `logic/` |

#### [`architecture/naming.mdc`](../rules/architecture/naming.mdc)

| Acción | Detalle |
|--------|---------|
| **ADD** § Functions | Exception: `shared/components/ui/**` may use `function` (shadcn/Radix convention) |

#### [`nextjs-and-performance.mdc`](../rules/nextjs-and-performance.mdc)

| Acción | Detalle |
|--------|---------|
| **CHANGE** frontmatter | `alwaysApply: true` |
| **ADD** §2 | Static domain catalogs: prefer RSC + serialized props when data has no client-only dependency |
| **ADD** §4 | Cross-ref `global-architecture` §2.3 queries/actions |

### Phase 3 — UX + enforcement meta

#### [`ux/accessibility.mdc`](../rules/ux/accessibility.mdc), [`ux/content.mdc`](../rules/ux/content.mdc), [`ux/animations.mdc`](../rules/ux/animations.mdc)

| Acción | Detalle |
|--------|---------|
| **CHANGE** "It does NOT define" | Refs → `ui-architecture`, `state-and-reactivity`, `global-architecture`, `styling-system`; remove `hooks.mdc` → `state-and-reactivity` §3 |
| **CHANGE** globs | Add `shared/layout/**/*` |

#### [`ux/content.mdc`](../rules/ux/content.mdc) only

| Acción | Detalle |
|--------|---------|
| **ADD** §2.1 | Single-locale product: copy may live in feature/entity constants; shared shell receives strings from `app/` |

#### [`architecture/styling-system.mdc`](../rules/architecture/styling-system.mdc)

| Acción | Detalle |
|--------|---------|
| **VERIFY** globs | Include `entities/**` (per implementation-spec); no body change |

### Phase 4 — Documentación (no MDC, alineación)

#### [`docs/ARQUITECTURA.md`](../../docs/ARQUITECTURA.md)

| Acción | Detalle |
|--------|---------|
| **CHANGE** tree | `entities/prescription`, remove `features/prescription` |
| **CHANGE** | Add `features/articles` without `index.ts` marked TODO |
| **ADD** banner top | "Secondary to `.cursor/rules/architecture/global-architecture.mdc`" |

**DELETE:** Ningún MDC. **RENAME:** Considerar `services.mdc` → `logic-discipline.mdc` (opcional Phase 5; alto churn — **defer**).

---

## 6. Enforcement Gaps

| Regla | Hoy | Propuesta tooling | Tipo |
|-------|-----|-------------------|------|
| Layer imports | No enforced | `eslint-plugin-import` `no-restricted-paths` zones | ESLint |
| feature ↔ feature | No | zone: `features/**` cannot import `@/features/**` except self path | ESLint |
| shared → features/entities | No | restricted paths | ESLint |
| Deep import externo | No | custom rule or `no-restricted-imports` patterns `@/entities/*/types/*` from outside | ESLint |
| `index.ts` required | No | CI script: grep consumers outside domain | CI (human) |
| Pure return in `logic/` | No | Review bot / optional AST rule (complex) | Human / future |
| Orchestrator 3+ hooks | No | Document-only in RULES-INDEX | Human |
| RSC by default | No | `eslint-plugin-react-server-components` (evaluar compat Next 16) | Tooling research |
| `"use server"` in `actions/` | No | grep CI: `shared/actions` must not exist or must have directive | CI |
| Tests for `logic/` | No | Add rules contract §tests in global §2.1 (ADD bullet) | Rule + CI later |
| Cross-ref integrity | No | CI: `rg` broken `.mdc` refs in `.cursor/rules` | CI |

**Imposible hoy sin inversión:** pure-return AST, impossible-state types automáticos, detección de negocio inline en JSX.

**Solo humano/agent:** orchestration patterns, UX copy quality, animation purpose.

**Propuesta ADD en global §2.1:** carpeta `tests/` opcional — cuando exista, colocated con domain.

---

## 7. Root Cause Analysis (by conflict type)

| Tipo causa | Conflictos | Acción |
|------------|------------|--------|
| **Migración arquitectónica incompleta** | C06, C08, C09, C10, ejemplo L142 | Parches Phase 1 + docs Phase 4 |
| **Unificación de reglas sin limpiar refs** | C12, C13 | Phase 2 typescript + UX |
| **Sin tooling** | C11, pure-return, RSC | §6 + RULES-INDEX |
| **Definiciones ambiguas** | C01, C02, C04, C17 | Orchestrator boundary + content exception |
| **Naming histórico** | C05, `services.mdc` filename | Clarify text; defer rename |
| **Meta `alwaysApply`** | C14, C15 | frontmatter patches |
| **Estructura repo no documentada** | C18 | global §2.1 note |

---

## 8. Critical Recommendations (Top 5)

1. **Crear `RULES-INDEX.mdc`** con precedencia y mapa de reglas absorbidas — reduce ambigüedad inmediata para agentes.
2. **Corregir ejemplo `entities/prescription` y refs rotas** en global + typescript + 3 UX — elimina la contradicción más visible.
3. **Resolver triple definición hooks / orchestrator / `logic/`** con 6–10 líneas sincronizadas en `state-and-reactivity` + `services` + global §2.4.
4. **Alinear `shared/actions` vs Server Actions** en global + cursor-enforcement — evita carpeta misleading.
5. **Subir autoridad de `nextjs-and-performance` y `forms`** (`alwaysApply` + globs layout) — cierra gap Next/forms en generación automática.

**Siguiente paso operativo:** Ejecutar parches en el orden Phase 0→4 usando [rules-implementation-spec.md](rules-implementation-spec.md) como checklist de grep; **no tocar** `app/`, `features/`, `entities/`, `shared/` en la misma PR.

---

## 9. Validation Checklist (post-patch)

```bash
rg "features/prescription|boundaries\.mdc|ui-boundaries\.mdc|reactivity-runtime\.mdc|design-tokens\.mdc|hooks\.mdc|state\.mdc" .cursor/rules/
rg "shared/actions" .cursor/rules/   # should be clarified or renamed in text
rg "\"src/\\*\\*\"" .cursor/rules/  # should be empty
```

Manual review: leer §Orchestrator boundary en state + services; confirmar RULES-INDEX precedencia.

---

*Documento generado como plan de reconciliación. No modifica código de aplicación.*
