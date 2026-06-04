import { mapCatalogToRow } from "../logic/catalog-row";
import type { CatalogSnapshots } from "../types/catalog-snapshots";

import {
  useSelectFilter,
  useCheckboxFilter,
  usePagination,
  useFormFilter,

} from ".";

export const useCatalogOrchestrator = (snapshots: CatalogSnapshots) => {
  const selectFilter = useSelectFilter(snapshots);
  const checkboxFilter = useCheckboxFilter(selectFilter.catalogResult);
  const formFilter = useFormFilter(checkboxFilter.checkboxCatalog);
  const catalogRows = formFilter.catalog.map((item) => mapCatalogToRow(item))
  const pagination = usePagination(catalogRows);

  return {
    selectFilter,
    checkboxFilter,
    formFilter,
    pagination,
  };
};
