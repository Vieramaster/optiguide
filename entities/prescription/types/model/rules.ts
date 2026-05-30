import type { PrescriptionFullValues, PrescriptionBaseValues } from "../types";

type fullPrescription = {
    mode: "full"
    values: PrescriptionFullValues
}
type basePrescription = {
    mode: "base"
    values: PrescriptionBaseValues
}
export type RulesPrescriptions = fullPrescription | basePrescription;

export type PrescriptionBaseFormConfig = {
    mode: "base";
    onSubmit: (data: PrescriptionBaseValues) => void
};
export type PrescriptionFullFormConfig = {
    mode: "full";
    onSubmit: (data: PrescriptionFullValues) => void
};
export type PrescriptionFormConfig = PrescriptionBaseFormConfig | PrescriptionFullFormConfig;
