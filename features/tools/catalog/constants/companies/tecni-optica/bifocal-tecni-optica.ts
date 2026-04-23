import { LensArrayCatalog } from "../../../types/lens/optica-company";

export const BIFOCAL_TECNI_OPTICA: LensArrayCatalog[] = [
  { key: "orma1-base", lens: "essilor_orma_01" },
  { key: "orma1-midindex", lens: "essilor_orma_01", treatment: ["MidIndex"] },

  { key: "orma2-clsupra", lens: "essilor_orma_02", treatment: ["ClearLookSupra"] },
  { key: "orma2-czsapph", lens: "essilor_orma_02", treatment: ["CrizalSapphire"] },
  
];
