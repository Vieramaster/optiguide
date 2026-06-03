export const isValidSlug = (slug: string): boolean => {
  if (!slug || typeof slug !== "string") return false;

  const slugRegex = /^[a-zA-Z0-9_-]+$/;
  if (!slugRegex.test(slug)) return false;

  if (slug.length > 100) return false;

  return true;
};
