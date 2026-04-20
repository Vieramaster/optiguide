//TYPES 
import type { LensBaseObject, LensBase } from "@/features/tools/lens-catalog/types/lens/lens-base"
//DATA
import { CR_39 } from "@/features/tools/lens-catalog/data/lens-materials"


/** FACTORY*/

export const createOrmaLens = (data: Partial<LensBase>): LensBase => ({
    company: "Essilor",
    lens: "monofocal",
    category: "Orma",
    ...CR_39,
    lensForm: "esférico",
    surfacing: "convencional",
    ...data
})

//CONSTANT
export const ORMA: LensBaseObject = {
    essilor_orma_01: createOrmaLens({
        lensItemId: "ESS_ORM_01",
        range: "stock",
        diam: [65, 70],

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
            { minEsf: -8, maxEsf: 4, minCil: 4, maxCil: 4 }
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
        range: "ext",
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
        diam: [80],
        rangeDiopters: [{ minEsf: -5, maxEsf: 7, minCil: -4, maxCil: 4 }],

    }),
}
