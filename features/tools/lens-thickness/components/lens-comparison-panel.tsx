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
  thicknessMessage: string | null;
};

export const LensComparisonPanel = ({
  isVisible,
  refractiveIndexLabel,
  indexValue,
  onRefractiveIndexChange,
  estimatedThickness,
  isPositiveLens,
  thicknessMessage,
}: LensComparisonPanelProps) => (
  <div
    className={`w-80 flex-col items-center gap-8 ${isVisible ? "flex" : "hidden"} xl:flex`}
  >
    <div className="flex w-full flex-col items-center gap-2">
      <SelectField
        options={REFRACTIVE_INDEX_SELECT_OPTIONS}
        value={indexValue}
        onValueSelect={onRefractiveIndexChange}
        label={refractiveIndexLabel}
      />
      {thicknessMessage !== null ? (
        <p className="text-sm text-muted-foreground">{thicknessMessage}</p>
      ) : null}
    </div>
    <LensSVG
      isPositive={isPositiveLens}
      size={estimatedThickness}
      estimatedThickness={estimatedThickness}
    />
  </div>
);
