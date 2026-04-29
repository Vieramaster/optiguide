"use client";

import { useState } from "react";

import { OpticalCompanyKey } from "../types/optica-company";
import type { SelectState } from "../types/optica-company";
import type { Lens } from "../types/lens/lens-base";

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
