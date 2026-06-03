import { useState } from "react";

import { DEFAULT_REFRACTIVE_INDEX_SELECT_VALUE } from "../constants/refractive-index-options";
import type {
  LensComparisonKey,
  RefractiveIndexByLensComparison,
} from "../types/lens-comparison";

const INITIAL_INDEXES: RefractiveIndexByLensComparison = {
  lensA: DEFAULT_REFRACTIVE_INDEX_SELECT_VALUE,
  lensB: DEFAULT_REFRACTIVE_INDEX_SELECT_VALUE,
};

export const useRefractiveIndexByLensComparison = () => {
  const [indexes, setIndexes] = useState<RefractiveIndexByLensComparison>(
    INITIAL_INDEXES,
  );

  const setIndex = (lensComparisonKey: LensComparisonKey, selectValue: string) => {
    setIndexes((previous) => ({
      ...previous,
      [lensComparisonKey]: selectValue,
    }));
  };

  const getIndex = (lensComparisonKey: LensComparisonKey): string =>
    indexes[lensComparisonKey];

  return {
    indexes,
    setIndex,
    getIndex,
  };
};
