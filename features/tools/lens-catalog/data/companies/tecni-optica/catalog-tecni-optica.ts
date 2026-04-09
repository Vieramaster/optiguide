//TYPES
import type { OpticaInput } from "../../../types/lens/optica-company";
import { BIFOCAL_TECNI_OPTICA } from "./bifocal-tecni-optica";
//DATA
import { MONOFOCAL_TECNI_OPTICA } from "./monofocal-tecni-optica";

export const CATALOG_TECNI_OPTICA: OpticaInput = {
  monofocal: MONOFOCAL_TECNI_OPTICA,
  bifocal: BIFOCAL_TECNI_OPTICA,
};
