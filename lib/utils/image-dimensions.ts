/**
 * Convierte las dimensiones de una imagen a números
 * @param width - Ancho (puede ser string o number)
 * @param height - Alto (puede ser string o number)
 * @param defaultWidth - Ancho por defecto si no se proporciona
 * @param defaultHeight - Alto por defecto si no se proporciona
 * @returns Objeto con width y height como números
 */
export const parseImageDimensions = (
  width: string | number | undefined,
  height: string | number | undefined,
  defaultWidth: number = 600,
  defaultHeight: number = 400
): { width: number; height: number } => {
  const imageWidth = width
    ? typeof width === "string"
      ? parseInt(width)
      : width
    : defaultWidth;

  const imageHeight = height
    ? typeof height === "string"
      ? parseInt(height)
      : height
    : defaultHeight;

  return { width: imageWidth, height: imageHeight };
};
