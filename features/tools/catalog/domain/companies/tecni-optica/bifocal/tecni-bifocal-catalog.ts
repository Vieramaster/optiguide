import type { LensObjectInput } from "@/features/tools/catalog/types/companies/companies"

export const TECNI_BIFOCAL_CATALOG: LensObjectInput[] = [

  //poli
  { key: "bifo-base-poli", lens: "flatTop_Policarbonate_01" },
  { key: "bifo-clook-poli", lens: "flatTop_Policarbonate_01", treatment: ["ClearLook"] },
  { key: "bifo-base-poli-foto", lens: "flatTop_Policarbonate_02" },
  { key: "bifo-clook-poli-foto", lens: "flatTop_Policarbonate_02", treatment: ["ClearLook"] },

  //organico
  { key: "bifo-base-orga", lens: "flatTop_organic_01" },
  { key: "bifo-clook-orga", lens: "flatTop_organic_01", treatment: ["ClearLook"] },
  { key: "bifo-clspr-orga", lens: "flatTop_organic_01", treatment: ["ClearLookSupra"] },

  { key: "bifo-base-orga-foto", lens: "flatTop_organic_02" },
  { key: "bifo-clook-orga-foto", lens: "flatTop_organic_02", treatment: ["ClearLook"] },

  { key: "bifo-base-orga-bcut", lens: "flatTop_organic_03", treatment: ["BlueCut"] },

  { key: "bifo-base-orga-trans", lens: "flatTop_organic_04", photochromatic: "TransitionsGen8" },
  { key: "bifo-clook-orga-trans", lens: "flatTop_organic_04", treatment: ["ClearLook"], photochromatic: "TransitionsGen8" },
  { key: "bifo-clspr-orga-trans", lens: "flatTop_organic_04", treatment: ["ClearLookSupra"], photochromatic: "TransitionsGen8" },

  { key: "bifo-base-krip", lens: "kriptock_organic_01" },
  { key: "bifo-clook-krip", lens: "kriptock_organic_01", treatment: ["ClearLook"] },
  { key: "bifo-clspr-krip", lens: "kriptock_organic_01", treatment: ["ClearLookSupra"] },
] 