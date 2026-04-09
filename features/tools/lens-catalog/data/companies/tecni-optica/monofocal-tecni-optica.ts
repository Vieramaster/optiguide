import { LensArrayCatalog } from "../../../types/lens/optica-company";

export const MONOFOCAL_TECNI_OPTICA: LensArrayCatalog[] = [
  { key: "orma1-base", lens: "orma1" },
  { key: "orma1-midindex", lens: "orma1", treatment: ["MidIndex"] },

  { key: "orma2-clsupra", lens: "orma2", treatment: ["ClearLookSupra"] },
  { key: "orma2-czsapph", lens: "orma2", treatment: ["CrizalSapphire"] },
  { key: "orma2-czrock", lens: "orma2", treatment: ["CrizalRock"] },
  { key: "orma2-czprev", lens: "orma2", treatment: ["CrizalPrevencia"] },

  { key: "orma3-base", lens: "orma3" },
  { key: "orma3-midindex", lens: "orma3", treatment: ["MidIndex"] },

  { key: "orma4-base", lens: "orma4" },
  { key: "orma4-clook", lens: "orma4", treatment: ["ClearLook"] },
  { key: "orma4-clsupra", lens: "orma4", treatment: ["ClearLookSupra"] },
  { key: "orma4-czsapph", lens: "orma4", treatment: ["CrizalSapphire"] },
  { key: "orma4-czforte", lens: "orma4", treatment: ["CrizalForte"] },
  { key: "orma4-czprev", lens: "orma4", treatment: ["CrizalPrevencia"] },

  { key: "orma5-base", lens: "orma5" },
  { key: "orma5-clook", lens: "orma5", treatment: ["ClearLook"] },
  { key: "orma5-clsupra", lens: "orma5", treatment: ["ClearLookSupra"] },

  { key: "orma7-czsapph", lens: "orma7", treatment: ["CrizalSapphire"] },
  { key: "orma7-czforte", lens: "orma7", treatment: ["CrizalForte"] },
  { key: "orma7-czprev", lens: "orma7", treatment: ["CrizalPrevencia"] },
  { key: "orma7-mid-bcut", lens: "orma7", treatment: ["MidIndex", "BlueCut"] },
  {
    key: "orma7-clook-bcut",
    lens: "orma7",
    treatment: ["ClearLook", "BlueCut"],
  },
  {
    key: "orma7-clsupra-bcut",
    lens: "orma7",
    treatment: ["ClearLookSupra", "BlueCut"],
  },

  {
    key: "orma12-trans-grey",
    lens: "orma12",
    photochromatic: "TransitionsGenSGrey",
  },
  {
    key: "orma13-trans-colors",
    lens: "orma13",
    photochromatic: "TransitionsGenSColors",
  },

  { key: "orma15-gen", lens: "orma15", photochromatic: "Generic" },

  { key: "orma18-xperio", lens: "orma18   ", treatment: ["Xperio"] },
  
];
