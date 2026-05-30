import type { PrescriptionFullValues } from "@/entities/prescription/types/types";

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
  refractiveIndexSelectValue: string;
  onRefractiveIndexChange: (selectValue: string) => void;
};

export type LensThicknessSimulatorView = {
  onPrescriptionSubmit: (data: PrescriptionFullValues) => void;
  hasSubmittedPrescription: boolean;
  awaitingPrescriptionMessage: string;
  noteMessage: string;
  thicknessDifferenceMessage: string | null;
  lensComparisonToggleItems: LensComparisonToggleItemView[];
  selectLensComparison: (lensComparisonKey: LensComparisonKey) => void;
  lensComparisonPanelViews: LensComparisonPanelView[];
};
