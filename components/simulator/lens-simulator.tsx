//TYPES
import type { sideThicknessType } from "@/types/simulator-types";
import type { GraduationValueType } from "@/types/simulator-types";
//HOOKS
import { useLensSVG } from "@/hooks/use-lens-svg";
import { useThicknessSync } from "@/hooks/use-thickness-sync";
//LIBS
import { porcentageCalculator } from "@/lib/porcentage-calculator";
//COMPONENTS
import { ThicknessMessage } from "./thickness-message";
import { LensSVG } from "../ui/LensSVG";
import { SelectSimulator } from "./select-simulator";


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
  const { isMax, percentageDiff } = porcentageCalculator({ side, thickness });

  return (
    <div
      className={`
        w-80 flex-col items-center gap-8
        ${isShow ? "flex" : "hidden"}
        lg:flex
      `}
    >
      <ThicknessMessage
        thickness={thickness[side]}
        isMax={isMax}
        percentage={percentageDiff}
      />
      <SelectSimulator onValueSelect={handleValueSelect} />
      <LensSVG isPositive={isPositive} size={totalThickness} />
    </div>
  );
};

