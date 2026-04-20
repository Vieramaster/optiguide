//TYPES
import type { LensBase, LensBaseObject } from "@/features/tools/catalog/types/lens/lens-base"
//DATA
import { MID_INDEX_RESIN } from "@/features/tools/catalog/data/lens-materials"

export const createEvoClearDigital = (data: Partial<LensBase>): LensBase => ({
    company: "Kodak",
    lens: "monofocal",
    category: "EvoClear Digital 1.56",
    ...MID_INDEX_RESIN,
    lensForm: "asférico",
    surfacing: "digital",
    ...data,
})

export const EVOCLEAR_DIGITAL: LensBaseObject = {

    kodak_evoclear_digital_1: createEvoClearDigital({
        lensItemId: "kod_evoclear_1",
        range: "stock",
        diam: [70],
        rangeDiopters: [{ minEsf: -4, maxEsf: 4, minCil: -2, maxCil: 2 }],

    }),
    kodak_evoclear_digital_2: createEvoClearDigital({
        lensItemId: "kod_evoclear_2",
        range: "ext",
        diam: [70],
        rangeDiopters: [
            { minEsf: -4, maxEsf: 4, minCil: -4, maxCil: -2.25 },
            { minEsf: 4.25, maxEsf: 6, minCil: -4, maxCil: 4 },
            { minEsf: -8, maxEsf: -4.25, minCil: -4, maxCil: 4 },
            { minEsf: -10, maxEsf: -8.25, minCil: -2, maxCil: 2 }
        ],
    }
    )

}
