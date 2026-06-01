import type { PrescriptionBaseValues, PrescriptionFullValues } from "./types";

type FullPrescription = {
  mode: "full";
  values: PrescriptionFullValues;
};

type BasePrescription = {
  mode: "base";
  values: PrescriptionBaseValues;
};

export type RulesPrescriptions = FullPrescription | BasePrescription;

export type PrescriptionBaseFormConfig = {
  mode: "base";
  onSubmit: (data: PrescriptionBaseValues) => void;
};

export type PrescriptionFullFormConfig = {
  mode: "full";
  onSubmit: (data: PrescriptionFullValues) => void;
};

export type PrescriptionFormConfig =
  | PrescriptionBaseFormConfig
  | PrescriptionFullFormConfig;
