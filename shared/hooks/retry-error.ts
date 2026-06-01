export const retryError = (reset?: () => void) => {
  if (reset) reset();
  else if (typeof window !== "undefined") window.location.reload();
};
