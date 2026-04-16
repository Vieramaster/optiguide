//DATA
import { PHOTOCHROMATIC_LENSES_CATALOG } from "../data/tecnologies/photochromatic";
import { TREATMENTS_CATALOG } from "../data/tecnologies/treatments";
import { LensObjectCatalog } from "../types/lens/optica-company";
import { LensArrayCatalog } from "../types/lens/optica-company";
//TYPES
import type { OpticalCompanyKey, LensTypeKey } from "../types/optic-keys";
import type { LensBaseObject } from "../types/lens/lens-base";

import { CATALOG_OPTICAL_COMPANY } from "../data/companies/catalog-optical-company";
import { LENS_CATALOGS } from "../data/lens/catalogs";

export const searchOpticaCompany = (
  company: OpticalCompanyKey,
  lens: LensTypeKey,
) => {
  if (!company || !lens) return null;

  const catalogCompany = CATALOG_OPTICAL_COMPANY[company]?.[lens];
  if (!catalogCompany) return null;

  const lensCatalog = LENS_CATALOGS?.[lens];
  if (!lensCatalog) return null;

  return searchCatalogs(catalogCompany, lensCatalog);
};

//UTILS

const searchCatalogs = (
  lensCatalog: LensArrayCatalog[],
  lensBaseCatalog: LensBaseObject,
): LensObjectCatalog[] => {
  return lensCatalog.map(({ key, lens, treatment, photochromatic }) => {
    const lensObject = lensBaseCatalog[lens];

    const product: LensObjectCatalog = {
      key,
      lens: lensObject,
    };

    if (treatment) {
      product.treatment = treatment.map((item) => TREATMENTS_CATALOG[item]);
    }

    if (photochromatic) {
      product.photochromatic = PHOTOCHROMATIC_LENSES_CATALOG[photochromatic];
    }

    return product;
  });
};
