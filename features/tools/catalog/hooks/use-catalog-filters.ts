"use client";

import { useMemo, useState } from "react";

import { filterCatalogByColumns } from "../logic/filter-catalog-by-columns";
import { CATALOG_TABLE_COLUMNS } from "../data/catalog-table-columns";
import type { LensObjectResolved } from "../types/optica-company";

export const useCatalogFilters = (catalog: LensObjectResolved[]) => {
  const [filters, setFilters] = useState<Record<string, boolean>>({});

  const FILTERABLE_COLUMNS = useMemo(
    () => CATALOG_TABLE_COLUMNS.filter((c) => c.Ico || c.value === "polarized"),
    [],
  );

  const filteredCatalog = useMemo(() => {
    if (!catalog) return [];
    return filterCatalogByColumns(catalog, FILTERABLE_COLUMNS, filters);
  }, [FILTERABLE_COLUMNS, catalog, filters]);

  const handleCheckboxChange = (key: string, checked: boolean) => {
    setFilters((prev) => ({ ...prev, [key]: checked }));
  };

  return {
    catalog,
    filteredCatalog,
    filters,
    handleCheckboxChange,
    FILTERABLE_COLUMNS,
  };
};
