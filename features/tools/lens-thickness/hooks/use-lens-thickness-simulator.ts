import { useState } from "react";

import { graduationComplete } from "@/shared/graduation-form/graduation-data";
import { useFormGraduation } from "@/shared/graduation-form/graduation-form-hook";

import {
  calculateThickness,
  calculatePercentage,
  validateFormValues,
} from "../utils";
import type { LensSide } from "../types/simulator";

const DEFAULT_REFRACTIVE_INDEX = 1.5;

export type SideSimulationResult = {
  thickness: number;
  isMax: boolean;
  percentageDiff: string;
};

export const useLensThicknessSimulator = () => {
  const { values, errors, submittedValues, handleChange, handleSubmit } =
    useFormGraduation(["ESF", "CIL", "EJE", "DIAM"]);

  const [activeSide, setActiveSide] = useState<LensSide>("A");

  const [lensIndexes, setLensIndexes] = useState<Record<LensSide, string>>({
    A: String(DEFAULT_REFRACTIVE_INDEX),
    B: String(DEFAULT_REFRACTIVE_INDEX),
  });

  const handleIndexChange = (side: LensSide) => (value: string) => {
    setLensIndexes((prev) => ({
      ...prev,
      [side]: value,
    }));
  };

  const currentValues = submittedValues ?? graduationComplete;

  const calculateLensThickness = (side: LensSide) => {
    const refractiveIndex =
      Number(lensIndexes[side]) || DEFAULT_REFRACTIVE_INDEX;

    return calculateThickness({
      sphere: Number(currentValues.ESF) || 0,
      cylinder: Number(currentValues.CIL) || 0,
      diameter: Number(currentValues.DIAM) || 20,
      refractiveIndex,
    });
  };

  const thickness = {
    A: calculateLensThickness("A"),
    B: calculateLensThickness("B"),
  };

  const sideResults: Record<LensSide, SideSimulationResult> = {
    A: {
      ...calculatePercentage({ side: "A", thickness }),
      thickness: thickness.A,
    },
    B: {
      ...calculatePercentage({ side: "B", thickness }),
      thickness: thickness.B,
    },
  };

  const isPositive = Number(currentValues.ESF) >= 0;
  const isSubmitEnabled = validateFormValues(values);

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    activeSide,
    setActiveSide,
    sideResults,
    isPositive,
    handleIndexChange,
    isSubmitEnabled,
  };
};
