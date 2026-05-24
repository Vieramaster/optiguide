import { DIOPTERS_VALUES, DIAM_VALUES, EJE_VALUES } from "./data";

export const INVALID_DIOPTERS = `El valor de las dioptrías debe estar entre ${DIOPTERS_VALUES.min} y ${DIOPTERS_VALUES.max}`;

export const INVALID_TRANSPOSITION = `La transposición de las dioptrías debe estar entre ${DIOPTERS_VALUES.min} y ${DIOPTERS_VALUES.max}`;

export const INVALID_MARK = "Las dioptrías solo pueden fraccionarse con coma";

export const INVALID_DIAM = `El diámetro del aro del armazón debe estar entre ${DIAM_VALUES.min} y ${DIAM_VALUES.max}`;

export const INVALID_EJE = `El valor del eje debe estar entre ${EJE_VALUES.min} y ${EJE_VALUES.max}`;

export const INVALID_ASTIGMATISM =
  "El astigmatismo debe incluir tanto cilindro como eje";

export const INVALID_DIOPTERS_ENTRIES = "Ambas dioptrías no pueden ser 0";
