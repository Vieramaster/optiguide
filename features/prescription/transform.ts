import { PrescriptionBaseValues } from "./types";

export const transposePrescription = (
  sphere: number,
  cylinder: number,
): PrescriptionBaseValues => ({
  SPHERE: sphere + cylinder,
  CYLINDER: -cylinder,
});
