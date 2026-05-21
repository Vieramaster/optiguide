import { DIOPTERS_VALUES } from "@/shared/lib/prescription/constants";

export const prescriptionValid = (value: number) =>
  Number.isFinite(value) &&
  value >= DIOPTERS_VALUES.min &&
  value <= DIOPTERS_VALUES.max;
