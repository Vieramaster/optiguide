/**
 * Valida si el src de una imagen es válido para Next.js Image
 * Next.js Image solo acepta strings, no Blob
 * @param src - Source de la imagen
 * @returns true si es válido, false en caso contrario
 */
export const isValidImageSrc = (src: string | null | undefined): src is string => {
  return typeof src === "string" && src.length > 0;
};
