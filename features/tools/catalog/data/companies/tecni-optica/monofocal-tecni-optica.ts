//=================TYPES=================/
import type { LensInputProduct } from "../../../types/optica-company";

export const MONOFOCAL_TECNI_OPTICA = [
  { key: "orma1-base", lens: "essilor_orma_01" },
  { key: "orma1-midindex", lens: "essilor_orma_01", treatment: ["MidIndex"] },

  {
    key: "orma2-clsupra",
    lens: "essilor_orma_02",
    treatment: ["ClearLookSupra"],
  },
  {
    key: "orma2-czsapph",
    lens: "essilor_orma_02",
    treatment: ["CrizalSapphire"],
  },
  { key: "orma2-czrock", lens: "essilor_orma_02", treatment: ["CrizalRock"] },
  {
    key: "orma2-czprev",
    lens: "essilor_orma_02",
    treatment: ["CrizalPrevencia"],
  },

  { key: "orma3-base", lens: "essilor_orma_03" },
  { key: "orma3-midindex", lens: "essilor_orma_0", treatment: ["MidIndex"] },

  { key: "orma4-base", lens: "essilor_orma_04" },
  { key: "orma4-clook", lens: "essilor_orma_04", treatment: ["ClearLook"] },
  {
    key: "orma4-clsupra",
    lens: "essilor_orma_04",
    treatment: ["ClearLookSupra"],
  },
  {
    key: "orma4-czsapph",
    lens: "essilor_orma_04",
    treatment: ["CrizalSapphire"],
  },
  { key: "orma4-czforte", lens: "essilor_orma_04", treatment: ["CrizalForte"] },
  {
    key: "orma4-czprev",
    lens: "essilor_orma_04",
    treatment: ["CrizalPrevencia"],
  },

  { key: "orma5-base", lens: "essilor_orma_05" },
  { key: "orma5-clook", lens: "essilor_orma_05", treatment: ["ClearLook"] },
  {
    key: "orma5-clsupra",
    lens: "essilor_orma_05",
    treatment: ["ClearLookSupra"],
  },
  {
    key: "orma5-czsapph",
    lens: "essilor_orma_05",
    treatment: ["CrizalSapphire"],
  },
  { key: "orma5-czforte", lens: "essilor_orma_05", treatment: ["CrizalForte"] },
  {
    key: "orma5-czprev",
    lens: "essilor_orma_05",
    treatment: ["CrizalPrevencia"],
  },

  {
    key: "orma7-mid-bcut",
    lens: "essilor_orma_07",
    treatment: ["BlueCut", "MidIndex"],
  },
  {
    key: "orma7-clook-bcut",
    lens: "essilor_orma_07",
    treatment: ["BlueCut", "ClearLook"],
  },
  {
    key: "orma7-clsupra-bcut",
    lens: "essilor_orma_07",
    treatment: ["BlueCut", "ClearLookSupra"],
  },
] satisfies LensInputProduct[];
