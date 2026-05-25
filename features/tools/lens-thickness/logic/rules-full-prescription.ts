import { PrescriptionFullValues } from "@/shared/lib/prescription/types";
import { dioptersRules } from "@/shared/lib/prescription/rules";
import {
  isAxisValid,
  isDiameterValid,
} from "@/shared/lib/prescription/validations";
import {
  INVALID_DIAM,
  INVALID_EJE,
  INVALID_ASTIGMATISM,
} from "@/shared/lib/prescription/messages";

export const rulesFullPrescription = (values: PrescriptionFullValues) => {
  const { SPHERE, CYLINDER, AXIS, DIAMETER } = values;

  const errors: string[] = [];

  const dioptersErrors = dioptersRules(SPHERE, CYLINDER);

  if (dioptersErrors.length !== 0) {
    errors.push(...dioptersErrors);
  }

  const isEjeValid = isAxisValid(AXIS);

  const isDiamValid = isDiameterValid(DIAMETER);

  if (!isEjeValid) {
    errors.push(INVALID_EJE);
  }

  if (!isDiamValid) {
    errors.push(INVALID_DIAM);
  }

  if (CYLINDER === 0 && AXIS !== 0) {
    errors.push(INVALID_ASTIGMATISM);
  }

  return errors;
};
