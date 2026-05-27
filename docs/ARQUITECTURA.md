# Arquitectura del Proyecto

## Estructura de carpetas

### `app/`

Rutas y páginas de Next.js (App Router). Orquesta features y shared; no contiene lógica de negocio.

```
app/
├── layout.tsx
├── page.tsx
├── app-sidebar-client.tsx      # Ensambla navegación desde features
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

### `features/`

Dominios de negocio autocontenidos. Cada feature expone una API pública vía `index.ts`.

```
features/
├── articles/                   # Artículos MDX de la librería
│   ├── index.ts
│   ├── components/
│   ├── config/
│   ├── constants/
│   ├── markdowns/
│   └── queries/
├── prescription/               # Dominio de recetas ópticas (compartido entre tools)
│   ├── index.ts
│   ├── components/
│   ├── constants.ts
│   ├── rules.ts
│   └── types.ts
└── tools/
    ├── catalog/                # Catálogo de lentes
    ├── lens-thickness/         # Simulador de espesor
    └── face-shape/             # Monturas según forma de rostro
```

Cada subfeature de `tools/` sigue la misma estructura interna:

```
feature/
├── index.ts                    # API pública
├── components/
├── constants/
├── hooks/                      # Hooks y orchestrators
├── logic/                      # Lógica de negocio pura
├── types/
└── config/                     # Configuración de navegación (sidebar)
```

### `shared/`

Código transversal **sin terminología de dominio**. Nunca importa de `features/`.

```
shared/
├── components/                 # UI genérica (PageSkeleton, SelectField, ui/)
├── formatters/                 # Utilidades de formato
├── validation/                 # Validaciones genéricas
├── layout/                     # Header, sidebar (recibe config por props)
├── hooks/
├── providers/
└── image/
```

### `lib/`

Solo `utils.ts` con `cn()` — convención de shadcn/ui.

## Flujo de dependencias

```
app/  ──►  features/  ──►  shared/
              │
              └── prescription ◄── catalog, lens-thickness
```

- `app/` importa entrypoints públicos de features.
- Features importan de `shared/` y, cuando comparten dominio, de otros features (p. ej. `prescription`).
- `shared/` nunca importa de `features/`.

## Patrones

### Orchestrator hooks

Features complejas (`catalog`, `lens-thickness`) usan un hook orchestrator que coordina hooks especializados:

```tsx
const { prescriptionForm, lensSide, indexSelect, calculatedLensThickness } =
  useSimulatorOrchestrator();
```

Los componentes entrypoint solo renderizan estado orquestado.

### API pública por feature

```ts
// app/herramientas/catalogo/page.tsx
import { Catalog } from "@/features/tools/catalog";

// app/articulos/[slug]/page.tsx
import { getArticleStaticParams, SectionArticle } from "@/features/articles";
```

### Navegación del sidebar

La configuración de navegación vive en cada feature (`config/sidebar-item.ts`, `config/articles-sidebar.ts`). `app/app-sidebar-client.tsx` la ensambla y la pasa a `AppSidebar` como props.

## Renderizado de artículos

```
1. Usuario visita /articulos/[slug]
2. generateStaticParams() lee markdowns/ del feature articles
3. Import dinámico del .mdx correspondiente
4. SectionArticle envuelve el contenido renderizado
```

## Simulador de espesor

```
1. Usuario completa PrescriptionForm (feature prescription)
2. usePrescriptionBaseForm valida con rulesFullPrescription
3. useSimulatorOrchestrator calcula espesor por índice
4. LensSimulator renderiza SVG con el resultado
```

## Principios

- **Separación UI / lógica**: componentes presentacionales; lógica en `logic/` y `hooks/`.
- **Boundaries**: sin imports cruzados no intencionados entre dominios.
- **Shared genérico**: sin workflows ni terminología de dominio en `shared/`.
- **Entrypoints explícitos**: consumidores externos importan desde `index.ts` del feature.

## TypeScript

Tipos de dominio viven dentro de cada feature (`types/`). Tipos genéricos de UI en `shared/`.

## Generación estática

Next.js genera páginas estáticas en build time mediante `generateStaticParams()` en rutas dinámicas de artículos.
