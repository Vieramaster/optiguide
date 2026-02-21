import { SelectSimulator } from "./select-simulator";
import { LensSVG } from "../ui/LensSVG";
import { useLensSVG } from "@/hooks/use-lens-svg";
import { GraduationValueType } from "@/types/simulator-types";
import { useThicknessSync } from "@/hooks/use-thickness-sync";
import { GetThicknessDifference } from "@/lib/get-thickness-difference";
import { MessageThicknessDifference } from "./message-thickness-difference";
import type { sideThicknessType } from "@/types/simulator-types";

interface LensSimulatorProps {
  values: GraduationValueType;
  isShow: boolean;
  side: "A" | "B";
  setThickness: React.Dispatch<React.SetStateAction<sideThicknessType>>;
  thickness: sideThicknessType;
}

export const LensSimulator = ({
  values,
  isShow,
  side,
  setThickness,
  thickness,
}: LensSimulatorProps) => {
  const { handleValueSelect, totalThickness, isPositive } = useLensSVG(values);


  useThicknessSync(side, totalThickness, setThickness);

  return (
    <div
      className={`
        w-80 flex-col items-center gap-8
        ${isShow ? "flex" : "hidden"}
        lg:flex
      `}
    >
      <SelectSimulator onValueSelect={handleValueSelect} />
        <MessageThicknessDifference
          currentSide={side}
          percentageDifferenceA={GetThicknessDifference(thickness.A, thickness.B)}
          percentageDifferenceB={GetThicknessDifference(thickness.A, thickness.B)}
        />
      <LensSVG isPositive={isPositive} size={totalThickness} />
    </div>
  );
  
};
