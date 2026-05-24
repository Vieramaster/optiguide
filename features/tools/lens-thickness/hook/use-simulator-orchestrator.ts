import { lensThickness } from "../logic/lens-thickness";

import { usePrescriptionForm, useLensSide, useIndexSelect } from ".";

export const useSimulatorOrchestrator = () => {
  const prescriptionForm = usePrescriptionForm();

  const lensSide = useLensSide();

  const indexSelect = useIndexSelect();

  const calculatedLensThickness = lensThickness(
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
