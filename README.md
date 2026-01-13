# Optiguide 📚

**Optiguide** es una aplicación web educativa sobre óptica que proporciona información clara y práctica sobre conceptos básicos, condiciones visuales y tratamientos de lentes. Incluye un simulador interactivo para calcular el espesor de lentes según la graduación.

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 18 o superior
- npm, yarn, pnpm o bun

### Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd optiguide
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
optiguide/
├── app/                    # Páginas y rutas de Next.js
│   ├── libreria/          # Biblioteca de artículos
│   └── simulador-de-espesor/  # Simulador de espesor
│
├── articles/               # Contenido en Markdown
│   ├── basic-concepts/    # Conceptos básicos
│   ├── treatments/        # Tratamientos
│   └── visual-conditions/ # Condiciones visuales
│
├── components/             # Componentes React
│   ├── articles/          # Componentes para artículos
│   ├── simulator/         # Componentes del simulador
│   └── ui/                # Componentes UI reutilizables
│
├── hooks/                 # Hooks personalizados de React
├── lib/                   # Funciones y utilidades
│   ├── utils/             # Utilidades generales
│   └── validation/       # Funciones de validación
│
├── types/                 # Tipos de TypeScript
└── data/                  # Datos estáticos
```

## 🏗️ Arquitectura

### Separación de Responsabilidades

El proyecto sigue una arquitectura limpia con separación clara entre:

- **UI (Interfaz)**: Componentes React que solo se encargan de mostrar contenido
- **Lógica de Negocio**: Funciones puras en `lib/` y hooks en `hooks/`
- **Datos**: Archivos Markdown en `articles/` y datos estáticos en `data/`

### Organización de Componentes

- **`components/articles/`**: Componentes específicos para renderizar artículos Markdown
- **`components/simulator/`**: Componentes del simulador de espesor
- **`components/ui/`**: Componentes UI reutilizables (botones, inputs, etc.)

### Funciones Utilitarias

- **`lib/utils/`**: Funciones puras reutilizables (normalización de paths, conversión de imágenes, etc.)
- **`lib/validation/`**: Funciones de validación de datos
- **`lib/`**: Funciones específicas del dominio (cálculo de espesor, búsqueda de archivos, etc.)

## 📝 Agregar Nuevo Contenido

### Agregar un Nuevo Artículo

1. Crea un archivo `.md` en la carpeta correspondiente:
   - `articles/basic-concepts/` para conceptos básicos
   - `articles/treatments/` para tratamientos
   - `articles/visual-conditions/` para condiciones visuales

2. El nombre del archivo será el slug de la URL. Por ejemplo:
   - `miopia.md` → `/libreria/miopia`

3. Escribe el contenido en Markdown. Puedes usar:
   - Encabezados (`#`, `##`, `###`)
   - Imágenes: `![alt text](/images/library/ruta/imagen.webp)`
   - Enlaces: `[texto](/libreria/slug-del-articulo)`
   - Listas, tablas, etc.

### Formato de Enlaces

Todos los enlaces internos deben usar el prefijo `/libreria/`:

```markdown
✅ Correcto: [miopía](/libreria/miopia)
❌ Incorrecto: [miopía](/miopia)
```

## 🎨 Componentes Principales

### Simulador de Espesor

El simulador permite calcular el grosor estimado de lentes según:
- Graduación (ESF, CIL, EJE, DIAM)
- Índice del material

**Componentes principales:**
- `InputsSimulator`: Formulario de entrada de graduación
- `LensSimulator`: Visualización del lente y cálculo
- `SelectSimulator`: Selector de índice de material

### Renderizador de Markdown

Convierte archivos Markdown en componentes React con estilos personalizados.

**Componentes de Markdown:**
- `Title`, `SubTitle`, `BodyText`: Encabezados
- `Text`: Párrafos
- `Links`: Enlaces con normalización automática
- `MDImage`: Imágenes optimizadas con Next.js Image
- `LiList`, `OlList`: Listas

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye la aplicación
npm run start        # Inicia servidor de producción

# Calidad de código
npm run lint         # Ejecuta ESLint
```

## 🧪 Hooks Personalizados

### `useLensSimulator`
Maneja la lógica del simulador de lentes:
- Validación de inputs
- Cálculo de valores finales
- Manejo de errores

### `useThicknessSimulator`
Gestiona el estado del simulador de espesor:
- Alternancia entre lentes A y B
- Estado de grosor

### `useLensSVG`
Calcula propiedades del SVG del lente:
- Grosor total
- Tipo (positivo/negativo)

## 📚 Funciones Utilitarias

### Validación
- `validateGraduationInputs()`: Valida inputs de graduación

### Utilidades
- `normalizePath()`: Normaliza rutas de enlaces
- `parseImageDimensions()`: Convierte dimensiones de imágenes
- `isValidImageSrc()`: Valida source de imágenes

## 🎯 Características Principales

- ✅ **Biblioteca de Artículos**: Sistema de artículos en Markdown con renderizado personalizado
- ✅ **Simulador Interactivo**: Calculadora de espesor de lentes con visualización SVG
- ✅ **Navegación Intuitiva**: Sidebar con organización por categorías
- ✅ **Responsive Design**: Diseño adaptable a móviles y desktop
- ✅ **TypeScript**: Tipado fuerte para mayor seguridad
- ✅ **Arquitectura Limpia**: Separación clara entre UI y lógica

## 🛠️ Tecnologías Utilizadas

- **Next.js 16**: Framework React con App Router
- **React 19**: Biblioteca de UI
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utilitarios
- **Radix UI**: Componentes accesibles
- **React Markdown**: Renderizado de Markdown
- **Lucide React**: Iconos

## 📖 Guía de Contribución

1. Crea una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
2. Realiza tus cambios
3. Asegúrate de que el código compile: `npm run build`
4. Ejecuta el linter: `npm run lint`
5. Haz commit de tus cambios: `git commit -m "Agrega nueva funcionalidad"`
6. Push a la rama: `git push origin feature/nueva-funcionalidad`
7. Abre un Pull Request

## 📝 Convenciones de Código

- **Nombres de archivos**: kebab-case (ej: `graduation-input.tsx`)
- **Componentes**: PascalCase (ej: `LensSimulator`)
- **Funciones utilitarias**: camelCase (ej: `normalizePath`)
- **Hooks**: Prefijo `use` (ej: `useLensSimulator`)

## 🐛 Solución de Problemas

### El servidor no inicia
- Verifica que Node.js esté instalado: `node --version`
- Reinstala dependencias: `rm -rf node_modules && npm install`

### Los artículos no se muestran
- Verifica que los archivos `.md` estén en la carpeta `articles/`
- Asegúrate de que los enlaces usen el prefijo `/libreria/`

### Errores de TypeScript
- Ejecuta: `npm run build` para ver errores detallados
- Verifica que los tipos estén correctamente definidos en `types/`

## 📄 Licencia

Este proyecto es privado.

## 👥 Autor

Desarrollado para proporcionar información educativa sobre óptica.

---

**Nota**: Este simulador es ilustrativo y no siempre refleja el grosor real, depende del laboratorio y del técnico óptico.
