
import { LENS_MATERIALS } from "../../../../constants/lens-materials";
import type {
    LensBase,
    LensBaseObject,
    createBifocalProgressive,
} from "../../../../types/domain/lens/lens-base";


export const createUniqueDro = (data: createBifocalProgressive): LensBase =>
({
    company: "Essilor",
    lens: "progressive",
    lensForm: "esf",
    surfacing: "estandar",
    diam: [70],
    range: "stock",
    ...data,
});



export const UNIQUE_DRO: LensBaseObject = {
    uniquedro_organic: createUniqueDro({
        lensItemId: "ESS_UNIQUEDRO_01",
        category: "Orma Unique dro",
        lensMaterial: LENS_MATERIALS.CR_39,
        rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -6, maxCil: 6 }]
    }),
    uniquedro_airwear: createUniqueDro({
        lensItemId: "ESS_UNIQUEDRO_02",
        category: "Airwear Unique dro",
        lensMaterial: LENS_MATERIALS.POLICARBONATE,
        rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -6, maxCil: 6 }]
    }),
    uniquedro_stylis: createUniqueDro({
        lensItemId: "ESS_UNIQUEDRO_03",
        category: "Stylis Unique dro",
        lensMaterial: LENS_MATERIALS.RESIN_MR_7,
        rangeDiopters: [{ minEsf: -11, maxEsf: 8, minCil: -6, maxCil: 6 }]
    }),
}
