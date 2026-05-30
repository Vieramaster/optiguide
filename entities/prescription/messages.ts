import { AXIS_CONFIG, DIAMETER_CONFIG, DIOPTERS_CONFIG } from "./constants";

export const INVALID_MESSAGES = {
  INVALID_DIOPTERS: `El valor de las dioptrías debe estar entre ${DIOPTERS_CONFIG.min} y ${DIOPTERS_CONFIG.max} (en pasos de ${DIOPTERS_CONFIG.step})`,
  INVALID_TRANSPOSITION: `La transposición de las dioptrías debe estar entre ${DIOPTERS_CONFIG.min} y ${DIOPTERS_CONFIG.max}`,
  INVALID_DIAMETER: `El diámetro del aro del armazón debe estar entre ${DIAMETER_CONFIG.min} y ${DIAMETER_CONFIG.max}`,
  INVALID_AXIS: `El valor del eje debe estar entre ${AXIS_CONFIG.min} y ${AXIS_CONFIG.max}`,
  INVALID_ASTIGMATISM:
    "El astigmatismo debe incluir tanto cilindro como eje",
  INVALID_DIOPTERS__CANNOT_BE_ZERO: "Ambas dioptrías no pueden ser 0",
} as const;
