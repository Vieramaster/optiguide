
import { LENS_MATERIALS } from "@/features/tools/catalog/data/lens-materials";
import type {
  CreateLens,
  LensBase,
  LensBaseObject,
} from "@/features/tools/catalog/types/lens/lens-base";


export const createAirwearLens = (data: CreateLens): LensBase =>
  ({
    company: "Essilor",
    lens: "monofocal",
    category: "Airwear",
    lensMaterial: LENS_MATERIALS.POLICARBONATE,
    lensForm: "esf",
    surfacing: "estandar",
    ...data,
  })


export const AIRWEAR: LensBaseObject = {
  essilor_airwear_01: createAirwearLens({
    lensItemId: "ESS_AIRWEAR_01",
    range: "stock",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -4, maxEsf: 4, minCil: -2, maxCil: 2 }],
  }),

  essilor_airwear_02: createAirwearLens({
    lensItemId: "ESS_AIRWEAR_02",
    range: "lab",
    diam: [70],
    rangeDiopters: [{ minEsf: -14.5, maxEsf: 10, minCil: -6, maxCil: 6 }],
  }),

  essilor_airwear_03: createAirwearLens({
    lensItemId: "ESS_AIRWEAR_03",
    range: "lab",
    diam: [70],
    maxDiopters: [{ min: 6, max: 20 }],
  }),

  essilor_airwear_04: createAirwearLens({
    lensItemId: "ESS_AIRWEAR_04",
    range: "lab",
    diam: [76],
    maxDiopters: [{ min: 0, max: 10 }],
  }),

  essilor_airwear_05: createAirwearLens({
    lensItemId: "ESS_AIRWEAR_05",
    range: "lab",
    diam: [76],
    rangeDiopters: [{ minEsf: -15, maxEsf: 8, minCil: -4, maxCil: 4 }],
  }),

  essilor_airwear_06: createAirwearLens({
    lensItemId: "ESS_AIRWEAR_06",
    range: "lab",
    diam: [74],
    rangeDiopters: [{ minEsf: -12, maxEsf: 8, minCil: -4, maxCil: 4 }],
  }),

  essilor_airwear_07: createAirwearLens({
    lensItemId: "ESS_AIRWEAR_07",
    range: "stock",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -2, maxEsf: 2, minCil: -1, maxCil: 1 }],
  }),

  essilor_airwear_08: createAirwearLens({
    lensItemId: "ESS_AIRWEAR_08",
    range: "lab",
    diam: [80],
    rangeDiopters: [{ minEsf: -12, maxEsf: 8, minCil: -4, maxCil: 4 }],
  }),

  //EYEZEN
  essilor_airwear_eyezen_01: createAirwearLens({
    lensName:"Eyezen",
    lensItemId: "ESS_AIRWEAR_EYE_01",
    range: "lab",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -6, maxCil: 6 }],
  }),
};
