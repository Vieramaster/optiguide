import { DIOPTERS_VALUES } from "./constants";

const { min, max } = DIOPTERS_VALUES;

export const INVALID_DIOPTERS = `el valor de las dioptrias tiene que ser entre ${min} y ${max}`;

export const INVALID_TRANSPOSITION = `el valor total de las dioptrias transpuestas tiene que ser entre ${min} y ${max}`;

export const INVALID_NUMBER =
  "las dioptrias solo se fraccionan con el signo de la coma";
