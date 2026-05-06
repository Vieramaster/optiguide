
import type { CatalogOpticalCompaniesInput } from "../../types/companies/companies";

import { TECNI_MONOFOCAL_CATALOG } from "./tecni-optica/monofocal/tecni-monofocal-catalog";
import { TECNI_PROGRESSIVE_CATALOG } from "./tecni-optica/progressive/tecni-progressive-catalog";
import { TECNI_BIFOCAL_CATALOG } from "./tecni-optica/bifocal/tecni-bifocal-catalog";

export const CATALOG_OPTICAL_COMPANY: CatalogOpticalCompaniesInput = {

  tecniOptica: {
    monofocal: TECNI_MONOFOCAL_CATALOG,
    bifocal: TECNI_BIFOCAL_CATALOG,
    progressive: TECNI_PROGRESSIVE_CATALOG
  },
};
