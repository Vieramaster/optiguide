//TYPES
import type { LensBase, LensBaseObject } from "@/features/tools/catalog/types/lens/lens-base"
//DATA
import { POLICARBONATE } from "@/features/tools/catalog/data/lens-materials"

//FACTORY

export const createSharpPoli = (data: Partial<LensBase>): LensBase => ({
    company: "ClearLook",
    lens: "monofocal",
    category: "Sharp Poli ",
    ...POLICARBONATE,
    lensForm: "esférico",
    surfacing: "convencional",
    ...data
})

//CATALOG
export const SHARP_POLI: LensBaseObject = {

    clearLook_policarbonate_01: createSharpPoli({
        lensItemId: "CL_POLI_01",
        range: "lab",
        diam: [70],
        rangeDiopters: [{ minEsf: -13, maxEsf: 11, minCil: -6, maxCil: 6 }],
    })
}

