//TYPES
import { GraduationValueType } from "@/types/simulator-types";
//HOOKS
import { useState } from "react";
//LIB
import { calculateThickness } from "@/lib/calculate-thickness";

const toNumber = (v: string, fallback: number) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : fallback;
};


export const useLensSVG = (
    values:GraduationValueType
) => {
    const [index, setIndex] = useState(1.5);

    const {ESF,CIL,DIAM} = values
    const handleValueSelect = (value: string) => {
        setIndex(parseFloat(value));
    };

    const totalThickness = calculateThickness({
        sphere: toNumber(ESF, 0),
        cylinder: toNumber(CIL, 0),
        diameter: toNumber(DIAM, 20),
        index,
    });

      const isPositive = Number(ESF) >= 0;

    return { handleValueSelect, totalThickness, isPositive }

}