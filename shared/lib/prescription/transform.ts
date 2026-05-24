import { PrescriptionBaseValues } from "./types";

export const transposePrescription = (
  sphere: number,
  cylinder: number,
): PrescriptionBaseValues => {
  return {
    ESF: sphere + cylinder,
    CIL: -cylinder,
  };
};
