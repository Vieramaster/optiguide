import {PRESCRIPTION_FIELD_CONFIG} from "./constants";

// GRADUATION VALUES
export type PrescriptionObjectValues = {
  min: number;
  max: number;
  step: number;
};

//FULL GRADUATION
export type PrescriptionKeys = keyof typeof PRESCRIPTION_FIELD_CONFIG;

//BASE GRADUATION
export type PrescriptionBaseValues = Pick<
  PrescriptionFullValues,
  "ESF" | "CIL"
>;
// PRESCRIPTION FULL VALUES
export type PrescriptionFullValues = Record<PrescriptionKeys, number>;


// FOR HOOK
type ParsePrescriptionSussed<T> = {
  success: true;
  values: T;
};
type ParsePrescriptionFalied = {
  success: false;
  errors: string[];
};
export type ParsePrescriptionResult<T> =
  | ParsePrescriptionSussed<T>
  | ParsePrescriptionFalied;
