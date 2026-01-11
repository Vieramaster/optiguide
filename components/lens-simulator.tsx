import { SelectSimulator } from "./select-simulator";
import { LensSVG } from "./ui/LensSVG";
import { useLensSVG } from "@/hooks/use-lens-svg";
import { GraduationValueType } from "@/types/simulator-types";
import { useEffect } from "react";

interface LensSimulatorProps {
  values: GraduationValueType;
  isShow: boolean;
  side: "A" | "B"
 setThickness: React.Dispatch<React.SetStateAction<{ A: number; B: number }>>;
}

export const LensSimulator = ({
  values,
  isShow,
  side,
  setThickness,
}: LensSimulatorProps) => {
  const { handleValueSelect, totalThickness, isPositive } = useLensSVG(values);

  useEffect(() => {
    setThickness((prev) => ({ ...prev, [side]: totalThickness }));
  }, [totalThickness, side, setThickness]);

  return (
    <div className={`${isShow ? "block" : "hidden"} w-80 flex flex-col items-center gap-8`}>
      <SelectSimulator onValueSelect={handleValueSelect} />
      <p>se estima que el grosor es de {totalThickness}mm</p>
      <LensSVG isPositive={isPositive} size={totalThickness} />
    </div>
  );
};

