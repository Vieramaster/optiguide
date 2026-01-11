
import { useEffect } from "react";

export const useThicknessSync = (
  side: "A" | "B",
  totalThickness: number,
  setThickness: React.Dispatch<React.SetStateAction<{ A: number; B: number }>>
) => {
  useEffect(() => {
    setThickness(prev => ({ ...prev, [side]: totalThickness }));
  }, [totalThickness, side, setThickness]);
}
