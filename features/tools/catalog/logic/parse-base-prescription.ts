export const parseBasePrescription = (formData: FormData) => ({
  SPHERE: Number(formData.get("SPHERE")),
  CYLINDER: Number(formData.get("CYLINDER")),
});
