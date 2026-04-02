export const parseImageDimensions = (
  width: string | number | undefined,
  height: string | number | undefined,
  defaultWidth: number = 600,
  defaultHeight: number = 400
) => ({
  width: typeof width === "string" ? parseInt(width, 10) : width ?? defaultWidth,
  height: typeof height === "string" ? parseInt(height, 10) : height ?? defaultHeight
});