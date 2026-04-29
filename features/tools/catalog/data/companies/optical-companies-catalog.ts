
import type { CatalogOpticalCompaniesInput } from "../../types/optica-company";

import {
  MONOFOCAL_CATALOG_OPTICA_LURO,
  BIFOCAL_CATALOG_OPTICA_LURO,
} from "./optica-luro";
import { MONOFOCAL_TECNI_OPTICA, BIFOCAL_TECNI_OPTICA } from "./tecni-optica";
//=================TYPES=================/

export const CATALOG_OPTICAL_COMPANY: CatalogOpticalCompaniesInput = {
  opticaLuro: {
    monofocal: MONOFOCAL_CATALOG_OPTICA_LURO,
    bifocal: BIFOCAL_CATALOG_OPTICA_LURO,
  },
  tecniOptica: {
    monofocal: MONOFOCAL_TECNI_OPTICA,
    bifocal: BIFOCAL_TECNI_OPTICA,
  },
};
