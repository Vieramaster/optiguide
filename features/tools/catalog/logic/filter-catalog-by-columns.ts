import { mapCatalogToRow } from "./catalog-row";
import type { LensObjectResolved } from "../types/optica-company";
import type { TableOptions } from "../types/table-options";

/**
 * Filtra el catálogo según los filtros booleanos de columnas.
 * @param catalog Catálogo de lentes resuelto
 * @param columns Columnas filtrables
 * @param filters Estado de los filtros booleanos
 */
export function filterCatalogByColumns(
  catalog: LensObjectResolved[],
  columns: TableOptions[],
  filters: Record<string, boolean>,
): LensObjectResolved[] {
  return catalog.filter((lensItem) => {
    const row = mapCatalogToRow(lensItem);
    return columns.every(({ value }) => {
      if (!filters[value]) return true;
      return row[value] === true;
    });
  });
}
