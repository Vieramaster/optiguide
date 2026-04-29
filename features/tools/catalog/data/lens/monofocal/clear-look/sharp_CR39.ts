
import { LENS_MATERIALS } from "@/features/tools/catalog/data/lens-materials";
//==================TYPES=================/
import type {
  CreateLens,
  LensBase,
  LensBaseObject,
} from "@/features/tools/catalog/types/lens/lens-base";

//==================FACTORY=================/

export const createSharpCR39 = (data: CreateLens) : LensBase =>
  ({
    company: "ClearLook",
    lens: "monofocal",
    category: "Sharp CR-39",
    lensMaterial: LENS_MATERIALS.CR_39,
    lensForm: "asférico",
    surfacing: "convencional",
    ...data,
  }) 

//==================CATALOG=================/

export const SHARP_CR39 :LensBaseObject = {
  clearLook_cr39_01: createSharpCR39({
    lensItemId: "CL_CR39_01",
    range: "lab",
    diam: [70],
    rangeDiopters: [{ minEsf: -12, maxEsf: 10, minCil: -5, maxCil: 5 }],
  }),
  clearLook_cr39_02: createSharpCR39({
    lensItemId: "CL_CR39_02",
    range: "lab",
    diam: [70],
    rangeDiopters: [{ minEsf: -10, maxEsf: 7, minCil: -5, maxCil: 5 }],
  }),
  clearLook_cr39_03: createSharpCR39({
    lensItemId: "CL_CR39_03",
    range: "stock",
    diam: [70],
    rangeDiopters: [{ minEsf: -4, maxEsf: 4, minCil: -2, maxCil: 2 }],
  }),
  clearLook_cr39_04: createSharpCR39({
    lensItemId: "CL_CR39_04",
    range: "lab",
    diam: [70],
    rangeDiopters: [{ minEsf: -8, maxEsf: 7, minCil: -5, maxCil: 5 }],
  }),
};
