import { monofocalLenses } from "./lens/monofocal-lenses";
import { lensTreatments } from "./tecnologies/ lens-treatments";
import { photochromaticlenses } from "./tecnologies/photochromatic-lenses";
import type { monofocalCatalogItem } from "@/types/data/tecni-optica-catalog-type";

const { orma1, orma2, orma3, orma4, orma5, orma7, orma8, orma9, orma10, orma11, orma12, orma13, orma14, orma15, orma16, orma17 } = monofocalLenses;

const { MidIndex, ClearLook, ClearLookSupra, CrizalRock, CrizalSapphire, CrizalForte, CrizalPrevencia, SpectrumSky, SpectrumElite, BlueCut, Xperio } = lensTreatments;


const { Generic, TransitionsSignature, TransitionsGen8, TransitionsGenSGrey, TransitionsGenSColors, TransitionsXTRActive } = photochromaticlenses;



export const monofocalCatalog: monofocalCatalogItem[] = [
    {
        lens: orma1
    },
    {
        lens: orma1,
        treatment: [MidIndex]
    },
    {
        lens: orma2,
        treatment: [ClearLookSupra]
    },
    {
        lens: orma2,
        treatment: [CrizalSapphire]
    },
    {
        lens: orma2,
        treatment: [CrizalRock]
    },
    {
        lens: orma2,
        treatment: [CrizalPrevencia]
    },

    {
        lens: orma3,
    },
    {
        lens: orma3,
        treatment: [MidIndex]
    },
    {
        lens: orma4,
    },
    {
        lens: orma4,
        treatment: [ClearLook]
    },
    {
        lens: orma4,
        treatment: [ClearLookSupra]
    },
    {
        lens: orma4,
        treatment: [CrizalSapphire]
    },
    {
        lens: orma4,
        treatment: [CrizalForte]
    },
    {
        lens: orma4,
        treatment: [CrizalPrevencia]
    },
    {
        lens: orma5,
    },
    {
        lens: orma5,
        treatment: [ClearLook]
    },
    {
        lens: orma5,
        treatment: [ClearLookSupra]
    },
    {
        lens: orma7,
        treatment: [CrizalSapphire]
    },
    {
        lens: orma7,
        treatment: [CrizalForte]
    },
    {
        lens: orma7,
        treatment: [CrizalPrevencia]
    },
    {
        lens: orma7,
        treatment: [MidIndex, BlueCut]
    },
    {
        lens: orma7,
        treatment: [ClearLook, BlueCut]
    },
    {
        lens: orma7,
        treatment: [ClearLookSupra, BlueCut]
    },
    {
        lens: orma8,
        treatment: [MidIndex, BlueCut]
    },
    {
        lens: orma8,
        treatment: [ClearLook, BlueCut]
    },
    {
        lens: orma8,
        treatment: [ClearLookSupra, BlueCut]
    },
    {
        lens: orma9,
        treatment: [MidIndex, BlueCut]
    },
    {
        lens: orma9,
        treatment: [ClearLook, BlueCut]
    },
    {
        lens: orma9,
        treatment: [ClearLookSupra, BlueCut]
    },
    {
        lens: orma10,
        treatment: [MidIndex, BlueCut]
    },
    {
        lens: orma10,
        treatment: [ClearLook, BlueCut]
    },
    {
        lens: orma10,
        treatment: [ClearLookSupra, BlueCut]

    },
    {
        lens: orma11,
        treatment: [ClearLookSupra, BlueCut]
    },

    {
        lens: orma12,
        photochromatic: TransitionsGenSGrey
    },
    {
        lens: orma12,
        treatment: [CrizalForte,],
        photochromatic: TransitionsGenSGrey
    },
    {
        lens: orma13,
        photochromatic: TransitionsGenSGrey,

    },
    {
        lens: orma13,
        treatment: [ClearLook],
        photochromatic: TransitionsGenSGrey,

    },
    {
        lens: orma13,
        treatment: [ClearLookSupra],
        photochromatic: TransitionsGenSGrey,

    },
    {
        lens: orma13,
        treatment: [CrizalSapphire],
        photochromatic: TransitionsGenSGrey,

    },
    {
        lens: orma13,
        treatment: [CrizalForte,],
        photochromatic: TransitionsGenSGrey,

    },
    {
        lens: orma13,
        treatment: [CrizalPrevencia],
        photochromatic: TransitionsGenSGrey,

    },
    {
        lens: orma13,
        photochromatic: TransitionsGenSColors,

    },
    {
        lens: orma13,
        treatment: [ClearLook],
        photochromatic: TransitionsGenSColors,

    },
    {
        lens: orma13,
        treatment: [ClearLookSupra],
        photochromatic: TransitionsGenSColors,

    }, {
        lens: orma13,
        treatment: [CrizalSapphire],
        photochromatic: TransitionsGenSColors,

    }, {
        lens: orma13,
        treatment: [CrizalForte,],
        photochromatic: TransitionsGenSColors,

    },
    {
        lens: orma13,
        treatment: [CrizalPrevencia],
        photochromatic: TransitionsGenSColors,

    },
    {
        lens: orma2,
        treatment: [ClearLook],
        photochromatic: Generic,
    },
    {
        lens: orma14,
        treatment: [ClearLook],
        photochromatic: Generic,
    },
    {
        lens: orma15,

        photochromatic: Generic,
    },
    {
        lens: orma15,
        treatment: [ClearLook],
        photochromatic: Generic,
    },
    {
        lens: orma15,
        treatment: [ClearLookSupra],
        photochromatic: Generic,
    },
    {
        lens: orma16,
        treatment: [MidIndex, BlueCut],
        photochromatic: Generic,
    },
    {
        lens: orma17,
        treatment: [Xperio]
    },
    {
        lens: orma17,
        treatment: [Xperio, ClearLook],
    },
    {
        lens: orma17,
        treatment: [Xperio, ClearLookSupra]
    },
    {
        lens: orma17,
        treatment: [Xperio, CrizalSapphire],
    },
    {
        lens: orma17,
        treatment: [Xperio, CrizalForte],
    },
    {
        lens: orma17,
        treatment: [Xperio, CrizalPrevencia],
    },
]
