//DATA
import { PHOTOCHROMATIC_LENSES_CATALOG } from "../data/tecnologies/photochromatic";
import { TREATMENTS_CATALOG } from "../data/tecnologies/treatments";
import { CATALOG_OPTICAL_COMPANY } from "../data/companies/optical-companies-catalog";
import { LENS_CATALOGS } from "../data/lens/lens-catalog";

//TYPES
import type {
  OpticalCompanyKey,
  LensObjectResolved,
} from "../types/optica-company";

import type { LensBaseObject } from "../types/lens/lens-base";

import { LensObjectInput } from "../types/optica-company";
import type { Lens } from "../types/lens/lens-base";

export const searchOpticaCompany = (company: OpticalCompanyKey, lens: Lens) => {
  if (!company || !lens) return null;

  const lala = CATALOG_OPTICAL_COMPANY[company];
  if (!lala) return null;
  const lele = lala[lens];

  if (!lele) return null;

  const lensCatalog = LENS_CATALOGS?.[lens];
  if (!lensCatalog) return null;

  return searchCatalogs(catalogCompany, lensCatalog);
};

//UTILS

const searchCatalogs = (
  lensCatalog: LensObjectInput[],
  lensBaseCatalog: LensBaseObject,
): LensObjectResolved[] => {
  return lensCatalog.map(({ key, lens, treatment, photochromatic }) => {
    const lensObject = lensBaseCatalog[lens];

    const product: LensObjectResolved = {
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
