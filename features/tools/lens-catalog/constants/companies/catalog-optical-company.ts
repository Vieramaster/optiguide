//DATA
import { MONOFOCAL_CATALOG_OPTICA_LURO, BIFOCAL_CATALOG_OPTICA_LURO } from "./optica-luro";
import { MONOFOCAL_TECNI_OPTICA, BIFOCAL_TECNI_OPTICA } from "./tecni-optica";
//TYPES
import type { CatalogOpticalCompanies } from "../../types/catalog-optical-companies";

export const CATALOG_OPTICAL_COMPANY: CatalogOpticalCompanies = {
  opticaLuro: {
    monofocal: MONOFOCAL_CATALOG_OPTICA_LURO,
    bifocal: BIFOCAL_CATALOG_OPTICA_LURO,
  },
  tecniOptica: {
    monofocal: MONOFOCAL_TECNI_OPTICA,
    bifocal: BIFOCAL_TECNI_OPTICA,
  },
};
