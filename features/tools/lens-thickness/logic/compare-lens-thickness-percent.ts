import { LensThicknessComparisonMessages } from "../constants/comparison-messages";

export type ThicknessDifferenceDisplay =
  | { kind: "hidden" }
  | { kind: "equal" }
  | { kind: "percent"; thicknessDifferencePercent: number };

export const getThicknessDifferencePercent = (
  lensAThickness: number,
  lensBThickness: number,
): number | null => {
  const thickerLensThickness = Math.max(lensAThickness, lensBThickness);
  const thinnerLensThickness = Math.min(lensAThickness, lensBThickness);

  if (thickerLensThickness <= 0) {
    return null;
  }

  const thicknessDifferencePercent = Math.round(
    ((thickerLensThickness - thinnerLensThickness) / thickerLensThickness) * 100,
  );

  return thicknessDifferencePercent;
};

export const getThicknessDifferenceDisplay = (
  lensAThickness: number,
  lensBThickness: number,
): ThicknessDifferenceDisplay => {
  const thicknessDifferencePercent = getThicknessDifferencePercent(
    lensAThickness,
    lensBThickness,
  );

  if (thicknessDifferencePercent === null) {
    return { kind: "hidden" };
  }

  if (thicknessDifferencePercent === 0) {
    return { kind: "equal" };
  }

  return {
    kind: "percent",
    thicknessDifferencePercent,
  };
};

export const getThicknessDifferenceMessage = (
  thicknessDifferenceDisplay: ThicknessDifferenceDisplay,
): string | null => {
  if (thicknessDifferenceDisplay.kind === "hidden") {
    return null;
  }

  if (thicknessDifferenceDisplay.kind === "equal") {
    return LensThicknessComparisonMessages.equalThickness;
  }

  return `La diferencia de grosor es del ${thicknessDifferenceDisplay.thicknessDifferencePercent}% respecto a la lente más gruesa.`;
};
