import { MONOFOCALLENSES } from "./lens/monofocal-lenses";
import { lensTreatments } from "./tecnologies/ lens-treatments";
import { photochromaticlenses } from "./tecnologies/photochromatic-lenses";
import type { monofocalCatalogItem } from "@/types/data/tecni-optica-catalog-type";

export const monofocalCatalog: monofocalCatalogItem[] = [
    { id: "orma1-base", lens: MONOFOCALLENSES.orma1 },
    { id: "orma1-midindex", lens: MONOFOCALLENSES.orma1, treatment: [lensTreatments.MidIndex] },
    { id: "orma2-clsupra", lens: MONOFOCALLENSES.orma2, treatment: [lensTreatments.ClearLookSupra] },
    { id: "orma2-czsapph", lens: MONOFOCALLENSES.orma2, treatment: [lensTreatments.CrizalSapphire] },
    { id: "orma2-czrock", lens: MONOFOCALLENSES.orma2, treatment: [lensTreatments.CrizalRock] },
    { id: "orma2-czprev", lens: MONOFOCALLENSES.orma2, treatment: [lensTreatments.CrizalPrevencia] },

    { id: "orma3-base", lens: MONOFOCALLENSES.orma3 },
    { id: "orma3-midindex", lens: MONOFOCALLENSES.orma3, treatment: [lensTreatments.MidIndex] },
    { id: "orma4-base", lens: MONOFOCALLENSES.orma4 },
    { id: "orma4-clook", lens: MONOFOCALLENSES.orma4, treatment: [lensTreatments.ClearLook] },
    { id: "orma4-clsupra", lens: MONOFOCALLENSES.orma4, treatment: [lensTreatments.ClearLookSupra] },
    { id: "orma4-czsapph", lens: MONOFOCALLENSES.orma4, treatment: [lensTreatments.CrizalSapphire] },
    { id: "orma4-czforte", lens: MONOFOCALLENSES.orma4, treatment: [lensTreatments.CrizalForte] },
    { id: "orma4-czprev", lens: MONOFOCALLENSES.orma4, treatment: [lensTreatments.CrizalPrevencia] },

    { id: "orma5-base", lens: MONOFOCALLENSES.orma5 },
    { id: "orma5-clook", lens: MONOFOCALLENSES.orma5, treatment: [lensTreatments.ClearLook] },
    { id: "orma5-clsupra", lens: MONOFOCALLENSES.orma5, treatment: [lensTreatments.ClearLookSupra] },

    { id: "orma7-czsapph", lens: MONOFOCALLENSES.orma7, treatment: [lensTreatments.CrizalSapphire] },
    { id: "orma7-czforte", lens: MONOFOCALLENSES.orma7, treatment: [lensTreatments.CrizalForte] },
    { id: "orma7-czprev", lens: MONOFOCALLENSES.orma7, treatment: [lensTreatments.CrizalPrevencia] },
    { id: "orma7-mid-bcut", lens: MONOFOCALLENSES.orma7, treatment: [lensTreatments.MidIndex, lensTreatments.BlueCut] },
    { id: "orma7-clook-bcut", lens: MONOFOCALLENSES.orma7, treatment: [lensTreatments.ClearLook, lensTreatments.BlueCut] },
    { id: "orma7-clsupra-bcut", lens: MONOFOCALLENSES.orma7, treatment: [lensTreatments.ClearLookSupra, lensTreatments.BlueCut] },

    { id: "orma8-mid-bcut", lens: MONOFOCALLENSES.orma8, treatment: [lensTreatments.MidIndex, lensTreatments.BlueCut] },
    { id: "orma8-clook-bcut", lens: MONOFOCALLENSES.orma8, treatment: [lensTreatments.ClearLook, lensTreatments.BlueCut] },
    { id: "orma8-clsupra-bcut", lens: MONOFOCALLENSES.orma8, treatment: [lensTreatments.ClearLookSupra, lensTreatments.BlueCut] },

    { id: "orma9-mid-bcut", lens: MONOFOCALLENSES.orma9, treatment: [lensTreatments.MidIndex, lensTreatments.BlueCut] },
    { id: "orma9-clook-bcut", lens: MONOFOCALLENSES.orma9, treatment: [lensTreatments.ClearLook, lensTreatments.BlueCut] },
    { id: "orma9-clsupra-bcut", lens: MONOFOCALLENSES.orma9, treatment: [lensTreatments.ClearLookSupra, lensTreatments.BlueCut] },

    { id: "orma10-mid-bcut", lens: MONOFOCALLENSES.orma10, treatment: [lensTreatments.MidIndex, lensTreatments.BlueCut] },
    { id: "orma10-clook-bcut", lens: MONOFOCALLENSES.orma10, treatment: [lensTreatments.ClearLook, lensTreatments.BlueCut] },
    { id: "orma10-clsupra-bcut", lens: MONOFOCALLENSES.orma10, treatment: [lensTreatments.ClearLookSupra, lensTreatments.BlueCut] },

    { id: "orma11-clsupra-bcut", lens: MONOFOCALLENSES.orma11, treatment: [lensTreatments.ClearLookSupra, lensTreatments.BlueCut] },

    { id: "orma12-trans-grey", lens: MONOFOCALLENSES.orma12, photochromatic: photochromaticlenses.TransitionsGenSGrey },
    { id: "orma12-czforte-trans-grey", lens: MONOFOCALLENSES.orma12, treatment: [lensTreatments.CrizalForte], photochromatic: photochromaticlenses.TransitionsGenSGrey },

    { id: "orma13-trans-grey", lens: MONOFOCALLENSES.orma13, photochromatic: photochromaticlenses.TransitionsGenSGrey },
    { id: "orma13-clook-trans-grey", lens: MONOFOCALLENSES.orma13, treatment: [lensTreatments.ClearLook], photochromatic: photochromaticlenses.TransitionsGenSGrey },
    { id: "orma13-clsupra-trans-grey", lens: MONOFOCALLENSES.orma13, treatment: [lensTreatments.ClearLookSupra], photochromatic: photochromaticlenses.TransitionsGenSGrey },
    { id: "orma13-czsapph-trans-grey", lens: MONOFOCALLENSES.orma13, treatment: [lensTreatments.CrizalSapphire], photochromatic: photochromaticlenses.TransitionsGenSGrey },
    { id: "orma13-czforte-trans-grey", lens: MONOFOCALLENSES.orma13, treatment: [lensTreatments.CrizalForte], photochromatic: photochromaticlenses.TransitionsGenSGrey },
    { id: "orma13-czprev-trans-grey", lens: MONOFOCALLENSES.orma13, treatment: [lensTreatments.CrizalPrevencia], photochromatic: photochromaticlenses.TransitionsGenSGrey },

    { id: "orma13-trans-colors", lens: MONOFOCALLENSES.orma13, photochromatic: photochromaticlenses.TransitionsGenSColors },
    { id: "orma13-clook-trans-colors", lens: MONOFOCALLENSES.orma13, treatment: [lensTreatments.ClearLook], photochromatic: photochromaticlenses.TransitionsGenSColors },
    { id: "orma13-clsupra-trans-colors", lens: MONOFOCALLENSES.orma13, treatment: [lensTreatments.ClearLookSupra], photochromatic: photochromaticlenses.TransitionsGenSColors },
    { id: "orma13-czsapph-trans-colors", lens: MONOFOCALLENSES.orma13, treatment: [lensTreatments.CrizalSapphire], photochromatic: photochromaticlenses.TransitionsGenSColors },
    { id: "orma13-czforte-trans-colors", lens: MONOFOCALLENSES.orma13, treatment: [lensTreatments.CrizalForte], photochromatic: photochromaticlenses.TransitionsGenSColors },
    { id: "orma13-czprev-trans-colors", lens: MONOFOCALLENSES.orma13, treatment: [lensTreatments.CrizalPrevencia], photochromatic: photochromaticlenses.TransitionsGenSColors },

    { id: "orma2-clook-gen", lens: MONOFOCALLENSES.orma2, treatment: [lensTreatments.ClearLook], photochromatic: photochromaticlenses.Generic },
    { id: "orma14-clook-gen", lens: MONOFOCALLENSES.orma14, treatment: [lensTreatments.ClearLook], photochromatic: photochromaticlenses.Generic },
    { id: "orma15-gen", lens: MONOFOCALLENSES.orma15, photochromatic: photochromaticlenses.Generic },
    { id: "orma15-clook-gen", lens: MONOFOCALLENSES.orma15, treatment: [lensTreatments.ClearLook], photochromatic: photochromaticlenses.Generic },
    { id: "orma15-clsupra-gen", lens: MONOFOCALLENSES.orma15, treatment: [lensTreatments.ClearLookSupra], photochromatic: photochromaticlenses.Generic },
    { id: "orma16-mid-bcut-gen", lens: MONOFOCALLENSES.orma16, treatment: [lensTreatments.MidIndex, lensTreatments.BlueCut], photochromatic: photochromaticlenses.Generic },

    { id: "orma17-xperio", lens: MONOFOCALLENSES.orma17, treatment: [lensTreatments.Xperio] },
    { id: "orma17-xperio-clook", lens: MONOFOCALLENSES.orma17, treatment: [lensTreatments.Xperio, lensTreatments.ClearLook] },
    { id: "orma17-xperio-clsupra", lens: MONOFOCALLENSES.orma17, treatment: [lensTreatments.Xperio, lensTreatments.ClearLookSupra] },
    { id: "orma17-xperio-czsapph", lens: MONOFOCALLENSES.orma17, treatment: [lensTreatments.Xperio, lensTreatments.CrizalSapphire] },
    { id: "orma17-xperio-czforte", lens: MONOFOCALLENSES.orma17, treatment: [lensTreatments.Xperio, lensTreatments.CrizalForte] },
    { id: "orma17-xperio-czprev", lens: MONOFOCALLENSES.orma17, treatment: [lensTreatments.Xperio, lensTreatments.CrizalPrevencia] },
];