# Optiguide

Aplicación web educativa sobre óptica: artículos MDX, herramientas interactivas (simulador de espesor, catálogo, forma de rostro) y navegación por sidebar.

## Inicio rápido

### Requisitos

- Node.js 18+
- npm, pnpm o yarn

### Instalación

```bash
git clone <url-del-repositorio>
cd optiguide
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura del proyecto

```
optiguide/
├── app/                        # Rutas Next.js (App Router)
├── features/                   # Dominios de negocio (articles, tools/*)
├── entities/                   # Dominio compartido (prescription)
├── shared/                     # UI genérica, layout, formatters, validation
├── lib/                        # utils.ts (cn) — convención shadcn
├── docs/                       # Documentación del proyecto
└── .cursor/rules/              # Fuente de verdad arquitectónica
```

Flujo de dependencias:

```
app/ → features/ → entities/ → shared/ → lib/
```

Documentación detallada:

- [Arquitectura](./docs/ARQUITECTURA.md)
- [Guía de desarrollo](./docs/GUIA-DESARROLLO.md)
- [Ejemplos prácticos](./docs/EJEMPLOS.md)

## Features actuales

| Ruta | Feature | Descripción |
|------|---------|-------------|
| `/articulos/[slug]` | `features/articles` | Artículos MDX estáticos |
| `/herramientas/simulador-de-espesor` | `features/tools/lens-thickness` | Simulador de espesor de lentes |
| `/herramientas/catalogo` | `features/tools/catalog` | Catálogo de cristales |
| `/herramientas/lentes-segun-el-rostro` | `features/tools/face-shape` | Guía de monturas por rostro |

## Imports (regla rápida)

Consumidores **externos** a un dominio importan solo desde barrels públicos:

```ts
import { Catalog } from "@/features/tools/catalog";
import { PrescriptionForm } from "@/entities/prescription";
import { PageTitle } from "@/shared/components";
import { loadArticleMdx } from "@/features/articles/server"; // server-only
```

No usar deep imports (`@/features/.../components/...`, `@/entities/.../types/...`).

## Scripts

```bash
npm run dev      # Desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # ESLint
```

## Agregar un artículo

1. Crea `features/articles/markdowns/mi-articulo.mdx`
2. El slug será `/articulos/mi-articulo`
3. Registra el enlace en `features/articles/config/articles-sidebar.ts` si debe aparecer en el sidebar

Ver [Guía de desarrollo](./docs/GUIA-DESARROLLO.md#artículos-mdx).

## Tecnologías

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui + Radix UI
- MDX

## Contribución

1. Crea una rama: `git checkout -b feature/mi-cambio`
2. Respeta la arquitectura en `.cursor/rules/` y `docs/ARQUITECTURA.md`
3. Verifica: `npm run build` y `npm run lint`
4. Abre un Pull Request

## Licencia

Proyecto privado.

---

**Nota:** El simulador de espesor es ilustrativo; el grosor real depende del laboratorio y del técnico óptico.
