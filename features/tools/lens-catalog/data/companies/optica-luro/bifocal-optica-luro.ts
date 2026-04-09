import { LensArrayCatalog } from "../../../types/lens/optica-company";

export const BIFOCAL_CATALOG_OPTICA_LURO: LensArrayCatalog[] = [
  { key: "orma1-base", lens: "orma1" },
  { key: "orma1-midindex", lens: "orma1", treatment: ["MidIndex"] },

  { key: "orma2-clsupra", lens: "orma2", treatment: ["ClearLookSupra"] },
  { key: "orma2-czsapph", lens: "orma2", treatment: ["CrizalSapphire"] },
  { key: "orma2-czrock", lens: "orma2", treatment: ["CrizalRock"] },
  { key: "orma2-czprev", lens: "orma2", treatment: ["CrizalPrevencia"] },
];
