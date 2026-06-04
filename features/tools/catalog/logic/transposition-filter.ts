import type { PrescriptionBaseValues } from "@/entities/prescription";

import type { LensObjectResolved } from "../types/companies/companies";



export const transpositionFilter = (
  catalog: LensObjectResolved[],
  prescription: PrescriptionBaseValues | null,
): LensObjectResolved[] => {
  if (!prescription) return catalog;

  const { transposerSphere, transposerCilinder } = transposedPrescription(prescription.SPHERE, prescription.CYLINDER);

  return catalog.filter(({ lens }) => {
    if (!lens) return false;

    const { rangeDiopters, maxDiopters } = lens;

    return matchRange(rangeDiopters, transposerSphere, transposerCilinder) || matchMax(maxDiopters, transposerSphere);
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

const transposedPrescription = (SPHERE: number, CYLINDER: number) => {
  return {
    transposerSphere: SPHERE + CYLINDER,
    transposerCilinder: -CYLINDER,
  }
};