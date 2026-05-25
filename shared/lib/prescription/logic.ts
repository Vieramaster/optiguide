import { AXIS_CONFIG, DIAMETER_CONFIG, DIOPTERS_CONFIG } from "./constants";
import { PrescriptionObjectValues } from "./types";

export const getPrescriptionFieldConfig = (
  values: string,
): PrescriptionObjectValues =>
  values === "SPHERE" || values === "CYLINDER"
    ? DIOPTERS_CONFIG
    : values === "AXIS"
      ? AXIS_CONFIG
      : DIAMETER_CONFIG;
