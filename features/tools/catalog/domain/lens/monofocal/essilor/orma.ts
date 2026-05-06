
import { LENS_MATERIALS } from "@/features/tools/catalog/data/lens-materials";
import type {
  LensBase,
  LensBaseObject,
  CreateLens,
} from "@/features/tools/catalog/types/domain/lens/lens-base";


export const createOrmaLens = (data: CreateLens): LensBase =>
({
  company: "Essilor",
  lens: "monofocal",
  category: "Orma",
  lensMaterial: LENS_MATERIALS.CR_39,
  lensForm: "esf",
  surfacing: "estandar",
  ...data,
})


export const ORMA: LensBaseObject = {
  essilor_orma_01: createOrmaLens({
    lensItemId: "ESS_ORMA_01",
    range: "stock",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -6, maxEsf: 6, minCil: -2, maxCil: 2 }],
  }),

  essilor_orma_02: createOrmaLens({
    lensItemId: "ESS_ORMA_02",
    range: "stock",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -4, maxEsf: 4, minCil: -2, maxCil: 2 }],
  }),

  essilor_orma_03: createOrmaLens({
    lensItemId: "ESS_ORMA_03",
    range: "ext",
    diam: [65, 70],
    rangeDiopters: [
      { minEsf: -4, maxEsf: 4, minCil: -4, maxCil: 4 },
      { minEsf: -8, maxEsf: 4, minCil: 4, maxCil: 4 },
    ],
  }),
  essilor_orma_04: createOrmaLens({
    lensItemId: "ESS_ORMA_04",
    range: "lab",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -14, maxEsf: 13.5, minCil: -6, maxCil: 6 }],
  }),
  essilor_orma_05: createOrmaLens({
    lensItemId: "ESS_ORMA_05",
    range: "lab",
    diam: [68, 65, 70],
    maxDiopters: [{ min: 0, max: 10 }],
  }),
  essilor_orma_06: createOrmaLens({
    lensItemId: "ESS_ORMA_06",
    range: "lab",
    diam: [70],
    rangeDiopters: [{ minEsf: -13, maxEsf: 7, minCil: -6, maxCil: 6 }],
  }),
  essilor_orma_07: createOrmaLens({
    lensItemId: "ESS_ORMA_07",
    range: "lab",
    diam: [70],
    rangeDiopters: [{ minEsf: -12, maxEsf: 9, minCil: -6, maxCil: 6 }],
  }),
  essilor_orma_08: createOrmaLens({
    lensItemId: "ESS_ORMA_08",
    range: "stock",
    diam: [70],
    rangeDiopters: [{ minEsf: -6, maxEsf: 4, minCil: -2, maxCil: 2 }],

  }),
  essilor_orma_09: createOrmaLens({
    lensItemId: "ESS_ORMA_09",
    range: "lab",
    diam: [70],
    rangeDiopters: [{ minEsf: -8, maxEsf: 8, minCil: -5, maxCil: 5 }],
  }),

  essilor_orma_10: createOrmaLens({
    lensItemId: "ESS_ORMA_10",
    range: "stock",
    diam: [70],
    rangeDiopters: [{ minEsf: -5, maxEsf: 7, minCil: -4, maxCil: 4 }],
  }),
  essilor_orma_11: createOrmaLens({
    lensItemId: "ESS_ORMA_11",
    range: "ext",
    diam: [70],
    rangeDiopters: [{ minEsf: -4, maxEsf: 4, minCil: -4, maxCil: 4 }],
  }),
  essilor_orma_12: createOrmaLens({
    lensItemId: "ESS_ORMA_12",
    range: "lab",
    diam: [70],
    rangeDiopters: [{ minEsf: -12, maxEsf: 9, minCil: -6, maxCil: 6 }],
  }),
  essilor_orma_13: createOrmaLens({
    lensItemId: "ESS_ORMA_13",
    range: "lab",
    diam: [70],
    rangeDiopters: [{ minEsf: -8, maxEsf: 8, minCil: -5, maxCil: 5 }],
  }),
  essilor_orma_14: createOrmaLens({
    lensItemId: "ESS_ORMA_14",
    range: "lab",
    diam: [70],
    rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -6, maxCil: 6 }],
  }),
};
