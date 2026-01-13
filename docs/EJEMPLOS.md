# Ejemplos Prácticos

## 📝 Ejemplos de Uso Común

### Agregar un Nuevo Artículo Completo

**1. Crear el archivo:**
```bash
articles/visual-conditions/ejemplo.md
```

**2. Contenido del archivo:**
```markdown
# Ejemplo de Condición Visual

## ¿Qué es?

Descripción breve de la condición...

![Imagen descriptiva](/images/library/visual-conditions/ejemplo-1.webp)

## Síntomas

- Síntoma 1
- Síntoma 2
- Síntoma 3

## Tratamiento

El tratamiento incluye [lentes correctivos](/libreria/tipos-de-lentes) y 
[tratamiento antirreflejante](/libreria/antireflejante).

Más información sobre [miopía](/libreria/miopia) y 
[astigmatismo](/libreria/astigmatismo).
```

**3. Agregar imagen:**
- Coloca `ejemplo-1.webp` en `public/images/library/visual-conditions/`
- La imagen se mostrará automáticamente

### Crear un Componente con Validación

**1. Crear función de validación:**
```typescript
// lib/validation/email-validation.ts
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
```

**2. Crear el componente:**
```tsx
// components/email-input.tsx
import { isValidEmail } from "@/lib/validation/email-validation";
import { Input } from "@/components/ui/input";

export const EmailInput = ({ value, onChange }) => {
  const isValid = isValidEmail(value);
  
  return (
    <Input
      type="email"
      value={value}
      onChange={onChange}
      className={isValid ? "" : "border-red-500"}
    />
  );
};
```

### Crear un Hook Personalizado

**Ejemplo: Hook para formulario**

```typescript
// hooks/use-form.ts
import { useState } from "react";

interface UseFormReturn<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  handleChange: (name: keyof T, value: string) => void;
  validate: () => boolean;
  reset: () => void;
}

export const useForm = <T extends Record<string, string>>(
  initialValues: T
): UseFormReturn<T> => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = (name: keyof T, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    // Limpiar error al cambiar
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = (): boolean => {
    // Lógica de validación
    return Object.keys(errors).length === 0;
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    validate,
    reset,
  };
};
```

**Uso del hook:**
```tsx
const MiFormulario = () => {
  const { values, errors, handleChange, validate } = useForm({
    nombre: "",
    email: "",
  });

  const handleSubmit = () => {
    if (validate()) {
      // Enviar formulario
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={values.nombre}
        onChange={(e) => handleChange("nombre", e.target.value)}
      />
      {errors.nombre && <span>{errors.nombre}</span>}
    </form>
  );
};
```

### Agregar una Nueva Función Utilitaria

**Ejemplo: Formatear números**

```typescript
// lib/utils/number-formatter.ts

/**
 * Formatea un número con separadores de miles
 * @param num - Número a formatear
 * @param decimals - Número de decimales (default: 2)
 * @returns Número formateado como string
 */
export const formatNumber = (num: number, decimals: number = 2): string => {
  return new Intl.NumberFormat("es-ES", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num);
};

// Uso:
formatNumber(1234.567); // "1.234,57"
formatNumber(1234.567, 0); // "1.235"
```

### Crear un Componente UI Reutilizable

**Ejemplo: Card Component**

```tsx
// components/ui/card.tsx
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Card = ({ children, className, title }: CardProps) => {
  return (
    <div className={cn("rounded-lg border p-6 shadow-sm", className)}>
      {title && <h3 className="mb-4 text-lg font-semibold">{title}</h3>}
      {children}
    </div>
  );
};

// Uso:
<Card title="Mi Tarjeta">
  <p>Contenido de la tarjeta</p>
</Card>
```

### Agregar una Nueva Ruta

**1. Crear carpeta en `app/`:**
```bash
app/mi-nueva-ruta/page.tsx
```

**2. Crear el componente:**
```tsx
// app/mi-nueva-ruta/page.tsx
export default function MiNuevaRuta() {
  return (
    <div>
      <h1>Mi Nueva Ruta</h1>
    </div>
  );
}
```

**3. La ruta estará disponible en:**
```
http://localhost:3000/mi-nueva-ruta
```

### Trabajar con Imágenes

**Agregar imagen estática:**
```tsx
import Image from "next/image";

export const MiComponente = () => {
  return (
    <Image
      src="/images/library/visual-conditions/ejemplo.webp"
      alt="Descripción"
      width={600}
      height={400}
    />
  );
};
```

**Imagen desde Markdown:**
```markdown
![Descripción](/images/library/visual-conditions/ejemplo.webp)
```

### Manejar Errores

**Componente de error:**
```tsx
// app/mi-ruta/error.tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Algo salió mal!</h2>
      <button onClick={reset}>Intentar de nuevo</button>
    </div>
  );
}
```

### Estado de Carga

**Componente de loading:**
```tsx
// app/mi-ruta/loading.tsx
import { ArticleSkeleton } from "@/components/articles/article-skeleton";

export default function Loading() {
  return <ArticleSkeleton />;
}
```

### Trabajar con Datos Estáticos

**Agregar datos en `data/`:**
```typescript
// data/mis-datos.ts
export const MIS_DATOS = [
  { id: 1, nombre: "Ejemplo 1" },
  { id: 2, nombre: "Ejemplo 2" },
];

// Uso:
import { MIS_DATOS } from "@/data/mis-datos";
```

### Agregar Tipos TypeScript

**Definir tipos:**
```typescript
// types/mis-tipos.ts
export interface MiTipo {
  id: number;
  nombre: string;
  activo: boolean;
}

export type MiTipoUnion = "opcion1" | "opcion2" | "opcion3";
```

**Usar tipos:**
```tsx
import { MiTipo } from "@/types/mis-tipos";

const MiComponente = ({ dato }: { dato: MiTipo }) => {
  return <div>{dato.nombre}</div>;
};
```

## 🎯 Casos de Uso Comunes

### Validar Inputs en Tiempo Real

```tsx
import { useState } from "react";
import { validateGraduationInputs } from "@/lib/validation/graduation-validation";

const MiInput = () => {
  const [value, setValue] = useState("");
  const isValid = validateGraduationInputs({ ESF: value, CIL: "", EJE: "", DIAM: "" });

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={isValid ? "border-green-500" : "border-red-500"}
    />
  );
};
```

### Normalizar Rutas Dinámicamente

```tsx
import { normalizePath } from "@/lib/utils/path-normalizer";

const MiEnlace = ({ href }: { href: string }) => {
  const path = normalizePath(href);
  return <a href={path}>Enlace</a>;
};
```

### Manejar Dimensiones de Imágenes

```tsx
import { parseImageDimensions } from "@/lib/utils/image-dimensions";

const MiImagen = ({ width, height }: { width?: string; height?: string }) => {
  const { width: w, height: h } = parseImageDimensions(width, height);
  
  return <img width={w} height={h} src="/imagen.jpg" />;
};
```

## 💡 Tips y Trucos

1. **Usa `@/` para imports absolutos**: Siempre funciona desde la raíz
2. **Separa lógica de UI**: Más fácil de testear y mantener
3. **Usa TypeScript**: Te ayuda a encontrar errores antes
4. **Comenta el "por qué"**: No el "qué" (el código ya lo dice)
5. **Nombres descriptivos**: `calcularEspesor` es mejor que `calc`
