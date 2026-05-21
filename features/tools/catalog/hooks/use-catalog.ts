
import {
  useCatalogRows,
  useSelectFilter,
  useCheckboxFilter,
  usePagination,
  useFormFilter
} from ".";

export const useCatalog = () => {
  const selectFilter = useSelectFilter();
  const checkboxFilter = useCheckboxFilter(selectFilter.catalogResult.catalog);
  const formFilter = useFormFilter(checkboxFilter.checkboxCatalog);
  const catalogRow = useCatalogRows(formFilter.catalog);
  const pagination = usePagination(catalogRow);

  return {
    selectFilter,
    checkboxFilter,
    formFilter,
    catalogRow,
    pagination,
  };
};
