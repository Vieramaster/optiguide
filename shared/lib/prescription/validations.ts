import {
  DIOPTERS_VALUES,
  DIAM_VALUES,
  EJE_VALUES,
} from "@/shared/lib/prescription/data";

import type { PrescriptionObjectValues } from "./types";

export const isDiopterValid = (value: number) =>
  Number.isFinite(value) &&
  value >= DIOPTERS_VALUES.min &&
  value <= DIOPTERS_VALUES.max;

export const ejeIsValid = (value: number) =>
  integerFieldValid(value, EJE_VALUES);

export const diamIsValid = (value: number) =>
  integerFieldValid(value, DIAM_VALUES);

//HELPERS
const integerFieldValid = (value: number, object: PrescriptionObjectValues) =>
  Number.isInteger(value) && value >= object.min && value <= object.max;
