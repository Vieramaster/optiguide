import { GraduationFields, BaseGraduation } from "@/shared/types/graduation";

type Values = GraduationFields | BaseGraduation;

export const isFullGraduation = (v: Values): v is GraduationFields => {
  return "EJE" in v && "DIAM" in v;
};

export const validateGraduationInputs = (values: Values): boolean => {
  const esf = Number(values.ESF);
  const cil = Number(values.CIL);

  const hasEsf = esf !== 0 && !isNaN(esf);
  const hasCil = cil !== 0 && !isNaN(cil);

  // modo completo
  if (isFullGraduation(values)) {
    const eje = Number(values.EJE);
    const diam = Number(values.DIAM);

    const hasEje = eje !== 0 && !isNaN(eje);
    const diamIsValid = diam !== 0 && !isNaN(diam);

    const esfOnlyValid = hasEsf && !hasCil && !hasEje;
    const cilWithEjeValid = hasCil && hasEje;
    const allValid = hasEsf && hasCil && hasEje;

    return diamIsValid && (esfOnlyValid || cilWithEjeValid || allValid);
  }

  // modo simple
  return hasEsf || hasCil;
};