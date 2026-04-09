import type { LensTreatment } from "../../types/tecnologies/lens-treatments";

export const TREATMENTS_CATALOG = {
  MidIndex: {
    treatmentItemId: "T2",
    treatmentName: "Mid Index",
    treatmentBrand: "Clear Look",
    treatmentTecnologies: ["Antirreflejo básico"],
    treatmentFeatures: ["antiReflex"],
  },

  ClearLook: {
    treatmentItemId: "T3",
    treatmentName: "Clear Look",
    treatmentBrand: "Clear Look",
    treatmentTecnologies: ["Antirreflejo estándar"],
    treatmentFeatures: ["antiReflex"],
  },

  ClearLookSupra: {
    treatmentItemId: "T4",
    treatmentName: "Clear Look Supra",
    treatmentBrand: "Clear Look",
    treatmentTecnologies: ["Antirreflejo avanzado"],
    treatmentFeatures: ["antiReflex"],
  },

  BlueCut: {
    treatmentItemId: "T5",
    treatmentName: "Blue Cut",
    treatmentBrand: "Clear Look",
    treatmentTecnologies: [],
    treatmentFeatures: ["blueControl"],
  },

  CrizalSapphire: {
    treatmentItemId: "C1",
    treatmentName: "Crizal Sapphire",
    treatmentBrand: "Essilor",
    treatmentTecnologies: [
      "Multi-Angular Technology™",
      "High-Resistance Technology™",
      "E-SPF® UV Protection",
      "High Surface Density™",
      "Pad Control System™",
    ],
    treatmentFeatures: [
      "antiReflex",
      "oleophobicHydrophobic",
      "scratchResistant",
      "antiStatic",
    ],
  },

  CrizalRock: {
    treatmentItemId: "C2",
    treatmentName: "Crizal Rock",
    treatmentBrand: "Essilor",
    treatmentTecnologies: [
      "High-Resistance Technology™",
      "High Surface Density™",
      "E-SPF® UV Protection",
      "Multi-Angular Technology™",
    ],
    treatmentFeatures: [
      "antiReflex",
      "oleophobicHydrophobic",
      "scratchResistant",
      "antiStatic",
    ],
  },

  CrizalPrevencia: {
    treatmentItemId: "C3",
    treatmentName: "Crizal Prevencia",
    treatmentBrand: "Essilor",
    treatmentTecnologies: [
      "Harmful Blue Light Filtration Layer",
      "Multi-Angular Technology™",
      "High-Resistance Technology™",
      "E-SPF® UV Protection",
      "High Surface Density™",
    ],
    treatmentFeatures: [
      "antiReflex",
      "blueControl",
      "oleophobicHydrophobic",
      "scratchResistant",
      "antiStatic",
    ],
  },

  CrizalForte: {
    treatmentItemId: "C4",
    treatmentName: "Crizal Forte",
    treatmentBrand: "Essilor",
    treatmentTecnologies: [
      "High-Resistance Technology™",
      "High Surface Density™",
      "E-SPF® UV Protection",
      "Multi-Angular Technology™",
    ],
    treatmentFeatures: [
      "antiReflex",
      "oleophobicHydrophobic",
      "scratchResistant",
      "antiStatic",
    ],
  },

  SpectrumSky: {
    treatmentItemId: "S1",
    treatmentName: "Spectrum Sky+",
    treatmentBrand: "Vitolen",
    treatmentTecnologies: ["Sky+ Technology™", "Multi-layer AR System™"],
    treatmentFeatures: [
      "antiReflex",
      "oleophobicHydrophobic",
      "scratchResistant",
      "antiStatic",
    ],
  },

  SpectrumElite: {
    treatmentItemId: "S2",
    treatmentName: "Spectrum Elite",
    treatmentBrand: "Vitolen",
    treatmentTecnologies: ["Elite AR Technology™", "High-Density Coating™"],
    treatmentFeatures: [
      "antiReflex",
      "oleophobicHydrophobic",
      "scratchResistant",
      "antiStatic",
    ],
  },

  Xperio: {
    treatmentItemId: "XP1",
    treatmentName: "Xperio pol. gris/verde/cafe",
    treatmentBrand: "Essilor",
    treatmentTecnologies: [
      "Xperio Polarised Technology™",
      "Crizal Sun UV™",
      "Enhanced Colour Perception",
    ],
    treatmentFeatures: ["polarized"],
  },
} as const satisfies Record<string, LensTreatment>