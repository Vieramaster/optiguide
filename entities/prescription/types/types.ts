import { PRESCRIPTION_FIELD_CONFIG } from "../constants";


export type PrescriptionKeys = keyof typeof PRESCRIPTION_FIELD_CONFIG;
export type PrescriptionFieldLabels = "ESF" | "CIL" | "EJE" | "DIAM";
export type PrescriptionFullValues = Record<PrescriptionKeys, number>;

export type PrescriptionBaseValues = Pick<
  PrescriptionFullValues,
  "SPHERE" | "CYLINDER"
>;

export type PrescriptionObjectValues = {
  min: number;
  max: number;
  step: number;
  label: PrescriptionFieldLabels;
};

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
