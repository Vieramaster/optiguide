import type { PrescriptionFullValues } from "@/entities/prescription";

import type { ThicknessDifferenceDisplay } from "../logic/compare-lens-thickness-percent";

import type {
  CalculatedLensThicknessByComparison,
  LensComparisonKey,
  RefractiveIndexByLensComparison,
} from "./lens-comparison";

export type SimulatorOrchestratorState = {
  prescriptionForm: {
    submittedValues: PrescriptionFullValues | null;
    handleSubmit: (values: PrescriptionFullValues) => void;
  };
  lensComparison: {
    active: LensComparisonKey;
    select: (lensComparisonKey: LensComparisonKey) => void;
  };
  refractiveIndexByLensComparison: {
    indexes: RefractiveIndexByLensComparison;
    setIndex: (lensComparisonKey: LensComparisonKey, selectValue: string) => void;
    getIndex: (lensComparisonKey: LensComparisonKey) => string;
  };
  calculatedLensThickness: CalculatedLensThicknessByComparison;
  thicknessDifferenceDisplay: ThicknessDifferenceDisplay;
};
