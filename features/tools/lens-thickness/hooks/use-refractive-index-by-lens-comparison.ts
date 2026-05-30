import { useState } from "react";

import { DEFAULT_REFRACTIVE_INDEX_SELECT_VALUE } from "../constants/refractive-index-options";
import type {
  LensComparisonKey,
  RefractiveIndexSelectValueByLensComparison,
} from "../types/lens-comparison";

const INITIAL_REFRACTIVE_INDEX_SELECT_VALUE_BY_LENS_COMPARISON: RefractiveIndexSelectValueByLensComparison =
  {
    lensA: DEFAULT_REFRACTIVE_INDEX_SELECT_VALUE,
    lensB: DEFAULT_REFRACTIVE_INDEX_SELECT_VALUE,
  };

export const useRefractiveIndexByLensComparison = () => {
  const [
    refractiveIndexSelectValueByLensComparison,
    setRefractiveIndexSelectValueByLensComparison,
  ] = useState<RefractiveIndexSelectValueByLensComparison>(
    INITIAL_REFRACTIVE_INDEX_SELECT_VALUE_BY_LENS_COMPARISON,
  );

  const setRefractiveIndexForLensComparison = (
    lensComparisonKey: LensComparisonKey,
    selectValue: string,
  ) => {
    setRefractiveIndexSelectValueByLensComparison((previous) => ({
      ...previous,
      [lensComparisonKey]: selectValue,
    }));
  };

  const getRefractiveIndexSelectValueForLensComparison = (
    lensComparisonKey: LensComparisonKey,
  ): string => refractiveIndexSelectValueByLensComparison[lensComparisonKey];

  return {
    refractiveIndexSelectValueByLensComparison,
    setRefractiveIndexForLensComparison,
    getRefractiveIndexSelectValueForLensComparison,
  };
};
