import { SelectField } from "@/shared/components/select-field";

import { REFRACTIVE_INDEX_SELECT_OPTIONS } from "../constants/refractive-index-options";

import { LensSVG } from "./svg-lens";

export type LensComparisonPanelProps = {
  isVisible: boolean;
  refractiveIndexLabel: string;
  indexValue: string;
  onRefractiveIndexChange: (selectValue: string) => void;
  estimatedThickness: number;
  isPositiveLens: boolean;
};

export const LensComparisonPanel = ({
  isVisible,
  refractiveIndexLabel,
  indexValue,
  onRefractiveIndexChange,
  estimatedThickness,
  isPositiveLens,
}: LensComparisonPanelProps) => (
  <div
    className={`w-80 flex-col items-center gap-8 ${isVisible ? "flex" : "hidden"} xl:flex`}
  >
    <SelectField
      options={REFRACTIVE_INDEX_SELECT_OPTIONS}
      value={indexValue}
      onValueSelect={onRefractiveIndexChange}
      label={refractiveIndexLabel}
    />
    <LensSVG
      isPositive={isPositiveLens}
      size={estimatedThickness}
      estimatedThickness={estimatedThickness}
    />
  </div>
);
