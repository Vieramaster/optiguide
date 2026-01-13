import { GraduationValueType } from "@/types/simulator-types";

/**
 * Valida si los valores de graduación son válidos para habilitar el botón de calcular
 * @param graduationValue - Valores de graduación a validar
 * @returns true si los valores son válidos, false en caso contrario
 */
export const validateGraduationInputs = (
  graduationValue: GraduationValueType
): boolean => {
  const { ESF, CIL, EJE } = graduationValue;

  const esf = Number(ESF);
  const cil = Number(CIL);
  const eje = Number(EJE);

  const esfInvalid = esf === 0;
  const cilEjeInvalid = (cil === 0) !== (eje === 0);

  return !esfInvalid && !cilEjeInvalid;
};
