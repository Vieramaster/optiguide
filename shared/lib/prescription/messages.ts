import {DIOPTERS_CONFIG, AXIS_CONFIG, DIAMETER_CONFIG} from "./constants";

export const INVALID_DIOPTERS = `El valor de las dioptrías debe estar entre ${DIOPTERS_CONFIG.min} y ${DIOPTERS_CONFIG.max}`;

export const INVALID_TRANSPOSITION = `La transposición de las dioptrías debe estar entre ${DIOPTERS_CONFIG.min} y ${DIOPTERS_CONFIG.max}`;

export const INVALID_MARK = "Las dioptrías solo pueden fraccionarse con coma";

export const INVALID_DIAM = `El diámetro del aro del armazón debe estar entre ${DIAMETER_CONFIG.min} y ${DIAMETER_CONFIG.max}`;

export const INVALID_EJE = `El valor del eje debe estar entre ${AXIS_CONFIG.min} y ${AXIS_CONFIG.max}`;

export const INVALID_ASTIGMATISM =
  "El astigmatismo debe incluir tanto cilindro como eje";

export const INVALID_DIOPTERS_ENTRIES = "Ambas dioptrías no pueden ser 0";
