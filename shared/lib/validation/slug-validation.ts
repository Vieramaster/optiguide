/**
 * Valida si un slug es válido para buscar artículos
 * @param slug - El slug a validar
 * @returns true si es válido, false si no
 */
export const isValidSlug = (slug: string): boolean => {
  // Validaciones básicas del slug
  if (!slug || typeof slug !== "string") return false;

  // Solo caracteres alfanuméricos, guiones y guiones bajos
  const slugRegex = /^[a-zA-Z0-9_-]+$/;
  if (!slugRegex.test(slug)) return false;

  // Longitud razonable (máximo 100 caracteres)
  if (slug.length > 100) return false;

  return true;
};