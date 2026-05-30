import type { PrescriptionFullValues } from "@/entities/prescription/types/types";

import type { ThicknessDifferenceDisplay } from "../logic/compare-lens-thickness-percent";

import type {
  CalculatedLensThicknessByComparison,
  LensComparisonKey,
  RefractiveIndexSelectValueByLensComparison,
} from "./lens-comparison";

export type SimulatorOrchestratorState = {
  prescriptionForm: {
    submittedValues: PrescriptionFullValues | null;
    handlePrescriptionSubmit: (data: PrescriptionFullValues) => void;
  };
  lensComparison: {
    activeLensComparison: LensComparisonKey;
    selectLensComparison: (lensComparisonKey: LensComparisonKey) => void;
  };
  refractiveIndexByLensComparison: {
    refractiveIndexSelectValueByLensComparison: RefractiveIndexSelectValueByLensComparison;
    setRefractiveIndexForLensComparison: (
      lensComparisonKey: LensComparisonKey,
      selectValue: string,
    ) => void;
    getRefractiveIndexSelectValueForLensComparison: (
      lensComparisonKey: LensComparisonKey,
    ) => string;
  };
  calculatedLensThickness: CalculatedLensThicknessByComparison;
  thicknessDifferenceDisplay: ThicknessDifferenceDisplay;
};
