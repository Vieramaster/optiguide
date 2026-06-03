import type { PrescriptionFullValues } from "@/entities/prescription";

import type { LensComparisonKey } from "./lens-comparison";

export type LensComparisonToggleItemView = {
  lensComparisonKey: LensComparisonKey;
  buttonLabel: string;
  ariaLabel: string;
  isActive: boolean;
};

export type LensComparisonPanelView = {
  lensComparisonKey: LensComparisonKey;
  isVisible: boolean;
  estimatedThickness: number;
  isPositiveLens: boolean;
  refractiveIndexLabel: string;
  indexValue: string;
  onRefractiveIndexChange: (selectValue: string) => void;
  thicknessMessage: string | null;
};

export type LensThicknessSimulatorView = {
  onSubmit: (values: PrescriptionFullValues) => void;
  hasSubmittedPrescription: boolean;
  awaitingPrescriptionMessage: string;
  noteMessage: string;
  thicknessDifferenceMessage: string | null;
  lensComparisonToggleItems: LensComparisonToggleItemView[];
  selectLens: (lensComparisonKey: LensComparisonKey) => void;
  lensComparisonPanelViews: LensComparisonPanelView[];
};
