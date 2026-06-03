
import { LENS_MATERIALS } from "../../../../constants/lens-materials";
import type {
    LensBase,
    LensBaseObject,
    createBifocalProgressive,
} from "../../../../types/domain/lens/lens-base";


export const createPhysio = (data: createBifocalProgressive): LensBase =>
({
    company: "Essilor",
    lens: "progressive",
    lensForm: "esf",
    surfacing: false,
    diam: [70],
    range: "stock",
    ...data,
});



export const PHYSIO: LensBaseObject = {
    physio_organic: createPhysio({
        lensItemId: "ESS_PHYSIO_01",
        category: "Orma Physio 3.0",
        lensMaterial: LENS_MATERIALS.CR_39,
        maxDiopters: [{ min: -10, max: 7 }]
    }),
    physio_airwear: createPhysio({
        lensItemId: "ESS_PHYSIO_02",
        category: "Airwear Physio 3.0",
        lensMaterial: LENS_MATERIALS.POLICARBONATE,
        maxDiopters: [{ min: -10, max: 6 }]
    }),
    physio_stylis: createPhysio({
        lensItemId: "ESS_PHYSIO_03",
        category: "Stylis Physio 3.0",
        lensMaterial: LENS_MATERIALS.RESIN_MR_7,
        maxDiopters: [{ min: -14, max: 9 }]
    }),
}