# Arquitectura del Proyecto

> **Autoridad:** Este documento es orientativo. La fuente de verdad para capas y dependencias es [`.cursor/rules/architecture/global-architecture.mdc`](../.cursor/rules/architecture/global-architecture.mdc) y [`.cursor/rules/RULES-INDEX.mdc`](../.cursor/rules/RULES-INDEX.mdc).

Documentación relacionada: [README](./README.md) · [Guía de desarrollo](./GUIA-DESARROLLO.md) · [Ejemplos](./EJEMPLOS.md)

---

## Convenciones en root (Next.js)

Archivos que el framework exige o genera en la raíz del repo (junto a `app/` y `package.json`). No forman parte del modelo de capas `features` / `entities` / `shared`; son adaptadores de configuración.

| Archivo | Obligatorio | Rol |
|---------|-------------|-----|
| `next.config.ts` | Sí | Config de Next; MDX vía `createMDX` (`@next/mdx`) |
| `mdx-components.tsx` | Sí (App Router + MDX) | Convención Next: exporta `useMDXComponents`. Aquí solo re-exporta desde `@/features/articles`; la implementación vive en el feature |
| `next-env.d.ts` | Sí (generado) | Tipos de Next; no editar a mano |

**MDX en este proyecto:** el contenido está en `features/articles/markdowns/*.mdx` y se carga con import dinámico (`loadArticleMdx`). No hay rutas `.mdx` dentro de `app/`, por lo que no hace falta `pageExtensions` con `mdx` salvo que en el futuro se usen páginas MDX en el filesystem de `app/`.

**Tipos TypeScript:** no usar una carpeta `types/` en root para dominio. Los tipos de negocio van en `features/*/types/`, `entities/*/types/` o `shared/types/`. El tipado de módulos `*.mdx` lo provee el paquete `@types/mdx` (dependencia del proyecto). Si hace falta augmentar exports concretos de un artículo, preferir `features/articles/types/*.d.ts`.

---

## Estructura de carpetas

### `app/`

Rutas y páginas de Next.js (App Router). Orquesta features, entities y shared; no contiene lógica de negocio.

```
app/
├── layout.tsx
├── page.tsx
├── error.tsx                   # Copy de error → ErrorPage (shared)
├── app-sidebar-client.tsx      # Ensambla navegación y copy del sidebar
├── articulos/[slug]/
│   ├── page.tsx
│   └── loading.tsx
└── herramientas/
    ├── catalogo/page.tsx
    ├── simulador-de-espesor/
    │   ├── page.tsx
    │   └── loading.tsx
    └── lentes-segun-el-rostro/
        ├── page.tsx
        └── loading.tsx
```

### `entities/`

Dominio compartido entre varias features (2+ consumidores).

```
entities/
└── prescription/               # Recetas ópticas (catalog, lens-thickness)
    ├── index.ts                # API pública client-safe
    ├── components/
    ├── hooks/
    ├── logic/
    │   ├── parse.ts
    │   ├── validations.ts
    │   ├── evaluate-prescription-rules.ts
    │   └── transform-transposition-prescription.ts
    ├── types/
    │   ├── types.ts
    │   └── prescription-form-config.ts
    ├── constants.ts
    └── messages.ts
```

### `features/`

Dominios de negocio autocontenidos. Cada bounded context expone API pública vía `index.ts` (+ `server.ts` si aplica).

```
features/
├── articles/
│   ├── index.ts                # UI, sidebar, useMDXComponents
│   ├── server.ts               # getArticleStaticParams, loadArticleMdx
│   ├── components/
│   ├── config/
│   ├── constants/
│   ├── markdowns/              # Contenido .mdx
│   ├── queries/
│   └── server/                 # Constantes server-only (ARTICLES_DIR)
└── tools/
    ├── catalog/                # Bounded context hermano
    ├── lens-thickness/         # Bounded context hermano
    └── face-shape/             # Bounded context hermano
```

Estructura interna típica de un feature:

```
feature/
├── index.ts                    # API pública client-safe
├── server.ts                   # Opcional — queries/actions
├── components/                 # Entry + UI (Catalog, simulators, etc.)
├── constants/
├── hooks/                      # Hooks y orchestrators
├── logic/                      # Reglas puras, build-* views
├── types/
├── config/                     # Sidebar items
└── domain/                     # Opcional — catálogos estáticos (catalog)
```

**Regla:** No importar `features/tools` como paquete; cada subcarpeta de `tools/` es independiente.

### `shared/`

Código transversal **sin terminología de dominio**. Nunca importa de `features/` ni `entities/`.

```
shared/
├── components/                 # PageTitle, SelectField, ui/ (shadcn)
├── formatters/
├── validation/
├── types/                      # Tipos genéricos (SelectOption)
├── layout/
│   ├── index.ts                # Barrel: Header, AppSidebar, Sidebar*
│   ├── header/
│   └── sidebar/
├── hooks/                      # retry-error, use-mobile
├── image/
└── providers/
```

**Prohibido:** `shared/actions/` — helpers client van en `shared/hooks/`.

### `lib/`

Solo `utils.ts` con `cn()` — convención shadcn/ui. No es equivalente a `shared/`.

---

## Flujo de dependencias

```
app/  ──►  features/  ──►  entities/  ──►  shared/  ──►  lib/
```

| Origen | Permitido | Prohibido |
|--------|-----------|-----------|
| `app/` | Barrels `@/features/*`, `@/entities/*`, `@/shared/*`, `@/lib/*` | Deep imports a `components/`, `hooks/`, `logic/`, `queries/` |
| `features/A/` | `@/entities/*`, `@/shared/*`, `@/lib/*`, imports internos | `@/features/B/*` |
| `entities/` | `@/shared/*`, `@/lib/*` | `@/features/*` |
| `shared/` | `@/lib/*` | `@/features/*`, `@/entities/*` |

---

## Contrato de imports (barrels)

Consumidores **fuera** del dominio importan solo:

| Dominio | Client-safe | Server-only |
|---------|-------------|-------------|
| `entities/prescription` | `@/entities/prescription` | — |
| `features/articles` | `@/features/articles` | `@/features/articles/server` |
| `features/tools/catalog` | `@/features/tools/catalog` | — |
| `features/tools/lens-thickness` | `@/features/tools/lens-thickness` | — |
| `features/tools/face-shape` | `@/features/tools/face-shape` | — |
| Layout | `@/shared/layout` | — |
| Componentes shared | `@/shared/components` | — |

Dentro del mismo feature/entity: imports relativos profundos permitidos.

---

## Patrones

### Orchestrator hooks

Features complejas (`catalog`, `lens-thickness`) usan un orchestrator que coordina hooks especializados y delega reglas a `logic/`:

```tsx
// lens-thickness — referencia canónica
const simulatorView = useLensThicknessSimulatorView();
// → useSimulatorOrchestrator + buildLensThicknessSimulatorView
```

Los entry components en `components/` solo renderizan vista orquestada.

### API pública por dominio

```ts
import { Catalog } from "@/features/tools/catalog";
import { PrescriptionForm } from "@/entities/prescription";
import { SectionArticle } from "@/features/articles";
import { loadArticleMdx } from "@/features/articles/server";
```

### Navegación del sidebar

- Config de items: `features/*/config/` y `features/articles/config/articles-sidebar.ts`
- Ensamblaje: `app/app-sidebar-client.tsx`
- Copy de secciones: props `toolsNavTitle`, `articlesNavTitle` → `AppSidebar`

### Copy en shared

`shared/layout` y `shared/components/ui/error-page` reciben strings desde `app/`, no hardcodean copy de producto.

---

## Flujos de dominio

### Artículos

```
1. GET /articulos/[slug]
2. generateStaticParams ← getArticleStaticParams (server.ts)
3. loadArticleMdx(slug) ← import dinámico ../markdowns/{slug}.mdx
4. SectionArticle envuelve el MDX renderizado
5. useMDXComponents (features/articles) mapea tags MDX → shared/ui
```

### Simulador de espesor

```
1. PrescriptionForm (entities/prescription)
2. usePrescriptionForm → logic/parse + evaluate-prescription-rules
3. useSimulatorOrchestrator → logic/calculate*, compare*
4. buildLensThicknessSimulatorView → objeto de vista
5. components/* renderizan paneles y SVG
```

### Catálogo

```
1. useCatalogOrchestrator compone filtros + paginación
2. logic/transposition-filter, filter-catalog-by-columns
3. domain/ — datos estáticos de lentes (imports relativos intra-feature)
4. PrescriptionForm mode="base" para filtrar por graduación
```

---

## Principios

- **UI / lógica:** componentes presentacionales; reglas en `logic/`; coordinación en `hooks/`.
- **Boundaries:** sin imports cruzados entre features; reutilización vía `entities/` y `shared/`.
- **Shared genérico:** sin workflows ni tipos de dominio; copy del shell vía props.
- **Entrypoints explícitos:** `index.ts` (client) y `server.ts` (server) por dominio.
- **Pure return:** ensamblado de vistas en `logic/build-*` según `logic-discipline.mdc`.

---

## Anti-patrones detectables

```bash
# Deep imports entity
rg "@/entities/prescription/(components|types|hooks|logic)" --glob "*.{ts,tsx}"

# Deep imports app → feature internals
rg "@/features/[^/]+/(components|hooks|logic|queries|config)/" app/

# Cross-feature
rg "from [\"']@/features/" features/ --glob "*.{ts,tsx}"

# Carpeta prohibida
rg "shared/actions" --glob "*.{ts,tsx}"
```

---

## TypeScript

- Dominio: `features/*/types/`, `entities/*/types/`
- UI genérica: `shared/types/`, props de componentes shared
- Root: ver [Convenciones en root (Next.js)](#convenciones-en-root-nextjs); sin `types/` de dominio en la raíz

---

## Generación estática

`generateStaticParams` en `app/articulos/[slug]/page.tsx` delega a `features/articles/server`. Build genera ~31 rutas de artículos + páginas de herramientas estáticas.

---

## Mantenimiento de docs

Tras cambios en `.cursor/rules/architecture/global-architecture.mdc`, sincronizar este archivo y [GUIA-DESARROLLO.md](./GUIA-DESARROLLO.md).
