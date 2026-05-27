import { calculateLensThicknessByIndex } from "../logic/lens-thickness";

import { useLensSide, useIndexSelect, usePrescriptionBaseForm } from ".";

export const useSimulatorOrchestrator = () => {
  const prescriptionForm = usePrescriptionBaseForm();

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
