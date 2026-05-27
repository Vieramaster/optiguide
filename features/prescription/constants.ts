import { PrescriptionObjectValues } from "./types";

export const TRANSPOSITION_KEYS = ["SPHERE", "CYLINDER"] as const;

export const PRESCRIPTION_KEYS = [
  ...TRANSPOSITION_KEYS,
  "AXIS",
  "DIAMETER",
] as const;

export const DIOPTERS_CONFIG = {
  min: -20,
  max: 20,
  step: 0.25,
} as const satisfies PrescriptionObjectValues;

export const AXIS_CONFIG = {
  min: -180,
  max: 180,
  step: 1,
} as const satisfies PrescriptionObjectValues;

export const DIAMETER_CONFIG = {
  min: 20,
  max: 65,
  step: 1,
} as const satisfies PrescriptionObjectValues;

export const PRESCRIPTION_FIELD_CONFIG = {
  SPHERE: DIOPTERS_CONFIG,
  CYLINDER: DIOPTERS_CONFIG,
  AXIS: AXIS_CONFIG,
  DIAMETER: DIAMETER_CONFIG,
} as const;
