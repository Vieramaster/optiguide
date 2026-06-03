"use client";

import { useMemo, useState } from "react";

import { filterCatalogByColumns } from "../logic/filter-catalog-by-columns";
import { CATALOG_FILTER_COLUMNS } from "../constants/catalog-table-columns";
import type { LensObjectResolved } from "../types/companies/companies";

export const useCheckboxFilter = (catalog: LensObjectResolved[]) => {
  const [filter, setFilter] = useState<Record<string, boolean>>(
    {},
  );

  const checkboxCatalog = useMemo(() => {
    if (!catalog?.length) return [];
    return filterCatalogByColumns(
      catalog,
      CATALOG_FILTER_COLUMNS,
      filter,
    );
  }, [catalog, filter]);

  const handleCheckboxChange = (key: string, checked: boolean) => {
    setFilter((prev) => ({ ...prev, [key]: checked }));
  };

  return {
    checkboxCatalog,
    filter,
    handleCheckboxChange,
  };
};
