import { PRESCRIPTION_FIELD_CONFIG } from "../constants";

export type PrescriptionObjectValues = {
  min: number;
  max: number;
  step: number;
};

export type PrescriptionKeys = keyof typeof PRESCRIPTION_FIELD_CONFIG;

export type PrescriptionFullValues = Record<PrescriptionKeys, number>;

export type PrescriptionBaseValues = Pick<
  PrescriptionFullValues,
  "SPHERE" | "CYLINDER"
>;


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
