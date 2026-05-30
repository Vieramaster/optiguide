import { useState } from "react";

import type { LensComparisonKey } from "../types/lens-comparison";

export const useLensComparison = () => {
  const [activeLensComparison, setActiveLensComparison] =
    useState<LensComparisonKey>("lensA");

  const selectLensComparison = (lensComparisonKey: LensComparisonKey) => {
    setActiveLensComparison(lensComparisonKey);
  };

  return {
    activeLensComparison,
    selectLensComparison,
  };
};
