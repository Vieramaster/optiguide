import { useState } from "react";
import type { LensSide } from "../types/simulator";

export type SideThicknessState = {
  [key in LensSide]: number;
};
export const useThicknessSimulator = () => {
  const [activeSide, setActiveSide] = useState<LensSide>("A");
  const [thickness, setThickness] = useState<SideThicknessState>({ A: 0, B: 0 });

  return {
    activeSide,
    setActiveSide,
    thickness,
    setThickness,
  };
};