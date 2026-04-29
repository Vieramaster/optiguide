
import { LENS_MATERIALS } from "@/features/tools/catalog/data/lens-materials";
import type {
  LensBase,
  LensBaseObject,
  CreateLens,
} from "@/features/tools/catalog/types/lens/lens-base";


export const createStylisLens = (data: CreateLens) :LensBase =>
  ({
    company: "Essilor",
    lens: "monofocal",
    category: "Stylis",
    lensMaterial: LENS_MATERIALS.RESIN_MR_7,
    lensForm: "asf",
    surfacing: "digital",
    ...data,
  }) 

export const STYLIS: LensBaseObject = {
  //EYEZEN
  essilor_ormix_eyezen_01: createStylisLens({
    lensItemId: "ESS_STYLIS_EYE_01",
    lensName: "Eyezen",
    range: "lab",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -14, maxEsf: 8, minCil: -4, maxCil: 4 }],
    lensTecnologies: ["Eyezen Focus", "Blue UV Capture", "Dual Optimization"],
  }),
  essilor_ormix_eyezen_02: createStylisLens({
    lensItemId: "ESS_STYLIS_EYE_02",
    lensName: "Eyezen",
    range: "lab",
    diam: [65],
    rangeDiopters: [{ minEsf: -14, maxEsf: 9, minCil: -6, maxCil: 6 }],
    lensTecnologies: ["Eyezen Focus", "Blue UV Capture", "Dual Optimization"],
  }),
};
