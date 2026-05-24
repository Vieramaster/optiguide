import { PRESCRIPTION_FIELD_CONFIG } from "./data";
export type PrescriptionObjectValues = {
  min: number;
  max: number;
  step: number;
};

export type PrescriptionKeys = keyof typeof PRESCRIPTION_FIELD_CONFIG;

export type PrescriptionFullValues = Record<PrescriptionKeys, number>;

export type PrescriptionBaseValues = Pick<
  PrescriptionFullValues,
  "ESF" | "CIL"
>;

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
