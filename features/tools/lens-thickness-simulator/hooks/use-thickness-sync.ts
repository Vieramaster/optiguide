//HOOKS
import { useEffect } from "react";
//TYPE
import type { LensSide } from "../types/simulator";

export const useThicknessSync = (
  side:LensSide,
  totalThickness: number,
  setThickness: React.Dispatch<React.SetStateAction<{ A: number; B: number }>>
) => {
  useEffect(() => {
    setThickness(prev => ({ ...prev, [side]: totalThickness }));
  }, [totalThickness, side, setThickness]);
}
