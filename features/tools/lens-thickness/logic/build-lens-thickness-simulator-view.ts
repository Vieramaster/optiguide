import { buildLensThicknessMmMessage } from "../constants/lens-comparison-messages";
import {
  LENS_COMPARISON_ARIA_LABEL,
  LENS_COMPARISON_BUTTON_LABEL,
  REFRACTIVE_INDEX_LABEL_BY_LENS_COMPARISON,
} from "../constants/lens-comparison-labels";
import { LensThicknessTitle } from "../constants/title";
import type {
  LensComparisonPanelView,
  LensThicknessSimulatorView,
} from "../types/lens-comparison-view";
import type { SimulatorOrchestratorState } from "../types/simulator-orchestrator-state";
import {
  LENS_COMPARISON_KEYS,
  type LensComparisonKey,
} from "../types/lens-comparison";

import { isPositiveLensPower } from "./calculate-thickness";
import { getThicknessDifferenceMessage } from "./compare-lens-thickness-percent";

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
    lensComparison.active,
  );
  const lensComparisonPanelViews =
    buildLensComparisonPanelViews(orchestratorState);

  return {
    onSubmit: prescriptionForm.handleSubmit,
    hasSubmittedPrescription,
    awaitingPrescriptionMessage: LensThicknessTitle.awaitingPrescription,
    noteMessage: LensThicknessTitle.note,
    thicknessDifferenceMessage,
    lensComparisonToggleItems,
    selectLens: lensComparison.select,
    lensComparisonPanelViews,
  };
};

const buildLensComparisonPanelViews = (
  orchestratorState: SimulatorOrchestratorState,
): LensComparisonPanelView[] => {
  const {
    prescriptionForm,
    lensComparison,
    refractiveIndexByLensComparison,
    calculatedLensThickness,
  } = orchestratorState;

  const submittedValues = prescriptionForm.submittedValues;
  const isPositiveLens =
    submittedValues !== null
      ? isPositiveLensPower(submittedValues.SPHERE, submittedValues.CYLINDER)
      : false;

  const lensComparisonPanelViews = LENS_COMPARISON_KEYS.map(
    (lensComparisonKey) => {
      const estimatedThickness = calculatedLensThickness[lensComparisonKey];
      const refractiveIndexLabel =
        REFRACTIVE_INDEX_LABEL_BY_LENS_COMPARISON[lensComparisonKey];
      const indexValue = refractiveIndexByLensComparison.getIndex(
        lensComparisonKey,
      );
      const onRefractiveIndexChange = (selectValue: string) =>
        refractiveIndexByLensComparison.setIndex(lensComparisonKey, selectValue);
      const isVisible = lensComparison.active === lensComparisonKey;
      const thicknessMessage =
        submittedValues !== null
          ? buildLensThicknessMmMessage(estimatedThickness)
          : null;

      return {
        lensComparisonKey,
        isVisible,
        estimatedThickness,
        isPositiveLens,
        refractiveIndexLabel,
        indexValue,
        onRefractiveIndexChange,
        thicknessMessage,
      };
    },
  );

  return lensComparisonPanelViews;
};

const buildLensComparisonToggleItems = (active: LensComparisonKey) => {
  const lensComparisonToggleItems = LENS_COMPARISON_KEYS.map(
    (lensComparisonKey) =>
      buildLensComparisonToggleItem(lensComparisonKey, active),
  );

  return lensComparisonToggleItems;
};

const buildLensComparisonToggleItem = (
  lensComparisonKey: LensComparisonKey,
  active: LensComparisonKey,
) => {
  const buttonLabel = LENS_COMPARISON_BUTTON_LABEL[lensComparisonKey];
  const ariaLabel = LENS_COMPARISON_ARIA_LABEL[lensComparisonKey];
  const isActive = active === lensComparisonKey;

  return {
    lensComparisonKey,
    buttonLabel,
    ariaLabel,
    isActive,
  };
};
