"use client";

import { useState, useMemo } from "react";

import type { CatalogSnapshots } from "../types/catalog-snapshots";
import type { SelectState } from "../types/companies/companies";
import type { Lens } from "../types/domain/lens/lens-base";
import type { OpticalCompanyKey } from "../types/companies/companies";

export const useSelectFilter = (snapshots: CatalogSnapshots) => {
  const [selectFilter, setSelectFilter] = useState<SelectState>({
    company: "tecniOptica",
    lens: "monofocal",
  });

  const handleSelectCompany = (company: OpticalCompanyKey) => {
    setSelectFilter((prev) => ({
      ...prev,
      company,
    }));
  };

  const handleSelectLens = (lens: Lens) => {
    setSelectFilter((prev) => ({
      ...prev,
      lens,
    }));
  };

  const catalogResult = useMemo(() => {
    const snapshotKey = `${selectFilter.company}:${selectFilter.lens}`;

    return snapshots[snapshotKey] ?? [];
  }, [selectFilter, snapshots]);

  const isCatalogEmpty = catalogResult.length === 0;

  return {
    handleSelectCompany,
    handleSelectLens,
    catalogResult,
    isCatalogEmpty,
  };
};