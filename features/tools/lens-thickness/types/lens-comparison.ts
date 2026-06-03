export type LensComparisonKey = "lensA" | "lensB";

export const LENS_COMPARISON_KEYS = ["lensA", "lensB"] as const satisfies readonly LensComparisonKey[];

export type RefractiveIndexByLensComparison = Record<LensComparisonKey, string>;

export type CalculatedLensThicknessByComparison = Record<LensComparisonKey, number>;
