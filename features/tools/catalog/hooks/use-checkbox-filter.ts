"use client";

import { useMemo, useState } from "react";

import { filterCatalogByColumns } from "../logic/filter-catalog-by-columns";
import { CATALOG_FILTER_COLUMNS } from "../data/catalog-table-columns";
import type { LensObjectResolved } from "../types/companies/companies";

export const useCheckboxFilter = (catalog: LensObjectResolved[]) => {
  const [checkboxFilter, setCheckboxFilter] = useState<Record<string, boolean>>(
    {},
  );

  const checkboxCatalog = useMemo(() => {
    if (!catalog?.length) return [];
    return filterCatalogByColumns(
      catalog,
      CATALOG_FILTER_COLUMNS,
      checkboxFilter,
    );
  }, [catalog, checkboxFilter]);

  const handleCheckboxChange = (key: string, checked: boolean) => {
    setCheckboxFilter((prev) => ({ ...prev, [key]: checked }));
  };

  return {
    checkboxCatalog,
    checkboxFilter,
    handleCheckboxChange,
  };
};
