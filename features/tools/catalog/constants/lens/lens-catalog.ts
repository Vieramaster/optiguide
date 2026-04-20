//DATA
import { ORMA, ESSILOR_156, AIRWEAR, ORMIX, STYLIS, PREMIUM } from "./monofocal/essilor";
import { EVOCLEAR_DIGITAL } from "./monofocal/kodak/evoclear_digital";
import { SHARP_CR39, SHARP_POLI, SHARP_160, SHARP_167, SHARP_174 } from "./monofocal/clear-look";
//TYPES
import type { OpticaCatalog } from "../../types/lens/optica-company";
import { LensBaseObject } from "../../types/lens/lens-base";

export const MONOFOCAL_CATALOG: LensBaseObject = {
  ...ORMA,
  ...ESSILOR_156,
  ...AIRWEAR,
  ...ORMIX,
  ...STYLIS,
  ...PREMIUM,
  ...EVOCLEAR_DIGITAL,
  ...SHARP_CR39,
  ...SHARP_POLI,
  ...SHARP_160,
  ...SHARP_167,
  ...SHARP_174
};

export const BIFOCAL_CATALOG = {
  ...ORMA,

};

export const LENS_CATALOGS: OpticaCatalog = {
  monofocal: MONOFOCAL_CATALOG,
  bifocal: BIFOCAL_CATALOG,
};
