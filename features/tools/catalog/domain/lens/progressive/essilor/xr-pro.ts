
import { LENS_MATERIALS } from "@/features/tools/catalog/constants/lens-materials";
import type {
    LensBase,
    LensBaseObject,
    createBifocalProgressive,
} from "@/features/tools/catalog/types/domain/lens/lens-base";


export const createXRPro = (data: createBifocalProgressive): LensBase =>
({
    company: "Essilor",
    lens: "progressive",
    lensForm: "esf",
    surfacing: "estandar",
    diam: [70],
    range: "stock",
    ...data,
});



export const XR_XRPRO: LensBaseObject = {
    xrpro_organic_01: createXRPro({
        lensItemId: "ESS_XRPRO_01",
        category: "Orma XR Pro 3.0",
        lensMaterial: LENS_MATERIALS.CR_39,
        rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -6, maxCil: 6 }]
    }),
    xrpro_organic_02: createXRPro({
        lensItemId: "ESS_XRPRO_01",
        category: "Orma XR Pro 3.0",
        lensMaterial: LENS_MATERIALS.CR_39,
        rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -4, maxCil: 4 }]
    }),
    xrpro_airwear: createXRPro({
        lensItemId: "ESS_XRPRO_02",
        category: "Airwear XR Pro 3.0",
        lensMaterial: LENS_MATERIALS.POLICARBONATE,
        rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -6, maxCil: 6 }]
    }),
    xrpro_stylis: createXRPro({
        lensItemId: "ESS_XRPRO_03",
        category: "Stylis XR Pro 3.0",
        lensMaterial: LENS_MATERIALS.RESIN_MR_7,
        rangeDiopters: [{ minEsf: -12, maxEsf: 9, minCil: -6, maxCil: 6 }]
    }),
}