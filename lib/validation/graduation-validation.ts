import { GraduationValueType } from "@/types/simulator-types";

/**
 * Valida si los valores de graduación son válidos para habilitar el botón de calcular
 * @param graduationValue - Valores de graduación a validar
 * @returns true si los valores son válidos, false en caso contrario
 */
export const validateGraduationInputs = (
  graduationValue: GraduationValueType
): boolean => {
  const { ESF, CIL, EJE, DIAM } = graduationValue;

  const esf = Number(ESF);
  const cil = Number(CIL);
  const eje = Number(EJE);
  const diam = Number(DIAM);
  const esfInvalid = esf === 0;
  const cilEjeInvalid = (cil === 0) !== (eje === 0);
  const diamIsvalid = diam !== null && diam !== undefined && diam !== 0 && !isNaN(diam);
  return !esfInvalid && !cilEjeInvalid && diamIsvalid;
};
