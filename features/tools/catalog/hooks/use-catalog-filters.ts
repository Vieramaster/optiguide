"use client";

import { useMemo, useState } from "react";

import { mapCatalogToRow } from "../logic/catalog-row";
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
    return catalog.filter((lensItem) => {
      const row = mapCatalogToRow(lensItem);
      return FILTERABLE_COLUMNS.every(({ value }) => {
        if (!filters[value]) return true;
        return row[value] === true;
      });
    });
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
