const LOCAL_IMAGE_PATH_PATTERN = /^\/(?!\/)[^?\s#]+$/;

export const isValidImageSrc = (
  src: string | null | undefined,
): src is string => {
  if (typeof src !== "string" || src.length === 0) {
    return false;
  }

  return LOCAL_IMAGE_PATH_PATTERN.test(src);
};
