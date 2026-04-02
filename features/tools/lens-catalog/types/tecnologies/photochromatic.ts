import { PHOTOCHROMATIC_LENSES_CATALOG } from "../../data/tecnologies/photochromatic";
export type PhotochromaticBrand = "Varilux" | "Varios" | "Vitolen";
export type PhotochromaticColor = "Gris" | "Marrón" | "Verde" | "Zafiro" | "Ámbar" | "Esmeralda" | "Rubí" | "Jade" | "Verde cobre" | "Marrón cobre";
export type BlueLightFilter = {
    clear_state: string;
    dark_state: string;
}
export type PhotochromaticLens = {
    id: string,
    name: string,
    brand: PhotochromaticBrand;
    generation: string;
    colors: PhotochromaticColor[];
    photochromic_speed: string;
    UV_protection: string;
    blue_light_filter: BlueLightFilter;
    features: string[];
    polarized: boolean;

}

export type PhotochromaticName = keyof typeof PHOTOCHROMATIC_LENSES_CATALOG
