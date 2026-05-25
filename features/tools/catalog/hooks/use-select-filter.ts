"use client";

import { useState, useMemo } from "react";

import { resolveCatalog } from "../logic/resolve-catalog";
import type { SelectState } from "../types/companies/companies";
import type { Lens } from "../types/domain/lens/lens-base";
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

  const catalogResult = useMemo(
    () => resolveCatalog(selectFilter),
    [selectFilter],
  );

  if (!catalogResult || catalogResult.length === 0) {
    throw new Error("Catalog could not be resolved.");
  }

  return {
    handleSelectCompany,
    handleSelectLens,
    catalogResult,
  };
};
