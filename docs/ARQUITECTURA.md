# Arquitectura del Proyecto

## 📐 Estructura de Carpetas Detallada

### `/app`
Contiene las rutas y páginas de Next.js usando App Router.

```
app/
├── layout.tsx              # Layout principal de la aplicación
├── page.tsx               # Página de inicio
├── libreria/[slug]/       # Rutas dinámicas para artículos
│   ├── page.tsx          # Renderiza artículos Markdown
│   ├── loading.tsx       # Estado de carga
│   └── error.tsx         # Manejo de errores
└── simulador-de-espesor/  # Página del simulador
    ├── page.tsx
    ├── loading.tsx
    └── error.tsx
```

### `/components`
Componentes React organizados por funcionalidad.

```
components/
├── articles/              # Componentes para artículos
│   ├── markdown-renderer.tsx
│   ├── article-skeleton.tsx
│   └── markdown-components/  # Componentes específicos de Markdown
│       ├── title.tsx
│       ├── subtitle.tsx
│       ├── links.tsx
│       ├── md-image.tsx
│       └── ...
├── simulator/            # Componentes del simulador
│   ├── inputs-simulator.tsx
│   ├── lens-simulator.tsx
│   ├── select-simulator.tsx
│   └── ...
└── ui/                   # Componentes UI reutilizables
    ├── button.tsx
    ├── input.tsx
    └── ...
```

### `/lib`
Funciones y utilidades del proyecto.

```
lib/
├── utils/                # Utilidades generales
│   ├── path-normalizer.ts
│   ├── image-dimensions.ts
│   └── image-validator.ts
├── validation/           # Funciones de validación
│   └── graduation-validation.ts
├── calculate-thickness.ts
├── findmarkdown-file.ts
└── ...
```

### `/hooks`
Hooks personalizados de React.

```
hooks/
├── use-lens-simulator.ts      # Lógica del simulador
├── use-thickness-simulator.ts # Estado del simulador
├── use-lens-svg.ts            # Cálculos SVG
└── use-thickness-sync.ts      # Sincronización de grosor
```

## 🔄 Flujo de Datos

### Renderizado de Artículos

```
1. Usuario visita /libreria/[slug]
   ↓
2. generateStaticParams() busca todos los .md en articles/
   ↓
3. findMarkdownFile() encuentra el archivo correspondiente
   ↓
4. Se lee el contenido del archivo Markdown
   ↓
5. MarkdownRenderer convierte Markdown a React
   ↓
6. Componentes específicos renderizan cada elemento
```

### Simulador de Espesor

```
1. Usuario ingresa valores en InputsSimulator
   ↓
2. validateGraduationInputs() valida los inputs
   ↓
3. Usuario hace clic en "Calcular"
   ↓
4. useLensSimulator procesa y valida los datos
   ↓
5. calculateThickness() calcula el grosor
   ↓
6. LensSimulator muestra el resultado con SVG
```

## 🎯 Principios de Diseño

### Separación de Responsabilidades

**UI (Presentación)**
- Solo muestra datos
- No contiene lógica de negocio
- Recibe props y callbacks

**Lógica de Negocio**
- Funciones puras en `lib/`
- Hooks para estado complejo
- Validaciones y cálculos

**Datos**
- Markdown en `articles/`
- Datos estáticos en `data/`
- Tipos en `types/`

### Ejemplo de Separación

**Antes (Mezclado):**
```tsx
// ❌ Lógica mezclada con UI
const Component = ({ value }) => {
  const isValid = Number(value) > 0 && Number(value) < 20;
  return <button disabled={!isValid}>Enviar</button>;
};
```

**Después (Separado):**
```tsx
// ✅ Lógica separada
// lib/validation/validate-value.ts
export const validateValue = (value: string) => {
  const num = Number(value);
  return num > 0 && num < 20;
};

// Componente solo UI
const Component = ({ value }) => {
  const isValid = validateValue(value);
  return <button disabled={!isValid}>Enviar</button>;
};
```

## 📦 Patrones Utilizados

### Container/Presentational Pattern

- **Containers**: Páginas que manejan estado y lógica (`app/simulador-de-espesor/page.tsx`)
- **Presentational**: Componentes que solo muestran UI (`components/simulator/`)

### Custom Hooks Pattern

Lógica reutilizable encapsulada en hooks:
- `useLensSimulator`: Lógica del simulador
- `useThicknessSimulator`: Estado del simulador

### Utility Functions Pattern

Funciones puras reutilizables:
- `normalizePath()`: Normalización de rutas
- `validateGraduationInputs()`: Validación

## 🔍 Búsqueda de Archivos Markdown

El sistema busca recursivamente en `articles/`:

```typescript
// lib/findmarkdown-file.ts
export const findMarkdownFile = (root: string, slug: string) => {
  // Busca recursivamente el archivo {slug}.md
  // Retorna la ruta completa o null
};
```

## 🎨 Sistema de Estilos

- **Tailwind CSS**: Estilos utilitarios
- **Clases condicionales**: `clsx` y `tailwind-merge`
- **Variables CSS**: Para temas y colores

## 🧪 Testing (Futuro)

Estructura recomendada para tests:

```
__tests__/
├── lib/
│   ├── validation/
│   └── utils/
├── hooks/
└── components/
```

## 📊 Generación Estática

Next.js genera páginas estáticas en build time:

1. `generateStaticParams()` encuentra todos los slugs
2. Para cada slug, se genera una página HTML estática
3. Las páginas se sirven desde CDN (más rápido)

## 🔐 TypeScript

Tipos definidos en `types/`:

- `simulator-types.ts`: Tipos del simulador
- `sidebar-data-types.ts`: Tipos del sidebar

## 🚀 Optimizaciones

- **Imágenes**: Next.js Image con optimización automática
- **Código**: Code splitting automático de Next.js
- **Markdown**: Renderizado del lado del servidor
- **SVG**: Componentes optimizados para el simulador
