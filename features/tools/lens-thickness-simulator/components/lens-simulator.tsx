//LIBS
import { calculatePercentage } from "../utils";
//COMPONENTS
import { ThicknessMessage } from "./thickness-message";
import { LensSVG } from "./svg-lens";
import { SelectSimulator } from "./select-simulator";
//HOOKS
import { useLensSVG, useThicknessSync } from "../hooks";
//TYPES
import type { SideThickness, GraduationObject, LensSide } from "../types/simulator";

interface LensSimulatorProps {
  values: GraduationObject;
  isShow: boolean;
  side: LensSide;
  setThickness: React.Dispatch<React.SetStateAction<SideThickness>>;
  thickness: SideThickness;
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
  const { isMax, percentageDiff } = calculatePercentage({ side, thickness });

  return (
    <div
      className={`
        w-80 flex-col items-center gap-8
        ${isShow ? "flex" : "hidden"}
        lg:flex
      `}
    >
      {/* Mensaje dinámico */}
      <ThicknessMessage
        thickness={thickness[side]}
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

