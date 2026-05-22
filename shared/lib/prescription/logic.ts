import { DIOPTERS_VALUES, AXIS_VALUES, DIAM_VALUES } from "./data";
import { PrescriptionObjectValues } from "./types";

export const getPrescriptionProps = (
  values: string,
): PrescriptionObjectValues =>
  values === "ESF" || values === "CIL"
    ? DIOPTERS_VALUES
    : values === "AXIS"
      ? AXIS_VALUES
      : DIAM_VALUES;
