import { useMemo } from "react";

import { mapCatalogToRow } from "../logic/catalog-row";
import type { LensObjectResolved } from "../types/companies/companies";
import type { CatalogRow } from "../types/ui/table-options";

/**
 * Hook que mapea un catálogo de lentes resueltos a filas de tabla listas para renderizar.
 * Solo maneja memoización y transformación, sin lógica de negocio.
 */
export const useCatalogRows = (
  catalog: LensObjectResolved[],
): Array<LensObjectResolved & { row: CatalogRow }> => {
  return useMemo(
    () =>
      catalog.map((item) => ({
        ...item,
        row: mapCatalogToRow(item),
      })),
    [catalog],
  );
};
