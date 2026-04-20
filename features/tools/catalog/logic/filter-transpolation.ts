//UTILS
import { isValidString } from "@/shared/utils/string/is-valid-string";
//TYPES
import type { LensObjectCatalog } from "../types/lens/optica-company";
import type { GraduationBaseKeys } from "@/shared/graduation-form/graduation-type";
export const filterTranspolation = (
  catalog: LensObjectCatalog[],
  filters: Record<GraduationBaseKeys, string> | null,
) => {
  if (!filters) return catalog;

  const { ESF, CIL } = filters;

  // si no hay valores válidos → no filtra
  if (!isValidString(ESF) && !isValidString(CIL)) return catalog;

  const sphere = Number(ESF);
  const cylinder = Number(CIL);

  if (!Number.isFinite(sphere) || !Number.isFinite(cylinder)) {
    return catalog;
  }

  const transposition = transposePrescription(sphere, cylinder);

  return catalogFilter(catalog, transposition);
};

//HELPERS
const transposePrescription = (sphere: number, cylinder: number) => {
  return {
    sphere: sphere + cylinder,
    cylinder: -cylinder,
  };
};


const catalogFilter = (
  catalog: LensObjectCatalog[],
  transposition: { sphere: number; cylinder: number },
) => {
  const { sphere, cylinder } = transposition;
  const absCylinder = Math.abs(cylinder);

  return catalog.filter(({ lens }) => {
    const { maxDiopters, rangeDiopters } = lens

    if (rangeDiopters && rangeDiopters.length > 0) {
      return rangeDiopters.some(
        ({ minEsf, maxEsf, minCil, maxCil }) =>
          sphere >= minEsf &&
          sphere <= maxEsf &&
          absCylinder >= minCil &&
          absCylinder <= maxCil
      );
    }

    if (maxDiopters && maxDiopters.length > 0) {
      return maxDiopters.some(
        ({ min, max }) => sphere >= min && sphere <= max
      );
    }


    return false;
  });
};