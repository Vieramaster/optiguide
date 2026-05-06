import type { LensObjectInput } from "@/features/tools/catalog/types/companies/companies";



const PHYSIO: LensObjectInput[] = [

    //orma
    { key: "phys-orma-base-forte", lens: "physio_organic", treatment: ["CrizalForte"] },
    { key: "phys-orma-base-shapp", lens: "physio_organic", treatment: ["CrizalSapphire"] },
    { key: "phys-orma-base-preve", lens: "physio_organic", treatment: ["CrizalPrevencia"] },

    { key: "phys-orma-gens-forte", lens: "physio_organic", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSColors" },
    { key: "phys-orma-gens-shapp", lens: "physio_organic", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGenSColors" },
    { key: "phys-orma-gens-preve", lens: "physio_organic", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSColors" },

    { key: "phys-orma-xtrac-forte", lens: "physio_organic", treatment: ["CrizalForte"], photochromatic: "TransitionsXTRActive" },
    { key: "phys-orma-xtrac-shapp", lens: "physio_organic", treatment: ["CrizalSapphire"], photochromatic: "TransitionsXTRActive" },
    { key: "phys-orma-xtrac-preve", lens: "physio_organic", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsXTRActive" },

    { key: "phys-orma-xprio-forte", lens: "physio_organic", treatment: ["CrizalForte", "Xperio"] },
    { key: "phys-orma-xprio-shapp", lens: "physio_organic", treatment: ["CrizalSapphire", "Xperio"] },
    { key: "phys-orma-xprio-preve", lens: "physio_organic", treatment: ["CrizalPrevencia", "Xperio"] },

    //airwear
    { key: "phys-airw-base-forte", lens: "physio_airwear", treatment: ["CrizalForte"] },
    { key: "phys-airw-base-shapp", lens: "physio_airwear", treatment: ["CrizalSapphire"] },
    { key: "phys-airw-base-preve", lens: "physio_airwear", treatment: ["CrizalPrevencia"] },

    { key: "phys-airw-gens-forte", lens: "physio_airwear", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "phys-airw-gens-shapp", lens: "physio_airwear", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "phys-airw-gens-preve", lens: "physio_airwear", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSGreyandBrown" },

    { key: "phys-airw-xprio-forte", lens: "physio_airwear", treatment: ["CrizalForte", "Xperio"] },
    { key: "phys-airw-xprio-shapp", lens: "physio_airwear", treatment: ["CrizalSapphire", "Xperio"] },
    { key: "phys-airw-xprio-preve", lens: "physio_airwear", treatment: ["CrizalPrevencia", "Xperio"] },

    //stylis
    { key: "phys-styl-base-forte", lens: "physio_stylis", treatment: ["CrizalForte"] },
    { key: "phys-styl-base-shapp", lens: "physio_stylis", treatment: ["CrizalSapphire"] },
    { key: "phys-styl-base-preve", lens: "physio_stylis", treatment: ["CrizalPrevencia"] },

    { key: "phys-styl-gens-forte", lens: "physio_stylis", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "phys-styl-gens-shapp", lens: "physio_stylis", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "phys-styl-gens-preve", lens: "physio_stylis", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSGreyandBrown" },

    { key: "phys-styl-xprio-forte", lens: "physio_stylis", treatment: ["CrizalForte", "Xperio"] },
    { key: "phys-styl-xprio-shapp", lens: "physio_stylis", treatment: ["CrizalSapphire", "Xperio"] },
    { key: "phys-styl-xprio-preve", lens: "physio_stylis", treatment: ["CrizalPrevencia", "Xperio"] },
]


const CONFORT: LensObjectInput[] = [

    //orma
    { key: "conf-orma-base-forte", lens: "confort_organic", treatment: ["CrizalForte"] },
    { key: "conf-orma-base-shapp", lens: "confort_organic", treatment: ["CrizalSapphire"] },
    { key: "conf-orma-base-preve", lens: "confort_organic", treatment: ["CrizalPrevencia"] },

    { key: "conf-orma-gens-forte", lens: "confort_organic", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSColors" },
    { key: "conf-orma-gens-shapp", lens: "confort_organic", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGenSColors" },
    { key: "conf-orma-gens-preve", lens: "confort_organic", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSColors" },

    { key: "conf-orma-xtrac-forte", lens: "confort_organic", treatment: ["CrizalForte"], photochromatic: "TransitionsXTRActive" },
    { key: "conf-orma-xtrac-shapp", lens: "confort_organic", treatment: ["CrizalSapphire"], photochromatic: "TransitionsXTRActive" },
    { key: "conf-orma-xtrac-preve", lens: "confort_organic", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsXTRActive" },

    { key: "conf-orma-xprio-forte", lens: "confort_organic", treatment: ["CrizalForte", "Xperio"] },
    { key: "conf-orma-xprio-shapp", lens: "confort_organic", treatment: ["CrizalSapphire", "Xperio"] },
    { key: "conf-orma-xprio-preve", lens: "confort_organic", treatment: ["CrizalPrevencia", "Xperio"] },

    //airwear
    { key: "conf-airw-base-forte", lens: "confort_airwear", treatment: ["CrizalForte"] },
    { key: "conf-airw-base-shapp", lens: "confort_airwear", treatment: ["CrizalSapphire"] },
    { key: "conf-airw-base-preve", lens: "confort_airwear", treatment: ["CrizalPrevencia"] },

    { key: "conf-airw-gens-forte", lens: "confort_airwear", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "conf-airw-gens-shapp", lens: "confort_airwear", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "conf-airw-gens-preve", lens: "confort_airwear", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSGreyandBrown" },

    { key: "conf-airw-xprio-forte", lens: "confort_airwear", treatment: ["CrizalForte", "Xperio"] },
    { key: "conf-airw-xprio-shapp", lens: "confort_airwear", treatment: ["CrizalSapphire", "Xperio"] },
    { key: "conf-airw-xprio-preve", lens: "confort_airwear", treatment: ["CrizalPrevencia", "Xperio"] },

    //stylis
    { key: "conf-styl-base-forte", lens: "confort_stylis", treatment: ["CrizalForte"] },
    { key: "conf-styl-base-shapp", lens: "confort_stylis", treatment: ["CrizalSapphire"] },
    { key: "conf-styl-base-preve", lens: "confort_stylis", treatment: ["CrizalPrevencia"] },

    { key: "conf-styl-gens-forte", lens: "confort_stylis", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "conf-styl-gens-shapp", lens: "confort_stylis", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGenSGreyandBrown" },
    { key: "conf-styl-gens-preve", lens: "confort_stylis", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSGreyandBrown" },

    { key: "conf-styl-xprio-forte", lens: "confort_stylis", treatment: ["CrizalForte", "Xperio"] },
    { key: "conf-styl-xprio-shapp", lens: "confort_stylis", treatment: ["CrizalSapphire", "Xperio"] },
    { key: "conf-styl-xprio-preve", lens: "confort_stylis", treatment: ["CrizalPrevencia", "Xperio"] },
]

const LIBERTY: LensObjectInput[] = [
    //orma
    { key: "libe-orma-base-forte", lens: "liberty_organic", treatment: ["CrizalForte"] },
    { key: "libe-orma-base-shapp", lens: "liberty_organic", treatment: ["CrizalSapphire"] },
    { key: "libe-orma-base-preve", lens: "liberty_organic", treatment: ["CrizalPrevencia"] },

    { key: "libe-orma-gens-forte", lens: "liberty_organic", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSColors" },
    { key: "libe-orma-gens-shapp", lens: "liberty_organic", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGenSColors" },
    { key: "libe-orma-gens-preve", lens: "liberty_organic", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSColors" },

    { key: "libe-orma-xprio-forte", lens: "liberty_organic", treatment: ["CrizalForte", "Xperio"] },
    { key: "libe-orma-xprio-shapp", lens: "liberty_organic", treatment: ["CrizalSapphire", "Xperio"] },
    { key: "libe-orma-xprio-preve", lens: "liberty_organic", treatment: ["CrizalPrevencia", "Xperio"] },
]


export const TECNI_VARILUX_PROGRESSIVE: LensObjectInput[] = [
    ...PHYSIO,
    ...CONFORT,
    ...LIBERTY
];