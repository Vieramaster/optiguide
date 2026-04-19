
import { PhotochromaticLens } from "../../types/tecnologies/photochromatic";

export const PHOTOCHROMATIC_LENSES_CATALOG = {
  Generic: {
    photochromaticItemId: "G1",
    photochromaticName: "Genérico",
    photochromaticBrand: "Varios",
    photochromaticGeneration: "N/A",
    photochromaticColors: ["Gris", "Marrón", "Verde"],
    photochromicSpeed: "lento a medio",
    photochromaticUvProtection: "100%",
    photochromaticBlueLightFilter: {
      clearState: "15%",
      darkState: "65%"
    },
    photochromaticFeatures: ["Uso diario", "Protección UVA/UVB"],

    photochromaticPolarized: false
  },
  TransitionsSignature: {
    photochromaticItemId: "F1",
    photochromaticName: "Transitions Signature",
    photochromaticBrand: "Varilux",
    photochromaticGeneration: "Signature",
    photochromaticColors: ["Gris", "Marrón", "Verde"],
    photochromicSpeed: "Rápido",
    photochromaticUvProtection: "100%",
    photochromaticBlueLightFilter: {
      clearState: "20%",
      darkState: "70%"
    },
    photochromaticFeatures: ["Uso diario", "Protección UVA/UVB"],

    photochromaticPolarized: false
  },

  TransitionsGen8: {
    photochromaticItemId: "F2",
    photochromaticName: "Transitions Generation 8",
    photochromaticBrand: "Varilux",
    photochromaticGeneration: "Gen 8",
    photochromaticColors: ["Gris", "Marrón", "Verde", "Zafiro", "Ámbar", "Esmeralda", "Rubí", "Jade"],
    photochromicSpeed: "Muy rápido (30% más veloz que Signature VII)",
    photochromaticUvProtection: "100%",
    photochromaticBlueLightFilter: {
      clearState: "30%",
      darkState: "82%"
    },
    photochromaticFeatures: ["Mayor velocidad de activación", "Amplia paleta de colores"],

    photochromaticPolarized: false
  },

  TransitionsGenSGrey: {
    photochromaticItemId: "F3",
    photochromaticName: "Transitions Gen S GRIS",
    photochromaticBrand: "Varilux",
    photochromaticGeneration: "Gen S",
    photochromaticColors: ["Gris"],
    photochromicSpeed: "Ultra rápido (más veloz que Gen 8)",
    photochromaticUvProtection: "100%",
    photochromaticBlueLightFilter: {
      clearState: "32%",
      darkState: "85%"
    },
    photochromaticFeatures: ["HD vision", "Protección UVA/UVB total", "8 colores exclusivos"],

    photochromaticPolarized: false
  },
  TransitionsGenSColors: {
    photochromaticItemId: "F4",
    photochromaticName: "Transitions Gen S (todos los colores)",
    photochromaticBrand: "Varilux",
    photochromaticGeneration: "Gen S",
    photochromaticColors: ["Marrón", "Verde", "Zafiro", "Ámbar", "Esmeralda", "Rubí", "Jade"],
    photochromicSpeed: "Ultra rápido (más veloz que Gen 8)",
    photochromaticUvProtection: "100%",
    photochromaticBlueLightFilter: {
      clearState: "32%",
      darkState: "85%"
    },
    photochromaticFeatures: ["HD vision", "Protección UVA/UVB total", "8 colores exclusivos"],

    photochromaticPolarized: false
  },
  TransitionsXTRActive: {
    photochromaticItemId: "F5",
    photochromaticName: "Transitions XTRActive",
    photochromaticBrand: "Varilux",
    photochromaticGeneration: "XTRActive",
    photochromaticColors: ["Gris", "Marrón", "Verde"],
    photochromicSpeed: "Rápido",
    photochromaticUvProtection: "100%",
    photochromaticBlueLightFilter: {
      clearState: "34%",
      darkState: "86%"
    },
    photochromaticFeatures: ["Oscurece detrás del parabrisas", "Mayor protección contra luz intensa"],

    photochromaticPolarized: false
  },

  TransitionsDrivewear: {
    photochromaticItemId: "F6",
    photochromaticName: "Transitions Drivewear",
    photochromaticBrand: "Varilux",
    photochromaticGeneration: "Drivewear",
    photochromaticColors: ["Verde cobre", "Marrón cobre"],
    photochromicSpeed: "Adaptación rápida en conducción",
    photochromaticUvProtection: "100%",
    photochromaticBlueLightFilter: {
      clearState: "35%",
      darkState: "90%"
    },
    photochromaticFeatures: [
      "Polarizados",
      "Diseñados para conducción",
      "Oscurecen detrás del parabrisas",
      "Protección UVA/UVB total"
    ],

    photochromaticPolarized: true
  },

  VitolenSunmatic: {
    photochromaticItemId: "V1",
    photochromaticName: "Vitolen Sunmatic",
    photochromaticBrand: "Vitolen",
    photochromaticGeneration: "Sunmatic",
    photochromaticColors: ["Gris", "Marrón"],
    photochromicSpeed: "Rápido",
    photochromaticUvProtection: "100%",
    photochromaticBlueLightFilter: {
      clearState: "25%",
      darkState: "80%"
    },
    photochromaticFeatures: [
      "Protección UVA/UVB total",
      "Oscurecimiento automático con luz solar",
      "Comodidad para uso diario"
    ],

    photochromaticPolarized: false
  }
} as const satisfies Record<string, PhotochromaticLens>