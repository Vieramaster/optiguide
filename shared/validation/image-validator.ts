
export const isValidImageSrc = (src: string | null | undefined): src is string => {
  return typeof src === "string" && src.length > 0;
};
