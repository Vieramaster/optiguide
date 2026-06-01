"use client";
import { useState, useMemo } from "react";

import type { PrescriptionBaseValues } from "@/entities/prescription";


import type { LensObjectResolved } from "../types/companies/companies";
import { transpositionFilter } from "../logic/transposition-filter";


// features/tools/catalog/hooks/use-form-filter.ts
export const useFormFilter = (baseCatalog: LensObjectResolved[]) => {
  const [filterValues, setFilterValues] = useState<PrescriptionBaseValues | null>(null);

  // Este es el callback que le pasaremos al componente
  const handleValidSubmit = (data: PrescriptionBaseValues) => {
    setFilterValues(data);
  };

  const catalog = useMemo(() => {
    if (!filterValues) return baseCatalog;
    return transpositionFilter(baseCatalog, filterValues);
  }, [baseCatalog, filterValues]);

  return {
    handleValidSubmit,
    catalog,
  };
};
