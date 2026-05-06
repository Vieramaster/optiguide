import type { LensBaseObject, LensCatalog } from "../../types/domain/lens/lens-base";

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
import {
  BIFOCAL_ORGANIC,
  BIFOCAL_KRIPTOCK,
  BIFOCAL_POLICARBONATE
} from "./bifocal/bifocal-catalog";
import {
  UNIQUE_DRO,
  PRECISE,
  PROLINE
} from "./progressive/kodak";
import {
  CONFORT,
  LIBERTY,
  PHYSIO,
  XR_DESING,
  XR_XRPRO
} from "./progressive/essilor";

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
  ...BIFOCAL_ORGANIC,
  ...BIFOCAL_KRIPTOCK,
  ...BIFOCAL_POLICARBONATE
}
export const PROGRESSIVE_CATALOG: LensBaseObject = {
  ...UNIQUE_DRO,
  ...PRECISE,
  ...PROLINE,
  ...CONFORT,
  ...LIBERTY,
  ...PHYSIO,
  ...XR_DESING,
  ...XR_XRPRO,

}
export const LENS_CATALOGS: LensCatalog = {
  monofocal: MONOFOCAL_CATALOG,
  bifocal: BIFOCAL_CATALOG,
  progressive: PROGRESSIVE_CATALOG
};
