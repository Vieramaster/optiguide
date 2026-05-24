import { PrescriptionObjectValues } from "./types";

export const TRANSPOLATION_KEYS = ["ESF", "CIL"] as const;

export const PRESCRIPTION_KEYS = [...TRANSPOLATION_KEYS, "EJE", "DIAM"]as const;

export const DIOPTERS_CONFIG = {
  min: -20,
  max: 20,
  step: 0.25,
} as const satisfies PrescriptionObjectValues;

export const EJE_CONFIG = {
  min: -180,
  max: 180,
  step: 1,
} as const satisfies PrescriptionObjectValues;

export const DIAM_CONFIG = {
  min: 20,
  max: 65,
  step: 1,
} as const satisfies PrescriptionObjectValues;

export const PRESCRIPTION_FIELD_CONFIG   = {
  ESF: DIOPTERS_CONFIG,
  CIL: DIOPTERS_CONFIG,
  EJE: EJE_CONFIG,
  DIAM: DIAM_CONFIG,
} as const ;
