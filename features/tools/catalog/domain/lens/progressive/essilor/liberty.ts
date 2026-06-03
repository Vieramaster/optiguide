
import { LENS_MATERIALS } from "../../../../constants/lens-materials";
import type {
    LensBase,
    LensBaseObject,
    createBifocalProgressive,
} from "../../../../types/domain/lens/lens-base";


export const createLibertyOrma = (data: createBifocalProgressive): LensBase =>
({
    company: "Essilor",
    lens: "progressive",
    lensForm: "esf",
    surfacing: false,
    diam: [70],
    range: "stock",
    ...data,
});



export const LIBERTY: LensBaseObject = {
    liberty_organic: createLibertyOrma({
        lensItemId: "ESS_LIBERTY_01",
        category: "Liberty 3.0",
        lensMaterial: LENS_MATERIALS.CR_39,
        maxDiopters: [{ min: -10, max: 7 }]
    }),
}