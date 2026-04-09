import {
  ESSILOR_MONOFOCAL_CATALOG,
  CLEARLOOK_MONOFOCAL_CATALOG,
  KODAK_MONOFOCAL_CATALOG,
} from "./monofocal";
import type { OpticaCatalog } from "../../types/lens/optica-company";

export const MONOFOCAL_CATALOG = {
  ...ESSILOR_MONOFOCAL_CATALOG,
  ...CLEARLOOK_MONOFOCAL_CATALOG,
  ...KODAK_MONOFOCAL_CATALOG,
};

export const BIFOCAL_CATALOG = {
  ...ESSILOR_MONOFOCAL_CATALOG,
};

export const LENS_CATALOGS: OpticaCatalog = {
  monofocal: MONOFOCAL_CATALOG,
  bifocal: BIFOCAL_CATALOG,
};
