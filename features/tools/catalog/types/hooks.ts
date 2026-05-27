import type { LensObjectResolved } from "./companies/companies";

export type CatalogResult = {
  catalog: LensObjectResolved[];
  error: string| null;
};

