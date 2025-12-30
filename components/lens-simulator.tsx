import { SelectSimulator } from "./select-simulator";
import { GraduationValueType } from "@/types/simulator-types";
import { calculateThickness } from "@/lib/calculate-thickness";
import { useState } from "react";

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

  const calculate = calculateThickness({
    sphere: toNumber(graduationValues.ESF, 0),
    cylinder: toNumber(graduationValues.CIL, 0),
    diameter: toNumber(graduationValues.DIAM, 20),
    index,
  });

  const converter = Number(graduationValues.ESF) - Number(graduationValues.CIL);

  const positiveLens = {
    borderLeftWidth: `${calculate * 2}px`, borderRightWidth: `${calculate}px`, borderTopWidth: "8px", borderBottomWidth: "8px", borderStyle: "solid"
  }

  const negativeLens = {
    borderLeftWidth: `${calculate}px`, RightWidth: `${calculate}px`, borderTopWidth: `${calculate * 2}px`, BottomWidth: `${calculate * 2}px`, borderStyle: "solid",
  }
  const lensThickness = converter > 0 ? positiveLens : negativeLens;

  return (
    <div className="h-96 w-1/2 flex flex-col gap-8 justify-center items-center">
      <SelectSimulator onValueSelect={handleValueSelect} />
      <p>se estima que el grosor es de {calculate}mm</p>
      <div className="bg-red-500 h-80 ease-in-out duration-300" style={ lensThickness } />
    </div>
  );


};
