import {
  getThicknessDifferenceDisplay,
} from "../logic/compare-lens-thickness-percent";
import { calculateLensThicknessByIndex } from "../logic/lens-thickness";

import { usePrescriptionSubmit } from "./use-prescription-submit";
import { useLensComparison } from "./use-lens-comparison";
import { useRefractiveIndexByLensComparison } from "./use-refractive-index-by-lens-comparison";

export const useSimulatorOrchestrator = () => {
  const prescriptionForm = usePrescriptionSubmit();
  const lensComparison = useLensComparison();
  const refractiveIndexByLensComparison = useRefractiveIndexByLensComparison();

  const calculatedLensThickness = calculateLensThicknessByIndex(
    prescriptionForm.submittedValues,
    refractiveIndexByLensComparison.indexes,
  );

  const thicknessDifferenceDisplay = getThicknessDifferenceDisplay(
    calculatedLensThickness.lensA,
    calculatedLensThickness.lensB,
  );

  return {
    prescriptionForm,
    lensComparison,
    refractiveIndexByLensComparison,
    calculatedLensThickness,
    thicknessDifferenceDisplay,
  };
};
