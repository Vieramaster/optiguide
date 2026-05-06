"use client";

import { useMemo, useState } from "react";

import { filterCatalogByColumns } from "../logic/filter-catalog-by-columns";
import { CATALOG_TABLE_COLUMNS } from "../data/catalog-table-columns";
import type { LensObjectResolved } from "../types/companies/companies";

const FILTERABLE_COLUMNS = CATALOG_TABLE_COLUMNS.filter(
  (c) => c.Ico || c.value === "polarized"
);

export const useCatalogFilters = (catalog: LensObjectResolved[]) => {
  const [filters, setFilters] = useState<Record<string, boolean>>({});

  const filteredCatalog = useMemo(() => {
    if (!catalog?.length) return [];
    return filterCatalogByColumns(catalog, FILTERABLE_COLUMNS, filters);
  }, [catalog, filters]);

  const handleCheckboxChange = (key: string, checked: boolean) => {
    setFilters((prev) => ({ ...prev, [key]: checked }));
  };

  return {
    filteredCatalog,
    filters,
    handleCheckboxChange,
    filtercolumns: FILTERABLE_COLUMNS,
  };
};