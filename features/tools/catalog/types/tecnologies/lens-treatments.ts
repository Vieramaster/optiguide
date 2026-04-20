import { TREATMENTS_CATALOG } from "../../constants/tecnologies/treatments";

export type TreatmentBrand = "Clear Look" | "Essilor" | "Vitolen";
export type Features = "antiReflex" | "blueControl" | "oleophobicHydrophobic" | "scratchResistant" | "antiStatic" | "polarized";
export type LensTreatment = {
    treatmentItemId: string;
    treatmentName: string;
    treatmentBrand: TreatmentBrand;
    treatmentTecnologies: string[];
    treatmentFeatures: Features[];
};

export type TreatmentsName = keyof typeof TREATMENTS_CATALOG
