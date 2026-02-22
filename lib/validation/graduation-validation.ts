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

  // 1. DIAM siempre válido
  const diamIsValid = diam !== null && diam !== undefined && diam !== 0 && !isNaN(diam);

  // 2. Validación de combinaciones
  const hasEsf = esf !== 0;
  const hasCil = cil !== 0;
  const hasEje = eje !== 0;

  // Reglas:
  // - Solo ESF → válido
  // - CIL requiere EJE
  // - Puede haber CIL+EJE sin ESF
  // - Puede haber todo
  // - No se permite ninguno
  const esfOnlyValid = hasEsf && !hasCil && !hasEje;
  const cilWithEjeValid = hasCil && hasEje;
  const allValid = hasEsf && hasCil && hasEje;

  const graduationValid = esfOnlyValid || cilWithEjeValid || allValid;

  return diamIsValid && graduationValid;
};
