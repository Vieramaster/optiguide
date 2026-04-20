//TYPES
import type { LensBase, LensBaseObject } from "@/features/tools/catalog/types/lens/lens-base"
//DATA
import { ULTRA_HIGH_INDEX_RESIN } from "@/features/tools/catalog/data/lens-materials"

//FACTORY

const createSharp174 = (data: Partial<LensBase>): LensBase => ({
    company: "ClearLook",
    lens: "monofocal",
    category: "Sharp 1.74",
    ...ULTRA_HIGH_INDEX_RESIN,
    lensForm: "asférico",
    surfacing: "digital",
    range: "lab",
    ...data
})

export const SHARP_174: LensBaseObject = {

    clearlook_sharp174_01: createSharp174({
        lensItemId: "CL_sharp174_01",
        diam: [70],
        rangeDiopters: [{ minEsf: -20, maxEsf: 18, minCil: -8, maxCil: 8 }],
    }),
    clearlook_sharp174_02: createSharp174({
        lensItemId: "CL_sharp174_02",
        diam: [70],
        rangeDiopters: [{ minEsf: -30, maxEsf: -20, minCil: -8, maxCil: 8 }],
    })
}