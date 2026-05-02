
import type {
  LensBase,
  LensBaseObject,
  CreateLens,
} from "@/features/tools/catalog/types/lens/lens-base";
import { LENS_MATERIALS } from "@/features/tools/catalog/data/lens-materials";

export const createPremiumLens = (data: CreateLens): LensBase =>
({
  company: "Essilor",
  lens: "monofocal",
  category: "Premium",
  lensMaterial: LENS_MATERIALS.ULTRA_HIGH_INDEX_RESIN,
  surfacing: "digital",
  lensForm: "asf",

  ...data,
})


export const PREMIUM: LensBaseObject = {
  essilor_premium_eyezen_01: createPremiumLens({
    lensItemId: "ESS_PREMIUM_EYEZEN_01",
    lensName: "Eyezen",
    range: "lab",
    diam: [65],
    rangeDiopters: [{ minEsf: -20, maxEsf: 18, minCil: -8, maxCil: 8 }],
  }),
};
