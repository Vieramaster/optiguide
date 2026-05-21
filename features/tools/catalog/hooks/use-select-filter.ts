"use client";

import { useState, useMemo } from "react";

import { resolveCatalog } from "../logic/resolve-catalog";
import type { SelectState } from "../types/companies/companies";
import type { Lens } from "../types/domain/lens/lens-base";
import type { CatalogResult } from "../types/hooks-types";
import type { OpticalCompanyKey } from "../types/companies/companies";

export const useSelectFilter = () => {
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

  const catalog = useMemo(() => resolveCatalog(selectFilter), [selectFilter]);

  const error = catalog.length === 0 ? "Catalog could not be resolved." : null;

  const catalogResult : CatalogResult= {
    catalog,
    error,
  };
  return {
    handleSelectCompany,
    handleSelectLens,
    catalogResult,
  };
};
