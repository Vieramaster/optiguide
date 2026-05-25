import { PrescriptionFullValues } from "@/shared/lib/prescription/types";

import type { LensRefractiveIndexBySide } from "../types/simulator";

import { calculateThickness } from "./calculate-thickness";

export const calculateLensThicknessByIndex = (
  prescriptionValues: PrescriptionFullValues,
  indexLens: LensRefractiveIndexBySide,
) => {
  const { SPHERE, CYLINDER, DIAMETER } = prescriptionValues;

  const { left: lensLeft, right: lensRight } = indexLens;

  const lensThicknessLeft = calculateThickness(SPHERE, CYLINDER, DIAMETER, lensLeft);
  const lensThicknessRight = calculateThickness(SPHERE, CYLINDER, DIAMETER, lensRight);

  return {
    left:lensThicknessLeft,
    right:lensThicknessRight,
  };
};
