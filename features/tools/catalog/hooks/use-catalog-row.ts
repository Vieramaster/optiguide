import { useMemo } from "react";
import { mapCatalogToRow } from "../logic/catalog-row";
import type { LensObjectCatalog } from "../types/optica-company";
import type { CatalogRow } from "../logic/catalog-row";

type CatalogWithRow = LensObjectCatalog & {
  row: CatalogRow;
};

export const useCatalogRows = (
  transposedCatalog: LensObjectCatalog[],
): CatalogWithRow[] => {
  return useMemo(
    () =>
      transposedCatalog.map((item) => ({
        ...item,
        row: mapCatalogToRow(item),
      })),
    [transposedCatalog],
  );
};
