
import { LENS_MATERIALS } from "@/features/tools/catalog/data/lens-materials";
//==================TYPES=================/
import type {
  LensBase,
  LensBaseObject,
  CreateLens,
} from "@/features/tools/catalog/types/lens/lens-base";

//==================FACTORY=================/

export const createOrmixLens = (data: CreateLens) :LensBase=>
  ({
    company: "Essilor",
    lens: "monofocal",
    category: "Ormix",
    lensMaterial: LENS_MATERIALS.RESIN_MR_8,
    lensForm: "esférico",
    surfacing: "convencional",
    ...data,
  }) 

//==================CATALOG=================/

export const ORMIX :LensBaseObject= {
  essilor_ormix_01: createOrmixLens({
    lensItemId: "ESS_ORMIX_01",
    range: "ext",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -6, maxEsf: 4, minCil: -2, maxCil: 2 }],
  }),
  essilor_ormix_02: createOrmixLens({
    lensItemId: "ESS_ORMIX_02",
    range: "ext",
    diam: [65, 70],
    rangeDiopters: [
      { minEsf: -8, maxEsf: -6.25, minCil: -2, maxCil: 2 },
      { minEsf: -4, maxEsf: 4, minCil: -4, maxCil: 4 },
    ],
  }),

  essilor_ormix_03: createOrmixLens({
    lensItemId: "ESS_ORMIX_03",
    range: "ext",
    diam: [65, 70],
    rangeDiopters: [
      { minEsf: 4.25, maxEsf: 6, minCil: -2, maxCil: 2 },
      { minEsf: -10, maxEsf: -6.75, minCil: 2, maxCil: 2 },
    ],
  }),

  essilor_ormix_04: createOrmixLens({
    lensItemId: "ESS_ORMIX_04",
    range: "lab",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -11, maxEsf: 11, minCil: -6, maxCil: 6 }],
  }),

  essilor_ormix_05: createOrmixLens({
    lensItemId: "ESS_ORMIX_05",
    range: "ext",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -4, maxEsf: 4, minCil: -4, maxCil: 4 }],
  }),
};
