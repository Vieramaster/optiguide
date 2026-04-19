import type { LensBaseObject } from "../../../types/lens/lens-base";

export const KODAK_MONOFOCAL_CATALOG: LensBaseObject = {
    kodak1: {
        lensItemId: "k1",
        lens: "monofocal",
        category: "Kodak 1.56",
        company: "Kodak",
        range: "stock",
        diam: [70],
        rangeDiopters: [{ minEsf: -4, maxEsf: 4, minCil: -2, maxCil: 2 }],
        lensMaterial: { name: "NK-55", type: "Resina de medio índice", index: 1.56 },
        lensForm: "esférico",
        surfacing: "convencional"
    },
    kodak2: {
        lensItemId: "k2",
        lens: "monofocal",
        category: "Kodak 1.56",
        company: "Kodak",
        range: "EXT",
        diam: [70],
        rangeDiopters: [
            { minEsf: -4, maxEsf: 4, minCil: -4, maxCil: -2.25 },
            { minEsf: 4.25, maxEsf: 6, minCil: -4, maxCil: 4 },
            { minEsf: -8, maxEsf: -4.25, minCil: -4, maxCil: 4 },
            { minEsf: -10, maxEsf: -8.25, minCil: -2, maxCil: 2 }
        ],
        lensMaterial: { name: "NK-55", type: "Resina de medio índice", index: 1.56 },
        lensForm: "esférico",
        surfacing: "convencional"
    },
}