import { photochromaticlensesType } from "@/types/data/photochromatic-lenses-type";

export const photochromaticlenses: photochromaticlensesType = {
  Generic: {
    id: "G1",
    name: "Genérico",
    brand: "Varios",
    generation: "N/A",
    colors: ["Gris", "Marrón", "Verde"],
    photochromic_speed: "lento a medio",
    UV_protection: "100%",
    blue_light_filter: {
      clear_state: "15%",
      dark_state: "65%"
    },
    features: ["Uso diario", "Protección UVA/UVB"],

    polarized: false
  },
  TransitionsSignature: {
    id: "F1",
    name: "Transitions Signature",
    brand: "Varilux",
    generation: "Signature",
    colors: ["Gris", "Marrón", "Verde"],
    photochromic_speed: "Rápido",
    UV_protection: "100%",
    blue_light_filter: {
      clear_state: "20%",
      dark_state: "70%"
    },
    features: ["Uso diario", "Protección UVA/UVB"],

    polarized: false
  },

  TransitionsGen8: {
    id: "F2",
    name: "Transitions Generation 8",
    brand: "Varilux",
    generation: "Gen 8",
    colors: ["Gris", "Marrón", "Verde", "Zafiro", "Ámbar", "Esmeralda", "Rubí", "Jade"],
    photochromic_speed: "Muy rápido (30% más veloz que Signature VII)",
    UV_protection: "100%",
    blue_light_filter: {
      clear_state: "30%",
      dark_state: "82%"
    },
    features: ["Mayor velocidad de activación", "Amplia paleta de colores"],

    polarized: false
  },

  TransitionsGenSGrey: {
    id: "F3",
    name: "Transitions Gen S GRIS",
    brand: "Varilux",
    generation: "Gen S",
    colors: ["gris"],
    photochromic_speed: "Ultra rápido (más veloz que Gen 8)",
    UV_protection: "100%",
    blue_light_filter: {
      clear_state: "32%",
      dark_state: "85%"
    },
    features: ["HD vision", "Protección UVA/UVB total", "8 colores exclusivos"],

    polarized: false
  },
  TransitionsGenSColors: {
    id: "F4",
    name: "Transitions Gen S (todos los colores)",
    brand: "Varilux",
    generation: "Gen S",
    colors: ["Marrón", "Verde", "Zafiro", "Ámbar", "Esmeralda", "Rubí", "Jade"],
    photochromic_speed: "Ultra rápido (más veloz que Gen 8)",
    UV_protection: "100%",
    blue_light_filter: {
      clear_state: "32%",
      dark_state: "85%"
    },
    features: ["HD vision", "Protección UVA/UVB total", "8 colores exclusivos"],

    polarized: false
  },
  TransitionsXTRActive: {
    id: "F5",
    name: "Transitions XTRActive",
    brand: "Varilux",
    generation: "XTRActive",
    colors: ["Gris", "Marrón", "Verde"],
    photochromic_speed: "Rápido",
    UV_protection: "100%",
    blue_light_filter: {
      clear_state: "34%",
      dark_state: "86%"
    },
    features: ["Oscurece detrás del parabrisas", "Mayor protección contra luz intensa"],

    polarized: false
  },

  TransitionsDrivewear: {
    id: "F6",
    name: "Transitions Drivewear",
    brand: "Varilux",
    generation: "Drivewear",
    colors: ["Verde cobre", "Marrón cobre"],
    photochromic_speed: "Adaptación rápida en conducción",
    UV_protection: "100%",
    blue_light_filter: {
      clear_state: "35%",
      dark_state: "90%"
    },
    features: [
      "Polarizados",
      "Diseñados para conducción",
      "Oscurecen detrás del parabrisas",
      "Protección UVA/UVB total"
    ],

    polarized: true
  },

  VitolenSunmatic: {
    id: "V1",
    name: "Vitolen Sunmatic",
    brand: "Vitolen",
    generation: "Sunmatic",
    colors: ["Gris", "Marrón"],
    photochromic_speed: "Rápido",
    UV_protection: "100%",
    blue_light_filter: {
      clear_state: "25%",
      dark_state: "80%"
    },
    features: [
      "Protección UVA/UVB total",
      "Oscurecimiento automático con luz solar",
      "Comodidad para uso diario"
    ],

    polarized: false
  }
};
