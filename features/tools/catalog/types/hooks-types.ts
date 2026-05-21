import { PRESCRIPTION_KEYS } from "../data/prescription-keys";

import type { LensObjectResolved } from "./companies/companies";

export type CatalogResult = {
  catalog: LensObjectResolved[];
  error: string| null;
};

export type PrescriptionKey = (typeof PRESCRIPTION_KEYS)[number];

export type PrescriptionValues =
  Record<PrescriptionKey, number>;