import type { PrescriptionFullValues } from "@/entities/prescription/types/types";

import type { LensRefractiveIndexBySide } from "../types/simulator";

import { calculateThickness } from "./calculate-thickness";

export const calculateLensThicknessByIndex = (
  prescriptionValues: PrescriptionFullValues | null,
  indexLens: LensRefractiveIndexBySide,
) => {
  if (!prescriptionValues) return { left: 0, right: 0 };
  
  const { SPHERE, CYLINDER, DIAMETER } = prescriptionValues;

  const { left: lensLeft, right: lensRight } = indexLens;

  const lensThicknessLeft = calculateThickness(SPHERE, CYLINDER, DIAMETER, lensLeft);
  const lensThicknessRight = calculateThickness(SPHERE, CYLINDER, DIAMETER, lensRight);

  return {
    left: lensThicknessLeft,
    right: lensThicknessRight,
  };
};
