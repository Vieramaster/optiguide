
import { LENS_MATERIALS } from "@/features/tools/catalog/data/lens-materials";
import type {
    LensBase,
    LensBaseObject,
    createBifocalProgressive,
} from "@/features/tools/catalog/types/domain/lens/lens-base";


export const createXRDesing = (data: createBifocalProgressive): LensBase =>
({
    company: "Essilor",
    lens: "progressive",
    lensForm: "esf",
    surfacing: "estandar",
    diam: [70],
    range: "stock",
    ...data,
});



export const XR_DESING: LensBaseObject = {
    xrdesing_organic_01: createXRDesing({
        lensItemId: "ESS_DESING_01",
        category: "Orma XR Desing 3.0",
        lensMaterial: LENS_MATERIALS.CR_39,
        rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -6, maxCil: 6 }]
    }),
    xrdesing_organic_02: createXRDesing({
        lensItemId: "ESS_DESING_01",
        category: "Orma XR Desing 3.0",
        lensMaterial: LENS_MATERIALS.CR_39,
        rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -4, maxCil: 4 }]
    }),
    xrdesing_airwear: createXRDesing({
        lensItemId: "ESS_DESING_02",
        category: "Airwear XR Desing 3.0",
        lensMaterial: LENS_MATERIALS.POLICARBONATE,
        rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -6, maxCil: 6 }]
    }),
    xrdesing_stylis: createXRDesing({
        lensItemId: "ESS_DESING_03",
        category: "Stylis XR Desing 3.0",
        lensMaterial: LENS_MATERIALS.RESIN_MR_7,
        rangeDiopters: [{ minEsf: -12, maxEsf: 9, minCil: -6, maxCil: 6 }]
    }),
}