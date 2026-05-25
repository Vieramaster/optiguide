import type { PrescriptionBaseValues } from "@/shared/lib/prescription/types";

import type { LensObjectResolved } from "../types/companies/companies";

export const transpositionFilter = (
  catalog: LensObjectResolved[],
  prescription: PrescriptionBaseValues | null,
): LensObjectResolved[] => {
  if (!prescription) return catalog;

  const { ESF, CIL } = prescription;

  return catalog.filter(({ lens }) => {
    if (!lens) return false;

    const { rangeDiopters, maxDiopters } = lens;

    return matchRange(rangeDiopters, ESF, CIL) || matchMax(maxDiopters, ESF);
  });
};

//MATCHES
const matchRange = (
  ranges: LensObjectResolved["lens"]["rangeDiopters"],
  sphere: number,
  cilinder: number,
) => {
  if (!ranges?.length) return false;

  return ranges.some(
    ({ minEsf, maxEsf, minCil, maxCil }) =>
      sphere >= minEsf &&
      sphere <= maxEsf &&
      cilinder >= minCil &&
      cilinder <= maxCil,
  );
};

const matchMax = (
  maxDiopters: LensObjectResolved["lens"]["maxDiopters"],
  sphere: number,
) => {
  if (!maxDiopters?.length) return false;

  return maxDiopters.some(({ min, max }) => sphere >= min && sphere <= max);
};
