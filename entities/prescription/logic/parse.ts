
export const parseBasePrescription = (formData: FormData) => ({
    SPHERE: Number(formData.get("SPHERE")),
    CYLINDER: Number(formData.get("CYLINDER")),
});

export const parseFullPrescription = (formData: FormData) => ({
    ...parseBasePrescription(formData),
    AXIS: Number(formData.get("AXIS_CONFIG")),
    DIAMETER: Number(formData.get("DIAMETER")),
})
