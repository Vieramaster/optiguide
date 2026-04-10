"use client";

//HOOKS
import { useState } from "react";
//TYPES
import { OpticalCompanyKey, LensTypeKey } from "../types/optic-keys";

export const useSelect = () => {
    const [companySelect, setCompanySelect] = useState<OpticalCompanyKey>("tecniOptica");
    const [lensSelect, setLensSelect] = useState<LensTypeKey>("monofocal")

    const onChangeCompany = (val: OpticalCompanyKey) => {
        setCompanySelect(val)

    }
    const onChangeLens = (val: LensTypeKey) => {
        setLensSelect(val)
    }

    return {
        companySelect,
        lensSelect,
        onChangeCompany,
        onChangeLens
    };
};