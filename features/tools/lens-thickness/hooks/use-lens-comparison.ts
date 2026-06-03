import { useState } from "react";

import type { LensComparisonKey } from "../types/lens-comparison";

export const useLensComparison = () => {
  const [active, setActive] = useState<LensComparisonKey>("lensA");

  const select = (lensComparisonKey: LensComparisonKey) => {
    setActive(lensComparisonKey);
  };

  return {
    active,
    select,
  };
};
