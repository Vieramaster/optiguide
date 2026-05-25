export const parseFullPrescription = (formData: FormData) => {
  return {
    SPHERE: Number(formData.get("SPHERE")),
    CYLINDER: Number(formData.get("CYLINDER")),
    AXIS: Number(formData.get("AXIS_CONFIG")),
    DIAMETER: Number(formData.get("DIAMETER")),
  };
};
