
import { CATALOG_OPTICAL_COMPANY } from "../domain/companies/optical-companies-catalog";
import { LENS_CATALOGS } from "../domain/lens/lens-catalog";
import { TREATMENTS_CATALOG } from "../domain/tecnologies/treatments";
import { PHOTOCHROMATIC_LENSES_CATALOG } from "../domain/tecnologies/photochromatic";
import type { SelectState, LensObjectResolved } from "../types/companies/companies";
import type { TreatmentsName } from "../types/domain/tecnologies/lens-treatments";
import type { PhotochromaticName } from "../types/domain/tecnologies/photochromatic";


const assertSelectFilter = (filter: SelectState) => {
  if (!filter?.company || !filter?.lens) {
    throw new Error("Invalid SelectState");
  }
};

//RESOLVERS
const resolveLens = (
  lensKey: string,
  lensType: SelectState["lens"]
) => {
  const lens = LENS_CATALOGS[lensType][lensKey];

  if (!lens) {
    throw new Error(
      `Lens not found → key: "${lensKey}" | type: "${lensType}"`
    );
  }

  return lens;
};

const resolveTreatments = (
  treatments?: readonly TreatmentsName[]
) => {
  if (!treatments?.length) return undefined;

  return treatments.map((t) => {
    const resolved = TREATMENTS_CATALOG[t];

    if (!resolved) {
      throw new Error(`Treatment not found → "${t}"`);
    }

    return resolved;
  });
};

const resolvePhotochromatic = (
  photo?: PhotochromaticName
) => {
  if (!photo) return undefined;

  const resolved = PHOTOCHROMATIC_LENSES_CATALOG[photo];

  if (!resolved) {
    throw new Error(`Photochromatic not found → "${photo}"`);
  }

  return resolved;
};

//MAIN

export const resolveCatalog = (
  selectFilter: SelectState
): LensObjectResolved[] => {
  assertSelectFilter(selectFilter);

  const { lens: lensType } = selectFilter;

  const catalog =
    CATALOG_OPTICAL_COMPANY.tecniOptica[lensType];

  if (!catalog) {
    throw new Error(
      `Catalog not found → type: "${lensType}"`
    );
  }

  return catalog.map(({ key, lens, treatment, photochromatic }) => ({
    key: key,
    lens: resolveLens(lens, lensType),
    treatment: resolveTreatments(treatment),
    photochromatic: resolvePhotochromatic(photochromatic),
  }));
};