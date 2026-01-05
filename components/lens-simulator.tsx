import { SelectSimulator } from "./select-simulator";
import { LensSVG } from "./ui/LensSVG";
import { useLensSVG } from "@/hooks/use-lens-svg";
import { GraduationValueType } from "@/types/simulator-types";

interface LensSimulatorProps {
  values: GraduationValueType;
  isShow: boolean;
}

export const LensSimulator = ({ values, isShow }: LensSimulatorProps) => {
  const { handleValueSelect, totalThickness, isPositive } = useLensSVG(values);

  return (
    <div
      className={`
    ${isShow ? "block" : "hidden"}
    
w-80 flex flex-col items-center gap-8
  xl:flex 
  `}
    >
      <SelectSimulator onValueSelect={handleValueSelect} />
      <p>se estima que el grosor es de {totalThickness}mm</p>
      <LensSVG {...{ isPositive }} size={totalThickness} />
    </div>
  );
};
