import { PrescriptionObjectValues } from "./types";

export const DIOPTERS_VALUES = {
  min: -20,
  max: 20,
  step: 0.25,
} as const satisfies PrescriptionObjectValues;

export const EJE_VALUES = {
  min: -180,
  max: 180,
  step: 1,
} as const satisfies PrescriptionObjectValues;

export const DIAM_VALUES = {
  min: 20,
  max: 65,
  step: 1,
} as const satisfies PrescriptionObjectValues;

export const PRESCRIPTION_FIELD_CONFIG   = {
  ESF: DIOPTERS_VALUES,
  CIL: DIOPTERS_VALUES,
  EJE: EJE_VALUES,
  DIAM: DIAM_VALUES,
} as const ;
