import type { SelectState, LensObjectResolved } from "../types/optica-company";
import { CATALOG_OPTICAL_COMPANY } from "../data/companies/optical-companies-catalog";
import { LENS_CATALOGS } from "../data/lens/lens-catalog";
import { TREATMENTS_CATALOG } from "../data/tecnologies/treatments";
import { PHOTOCHROMATIC_LENSES_CATALOG } from "../data/tecnologies/photochromatic";

export const resolveCatalog = (
  selectFilter: SelectState,
): LensObjectResolved[] => {
  if (!selectFilter || !selectFilter.company || !selectFilter.lens) {
    throw new Error("selectFilter incompleto");
  }

  const catalogLensCompany =
    CATALOG_OPTICAL_COMPANY[selectFilter.company][selectFilter.lens];

  if (!catalogLensCompany) {
    throw new Error("catalog not found");
  }

  return catalogLensCompany.map(({ lens, key, treatment, photochromatic }) => {
    return {
      key,
      lens: LENS_CATALOGS[selectFilter.lens][lens],
      treatment: treatment
        ? treatment.map((item) => TREATMENTS_CATALOG[item])
        : undefined,
      photochromatic: photochromatic
        ? PHOTOCHROMATIC_LENSES_CATALOG[photochromatic]
        : undefined,
    };
  });
};
