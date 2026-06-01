# Ejemplos Prácticos

Ejemplos alineados con la estructura actual del repo. Autoridad: [ARQUITECTURA.md](./ARQUITECTURA.md).

---

## Agregar un artículo MDX

**1. Crear archivo:**

```
features/articles/markdowns/ejemplo.mdx
```

**2. Contenido:**

```mdx
# Ejemplo

Texto del artículo...

![Descripción](/images/library/visual-conditions/ejemplo.webp)

[Enlace interno](/articulos/miopia)
```

**3. Sidebar** — añadir bloque en `features/articles/config/articles-sidebar.ts`.

**4. Build** — `generateStaticParams` detecta el `.mdx` automáticamente vía `getArticleStaticParams`.

---

## Página que consume un feature

```tsx
// app/herramientas/mi-herramienta/page.tsx
import { MiHerramienta } from "@/features/tools/mi-herramienta";

export default function MiHerramientaPage() {
  return <MiHerramienta />;
}
```

```tsx
// app/herramientas/mi-herramienta/loading.tsx
import { PageSkeleton } from "@/shared/components";

export default function Loading() {
  return <PageSkeleton />;
}
```

---

## Página de artículo (patrón actual)

```tsx
// app/articulos/[slug]/page.tsx — simplificado
import { SectionArticle } from "@/features/articles";
import { getArticleStaticParams, loadArticleMdx } from "@/features/articles/server";
import { isValidSlug } from "@/shared/validation/slug-validation";
import { notFound } from "next/navigation";

export const generateStaticParams = () => getArticleStaticParams();

export default async function ArticlesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isValidSlug(slug)) notFound();
  const Post = await loadArticleMdx(slug);
  return (
    <SectionArticle>
      <Post />
    </SectionArticle>
  );
}
```

---

## Usar PrescriptionForm (entidad compartida)

```tsx
"use client";

import { PrescriptionForm } from "@/entities/prescription";
import type { PrescriptionFullValues } from "@/entities/prescription";

export const MiFormulario = () => {
  const handleSubmit = (values: PrescriptionFullValues) => {
    console.log(values);
  };

  return <PrescriptionForm mode="full" onSubmit={handleSubmit} />;
};
```

---

## Hook + logic (patrón lens-thickness)

**Logic pura:**

```ts
// features/tools/mi-tool/logic/calcular.ts
export const calcular = (a: number, b: number) => a + b;
```

**Hook orchestrator:**

```ts
// features/tools/mi-tool/hooks/use-mi-orchestrator.ts
import { calcular } from "../logic/calcular";
import { useEntrada } from "./use-entrada";

export const useMiOrchestrator = () => {
  const entrada = useEntrada();
  const resultado = calcular(entrada.a, entrada.b);
  return { entrada, resultado };
};
```

**Build view (ensamblado para UI):**

```ts
// features/tools/mi-tool/logic/build-mi-vista.ts
import type { MiOrchestratorState } from "../types/mi-orchestrator-state";

export const buildMiVista = (state: MiOrchestratorState) => {
  const etiqueta = state.resultado > 0 ? "positivo" : "negativo";
  return { etiqueta, onCambiar: state.entrada.handleChange };
};
```

**Componente entry:**

```tsx
"use client";

import { useMiVista } from "../hooks/use-mi-vista";

export const MiTool = () => {
  const vista = useMiVista();
  return <p>{vista.etiqueta}</p>;
};
```

Referencia real: `features/tools/lens-thickness/`.

---

## Configuración de sidebar

```ts
// features/tools/mi-tool/config/sidebar-item.ts
import { Ruler } from "lucide-react";
import type { ToolItem } from "@/shared/layout/sidebar/types/sidebar";

export const MI_TOOL_SIDEBAR_ITEM: ToolItem = {
  title: "Mi herramienta",
  url: "/herramientas/mi-tool",
  Icon: Ruler,
};
```

```tsx
// app/app-sidebar-client.tsx — fragmento
import { MI_TOOL_SIDEBAR_ITEM } from "@/features/tools/mi-tool";

const TOOLS_SIDEBAR = [
  // ...otros items
  MI_TOOL_SIDEBAR_ITEM,
] as const;

<AppSidebar
  toolsSidebar={[...TOOLS_SIDEBAR]}
  articlesSidebar={ARTICLES_SIDEBAR}
  toolsNavTitle="herramientas"
  articlesNavTitle="Artículos"
/>
```

---

## Error boundary con copy desde app

```tsx
// app/error.tsx — patrón actual
"use client";

import { ErrorPage } from "@/shared/components/ui/error-page";
import { retryError } from "@/shared/hooks/retry-error";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <ErrorPage
      title="Ha ocurrido un error"
      description="Ocurrió un error al cargar la página."
      retryLabel="Intentar nuevamente"
      showRetry
      onRetry={() => retryError(reset)}
    />
  );
}
```

---

## Componente shared genérico

```tsx
// shared/components/mi-composicion.tsx
import { Button } from "@/shared/components/ui/button";

interface MiComposicionProps {
  label: string;
  onAction: () => void;
}

export const MiComposicion = ({ label, onAction }: MiComposicionProps) => (
  <Button onClick={onAction}>{label}</Button>
);
```

Sin imports de `@/features/` ni `@/entities/`.

---

## Validación genérica en shared

```ts
// shared/validation/mi-validacion.ts
export const isValidCodigo = (value: string): boolean =>
  /^[A-Z0-9]{3,8}$/.test(value);
```

Validación de **dominio** (recetas, catálogo) → `entities/*/logic/` o `features/*/logic/`.

---

## Formatter compartido

```ts
import { formatPathSegments } from "@/shared/formatters/path-formatter";

const segmentos = formatPathSegments("/herramientas/catalogo");
// ["herramientas", "catalogo"]
```

---

## Query server-only

```ts
// features/mi-dominio/queries/get-datos.ts
import { promises as fs } from "fs";

export const getDatos = async () => {
  const raw = await fs.readFile("...", "utf-8");
  return JSON.parse(raw);
};
```

```ts
// features/mi-dominio/server.ts
export { getDatos } from "./queries/get-datos";
```

```tsx
// app/mi-ruta/page.tsx
import { getDatos } from "@/features/mi-dominio/server";

export default async function Page() {
  const datos = await getDatos();
  return <pre>{JSON.stringify(datos)}</pre>;
}
```

---

## Anti-patrones (no hacer)

```ts
// ❌ Deep import desde app
import { Catalog } from "@/features/tools/catalog/components/catalog";

// ✅ Barrel público
import { Catalog } from "@/features/tools/catalog";

// ❌ Cross-feature
import { algo } from "@/features/tools/catalog/logic/algo";

// ❌ Lógica en componente
export const Panel = () => {
  const espesor = esfera * 0.5 + cilindro; // → logic/
  return <span>{espesor}</span>;
};

// ❌ Copy hardcodeado en shared layout
<SidebarGroupLabel>Catálogo de lentes</SidebarGroupLabel>
// → prop desde app/
```

---

## Verificación rápida post-cambio

```bash
npm run build
npm run lint
rg "shared/actions" --glob "*.{ts,tsx}"
rg "@/features/tools/(catalog|lens-thickness|face-shape)" features/tools/ --glob "*.{ts,tsx}"
```

El segundo comando no debe mostrar imports cruzados entre subfeatures de `tools/`.
