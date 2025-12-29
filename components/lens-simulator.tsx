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

const lensThickness = calculateThickness({
  sphere: toNumber(graduationValues.ESF, 0),
  cylinder: toNumber(graduationValues.CIL, 0),
  diameter: toNumber(graduationValues.DIAM, 20),
  index,
});


  console.log(graduationValues);
  const lala = ((lensThickness * 25.4) / 96) * 20;
  return (
    <div className="h-96 w-1/2 bg-violet-800 flex flex-col gap-8 justify-center items-center">
      {" "}
      <SelectSimulator onValueSelect={handleValueSelect} />
      <div
        className="bg-red-500 h-60 ease-in-out duration-300"
        style={{ width: `${lala}px` }}
      ></div>
    </div>
  );
};
