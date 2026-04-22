//TYPES
import type { CreateLens, LensBaseObject, LensBase } from "@/features/tools/catalog/types/lens/lens-base"
//DATA
import { LENS_MATERIALS } from "@/features/tools/catalog/data/lens-materials"

//FACTORY

const createSharp160 = (data: CreateLens): LensBase => ({

    company: "ClearLook",
    lens: "monofocal",
    lensMaterial: LENS_MATERIALS.RESIN_MR_8,
    category: "Sharp 1.6",
    lensForm: "asférico",
    surfacing: "digital",
    ...data
})

export const SHARP_160: LensBaseObject = {

    clearLook_sharp160_01: createSharp160({
        lensItemId: "CL_SHARP160_01",
        range: "lab",
        diam: [70],
        rangeDiopters: [{ minEsf: -12, maxEsf: 10, minCil: -6, maxCil: 6 }],
    }),

    clearLook_sharp160_02: createSharp160({
        lensItemId: "CL_SHARP160_02",
        range: "stock",
        diam: [70],
        rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -2, maxCil: 2 }],
    }),

    clearLook_sharp160_03: createSharp160({
        lensItemId: "CL_SHARP160_03",
        range: "stock",
        diam: [70],
        rangeDiopters: [{ minEsf: -4, maxEsf: 4, minCil: -2, maxCil: 2 }],
    }),

    clearLook_sharp160_04: createSharp160({
        lensItemId: "CL_SHARP160_04",
        range: "stock",
        diam: [70],
        rangeDiopters: [{ minEsf: 0, maxEsf: 0, minCil: 0, maxCil: 0 }],
    }),

    clearLook_sharp160_05: createSharp160({
        lensItemId: "CL_SHARP160_05",
        range: "ext",
        diam: [70],
        rangeDiopters: [{ minEsf: -6, maxEsf: 0, minCil: -4, maxCil: -2.25 }],
    }),

    clearLook_sharp160_06: createSharp160({
        lensItemId: "CL_SHARP160_06",
        range: "ext",
        diam: [70],
        rangeDiopters: [{ minEsf: -6, maxEsf: 0, minCil: -3, maxCil: -2.25 }],
    }),
} 