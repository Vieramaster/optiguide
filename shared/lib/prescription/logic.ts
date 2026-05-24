import { EJE_CONFIG, DIAM_CONFIG, DIOPTERS_CONFIG } from "./constants";
import { PrescriptionObjectValues } from "./types";

export const getPrescriptionProps = (
  values: string,
): PrescriptionObjectValues =>
  values === "ESF" || values === "CIL"
    ? DIOPTERS_CONFIG
    : values === "EJE"
      ? EJE_CONFIG
      : DIAM_CONFIG;
