import type { LensObjectInput } from "../../../../types/companies/companies";




const UNIQUE_DRO: LensObjectInput[] = [
    // orma
    { key: "uniq-orma-base", lens: "uniquedro_organic" },
    { key: "uniq-orma-trea", lens: "uniquedro_organic", treatment: ["TrioEasy"] },
    { key: "uniq-orma-sapp", lens: "uniquedro_organic", treatment: ["CrizalSapphire"] },
    { key: "uniq-orma-fort", lens: "uniquedro_organic", treatment: ["CrizalForte"] },
    { key: "uniq-orma-prev", lens: "uniquedro_organic", treatment: ["CrizalPrevencia"] },

    { key: "uniq-orma-base-accl", lens: "uniquedro_organic" },
    { key: "uniq-orma-trea-accl", lens: "uniquedro_organic", treatment: ["TrioEasy"], photochromatic: "KodakAcclimate" },
    { key: "uniq-orma-sapp-accl", lens: "uniquedro_organic", treatment: ["CrizalSapphire"], photochromatic: "KodakAcclimate" },
    { key: "uniq-orma-fort-accl", lens: "uniquedro_organic", treatment: ["CrizalForte"], photochromatic: "KodakAcclimate" },
    { key: "uniq-orma-prev-accl", lens: "uniquedro_organic", treatment: ["CrizalPrevencia"], photochromatic: "KodakAcclimate" },

    { key: "uniq-orma-base-BUV", lens: "uniquedro_organic" },
    { key: "uniq-orma-trea-BUV", lens: "uniquedro_organic", treatment: ["TrioEasy", "BlueUVCapture"] },
    { key: "uniq-orma-sapp-BUV", lens: "uniquedro_organic", treatment: ["CrizalSapphire", "BlueUVCapture"] },
    { key: "uniq-orma-fort-BUV", lens: "uniquedro_organic", treatment: ["CrizalForte", "BlueUVCapture"] },
    { key: "uniq-orma-prev-BUV", lens: "uniquedro_organic", treatment: ["CrizalPrevencia", "BlueUVCapture"] },

    { key: "uniq-orma-base-trans", lens: "uniquedro_organic" },
    { key: "uniq-orma-trea-trans", lens: "uniquedro_organic", treatment: ["TrioEasy"], photochromatic: "TransitionsGenSColors" },
    { key: "uniq-orma-sapp-trans", lens: "uniquedro_organic", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGenSColors" },
    { key: "uniq-orma-fort-trans", lens: "uniquedro_organic", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSColors" },
    { key: "uniq-orma-prev-trans", lens: "uniquedro_organic", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSColors" },

    { key: "uniq-orma-base-xprio", lens: "uniquedro_organic", treatment: ["Xperio"] },
    { key: "uniq-orma-trea-xprio", lens: "uniquedro_organic", treatment: ["TrioEasy", "Xperio"] },
    { key: "uniq-orma-sapp-xprio", lens: "uniquedro_organic", treatment: ["CrizalSapphire", "Xperio"] },
    { key: "uniq-orma-fort-xprio", lens: "uniquedro_organic", treatment: ["CrizalForte", "Xperio"] },
    { key: "uniq-orma-prev-xprio", lens: "uniquedro_organic", treatment: ["CrizalPrevencia", "Xperio"] },

    // airwear
    { key: "uniq-airw-base", lens: "uniquedro_airwear" },
    { key: "uniq-airw-trea", lens: "uniquedro_airwear", treatment: ["TrioEasy"] },
    { key: "uniq-airw-sapp", lens: "uniquedro_airwear", treatment: ["CrizalSapphire"] },
    { key: "uniq-airw-fort", lens: "uniquedro_airwear", treatment: ["CrizalForte"] },
    { key: "uniq-airw-prev", lens: "uniquedro_airwear", treatment: ["CrizalPrevencia"] },

    { key: "uniq-airw-base-BUV", lens: "uniquedro_airwear" },
    { key: "uniq-airw-trea-BUV", lens: "uniquedro_airwear", treatment: ["TrioEasy", "BlueUVCapture"] },
    { key: "uniq-airw-sapp-BUV", lens: "uniquedro_airwear", treatment: ["CrizalSapphire", "BlueUVCapture"] },
    { key: "uniq-airw-fort-BUV", lens: "uniquedro_airwear", treatment: ["CrizalForte", "BlueUVCapture"] },
    { key: "uniq-airw-prev-BUV", lens: "uniquedro_airwear", treatment: ["CrizalPrevencia", "BlueUVCapture"] },

    { key: "uniq-airw-base-trans", lens: "uniquedro_airwear" },
    { key: "uniq-airw-trea-trans", lens: "uniquedro_airwear", treatment: ["TrioEasy"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "uniq-airw-sapp-trans", lens: "uniquedro_airwear", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "uniq-airw-fort-trans", lens: "uniquedro_airwear", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "uniq-airw-prev-trans", lens: "uniquedro_airwear", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSGreyandBrown" },

    { key: "uniq-airw-base-xprio", lens: "uniquedro_airwear", treatment: ["Xperio"] },
    { key: "uniq-airw-trea-xprio", lens: "uniquedro_airwear", treatment: ["TrioEasy", "Xperio"] },
    { key: "uniq-airw-sapp-xprio", lens: "uniquedro_airwear", treatment: ["CrizalSapphire", "Xperio"] },
    { key: "uniq-airw-fort-xprio", lens: "uniquedro_airwear", treatment: ["CrizalForte", "Xperio"] },
    { key: "uniq-airw-prev-xprio", lens: "uniquedro_airwear", treatment: ["CrizalPrevencia", "Xperio"] },

    // stylis
    { key: "uniq-styl-base-BUV", lens: "uniquedro_stylis" },
    { key: "uniq-styl-trea-BUV", lens: "uniquedro_stylis", treatment: ["TrioEasy", "BlueUVCapture"] },
    { key: "uniq-styl-sapp-BUV", lens: "uniquedro_stylis", treatment: ["CrizalSapphire", "BlueUVCapture"] },
    { key: "uniq-styl-fort-BUV", lens: "uniquedro_stylis", treatment: ["CrizalForte", "BlueUVCapture"] },
    { key: "uniq-styl-prev-BUV", lens: "uniquedro_stylis", treatment: ["CrizalPrevencia", "BlueUVCapture"] },

    { key: "uniq-styl-base-trans", lens: "uniquedro_stylis" },
    { key: "uniq-styl-trea-trans", lens: "uniquedro_stylis", treatment: ["TrioEasy"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "uniq-styl-sapp-trans", lens: "uniquedro_stylis", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "uniq-styl-fort-trans", lens: "uniquedro_stylis", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "uniq-styl-prev-trans", lens: "uniquedro_stylis", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSGreyandBrown" },
];
const PRECISE: LensObjectInput[] = [
    // orma
    { key: "prec-orma-base", lens: "precise_organic" },
    { key: "prec-orma-trea", lens: "precise_organic", treatment: ["TrioEasy"] },
    { key: "prec-orma-sapp", lens: "precise_organic", treatment: ["CrizalSapphire"] },
    { key: "prec-orma-fort", lens: "precise_organic", treatment: ["CrizalForte"] },
    { key: "prec-orma-prev", lens: "precise_organic", treatment: ["CrizalPrevencia"] },

    { key: "prec-orma-base-accl", lens: "precise_organic" },
    { key: "prec-orma-trea-accl", lens: "precise_organic", treatment: ["TrioEasy"], photochromatic: "KodakAcclimate" },
    { key: "prec-orma-sapp-accl", lens: "precise_organic", treatment: ["CrizalSapphire"], photochromatic: "KodakAcclimate" },
    { key: "prec-orma-fort-accl", lens: "precise_organic", treatment: ["CrizalForte"], photochromatic: "KodakAcclimate" },
    { key: "prec-orma-prev-accl", lens: "precise_organic", treatment: ["CrizalPrevencia"], photochromatic: "KodakAcclimate" },

    { key: "prec-orma-base-BUV", lens: "precise_organic" },
    { key: "prec-orma-trea-BUV", lens: "precise_organic", treatment: ["TrioEasy", "BlueUVCapture"] },
    { key: "prec-orma-sapp-BUV", lens: "precise_organic", treatment: ["CrizalSapphire", "BlueUVCapture"] },
    { key: "prec-orma-fort-BUV", lens: "precise_organic", treatment: ["CrizalForte", "BlueUVCapture"] },
    { key: "prec-orma-prev-BUV", lens: "precise_organic", treatment: ["CrizalPrevencia", "BlueUVCapture"] },

    { key: "prec-orma-base-trans", lens: "precise_organic" },
    { key: "prec-orma-trea-trans", lens: "precise_organic", treatment: ["TrioEasy"], photochromatic: "TransitionsGenSColors" },
    { key: "prec-orma-sapp-trans", lens: "precise_organic", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGenSColors" },
    { key: "prec-orma-fort-trans", lens: "precise_organic", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSColors" },
    { key: "prec-orma-prev-trans", lens: "precise_organic", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSColors" },

    { key: "prec-orma-base-xprio", lens: "precise_organic", treatment: ["Xperio"] },
    { key: "prec-orma-trea-xprio", lens: "precise_organic", treatment: ["TrioEasy", "Xperio"] },
    { key: "prec-orma-sapp-xprio", lens: "precise_organic", treatment: ["CrizalSapphire", "Xperio"] },
    { key: "prec-orma-fort-xprio", lens: "precise_organic", treatment: ["CrizalForte", "Xperio"] },
    { key: "prec-orma-prev-xprio", lens: "precise_organic", treatment: ["CrizalPrevencia", "Xperio"] },

    // airwear
    { key: "prec-airw-base", lens: "precise_airwear" },
    { key: "prec-airw-trea", lens: "precise_airwear", treatment: ["TrioEasy"] },
    { key: "prec-airw-sapp", lens: "precise_airwear", treatment: ["CrizalSapphire"] },
    { key: "prec-airw-fort", lens: "precise_airwear", treatment: ["CrizalForte"] },
    { key: "prec-airw-prev", lens: "precise_airwear", treatment: ["CrizalPrevencia"] },

    { key: "prec-airw-base-BUV", lens: "precise_airwear" },
    { key: "prec-airw-trea-BUV", lens: "precise_airwear", treatment: ["TrioEasy", "BlueUVCapture"] },
    { key: "prec-airw-sapp-BUV", lens: "precise_airwear", treatment: ["CrizalSapphire", "BlueUVCapture"] },
    { key: "prec-airw-fort-BUV", lens: "precise_airwear", treatment: ["CrizalForte", "BlueUVCapture"] },
    { key: "prec-airw-prev-BUV", lens: "precise_airwear", treatment: ["CrizalPrevencia", "BlueUVCapture"] },

    { key: "prec-airw-base-trans", lens: "precise_airwear" },
    { key: "prec-airw-trea-trans", lens: "precise_airwear", treatment: ["TrioEasy"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "prec-airw-sapp-trans", lens: "precise_airwear", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "prec-airw-fort-trans", lens: "precise_airwear", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "prec-airw-prev-trans", lens: "precise_airwear", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSGreyandBrown" },

    { key: "prec-airw-base-xprio", lens: "precise_airwear", treatment: ["Xperio"] },
    { key: "prec-airw-trea-xprio", lens: "precise_airwear", treatment: ["TrioEasy", "Xperio"] },
    { key: "prec-airw-sapp-xprio", lens: "precise_airwear", treatment: ["CrizalSapphire", "Xperio"] },
    { key: "prec-airw-fort-xprio", lens: "precise_airwear", treatment: ["CrizalForte", "Xperio"] },
    { key: "prec-airw-prev-xprio", lens: "precise_airwear", treatment: ["CrizalPrevencia", "Xperio"] },

    // stylis
    { key: "prec-styl-base-BUV", lens: "precise_stylis" },
    { key: "prec-styl-trea-BUV", lens: "precise_stylis", treatment: ["TrioEasy", "BlueUVCapture"] },
    { key: "prec-styl-sapp-BUV", lens: "precise_stylis", treatment: ["CrizalSapphire", "BlueUVCapture"] },
    { key: "prec-styl-fort-BUV", lens: "precise_stylis", treatment: ["CrizalForte", "BlueUVCapture"] },
    { key: "prec-styl-prev-BUV", lens: "precise_stylis", treatment: ["CrizalPrevencia", "BlueUVCapture"] },

    { key: "prec-styl-base-trans", lens: "precise_stylis" },
    { key: "prec-styl-trea-trans", lens: "precise_stylis", treatment: ["TrioEasy"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "prec-styl-sapp-trans", lens: "precise_stylis", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "prec-styl-fort-trans", lens: "precise_stylis", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "prec-styl-prev-trans", lens: "precise_stylis", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSGreyandBrown" },
];
const PROLINE: LensObjectInput[] = [

    //orma
    { key: "prol-orm1-base", lens: "proline_organic_01" },
    { key: "prol-orm1-clea", lens: "proline_organic_01", treatment: ["ClearLook"] },
    { key: "prol-orm1-clsp", lens: "proline_organic_01", treatment: ["ClearLookSupra"] },

    { key: "prol-orm2-base", lens: "proline_organic_02" },
    { key: "prol-orm2-clea", lens: "proline_organic_02", treatment: ["ClearLook"] },
    { key: "prol-orm2-clsp", lens: "proline_organic_02", treatment: ["ClearLookSupra"] },

    { key: "prol-orm2-base-trans", lens: "proline_organic_02", photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "prol-orm2-clea-trans", lens: "proline_organic_02", treatment: ["ClearLook"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "prol-orm2-clsp-trans", lens: "proline_organic_02", treatment: ["ClearLookSupra"], photochromatic: "TransitionsGenSGreyandBrown" },

    { key: "prol-orm2-base-accl", lens: "proline_organic_02", photochromatic: "KodakAcclimate" },
    { key: "prol-orm2-clea-accl", lens: "proline_organic_02", treatment: ["ClearLook"], photochromatic: "KodakAcclimate" },
    { key: "prol-orm2-clsp-accl", lens: "proline_organic_02", treatment: ["ClearLookSupra"], photochromatic: "KodakAcclimate" },

    { key: "prol-orm2-base-bluv", lens: "proline_organic_02", treatment: ["BlueUVCapture"] },
    { key: "prol-orm2-clea-bluv", lens: "proline_organic_02", treatment: ["ClearLook", "BlueUVCapture"] },
    { key: "prol-orm2-clsp-bluv", lens: "proline_organic_02", treatment: ["ClearLookSupra", "BlueUVCapture"] },

    //airwear
    { key: "prol-airw-base", lens: "proline_airwear" },
    { key: "prol-airw-clea", lens: "proline_airwear", treatment: ["ClearLook"] },
    { key: "prol-airw-clsp", lens: "proline_airwear", treatment: ["ClearLookSupra"] },

    { key: "prol-airw-base-trans", lens: "proline_airwear", photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "prol-airw-clea-trans", lens: "proline_airwear", treatment: ["ClearLook"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "prol-airw-clsp-trans", lens: "proline_airwear", treatment: ["ClearLookSupra"], photochromatic: "TransitionsGenSGreyandBrown" },

    { key: "prol-airw-base-bluv", lens: "proline_airwear", treatment: ["BlueUVCapture"] },
    { key: "prol-airw-clea-bluv", lens: "proline_airwear", treatment: ["ClearLook", "BlueUVCapture"] },
    { key: "prol-airw-clsp-bluv", lens: "proline_airwear", treatment: ["ClearLookSupra", "BlueUVCapture"] },

    //stylis
    { key: "prol-styl-base", lens: "proline_stylis" },
    { key: "prol-styl-clea", lens: "proline_stylis", treatment: ["ClearLook"] },
    { key: "prol-styl-clsp", lens: "proline_stylis", treatment: ["ClearLookSupra"] },

    { key: "prol-styl-base-trans", lens: "proline_stylis", photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "prol-styl-clea-trans", lens: "proline_stylis", treatment: ["ClearLook"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "prol-styl-clsp-trans", lens: "proline_stylis", treatment: ["ClearLookSupra"], photochromatic: "TransitionsGenSGreyandBrown" },

    { key: "prol-styl-base-bluv", lens: "proline_stylis", treatment: ["BlueUVCapture"] },
    { key: "prol-styl-clea-bluv", lens: "proline_stylis", treatment: ["ClearLook", "BlueUVCapture"] },
    { key: "prol-styl-clsp-bluv", lens: "proline_stylis", treatment: ["ClearLookSupra", "BlueUVCapture"] },

    //Space Plus
    { key: "spac-orm-base", lens: "proline_organic_03" },
    { key: "spac-orm-trio", lens: "proline_organic_03", treatment: ["TrioCleanblue"] },
    { key: "spac-orm-sapp", lens: "proline_organic_03", treatment: ["CrizalSapphire"] },
    { key: "spac-orm-fort", lens: "proline_organic_03", treatment: ["CrizalForte"] },
    { key: "spac-orm-prev", lens: "proline_organic_03", treatment: ["CrizalPrevencia"] },

    { key: "spac-orm-base-trans", lens: "proline_organic_03", photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "spac-orm-trio-trans", lens: "proline_organic_03", treatment: ["TrioCleanblue"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "spac-orm-sapp-trans", lens: "proline_organic_03", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "spac-orm-fort-trans", lens: "proline_organic_03", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "spac-orm-prev-trans", lens: "proline_organic_03", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSGreyandBrown" },

    { key: "spac-orm-base-accl", lens: "proline_organic_03", photochromatic: "KodakAcclimate" },
    { key: "spac-orm-trio-accl", lens: "proline_organic_03", treatment: ["TrioCleanblue"], photochromatic: "KodakAcclimate" },
    { key: "spac-orm-sapp-accl", lens: "proline_organic_03", treatment: ["CrizalSapphire"], photochromatic: "KodakAcclimate" },
    { key: "spac-orm-fort-accl", lens: "proline_organic_03", treatment: ["CrizalForte"], photochromatic: "KodakAcclimate" },
    { key: "spac-orm-prev-accl", lens: "proline_organic_03", treatment: ["CrizalPrevencia"], photochromatic: "KodakAcclimate" },

];

export const TECNI_KODAK_PROGRESSIVE: LensObjectInput[] = [
    ...PRECISE,
    ...UNIQUE_DRO,
    ...PROLINE
]