//TYPES
import type { LensBase, LensBaseObject } from "@/features/tools/catalog/types/lens/lens-base"
//DATA
import { ULTRA_HIGH_INDEX_RESIN } from "@/features/tools/catalog/data/lens-materials"
//FACTORY
export const createPremiumLens = (data: Partial<LensBase>): LensBase => ({
    company: "Essilor",
    lens: "monofocal",
    category: "Premium",
    ...ULTRA_HIGH_INDEX_RESIN,
    lensForm: "asférico",
    ...data
})


//CONSTANT
export const PREMIUM: LensBaseObject = {
    essilor_premium_eyezen_01: createPremiumLens({
        lensItemId: "ESS_PREMIUM_EYEZEN_01",
        lensName: "Eyezen",
        range: "lab",
        diam: [65],
        rangeDiopters: [{ minEsf: -20, maxEsf: 18, minCil: -8, maxCil: 8 }],
        lensTecnologies: ["Eyezen Focus", "Blue UV Capture", "Dual Optimization"],
    })
}
