import type { PrescriptionObjectValues } from "./types";
import { DIOPTERS_CONFIG, DIAM_CONFIG, EJE_CONFIG } from "./constants";


export const isDiopterValid = (value: number) =>
  Number.isFinite(value) &&
  value >= DIOPTERS_CONFIG.min &&
  value <= DIOPTERS_CONFIG.max;

export const ejeIsValid = (value: number) =>
  integerFieldValid(value, EJE_CONFIG);

export const diamIsValid = (value: number) =>
  integerFieldValid(value, DIAM_CONFIG);

//HELPERS
const integerFieldValid = (value: number, object: PrescriptionObjectValues) =>
  Number.isInteger(value) && value >= object.min && value <= object.max;
