
import type { CatalogOpticalCompaniesInput } from "../../types/optica-company";

import {
  MONOFOCAL_CATALOG_OPTICA_LURO,
  BIFOCAL_CATALOG_OPTICA_LURO,
} from "./optica-luro";
import { TECNI_MONOFOCAL_CATALOG, BIFOCAL_TECNI_OPTICA } from "./tecni-optica";


export const CATALOG_OPTICAL_COMPANY: CatalogOpticalCompaniesInput = {
  opticaLuro: {
    monofocal: MONOFOCAL_CATALOG_OPTICA_LURO,
    bifocal: BIFOCAL_CATALOG_OPTICA_LURO,
  },
  tecniOptica: {
    monofocal: TECNI_MONOFOCAL_CATALOG,
    bifocal: BIFOCAL_TECNI_OPTICA,
  },
};
