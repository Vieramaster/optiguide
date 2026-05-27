import { SelectField } from "@/shared/components/select-field";

import { CRYSTAL_INDEX_OPTIONS } from "../constants/crystal-index-options";

import { LensSVG } from "./svg-lens";

interface LensSimulatorProps {
  isShow: boolean;
  currentThickness: number;

  onIndexChange: (value: string) => void;
}

export const LensSimulator = ({
  isShow,
  currentThickness,

  onIndexChange,
}: LensSimulatorProps) => {
  return (
    <div
      className={`
        w-80 flex-col items-center gap-8
        ${isShow ? "flex" : "hidden"}
        xl:flex 
      `}
    >
      <SelectField
        options={CRYSTAL_INDEX_OPTIONS}
        onValueSelect={onIndexChange}
      />
      {/**SVG maleable */}
      <LensSVG isPositive={currentThickness > 0} size={currentThickness} />
    </div>
  );
};
