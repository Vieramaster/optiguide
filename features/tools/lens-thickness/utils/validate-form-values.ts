import { getGraduationErrors } from "@/shared/graduation-form/graduation-form-hook";
import type { GraduationFields } from "@/shared/types/graduation";

const validate = (value: string): boolean => {
  const num = Number(value);
  return num !== 0 && !Number.isNaN(num);
};

export const validateFormValues = (values: GraduationFields): boolean => {
  const hasFieldErrors =
    Object.keys(getGraduationErrors(values, ["ESF", "CIL", "EJE", "DIAM"]))
      .length > 0;

  if (hasFieldErrors) return false;

  const { ESF, CIL, EJE, DIAM } = values;

  const hasEsf = validate(ESF);
  const hasCil = validate(CIL);
  const hasEje = validate(EJE);
  const diamIsValid = validate(DIAM);

  const esfOnlyValid = hasEsf && !hasCil && !hasEje;
  const cilWithEjeValid = hasCil && hasEje;
  const allValid = hasEsf && hasCil && hasEje;

  return diamIsValid && (esfOnlyValid || cilWithEjeValid || allValid);
};
