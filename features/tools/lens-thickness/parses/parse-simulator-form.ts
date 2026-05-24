import { PrescriptionFullValues } from "@/shared/lib/prescription/types";
import {
  isDiopterValid,
  ejeIsValid,
  diamIsValid,
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
    ESF: Number(formData.get("ESF")),

    CIL: Number(formData.get("CIL")),

    EJE: Number(formData.get("EJE")),

    DIAM: Number(formData.get("DIAM")),
  } satisfies PrescriptionFullValues;

  const { ESF, CIL, EJE, DIAM } = values;

  const errors: string[] = [];

  const isEsfValid = isDiopterValid(ESF);

  const isCilValid = isDiopterValid(CIL);

  const isEjeValid = ejeIsValid(EJE);

  const isDiamValid = diamIsValid(DIAM);

  if (!isEsfValid || !isCilValid) {
    errors.push(INVALID_DIOPTERS);
  }

  const transposedPrescription = transposePrescription(ESF, CIL);

  const isTranspositionValid = isDiopterValid(transposedPrescription.ESF);

  if (!isTranspositionValid) {
    errors.push(INVALID_TRANSPOSITION);
  }

  if (!isEjeValid) {
    errors.push(INVALID_EJE);
  }

  if (!isDiamValid) {
    errors.push(INVALID_DIAM);
  }
  if (ESF === 0 && CIL === 0) {
    errors.push(INVALID_DIOPTERS_ENTRIES);
  }
  if (CIL === 0 && EJE !== 0) {
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
