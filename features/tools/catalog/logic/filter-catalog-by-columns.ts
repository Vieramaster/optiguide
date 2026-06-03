import type { TableOptions } from "../types/ui/table-options";
import type { LensObjectResolved } from "../types/companies/companies";

import { mapCatalogToRow } from "./catalog-row";

/**
 * Filtra el catálogo según los filtros booleanos de columnas.
 */
export const filterCatalogByColumns = (
  catalog: LensObjectResolved[],
  columns: TableOptions[],
  filters: Record<string, boolean>,
): LensObjectResolved[] => {
  if (!columns.length) return catalog;

  return catalog.filter((lensItem) => {
    const row = mapCatalogToRow(lensItem);

    return columns.every(({ value }) => {
      const isActive = filters[value];

      if (!isActive) return true;

      return Boolean(row[value]);
    });
  });
};
