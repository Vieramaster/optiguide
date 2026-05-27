import {
  dioptersRules,
  isAxisValid,
  isDiameterValid,
  type PrescriptionFullValues,
} from "@/features/prescription";
import {
  INVALID_ASTIGMATISM,
  INVALID_DIAM,
  INVALID_EJE,
} from "@/features/prescription/messages";

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
