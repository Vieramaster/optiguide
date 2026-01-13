# Guía de Desarrollo

## 🛠️ Configuración del Entorno

### Requisitos

- Node.js 18+
- Editor de código (VS Code recomendado)
- Git

### Extensiones Recomendadas (VS Code)

- ESLint
- Prettier
- TypeScript Vue Plugin (Volar)
- Tailwind CSS IntelliSense

## 📝 Agregar un Nuevo Artículo

### Paso 1: Crear el archivo Markdown

Crea un archivo `.md` en la carpeta correspondiente:

```bash
articles/visual-conditions/nueva-condicion.md
```

### Paso 2: Escribir el contenido

Usa Markdown estándar con algunas convenciones:

```markdown
# Título Principal

## Subtítulo

Texto del artículo...

![Descripción de la imagen](/images/library/visual-conditions/imagen.webp)

- Lista de puntos
- Otro punto

[Enlace a otro artículo](/libreria/otro-articulo)
```

### Paso 3: Agregar imágenes

1. Coloca las imágenes en `public/images/library/`
2. Organiza por categoría (ej: `visual-conditions/`)
3. Usa formato WebP para mejor rendimiento
4. Referencia con ruta absoluta desde `/images/`

### Paso 4: Enlaces internos

**✅ Correcto:**

```markdown
[miopía](/libreria/miopia)
```

**❌ Incorrecto:**

```markdown
[miopía](/miopia)
```

## 🎨 Crear un Nuevo Componente

### Estructura Básica

```tsx
// components/mi-carpeta/mi-componente.tsx
interface MiComponenteProps {
  // Props del componente
}

export const MiComponente = ({ ...props }: MiComponenteProps) => {
  return <div>{/* Contenido */}</div>;
};
```

### Separar Lógica de UI

**1. Si necesitas validación o cálculos:**

Crea una función en `lib/validation/` o `lib/utils/`:

```typescript
// lib/validation/mi-validacion.ts
export const validarAlgo = (valor: string): boolean => {
  // Lógica de validación
  return true;
};
```

**2. Si necesitas estado complejo:**

Crea un hook en `hooks/`:

```typescript
// hooks/use-mi-hook.ts
export const useMiHook = () => {
  const [estado, setEstado] = useState();

  // Lógica del hook

  return { estado, setEstado };
};
```

**3. Usa en el componente:**

```tsx
import { validarAlgo } from "@/lib/validation/mi-validacion";
import { useMiHook } from "@/hooks/use-mi-hook";

export const MiComponente = () => {
  const { estado } = useMiHook();
  const esValido = validarAlgo(estado);

  return <div>{/* UI */}</div>;
};
```

## 🔧 Agregar una Nueva Función Utilitaria

### Ubicación

- `lib/utils/`: Funciones generales reutilizables
- `lib/validation/`: Funciones de validación
- `lib/`: Funciones específicas del dominio

### Ejemplo

```typescript
// lib/utils/mi-utilidad.ts

/**
 * Descripción breve de qué hace la función
 * @param parametro - Descripción del parámetro
 * @returns Descripción del retorno
 */
export const miUtilidad = (parametro: string): string => {
  // Implementación
  return resultado;
};
```

## 🎣 Crear un Nuevo Hook

### Estructura

```typescript
// hooks/use-mi-hook.ts

/**
 * Descripción del hook
 * @returns Objeto con valores y funciones
 */
export const useMiHook = () => {
  const [estado, setEstado] = useState();

  const funcion = () => {
    // Lógica
  };

  return {
    estado,
    funcion,
  };
};
```

### Uso

```tsx
import { useMiHook } from "@/hooks/use-mi-hook";

const MiComponente = () => {
  const { estado, funcion } = useMiHook();

  return <div onClick={funcion}>{estado}</div>;
};
```

## 🧪 Testing (Futuro)

### Estructura de Tests

```typescript
// __tests__/lib/utils/mi-utilidad.test.ts
import { miUtilidad } from "@/lib/utils/mi-utilidad";

describe("miUtilidad", () => {
  it("debe retornar el resultado esperado", () => {
    expect(miUtilidad("input")).toBe("output");
  });
});
```

## 🐛 Debugging

### Errores Comunes

**1. Error: "Cannot find module"**

- Verifica que el import use `@/` para rutas absolutas
- Ejecuta `npm install` para reinstalar dependencias

**2. Error de TypeScript**

- Verifica que los tipos estén correctos
- Ejecuta `npm run build` para ver errores detallados

**3. Los artículos no aparecen**

- Verifica que el archivo `.md` esté en `articles/`
- Asegúrate de que el nombre del archivo coincida con el slug
- Revisa la consola del navegador para errores

## 📦 Build y Deploy

### Build Local

```bash
npm run build
```

Esto generará:

- Páginas estáticas en `.next/`
- Optimización de imágenes
- Minificación de código

### Verificar Build

```bash
npm run start
```

Abre `http://localhost:3000` para verificar.

## 🔍 Linting

### Ejecutar Linter

```bash
npm run lint
```

### Reglas Principales

- TypeScript estricto habilitado
- ESLint con configuración de Next.js
- Preferir funciones puras
- Separar lógica de UI

## 📚 Recursos Útiles

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 💡 Buenas Prácticas

1. **Nombres descriptivos**: Usa nombres claros para funciones y variables
2. **Comentarios útiles**: Explica el "por qué", no el "qué"
3. **Funciones pequeñas**: Una función, una responsabilidad
4. **Tipos explícitos**: Usa TypeScript para mayor seguridad
5. **Separación de concerns**: UI separada de lógica

## 🚨 Checklist Antes de Commit

- [ ] Código compila sin errores (`npm run build`)
- [ ] Linter pasa (`npm run lint`)
- [ ] Tipos de TypeScript correctos
- [ ] Lógica separada de UI
- [ ] Comentarios donde sea necesario
- [ ] Nombres descriptivos
