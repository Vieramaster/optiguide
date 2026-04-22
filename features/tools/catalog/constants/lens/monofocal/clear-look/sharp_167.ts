//TYPES
import type { CreateLens, LensBase, LensBaseObject } from "@/features/tools/catalog/types/lens/lens-base"
//DATA
import { LENS_MATERIALS } from "@/features/tools/catalog/data/lens-materials"

//FACTORY

const createSharp167 = (data: CreateLens): LensBase => ({
    company: "ClearLook",
    lens: "monofocal",
    category: "Sharp 1.67",
    lensMaterial: LENS_MATERIALS.RESIN_MR_7,
    lensForm: "asférico",
    surfacing: "digital",
    ...data
})

export const SHARP_167: LensBaseObject = {

    clearlook_sharp167_01: createSharp167({
        lensItemId: "CL_SHARP167_01",
        diam: [70],
        rangeDiopters: [{ minEsf: -17, maxEsf: 14, minCil: -7, maxCil: 7 }],
        range: "lab",
    }),
    clearlook_sharp167_02: createSharp167({
        lensItemId: "CL_SHARP167_02",
        diam: [70],
        rangeDiopters: [{ minEsf: -15, maxEsf: 9, minCil: -7, maxCil: 7 }],
        range: "lab",
    })
}