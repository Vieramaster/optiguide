import { useState } from "react";

import { SelectLensIndex, LensSide } from "../types/simulator";

const DEFAULT_REFRACTIVE_INDEX = 1.5;

export const useIndexSelect = () => {
  const [lensIndex, setLensIndex] = useState<SelectLensIndex>({
    A: DEFAULT_REFRACTIVE_INDEX,
    B: DEFAULT_REFRACTIVE_INDEX,
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
