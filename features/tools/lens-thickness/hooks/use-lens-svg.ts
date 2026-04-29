import { useState } from "react";

import { calculateThickness } from "../utils";

import { GraduationObject } from "../types/simulator";

const toNumber = (v: string, fallback: number) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
};

export const useLensSVG = (values: GraduationObject) => {
  const [index, setIndex] = useState("1.5");

  const { ESF, CIL, DIAM } = values;
  const handleValueSelect = (value: string) => {
    setIndex(value);
  };

  const totalThickness = calculateThickness({
    sphere: toNumber(ESF, 0),
    cylinder: toNumber(CIL, 0),
    diameter: toNumber(DIAM, 20),
    refractiveIndex: toNumber(index, 1.5),
  });

  const isPositive = Number(ESF) >= 0;

  return { handleValueSelect, totalThickness, isPositive };
};
