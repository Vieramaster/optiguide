import { PrescriptionFullValues } from "@/shared/lib/prescription/types";
import {
  isDiopterValid,
  isAxisValid,
  isDiameterValid,
} from "@/shared/lib/prescription/validations";
import {
  INVALID_DIAM,
  INVALID_DIOPTERS,
  INVALID_TRANSPOSITION,
  INVALID_EJE,
  INVALID_ASTIGMATISM,
  INVALID_DIOPTERS_ENTRIES,
} from "@/shared/lib/prescription/messages";
import { transposePrescription } from "@/shared/lib/prescription/transform";
import type { ParsePrescriptionResult } from "@/shared/lib/prescription/types";

export const parsePrescriptionForm = (
  formData: FormData,
): ParsePrescriptionResult<PrescriptionFullValues> => {
  const values = {
    SPHERE: Number(formData.get("SPHERE")),

    CYLINDER: Number(formData.get("CYLINDER")),

    AXIS: Number(formData.get("AXIS_CONFIG")),

    DIAMETER: Number(formData.get("DIAMETER")),
  } satisfies PrescriptionFullValues;

  const { SPHERE, CYLINDER, AXIS, DIAMETER } = values;

  const errors: string[] = [];

  const isEsfValid = isDiopterValid(SPHERE);

  const isCilValid = isDiopterValid(CYLINDER);

  const isEjeValid = isAxisValid(AXIS);

  const isDiamValid = isDiameterValid(DIAMETER);

  if (!isEsfValid || !isCilValid) {
    errors.push(INVALID_DIOPTERS);
  }

  const transposedPrescription = transposePrescription(SPHERE, CYLINDER);

  const isTranspositionValid = isDiopterValid(transposedPrescription.SPHERE);

  if (!isTranspositionValid) {
    errors.push(INVALID_TRANSPOSITION);
  }

  if (!isEjeValid) {
    errors.push(INVALID_EJE);
  }

  if (!isDiamValid) {
    errors.push(INVALID_DIAM);
  }
  if (SPHERE === 0 && CYLINDER === 0) {
    errors.push(INVALID_DIOPTERS_ENTRIES);
  }
  if (CYLINDER === 0 && AXIS !== 0) {
    errors.push(INVALID_ASTIGMATISM);
  }
  if (errors.length > 0) {
    return {
      success: false,
      errors,
    };
  }

  return {
    success: true,
    values,
  };
};
