const parseNumericField = (formData: FormData, fieldName: string) => {
  const rawValue = formData.get(fieldName);

  return rawValue === "" ? 0 : Number(rawValue);
};

const parseOptionalNumericField = (formData: FormData, fieldName: string) => {
  const rawValue = formData.get(fieldName);

  return rawValue === "" ? NaN : Number(rawValue);
};

export const parseBasePrescription = (formData: FormData) => {
  const SPHERE = parseNumericField(formData, "SPHERE");
  const CYLINDER = parseNumericField(formData, "CYLINDER");

  return { SPHERE, CYLINDER };
};

export const parseFullPrescription = (formData: FormData) => {
  const basePrescription = parseBasePrescription(formData);
  const AXIS = parseOptionalNumericField(formData, "AXIS");
  const DIAMETER = parseOptionalNumericField(formData, "DIAMETER");

  return {
    SPHERE: basePrescription.SPHERE,
    CYLINDER: basePrescription.CYLINDER,
    AXIS,
    DIAMETER,
  };
};
