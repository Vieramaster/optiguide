import type { CreateLensMaterial } from "../types/lens/lens-base";


export const CR_39: CreateLensMaterial = {
    lensMaterial: {
        name: "CR-39",
        type: "resina orgánica estándar",
        index: 1.5,
    }
};
export const MID_INDEX_RESIN: CreateLensMaterial = {
    lensMaterial: {
        name: "Orgánico 1.56",
        type: "resina de medio índice",
        index: 1.56

    }
}

export const POLICARBONATE: CreateLensMaterial = {
    lensMaterial: {
        name: "policarbonato",
        type: "policarbonato",
        index: 1.59,

    }
};

export const RESIN_MR_8: CreateLensMaterial = {
    lensMaterial: {
        name: "MR-8",
        type: "thiourethane",
        index: 1.6,

    }
};

export const RESIN_MR_7: CreateLensMaterial = {
    lensMaterial: {
        name: "MR-7",
        type: "thiourethane",
        index: 1.67
    }

}

export const ULTRA_HIGH_INDEX_RESIN: CreateLensMaterial = {
    lensMaterial: {
        name: "MR-174",
        type: "resina de ultra alto índice",
        index: 1.74,
    }
}
