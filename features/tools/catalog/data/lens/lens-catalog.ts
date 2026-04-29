
import { LensBaseObject, LensCatalog } from "../../types/lens/lens-base";

import {
  ORMA,
  ESSILOR_156,
  AIRWEAR,
  ORMIX,
  STYLIS,
  PREMIUM,
} from "./monofocal/essilor";
import {
  SHARP_CR39,
  SHARP_POLI,
  SHARP_160,
  SHARP_167,
  SHARP_174,
} from "./monofocal/clear-look";
import { EVOCLEAR_DIGITAL } from "./monofocal/kodak/evoclear_digital";
//==================TYPES=================/

//==================CATALOGS=================/
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
  ...SHARP_174,
};

export const BIFOCAL_CATALOG: LensBaseObject = {
  ...ORMA,
};

//==================cCOMPLETE CATALOG=================/
export const LENS_CATALOGS: LensCatalog = {
  monofocal: MONOFOCAL_CATALOG,
  bifocal: BIFOCAL_CATALOG,
};
