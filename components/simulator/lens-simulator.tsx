//TYPES
import type { sideThicknessType } from "@/types/simulator-types";
import { GraduationValueType } from "@/types/simulator-types";
//HOOKS
import { useLensSVG } from "@/hooks/use-lens-svg";
import { useThicknessSync } from "@/hooks/use-thickness-sync";
//LIBS
import { porcentageCalculator } from "@/lib/porcentage-calculator";
//COMPONENTS
import { ThicknessPorcentageMessage } from "./thickness-porcentage-message";
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

  // hook personalizado para manejar el SVG de la lente
  const { handleValueSelect, totalThickness, isPositive } = useLensSVG(values);

  // sincroniza el grosor con el hook
  useThicknessSync(side, totalThickness, setThickness);

  // cálculo de porcentaje y comparación de grosores
  const { isMax, percentageDiff } = porcentageCalculator({ side, thickness });

  return (
    <div
      className={`
        w-80 flex-col items-center gap-8
        ${isShow ? "flex" : "hidden"}
        lg:flex
      `}
    >
      {/* Mensaje dinámico */}
      <ThicknessPorcentageMessage
        isMax={isMax}
        percentage={percentageDiff}
      />

      {/** selects de indices */}
      <SelectSimulator onValueSelect={handleValueSelect} />

      {/**SVG maleable */}
      <LensSVG isPositive={isPositive} size={totalThickness} />


    </div>
  );
};

