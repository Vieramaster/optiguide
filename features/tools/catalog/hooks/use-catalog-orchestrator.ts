import type { CatalogSnapshots } from "../types/catalog-snapshots";

import {
  useCatalogRows,
  useSelectFilter,
  useCheckboxFilter,
  usePagination,
  useFormFilter,

} from ".";

export const useCatalogOrchestrator = (snapshots: CatalogSnapshots) => {
  const selectFilter = useSelectFilter(snapshots);
  const checkboxFilter = useCheckboxFilter(selectFilter.catalogResult);
  const formFilter = useFormFilter(checkboxFilter.checkboxCatalog);
  const catalogRow = useCatalogRows(formFilter.catalog);
  const pagination = usePagination(catalogRow);

  return {
    selectFilter,
    checkboxFilter,
    formFilter,
    pagination,
  };
};
