import { LENS_MATERIALS } from "../../../constants/lens-materials";
import type {
    LensBaseObject,
    LensBase,
    createBifocalProgressive
} from "../../../types/domain/lens/lens-base";

export const createBifocal = (data: createBifocalProgressive): LensBase =>
({
    company: "Essilor",
    lens: "bifocal",
    lensForm: "esf",
    surfacing: false,
    diam: [70],
    range: "stock",
    ...data,
})
export const BIFOCAL_ORGANIC: LensBaseObject = {

    flatTop_organic_01: createBifocal({
        lensItemId: "ESS_FLATORG_01",
        category: "Flat Top",
        lensMaterial: LENS_MATERIALS.CR_39,
        rangeDiopters: [{ minEsf: -8, maxEsf: +5.50, minCil: -6, maxCil: +6 }],
        add: { min: 1, max: 4 }
    }),
    flatTop_organic_02: createBifocal({
        category: "Flat Top",
        lensItemId: "ESS_FLATORG_02",
        lensMaterial: LENS_MATERIALS.CR_39,
        rangeDiopters: [{ minEsf: -5, maxEsf: +6.25, minCil: -6, maxCil: +6 }],

        add: { min: 1, max: 3 }
    }),
    flatTop_organic_03: createBifocal({
        lensItemId: "ESS_FLATORG_03",
        category: "Flat Top",
        lensMaterial: LENS_MATERIALS.CR_39,
        rangeDiopters: [{ minEsf: -6.5, maxEsf: +6.5, minCil: -6, maxCil: +6 }],
        add: { min: 1, max: 3 }
    }),
    flatTop_organic_04: createBifocal({
        lensItemId: "ESS_FLATORG_04",
        category: "Flat Top",
        lensMaterial: LENS_MATERIALS.CR_39,
        rangeDiopters: [{ minEsf: -6, maxEsf: +5.75, minCil: -6, maxCil: +6 }],
        add: { min: 1, max: 3 }
    }),
}

export const BIFOCAL_KRIPTOCK: LensBaseObject = {
    kriptock_organic_01: createBifocal({
        lensItemId: "ESS_FLATORG_04",
        category: "Kriptock",
        lensMaterial: LENS_MATERIALS.CR_39,
        rangeDiopters: [{ minEsf: -8.25, maxEsf: +5.50, minCil: -6, maxCil: +6 }],
        add: { min: 1, max: 3 }
    })

}

export const BIFOCAL_POLICARBONATE: LensBaseObject = {

    flatTop_Policarbonate_01: createBifocal({

        lensItemId: "ESS_FLATPOLI_01",
        category: "Flat Top poli",
        lensMaterial: LENS_MATERIALS.POLICARBONATE,
        rangeDiopters: [{ minEsf: -8, maxEsf: +7.25, minCil: -6, maxCil: +6 }],
        add: { min: 1, max: 3 }
    }),
    flatTop_Policarbonate_02: createBifocal({
        lensItemId: "ESS_FLATPOLI_21",
        category: "Flat Top poli",
        lensMaterial: LENS_MATERIALS.POLICARBONATE,
        rangeDiopters: [{ minEsf: -12, maxEsf: +7, minCil: -6, maxCil: +6 }],
        add: { min: 1, max: 3 }
    })
}
