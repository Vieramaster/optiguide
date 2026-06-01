# Documentación — Optiguide

| Documento | Contenido |
|-----------|-----------|
| [ARQUITECTURA.md](./ARQUITECTURA.md) | Capas, dependencias, patrones, flujos |
| [GUIA-DESARROLLO.md](./GUIA-DESARROLLO.md) | Dónde colocar código, checklists, convenciones |
| [EJEMPLOS.md](./EJEMPLOS.md) | Snippets copy-paste alineados al repo |

**Autoridad arquitectónica:** [`.cursor/rules/`](../.cursor/rules/RULES-INDEX.mdc) (no `docs/`).

## Sincronización

Cuando cambien contratos de capas en `global-architecture.mdc`, actualizar `ARQUITECTURA.md` y, si aplica, `GUIA-DESARROLLO.md` y `EJEMPLOS.md`.

## Features documentados en código (referencia)

| Dominio | Barrel client | Barrel server |
|---------|---------------|---------------|
| `features/articles` | `@/features/articles` | `@/features/articles/server` |
| `features/tools/catalog` | `@/features/tools/catalog` | — |
| `features/tools/lens-thickness` | `@/features/tools/lens-thickness` | — |
| `features/tools/face-shape` | `@/features/tools/face-shape` | — |
| `entities/prescription` | `@/entities/prescription` | — |

## Layout shared

| Export | Desde |
|--------|-------|
| `Header`, `AppSidebar`, `SidebarProvider`, `SidebarInset` | `@/shared/layout` |

## Helpers client en shared

| Módulo | Uso |
|--------|-----|
| `shared/hooks/retry-error.ts` | Reset en `app/error.tsx` |
| `shared/hooks/use-mobile.ts` | Breakpoint móvil |
