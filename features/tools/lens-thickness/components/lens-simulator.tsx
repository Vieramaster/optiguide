import { SelectField } from "@/components/select-field";

import { CRYSTAL_INDEX_OPTIONS } from "../data/crystal-index-options";

import { LensSVG } from "./svg-lens";
import { ThicknessMessage } from "./thickness-message";

interface LensSimulatorProps {
  isShow: boolean;
  currentThickness: number;
  isPositive: boolean;
  isMax: boolean;
  percentageDiff: string;
  onIndexChange: (value: string) => void;
}

export const LensSimulator = ({
  isShow,
  currentThickness,
  isPositive,
  isMax,
  percentageDiff,
  onIndexChange,
}: LensSimulatorProps) => {
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
        thickness={currentThickness}
        isMax={isMax}
        percentage={percentageDiff}
      />

      {/** selects de indices */}

      <SelectField
        options={CRYSTAL_INDEX_OPTIONS}
        onValueSelect={onIndexChange}
      />
      {/**SVG maleable */}
      <LensSVG isPositive={isPositive} size={currentThickness} />
    </div>
  );
};
