import { isDiopterValid, isAxisValid, isDiameterValid } from "./logic/validations";
import type { RulesPrescriptions } from "./types/model/rules";
import type { PrescriptionFullValues } from "./types/types";
import { INVALID_DIOPTERS, INVALID_TRANSPOSITION, INVALID_DIOPTERS_ENTRIES, INVALID_ASTIGMATISM, INVALID_EJE, INVALID_DIAM } from "./messages";
import { transformTranspositionPrescription } from "./transform";


export const evaluatePrescriptionRules = (prescription: RulesPrescriptions) => {
  switch (prescription.mode) {
    case "base":
      return baseRules(prescription.values.SPHERE, prescription.values.CYLINDER);

    case "full":
      return fullRules(prescription.values);
  }
};

const fullRules = (values: PrescriptionFullValues) => {
  const errors = [...baseRules(values.SPHERE, values.CYLINDER)];

  if (!isAxisValid(values.AXIS)) errors.push(INVALID_EJE);
  if (!isDiameterValid(values.DIAMETER)) errors.push(INVALID_DIAM);

  if (values.CYLINDER === 0 && values.AXIS !== 0) {
    errors.push(INVALID_ASTIGMATISM);
  }

  return errors;
};

export const baseRules = (sphere: number, cylinder: number) => {
  const dioptersErrors: string[] = [];
  const isEsfValid = isDiopterValid(sphere);
  const isCilValid = isDiopterValid(cylinder);

  if (!isEsfValid || !isCilValid) {
    dioptersErrors.push(INVALID_DIOPTERS);
  }

  const transposedPrescription = transformTranspositionPrescription(sphere, cylinder);
  const isTranspositionValid = isDiopterValid(transposedPrescription.SPHERE);

  if (!isTranspositionValid) {
    dioptersErrors.push(INVALID_TRANSPOSITION);
  }
  if (sphere === 0 && cylinder === 0) {
    dioptersErrors.push(INVALID_DIOPTERS_ENTRIES);
  }

  return dioptersErrors;
};