//TYPES
import type { LensBase, LensBaseObject } from "@/features/tools/catalog/types/lens/lens-base"
//DATA
import { RESIN_MR_7 } from "@/features/tools/catalog/data/lens-materials"

//FACTORY
export const createStylisLens = (data: Partial<LensBase>): LensBase => ({
    company: "Essilor",
    lens: "monofocal",
    category: "Stylis",
    ...RESIN_MR_7,
    lensForm: "asférico",
    ...data
})

//CONSTANT
export const STYLIS: LensBaseObject = {

    //EYEZEN
    essilor_ormix_eyezen_01: createStylisLens({
        lensItemId: "ESS_STYLIS_EYE_01",
        lensName: "Eyezen",
        range: "lab",
        diam: [65, 70],
        rangeDiopters: [{ minEsf: -14, maxEsf: 8, minCil: -4, maxCil: 4 }],
        lensTecnologies: ["Eyezen Focus", "Blue UV Capture", "Dual Optimization"],
        surfacing: "digital"
    }),
    essilor_ormix_eyezen_02: createStylisLens({
        lensItemId: "ESS_STYLIS_EYE_02",
        lensName: "Eyezen",
        range: "lab",
        diam: [65],
        rangeDiopters: [{ minEsf: -14, maxEsf: 9, minCil: -6, maxCil: 6 }],
        lensTecnologies: ["Eyezen Focus", "Blue UV Capture", "Dual Optimization"],
        surfacing: "digital"
    })
}