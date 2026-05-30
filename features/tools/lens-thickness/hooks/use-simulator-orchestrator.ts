import {
  getThicknessDifferenceDisplay,
} from "../logic/compare-lens-thickness-percent";
import { calculateLensThicknessByIndex } from "../logic/lens-thickness";
import type { SimulatorOrchestratorState } from "../types/simulator-orchestrator-state";

import { usePrescriptionSubmit } from "./use-prescription-submit";
import { useLensComparison } from "./use-lens-comparison";
import { useRefractiveIndexByLensComparison } from "./use-refractive-index-by-lens-comparison";

export const useSimulatorOrchestrator = (): SimulatorOrchestratorState => {
  const prescriptionForm = usePrescriptionSubmit();
  const lensComparison = useLensComparison();
  const refractiveIndexByLensComparison = useRefractiveIndexByLensComparison();

  const calculatedLensThickness = calculateLensThicknessByIndex(
    prescriptionForm.submittedValues,
    refractiveIndexByLensComparison.refractiveIndexSelectValueByLensComparison,
  );

  const thicknessDifferenceDisplay = getThicknessDifferenceDisplay(
    calculatedLensThickness.lensA,
    calculatedLensThickness.lensB,
  );

  const orchestratorState: SimulatorOrchestratorState = {
    prescriptionForm,
    lensComparison,
    refractiveIndexByLensComparison,
    calculatedLensThickness,
    thicknessDifferenceDisplay,
  };

  return orchestratorState;
};
