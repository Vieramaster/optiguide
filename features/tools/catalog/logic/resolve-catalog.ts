
import { CATALOG_OPTICAL_COMPANY } from "../domain/companies/optical-companies-catalog";
import { LENS_CATALOGS } from "../domain/lens/lens-catalog";
import { TREATMENTS_CATALOG } from "../domain/technologies/treatments";
import { PHOTOCHROMATIC_LENSES_CATALOG } from "../domain/technologies/photochromatic";
import type { SelectState, LensObjectResolved, LensObjectInput } from "../types/companies/companies";
import type { TreatmentsName } from "../types/domain/technologies/lens-treatments";
import type { PhotochromaticName } from "../types/domain/technologies/photochromatic";


const assertSelectFilter = (filter: SelectState) => {
  if (!filter?.company || !filter?.lens) {
    throw new Error("Invalid SelectState");
  }
};

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

  const resolvedTreatments = treatments.map((treatmentName) => {
    const resolved = TREATMENTS_CATALOG[treatmentName];

    if (!resolved) {
      throw new Error(`Treatment not found → "${treatmentName}"`);
    }

    return resolved;
  });

  return resolvedTreatments;
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

const mapCatalogEntryToResolved = (
  entry: LensObjectInput,
  lensType: SelectState["lens"],
): LensObjectResolved => {
  const key = entry.key;
  const lens = resolveLens(entry.lens, lensType);
  const treatment = resolveTreatments(entry.treatment);
  const photochromatic = resolvePhotochromatic(entry.photochromatic);

  return {
    key,
    lens,
    treatment,
    photochromatic,
  };
};

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

  const resolvedCatalog = catalog.map((entry) =>
    mapCatalogEntryToResolved(entry, lensType),
  );

  return resolvedCatalog;
};
