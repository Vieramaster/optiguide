
import { LENS_MATERIALS } from "../../../../constants/lens-materials";
import type {
    LensBase,
    LensBaseObject,
    createBifocalProgressive,
} from "../../../../types/domain/lens/lens-base";


export const createXRDesign = (data: createBifocalProgressive): LensBase =>
({
    company: "Essilor",
    lens: "progressive",
    lensForm: "esf",
    surfacing: false,
    diam: [70],
    range: "stock",
    ...data,
});



export const XR_DESIGN: LensBaseObject = {
    xrdesign_organic_01: createXRDesign({
        lensItemId: "ESS_DESIGN_01",
        category: "Orma XR Design 3.0",
        lensMaterial: LENS_MATERIALS.CR_39,
        rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -6, maxCil: 6 }]
    }),
    xrdesign_organic_02: createXRDesign({
        lensItemId: "ESS_DESIGN_01",
        category: "Orma XR Design 3.0",
        lensMaterial: LENS_MATERIALS.CR_39,
        rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -4, maxCil: 4 }]
    }),
    xrdesign_airwear: createXRDesign({
        lensItemId: "ESS_DESIGN_02",
        category: "Airwear XR Design 3.0",
        lensMaterial: LENS_MATERIALS.POLICARBONATE,
        rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -6, maxCil: 6 }]
    }),
    xrdesign_stylis: createXRDesign({
        lensItemId: "ESS_DESIGN_03",
        category: "Stylis XR Design 3.0",
        lensMaterial: LENS_MATERIALS.RESIN_MR_7,
        rangeDiopters: [{ minEsf: -12, maxEsf: 9, minCil: -6, maxCil: 6 }]
    }),
}