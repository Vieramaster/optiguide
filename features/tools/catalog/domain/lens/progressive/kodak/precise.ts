
import { LENS_MATERIALS } from "@/features/tools/catalog/constants/lens-materials";
import type {
    LensBase,
    LensBaseObject,
    createBifocalProgressive,
} from "@/features/tools/catalog/types/domain/lens/lens-base";


export const createPrecise = (data: createBifocalProgressive): LensBase =>
({
    company: "Kodak",
    lens: "progressive",
    lensForm: "esf",
    surfacing: "estandar",
    diam: [70],
    range: "stock",
    ...data,
});



export const PRECISE: LensBaseObject = {
    precise_organic: createPrecise({
        lensItemId: "ESS_PRECISE_01",
        category: "Orma Precise",
        lensMaterial: LENS_MATERIALS.CR_39,
        rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -6, maxCil: 6 }]
    }),
    precise_airwear: createPrecise({
        lensItemId: "ESS_PRECISE_02",
        category: "Airwear Precise",
        lensMaterial: LENS_MATERIALS.POLICARBONATE,
        rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -6, maxCil: 6 }]
    }),
    precise_stylis: createPrecise({
        lensItemId: "ESS_PRECISE_03",
        category: "Stylis Precise",
        lensMaterial: LENS_MATERIALS.RESIN_MR_7,
        rangeDiopters: [{ minEsf: -11, maxEsf: 8, minCil: -6, maxCil: 6 }]
    }),
}