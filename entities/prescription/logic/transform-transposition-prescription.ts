import type { PrescriptionBaseValues } from "../types/types";

export const transformTranspositionPrescription = (
  sphere: number,
  cylinder: number,
): PrescriptionBaseValues => ({
  SPHERE: sphere + cylinder,
  CYLINDER: -cylinder,
});
