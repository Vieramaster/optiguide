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
    SPHERE: Number(formData.get("SPHERE")),
    CYLINDER: Number(formData.get("CYLINDER")),
  } satisfies PrescriptionBaseValues;

  const { SPHERE, CYLINDER } = values;

  const errors: string[] = [];

  const isEsfValid = isDiopterValid(SPHERE);
  const isCilValid = isDiopterValid(CYLINDER);

  if (!isCilValid || !isEsfValid) errors.push(INVALID_DIOPTERS);

  const transposedPrescription = transposePrescription(SPHERE, CYLINDER);

  const isTranspositionValid = isDiopterValid(transposedPrescription.SPHERE);

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
