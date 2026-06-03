import type { PrescriptionFullValues } from "@/entities/prescription";

import type {
  CalculatedLensThicknessByComparison,
  RefractiveIndexByLensComparison,
} from "../types/lens-comparison";

import { calculateThickness } from "./calculate-thickness";



const EMPTY_LENS_THICKNESS: CalculatedLensThicknessByComparison = {
  lensA: 0,
  lensB: 0,
};

export const calculateLensThicknessByIndex = (
  prescriptionValues: PrescriptionFullValues | null,
  indexes: RefractiveIndexByLensComparison,

): CalculatedLensThicknessByComparison => {

  if (!prescriptionValues) {
    return EMPTY_LENS_THICKNESS;
  }

  const { SPHERE, CYLINDER, DIAMETER } = prescriptionValues;

  const lensAThickness = calculateThickness(
    SPHERE,
    CYLINDER,
    DIAMETER,
    Number(indexes.lensA),
  );

  const lensBThickness = calculateThickness(
    SPHERE,
    CYLINDER,
    DIAMETER,
    Number(indexes.lensB),
  );

  return {
    lensA: lensAThickness,
    lensB: lensBThickness,
  };

};

