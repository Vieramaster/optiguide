import { LensThicknessTitle } from "../constants/title";
import {
  LENS_COMPARISON_ARIA_LABEL,
  LENS_COMPARISON_BUTTON_LABEL,
  REFRACTIVE_INDEX_LABEL_BY_LENS_COMPARISON,
} from "../constants/lens-comparison-labels";
import type {
  LensComparisonPanelView,
  LensThicknessSimulatorView,
} from "../types/lens-comparison-view";
import type { SimulatorOrchestratorState } from "../types/simulator-orchestrator-state";
import {
  LENS_COMPARISON_KEYS,
  type LensComparisonKey,
} from "../types/lens-comparison";

import { getThicknessDifferenceMessage } from "./compare-lens-thickness-percent";
import { isPositiveLensThickness } from "./lens-display";

export const buildLensThicknessSimulatorView = (
  orchestratorState: SimulatorOrchestratorState,
): LensThicknessSimulatorView => {
  const { prescriptionForm, lensComparison, thicknessDifferenceDisplay } =
    orchestratorState;

  const hasSubmittedPrescription = prescriptionForm.submittedValues !== null;
  const thicknessDifferenceMessage = getThicknessDifferenceMessage(
    thicknessDifferenceDisplay,
  );
  const lensComparisonToggleItems = buildLensComparisonToggleItems(
    lensComparison.activeLensComparison,
  );
  const lensComparisonPanelViews =
    buildLensComparisonPanelViews(orchestratorState);

  return {
    onPrescriptionSubmit: prescriptionForm.handlePrescriptionSubmit,
    hasSubmittedPrescription,
    awaitingPrescriptionMessage: LensThicknessTitle.awaitingPrescription,
    noteMessage: LensThicknessTitle.note,
    thicknessDifferenceMessage,
    lensComparisonToggleItems,
    selectLensComparison: lensComparison.selectLensComparison,
    lensComparisonPanelViews,
  };
};

type RefractiveIndexByLensComparisonHandlers =
  SimulatorOrchestratorState["refractiveIndexByLensComparison"];

const buildLensComparisonPanelViews = (
  orchestratorState: SimulatorOrchestratorState,
): LensComparisonPanelView[] => {
  const { lensComparison, refractiveIndexByLensComparison, calculatedLensThickness } =
    orchestratorState;

  const lensComparisonPanelViews = LENS_COMPARISON_KEYS.map(
    (lensComparisonKey) => {
      const estimatedThickness = calculatedLensThickness[lensComparisonKey];
      const isPositiveLens = isPositiveLensThickness(estimatedThickness);
      const refractiveIndexLabel =
        REFRACTIVE_INDEX_LABEL_BY_LENS_COMPARISON[lensComparisonKey];
      const refractiveIndexSelectValue =
        refractiveIndexByLensComparison.getRefractiveIndexSelectValueForLensComparison(
          lensComparisonKey,
        );
      const onRefractiveIndexChange = createRefractiveIndexChangeHandler(
        refractiveIndexByLensComparison,
        lensComparisonKey,
      );
      const isVisible =
        lensComparison.activeLensComparison === lensComparisonKey;

      return {
        lensComparisonKey,
        isVisible,
        estimatedThickness,
        isPositiveLens,
        refractiveIndexLabel,
        refractiveIndexSelectValue,
        onRefractiveIndexChange,
      };
    },
  );

  return lensComparisonPanelViews;
};

const buildLensComparisonToggleItems = (
  activeLensComparison: LensComparisonKey,
) => {
  const lensComparisonToggleItems = LENS_COMPARISON_KEYS.map(
    (lensComparisonKey) =>
      buildLensComparisonToggleItem(lensComparisonKey, activeLensComparison),
  );

  return lensComparisonToggleItems;
};

const createRefractiveIndexChangeHandler = (
  refractiveIndexByLensComparison: RefractiveIndexByLensComparisonHandlers,
  lensComparisonKey: LensComparisonKey,
) => {
  const onRefractiveIndexChange = (selectValue: string) =>
    refractiveIndexByLensComparison.setRefractiveIndexForLensComparison(
      lensComparisonKey,
      selectValue,
    );

  return onRefractiveIndexChange;
};

const buildLensComparisonToggleItem = (
  lensComparisonKey: LensComparisonKey,
  activeLensComparison: LensComparisonKey,
) => {
  const buttonLabel = LENS_COMPARISON_BUTTON_LABEL[lensComparisonKey];
  const ariaLabel = LENS_COMPARISON_ARIA_LABEL[lensComparisonKey];
  const isActive = activeLensComparison === lensComparisonKey;

  return {
    lensComparisonKey,
    buttonLabel,
    ariaLabel,
    isActive,
  };
};

