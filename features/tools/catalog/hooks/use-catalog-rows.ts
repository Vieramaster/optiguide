import { useMemo } from "react";

import { mapCatalogToRow } from "../logic/catalog-row";
import type { LensObjectResolved } from "../types/companies/companies";
import type { CatalogRowResult } from "../types/companies/companies";

/**
 * Hook que mapea un catálogo de lentes resueltos a filas de tabla listas para renderizar.
 * Solo maneja memoización y transformación, sin lógica de negocio.
 */
export const useCatalogRows = (
  catalog: LensObjectResolved[],
): CatalogRowResult => {
  return useMemo(
    () =>
      catalog.map((item) => ({
        ...item,
        row: mapCatalogToRow(item),
      })),
    [catalog],
  );
};
