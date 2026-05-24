import {
  INVALID_DIOPTERS,
  INVALID_TRANSPOSITION,
} from "@/shared/lib/prescription/messages";
import type { ParsePrescriptionResult } from "@/shared/lib/prescription/types";
import type { PrescriptionBaseValues } from "@/shared/lib/prescription/types";
import { isDiopterValid } from "@/shared/lib/prescription/validations";
import { transposePrescription } from "@/shared/lib/prescription/transform";
export const parseCatalogForm = (
  formData: FormData,
): ParsePrescriptionResult<PrescriptionBaseValues> => {
  const values = {
    ESF: Number(formData.get("ESF")),
    CIL: Number(formData.get("CIL")),
  } satisfies PrescriptionBaseValues;

  const { ESF, CIL } = values;

  const errors: string[] = [];

  const isEsfValid = isDiopterValid(ESF);
  const isCilValid = isDiopterValid(CIL);

  if (!isCilValid || !isEsfValid) errors.push(INVALID_DIOPTERS);

  const transposedPrescription = transposePrescription(ESF, CIL);

  const isTranspositionValid = isDiopterValid(transposedPrescription.ESF);

  if (!isTranspositionValid) {
    errors.push(INVALID_TRANSPOSITION);
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
