/**
 * Normaliza una ruta para asegurar que tenga el formato correcto
 * Si no empieza con / o http, agrega / al inicio
 * @param path - Ruta a normalizar
 * @returns Ruta normalizada
 */
export const normalizePath = (path: string | null | undefined): string => {
  if (!path) return "#";

  // Si ya empieza con / o http, retornar tal cual
  if (path.startsWith("/") || path.startsWith("http")) {
    return path;
  }

  // Si no, agregar / al inicio
  return "/" + path;
};
