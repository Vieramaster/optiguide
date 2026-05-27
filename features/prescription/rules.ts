import {
  INVALID_DIOPTERS,
  INVALID_DIOPTERS_ENTRIES,
  INVALID_TRANSPOSITION,
} from "./messages";
import { transposePrescription } from "./transform";
import { isDiopterValid } from "./validations";

export const dioptersRules = (sphere: number, cylinder: number) => {
  const dioptersErrors: string[] = [];
  const isEsfValid = isDiopterValid(sphere);
  const isCilValid = isDiopterValid(cylinder);

  if (!isEsfValid || !isCilValid) {
    dioptersErrors.push(INVALID_DIOPTERS);
  }

  const transposedPrescription = transposePrescription(sphere, cylinder);
  const isTranspositionValid = isDiopterValid(transposedPrescription.SPHERE);

  if (!isTranspositionValid) {
    dioptersErrors.push(INVALID_TRANSPOSITION);
  }
  if (sphere === 0 && cylinder === 0) {
    dioptersErrors.push(INVALID_DIOPTERS_ENTRIES);
  }

  return dioptersErrors;
};
