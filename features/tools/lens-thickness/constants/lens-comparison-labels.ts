import type { LensComparisonKey } from "../types/lens-comparison";

export const LENS_COMPARISON_BUTTON_LABEL: Record<LensComparisonKey, string> = {
  lensA: "A",
  lensB: "B",
};

export const LENS_COMPARISON_ARIA_LABEL: Record<LensComparisonKey, string> = {
  lensA: "Lente A",
  lensB: "Lente B",
};

export const REFRACTIVE_INDEX_LABEL_BY_LENS_COMPARISON: Record<
  LensComparisonKey,
  string
> = {
  lensA: "Índice de refracción (lente A)",
  lensB: "Índice de refracción (lente B)",
};
