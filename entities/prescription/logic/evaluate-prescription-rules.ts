import { INVALID_MESSAGES } from "../messages";
import type { RulesPrescriptions } from "../types/prescription-form-config";
import type { PrescriptionFullValues } from "../types/types";

import { transformTranspositionPrescription } from "./transform-transposition-prescription";
import { isAxisValid, isDiopterValid, isDiameterValid } from "./validations";

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

  if (values.CYLINDER !== 0) {
    if (!isAxisValid(values.AXIS)) {
      errors.push(INVALID_MESSAGES.INVALID_AXIS);
    }
  } else if (values.AXIS !== 0 && !Number.isNaN(values.AXIS)) {
    errors.push(INVALID_MESSAGES.INVALID_ASTIGMATISM);
  }

  if (!isDiameterValid(values.DIAMETER)) {
    errors.push(INVALID_MESSAGES.INVALID_DIAMETER);
  }

  return errors;
};

export const baseRules = (sphere: number, cylinder: number) => {
  const dioptersErrors: string[] = [];
  const isEsfValid = isDiopterValid(sphere);
  const isCilValid = isDiopterValid(cylinder);

  if (!isEsfValid || !isCilValid) {
    dioptersErrors.push(INVALID_MESSAGES.INVALID_DIOPTERS);
  }

  const transposedPrescription = transformTranspositionPrescription(
    sphere,
    cylinder,
  );
  const isTranspositionValid = isDiopterValid(transposedPrescription.SPHERE);

  if (!isTranspositionValid) {
    dioptersErrors.push(INVALID_MESSAGES.INVALID_TRANSPOSITION);
  }

  if (sphere === 0 && cylinder === 0) {
    dioptersErrors.push(INVALID_MESSAGES.INVALID_DIOPTERS__CANNOT_BE_ZERO);
  }

  return dioptersErrors;
};
