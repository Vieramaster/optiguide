import { PrescriptionFullValues } from "@/shared/lib/prescription/types";

import type { SelectLensIndex } from "../types/simulator";

import { calculateThickness } from "./calculate-thickness";

export const lensThickness = (
  prescriptionValues: PrescriptionFullValues,
  indexLens: SelectLensIndex,
) => {
  const { ESF, CIL, DIAM } = prescriptionValues;

  const { A: lensA, B: lensB } = indexLens;

  const lensThicknessA = calculateThickness(ESF, CIL, DIAM, lensA);
  const lensThicknessB = calculateThickness(ESF, CIL, DIAM, lensB);

  return {
    A:lensThicknessA,
    B:lensThicknessB,
  };
};
