
import { calculateLensThicknessByIndex } from "../logic/lens-thickness";


import { usePrescriptionSubmit } from "./use-prescription-submit";

import { useLensSide, useIndexSelect } from ".";
export const useSimulatorOrchestrator = () => {
  const prescriptionForm = usePrescriptionSubmit();

  const lensSide = useLensSide();

  const indexSelect = useIndexSelect();

  const calculatedLensThickness = calculateLensThicknessByIndex(
    prescriptionForm.submittedValues,
    indexSelect.lensIndex,
  );
  return {
    prescriptionForm,
    lensSide,
    indexSelect,
    calculatedLensThickness,
  };
};
