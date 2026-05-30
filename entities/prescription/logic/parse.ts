
export const parseBasePrescription = (formData: FormData) => ({
    SPHERE: formData.get("SPHERE") === "" ? 0 : Number(formData.get("SPHERE")),
    CYLINDER: formData.get("CYLINDER") === "" ? 0 : Number(formData.get("CYLINDER")),
});

export const parseFullPrescription = (formData: FormData) => ({
    ...parseBasePrescription(formData),
    AXIS: formData.get("AXIS") === "" ? NaN : Number(formData.get("AXIS")),
    DIAMETER: formData.get("DIAMETER") === "" ? NaN : Number(formData.get("DIAMETER")),
})
