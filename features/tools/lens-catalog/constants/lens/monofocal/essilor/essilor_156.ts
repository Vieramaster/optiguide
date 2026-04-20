//TYPES
import type { LensBase, LensBaseObject } from "@/features/tools/lens-catalog/types/lens/lens-base"
//DATA
import { MID_INDEX_RESIN } from "@/features/tools/lens-catalog/data/lens-materials"

//FACTORY
export const createEssilor156Lens = (data: Partial<LensBase>): LensBase => ({
    company: "Essilor",
    lens: "monofocal",
    category: "Essilor 1.56",
    ...MID_INDEX_RESIN,
    lensForm: "esférico",
    surfacing: "convencional",
    ...data,

})

//CONSTANT
export const ESSILOR_156: LensBaseObject = {
    essilor_156_01: createEssilor156Lens({
        lensItemId: "ESS_E156_01",
        range: "lab",
        diam: [65, 70],
        maxDiopters: [{ min: 0, max: 10 }],

    }),
    essilor_156_02: createEssilor156Lens({
        lensItemId: "ESS_E156_02",
        range: "stock",
        diam: [65, 70],
        rangeDiopters: [{ minEsf: -6, maxEsf: 6, minCil: -2, maxCil: 2 }],


    })

}