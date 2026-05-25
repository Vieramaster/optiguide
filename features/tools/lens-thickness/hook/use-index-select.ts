import { useState } from "react";

import { LensRefractiveIndexBySide, LensSide } from "../types/simulator";

const DEFAULT_REFRACTIVE_INDEX = 1.5;

export const useIndexSelect = () => {
  const [lensIndex, setLensIndex] = useState<LensRefractiveIndexBySide>({
    left: DEFAULT_REFRACTIVE_INDEX,
    right: DEFAULT_REFRACTIVE_INDEX,
  });

  const handleIndexChange = (side: LensSide) => (value: string) => {
    setLensIndex((prev) => ({
      ...prev,
      [side]: Number(value),
    }));
  };

  return {
    handleIndexChange,
    lensIndex,
  };
};
