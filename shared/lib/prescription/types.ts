import { PRESCRIPTION_FIELD_CONFIG } from "./constants";

// GRADUATION VALUES
export type PrescriptionObjectValues = {
  min: number;
  max: number;
  step: number;
};

//FULL GRADUATION
export type PrescriptionKeys = keyof typeof PRESCRIPTION_FIELD_CONFIG;

// PRESCRIPTION FULL VALUES
export type PrescriptionFullValues = Record<PrescriptionKeys, number>;

//BASE GRADUATION
export type PrescriptionBaseValues = Pick<
  PrescriptionFullValues,
  "SPHERE" | "CYLINDER"
>;

// FOR HOOK
type ParsePrescriptionSucceeded<T> = {
  success: true;
  values: T;
};
type ParsePrescriptionFailed = {
  success: false;
  errors: string[];
};
export type ParsePrescriptionResult<T> =
  | ParsePrescriptionSucceeded<T>
  | ParsePrescriptionFailed;
