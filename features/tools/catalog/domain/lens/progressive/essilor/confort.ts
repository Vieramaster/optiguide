
import { LENS_MATERIALS } from "../../../../constants/lens-materials";
import type {
    LensBase,
    LensBaseObject,
    createBifocalProgressive,
} from "../../../../types/domain/lens/lens-base";


export const createConfort = (data: createBifocalProgressive): LensBase =>
({
    company: "Essilor",
    lens: "progressive",
    lensForm: "esf",
    surfacing: "estandar",
    diam: [70],
    range: "stock",
    ...data,
});



export const CONFORT: LensBaseObject = {
    confort_organic: createConfort({
        lensItemId: "ESS_CONFORT_01",
        category: "Orma Confort 3.0",
        lensMaterial: LENS_MATERIALS.CR_39,
        maxDiopters: [{ min: -10, max: 7 }]
    }),
    confort_airwear: createConfort({
        lensItemId: "ESS_CONFORT_02",
        category: "Airwear Confort 3.0",
        lensMaterial: LENS_MATERIALS.POLICARBONATE,
        maxDiopters: [{ min: -10, max: 6 }]
    }),
    confort_stylis: createConfort({
        lensItemId: "ESS_CONFORT_03",
        category: "Stylis Confort 3.0",
        lensMaterial: LENS_MATERIALS.RESIN_MR_7,
        maxDiopters: [{ min: -14, max: 9 }]
    }),
}