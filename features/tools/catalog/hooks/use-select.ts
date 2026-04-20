"use client";

import { useState } from "react";
import { OpticalCompanyKey, LensTypeKey } from "../types/optic-keys";

type SelectState = {
  company: OpticalCompanyKey;
  lens: LensTypeKey;
};

export const useSelect = () => {
  const [select, setSelect] = useState<SelectState>({
    company: "tecniOptica",
    lens: "monofocal",
  });
  const handleChangeCompany = (value: OpticalCompanyKey) => {
    setSelect((prev) => ({ ...prev, company: value }));
  };

  const handleChangeLens = (value: LensTypeKey) => {
    setSelect((prev) => ({ ...prev, lens: value }));
  };
  return {
    companySelect: select.company,
    lensSelect: select.lens,
    handleChangeCompany,
    handleChangeLens,
  };
};
