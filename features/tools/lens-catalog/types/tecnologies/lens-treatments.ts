import { TREATMENTS_CATALOG } from "../../data/tecnologies/treatments";

export type TreatmentBrand = "Clear Look" | "Essilor" | "Vitolen";
export type Features = "antiReflex" | "blueControl" | "oleophobicHydrophobic" | "scratchResistant" | "antiStatic" | "polarized";
export type LensTreatment = {
    id: string;
    name: string;
    brand: TreatmentBrand;
    tecnologies: string[];
    features: Features[];
};

export type TreatmentsName = keyof typeof TREATMENTS_CATALOG
