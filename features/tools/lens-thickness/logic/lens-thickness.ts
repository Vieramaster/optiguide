import type { PrescriptionFullValues } from "@/entities/prescription/types/types";

import type {
  CalculatedLensThicknessByComparison,
  RefractiveIndexSelectValueByLensComparison,
} from "../types/lens-comparison";

import { calculateThickness } from "./calculate-thickness";

const EMPTY_LENS_THICKNESS: CalculatedLensThicknessByComparison = {
  lensA: 0,
  lensB: 0,
};

export const calculateLensThicknessByIndex = (
  prescriptionValues: PrescriptionFullValues | null,
  refractiveIndexSelectValueByLensComparison: RefractiveIndexSelectValueByLensComparison,
): CalculatedLensThicknessByComparison => {
  if (!prescriptionValues) {
    return EMPTY_LENS_THICKNESS;
  }

  const { SPHERE, CYLINDER, DIAMETER } = prescriptionValues;
  const lensAThickness = calculateThickness(
    SPHERE,
    CYLINDER,
    DIAMETER,
    Number(refractiveIndexSelectValueByLensComparison.lensA),
  );
  const lensBThickness = calculateThickness(
    SPHERE,
    CYLINDER,
    DIAMETER,
    Number(refractiveIndexSelectValueByLensComparison.lensB),
  );

  const calculatedLensThickness: CalculatedLensThicknessByComparison = {
    lensA: lensAThickness,
    lensB: lensBThickness,
  };

  return calculatedLensThickness;
};
