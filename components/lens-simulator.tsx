import { SelectSimulator } from "./select-simulator";
import { LensSVG } from "./ui/LensSVG";
import { useLensSVG } from "@/hooks/use-lens-svg";
import { GraduationValueType } from "@/types/simulator-types";

interface LensSimulatorProps {
  values: GraduationValueType 
}

export const LensSimulator = ({ values }: LensSimulatorProps) => {

  const  { handleValueSelect, totalThickness, isPositive} = useLensSVG(values)


  return (
    <div className="h-96 w-1/2 flex flex-col gap-8 justify-center items-center">
      <SelectSimulator onValueSelect={handleValueSelect} />
      <p>se estima que el grosor es de {totalThickness}mm</p>
      <LensSVG {...isPositive} size={totalThickness}/>
    </div>
  );
};
