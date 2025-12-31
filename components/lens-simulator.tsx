import { SelectSimulator } from "./select-simulator";
import { GraduationValueType } from "@/types/simulator-types";
import { calculateThickness } from "@/lib/calculate-thickness";
import { useState } from "react";
import { LensSVG } from "./ui/LensSVG";

interface LensSimulatorProps {
  graduationValues: GraduationValueType;
}

export const LensSimulator = ({ graduationValues }: LensSimulatorProps) => {
  const [index, setIndex] = useState(1.5);

  const handleValueSelect = (value: string) => {
    setIndex(parseFloat(value));
  };

  const toNumber = (v: string, fallback: number) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : fallback;
  };

  const calculatedSize = calculateThickness({
    sphere: toNumber(graduationValues.ESF, 0),
    cylinder: toNumber(graduationValues.CIL, 0),
    diameter: toNumber(graduationValues.DIAM, 20),
    index,
  });

const roundedSize = Number(calculatedSize.toFixed(2));


  const isPositive = Number(graduationValues.ESF) > 0;

  return (
    <div className="h-96 w-1/2 flex flex-col gap-8 justify-center items-center">
      <SelectSimulator onValueSelect={handleValueSelect} />
      <p>se estima que el grosor es de {roundedSize}mm</p>
      <LensSVG isPositive={isPositive} size={roundedSize}/>
    </div>
  );
};
