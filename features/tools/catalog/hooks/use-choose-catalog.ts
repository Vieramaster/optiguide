"use client";

import { useState } from "react";

import { OpticalCompanyKey } from "../types/companies/companies";
import type { SelectState } from "../types/companies/companies";
import type { Lens } from "../types/domain/lens/lens-base";

/**
 * Hook para manejar la selección de óptica y tipo de lente.
 * Solo maneja estado y handlers, sin lógica de negocio.
 */
export const useChooseCatalog = () => {
  const [selection, setSelection] = useState<SelectState>({
    company: "tecniOptica",
    lens: "monofocal",
  });

  const handleChangeCompany = (company: OpticalCompanyKey) => {
    setSelection((prev) => ({ ...prev, company }));
  };

  const handleChangeLens = (lens: Lens) => {
    setSelection((prev) => ({ ...prev, lens }));
  };

  return {
    companySelect: selection.company,
    lensSelect: selection.lens,
    handleChangeCompany,
    handleChangeLens,
  };
};
