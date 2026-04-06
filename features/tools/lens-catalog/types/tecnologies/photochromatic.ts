import { PHOTOCHROMATIC_LENSES_CATALOG } from "../../data/tecnologies/photochromatic";
export type PhotochromaticBrand = "Varilux" | "Varios" | "Vitolen";
export type PhotochromaticColor = "Gris" | "Marrón" | "Verde" | "Zafiro" | "Ámbar" | "Esmeralda" | "Rubí" | "Jade" | "Verde cobre" | "Marrón cobre";
export type BlueLightFilter = {
    clearState: string;
    darkState: string;
}
export type PhotochromaticLens = {
    photochromaticItemId: string,
    photochromaticName: string,
    photochromaticBrand: PhotochromaticBrand;
    photochromaticGeneration: string;
    photochromaticColors: PhotochromaticColor[];
    photochromicSpeed: string;
    photochromaticUvProtection: string;
    photochromaticBlueLightFilter: BlueLightFilter;
    photochromaticFeatures: string[];
    photochromaticPolarized: boolean;

}

export type PhotochromaticName = keyof typeof PHOTOCHROMATIC_LENSES_CATALOG
