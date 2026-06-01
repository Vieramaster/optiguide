
import { LENS_MATERIALS } from "../../../../constants/lens-materials";
import type {
    LensBase,
    LensBaseObject,
    createBifocalProgressive,
} from "../../../../types/domain/lens/lens-base";


export const createProline = (data: createBifocalProgressive): LensBase =>
({
    company: "Kodak",
    lens: "progressive",
    lensForm: "esf",
    surfacing: "estandar",
    diam: [70],
    range: "stock",
    ...data,
});


export const PROLINE: LensBaseObject = {
    proline_organic_01: createProline({
        lensItemId: "ESS_PROLINE_01",
        category: "Orma Proline",
        lensMaterial: LENS_MATERIALS.CR_39,
        rangeDiopters: [{ minEsf: -7, maxEsf: 7, minCil: -6, maxCil: 6 }],
        add: { min: 1, max: 3 }
    }),
    proline_organic_02: createProline({
        lensItemId: "ESS_PROLINE_02",
        category: "Orma Proline Digital",
        lensMaterial: LENS_MATERIALS.CR_39,
        rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -6, maxCil: 6 }]
    }),
    proline_organic_03: createProline({
        lensItemId: "ESS_PROLINE_03",
        category: "Orma Proline Space Plus",
        lensMaterial: LENS_MATERIALS.CR_39,
        rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -6, maxCil: 6 }]
    }),
    proline_airwear: createProline({
        lensItemId: "ESS_PROLINE_04",
        category: "Airwear Proline Digital",
        lensMaterial: LENS_MATERIALS.POLICARBONATE,
        rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -6, maxCil: 6 }]
    }),
    proline_stylis: createProline({
        lensItemId: "ESS_PROLINE_05",
        category: "Stylis Proline Digital",
        lensMaterial: LENS_MATERIALS.RESIN_MR_7,
        rangeDiopters: [{ minEsf: -14, maxEsf: 9, minCil: -6, maxCil: 6 }]
    }),
}