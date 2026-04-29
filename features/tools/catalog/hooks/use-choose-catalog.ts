"use client";

//
import { useState } from "react";


import { OpticalCompanyKey } from "../types/optica-company";
import type  { SelectState,  } from "../types/optica-company";
import type { Lens } from "../types/lens/lens-base";
export const useChooseCatalog = () => {
  const [select, setSelect] = useState<SelectState>({
    company: "tecniOptica",
    lens: "monofocal",
  });
  const handleChangeCompany = (value: OpticalCompanyKey) => {
    setSelect((prev) => ({ ...prev, company: value }));
  };

  const handleChangeLens = (value: Lens) => {
    setSelect((prev) => ({ ...prev, lens: value }));
  };
  return {
    companySelect: select.company,
    lensSelect: select.lens,
    handleChangeCompany,
    handleChangeLens,
  };
};
