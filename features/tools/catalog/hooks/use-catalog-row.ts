import { useMemo } from "react";

import { mapCatalogToRow } from "../logic/catalog-row";
import type { LensObjectResolved } from "../types/optica-company";
import type { CatalogRow } from "../types/table-options";

type CatalogWithRow = LensObjectResolved & {
  row: CatalogRow;
};

export const useCatalogRows = (
  transposedCatalog: LensObjectResolved[],
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
