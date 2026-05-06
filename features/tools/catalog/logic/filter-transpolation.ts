import { isValidString } from "@/shared/utils/string/is-valid-string";
import type { GraduationBaseKeys } from "@/shared/graduation-form/graduation-type";

import type { LensObjectResolved } from "../types/companies/companies";

//MAIN

export const filterTranspolation = (
  catalog: LensObjectResolved[],
  filters: Record<GraduationBaseKeys, string> | null
): LensObjectResolved[] => {
  const prescription = parsePrescription(filters);
  if (!prescription) return catalog;

  const transposed = transposePrescription(
    prescription.sphere,
    prescription.cylinder
  );

  return filterCatalog(catalog, transposed.sphere, transposed.cylinder);
};


//PARSE
const parsePrescription = (
  filters: Record<GraduationBaseKeys, string> | null
) => {
  if (!filters) return null;

  const { ESF, CIL } = filters;

  if (!isValidString(ESF) || !isValidString(CIL)) return null;

  const sphere = Number(ESF);
  const cylinder = Number(CIL);

  if (!Number.isFinite(sphere) || !Number.isFinite(cylinder)) return null;

  return { sphere, cylinder };
};


//DOMAIN
const transposePrescription = (sphere: number, cylinder: number) => ({
  sphere: sphere + cylinder,
  cylinder: -cylinder,
});


//FILTER
const filterCatalog = (
  catalog: LensObjectResolved[],
  sphere: number,
  cylinder: number
): LensObjectResolved[] => {
  const absCylinder = Math.abs(cylinder);

  return catalog.filter(({ lens }) => {
    if (!lens) return false;

    const { rangeDiopters, maxDiopters } = lens;

    return (
      matchRange(rangeDiopters, sphere, absCylinder) ||
      matchMax(maxDiopters, sphere)
    );
  });
};

//MATCHES
const matchRange = (
  ranges: LensObjectResolved["lens"]["rangeDiopters"],
  sphere: number,
  absCylinder: number
) => {
  if (!ranges?.length) return false;

  return ranges.some(
    ({ minEsf, maxEsf, minCil, maxCil }) =>
      sphere >= minEsf &&
      sphere <= maxEsf &&
      absCylinder >= minCil &&
      absCylinder <= maxCil
  );
};

const matchMax = (
  maxDiopters: LensObjectResolved["lens"]["maxDiopters"],
  sphere: number
) => {
  if (!maxDiopters?.length) return false;

  return maxDiopters.some(({ min, max }) => sphere >= min && sphere <= max);
};