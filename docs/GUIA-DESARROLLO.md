# Guía de Desarrollo

> Orientativa. Autoridad arquitectónica: [`.cursor/rules/`](../.cursor/rules/) y [ARQUITECTURA.md](./ARQUITECTURA.md).

## Configuración del entorno

- Node.js 18+
- Cursor / VS Code con ESLint y Tailwind CSS IntelliSense

```bash
npm install
npm run dev
```

## Dónde va cada cosa

| Qué estás creando | Ubicación | Import desde |
|-------------------|-----------|--------------|
| Página o ruta | `app/` | Barrels de features/entities/shared |
| Feature nueva | `features/[dominio]/` | `@/features/[dominio]` |
| Lógica de dominio (pura) | `features/*/logic/` o `entities/*/logic/` | Relativo intra-dominio |
| Hook / orchestrator | `features/*/hooks/` | Relativo intra-dominio |
| UI de feature | `features/*/components/` | Relativo o barrel del feature |
| Concepto de negocio estable (`entities/`) | `entities/[entidad]/` | `@/entities/[entidad]` |
| UI genérica reutilizable | `shared/components/` | `@/shared/components` |
| Primitivos shadcn | `shared/components/ui/` | `@/shared/components/ui` |
| Layout (header, sidebar) | `shared/layout/` | `@/shared/layout` |
| Validación genérica | `shared/validation/` | `@/shared/validation/...` |
| Server reads | `features/*/queries/` | `@/features/*/server` |
| `cn()` y vendor | `lib/utils.ts` | `@/lib/utils` |

**Prohibido:**

- `utils/` dentro de `features/` o `entities/`
- `shared/actions/` (helpers client → `shared/hooks/`)
- Imports entre features (`features/A` → `features/B`)
- Deep imports desde `app/` hacia internals de un dominio
- Copy de dominio hardcodeado en `shared/` (pasar vía props desde `app/`)

## Crear un feature nuevo

### 1. Estructura mínima

```
features/mi-dominio/
├── index.ts              # API pública client-safe
├── server.ts             # Opcional: queries/actions server-only
├── components/
├── hooks/                # Opcional
├── logic/                # Opcional
├── types/                # Opcional
├── constants/            # Opcional
└── config/               # Opcional (sidebar, etc.)
```

### 2. Barrel `index.ts`

```ts
export { MiFeatureRoot } from "./components/mi-feature-root";
export { MI_FEATURE_SIDEBAR_ITEM } from "./config/sidebar-item";
```

### 3. Página en `app/`

```tsx
// app/mi-ruta/page.tsx
import { MiFeatureRoot } from "@/features/mi-dominio";

export default function MiRutaPage() {
  return <MiFeatureRoot />;
}
```

### 4. Sidebar (si aplica)

```ts
// features/mi-dominio/config/sidebar-item.ts
import type { ToolItem } from "@/shared/layout/sidebar/types/sidebar";

export const MI_FEATURE_SIDEBAR_ITEM: ToolItem = {
  title: "Mi herramienta",
  url: "/mi-ruta",
  Icon: SomeIcon,
};
```

Registrar en `app/app-sidebar-client.tsx`.

## Artículos MDX

### Agregar artículo

1. Crear `features/articles/markdowns/mi-articulo.mdx`
2. URL: `/articulos/mi-articulo`
3. Añadir entrada en `features/articles/config/articles-sidebar.ts`

### Formato de enlaces internos

```markdown
✅ [miopía](/articulos/miopia)
❌ [miopía](/miopia)
```

### Imágenes

- Archivos en `public/images/library/`
- Referencia: `![alt](/images/library/categoria/imagen.webp)`
- Componente MDX: `ImageArticle` (configurado en `useMDXComponents`)

### Server

- Listado de slugs: `getArticleStaticParams` → `@/features/articles/server`
- Carga de MDX: `loadArticleMdx(slug)` → `@/features/articles/server`

## Componentes

### UI de feature (presentacional)

```tsx
// features/mi-dominio/components/mi-panel.tsx
interface MiPanelProps {
  label: string;
}

export const MiPanel = ({ label }: MiPanelProps) => (
  <section>{label}</section>
);
```

- Sin lógica de negocio en JSX
- Sin fetch directo
- Estado local solo si es interacción UI

### Entry component

El componente raíz del feature vive en `components/` (ej. `components/catalog.tsx`), no en la raíz del feature.

## Hooks

### Hook focalizado

```ts
// features/mi-dominio/hooks/use-mi-filtro.ts
export const useMiFiltro = () => {
  const [valor, setValor] = useState<string | null>(null);
  return { valor, setValor };
};
```

### Orchestrator (cuando hay 3+ hooks de negocio)

```ts
// features/mi-dominio/hooks/use-mi-orchestrator.ts
export const useMiOrchestrator = () => {
  const filtro = useMiFiltro();
  const resultado = useMiResultado(filtro.valor);
  return { filtro, resultado };
};
```

Reglas:

- Orchestrator coordina; reglas puras en `logic/`
- Vista para UI: ensamblar en `logic/build-*` (ver `lens-thickness` como referencia)
- Efectos solo para sync externa (browser, timers)

## Lógica pura (`logic/`)

```ts
// features/mi-dominio/logic/calcular-algo.ts
export const calcularAlgo = (entrada: number): number => {
  return entrada * 2;
};
```

- Funciones deterministas, sin React
- Validación de dominio aquí, no en componentes
- Disciplina de return: ver `logic-discipline.mdc`

## Entidades

Crear o ampliar una entity cuando el código modela un **concepto estable del negocio con identidad propia**, no porque sea reutilizable técnicamente entre features.

Ejemplo: `entities/prescription` — `PrescriptionForm`, validaciones y tipos de **Prescription**. Catalog y lens-thickness lo consumen porque el producto usa recetas; eso no es el motivo de existencia de la entity.

**No extraer** de un feature hacia `entities/` solo porque dos features importen el mismo módulo.

```ts
import { PrescriptionForm } from "@/entities/prescription";
import type { PrescriptionFullValues } from "@/entities/prescription";
```

## Shared

### Qué puede ir en `shared/`

- Infraestructura genérica sin dominio oftálmico: `Button`, `SelectField`, `Input`, `providers/`
- Formatters genéricos (`shared/formatters/`)
- Validación genérica (`shared/validation/`) — p. ej. slugs, imágenes
- Layout estructural con copy inyectado por props

### Qué no va en `shared/`

- Workflows de negocio ni orquestación de features
- Terminología, reglas o tipos del dominio óptico
- Strings de features (viven en `features/*/constants/` o `messages.ts` de la entity)
- Carpetas `actions/` (usar `hooks/` para helpers client)

## Server / Client

- **Server Components** por defecto en `app/`
- `"use client"` solo con interactividad
- Código con `fs`, `path`, queries → `queries/` + export en `server.ts`
- **Nunca** reexportar server-only desde `index.ts` client-safe

## Navegación y copy del shell

`app/app-sidebar-client.tsx` ensambla:

- Items de sidebar desde cada feature
- Títulos de sección (`toolsNavTitle`, `articlesNavTitle`) hacia `AppSidebar`

`app/error.tsx` pasa copy a `ErrorPage` (`title`, `retryLabel`, `description`).

## Checklist antes de commit

- [ ] `npm run build` sin errores
- [ ] `npm run lint` pasa
- [ ] Imports externos usan barrels (`index.ts` / `server.ts`)
- [ ] Sin imports feature → feature
- [ ] Lógica de negocio en `logic/`, no en componentes
- [ ] Sin copy de dominio nuevo en `shared/`
- [ ] Extracciones: concepto de negocio → entity; infra genérica → shared; flujo exclusivo → feature

## Comandos útiles

```bash
npm run dev
npm run build
npm run lint

# Verificar deep imports prohibidos
rg "@/entities/prescription/(components|types|hooks)" --glob "*.{ts,tsx}"
rg "@/features/[^/]+/(components|hooks|logic|queries)/" app/
```

## Referencias

- [Arquitectura](./ARQUITECTURA.md)
- [Ejemplos](./EJEMPLOS.md)
- [Reglas Cursor](../.cursor/rules/RULES-INDEX.mdc)
