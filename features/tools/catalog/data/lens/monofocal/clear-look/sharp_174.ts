

import { LENS_MATERIALS } from "@/features/tools/catalog/data/lens-materials";
import type {
  LensBase,
  LensBaseObject,
  CreateLens,
} from "@/features/tools/catalog/types/lens/lens-base";


const createSharp174 = (data: CreateLens) :LensBase =>
  ({
    company: "ClearLook",
    lens: "monofocal",
    category: "Sharp 1.74",
    lensMaterial: LENS_MATERIALS.ULTRA_HIGH_INDEX_RESIN,
    lensForm: "asf",
    surfacing: "digital",
    ...data,
  }) 

export const SHARP_174 : LensBaseObject = {
  clearlook_sharp174_01: createSharp174({
    lensItemId: "CL_sharp174_01",
    diam: [70],
    rangeDiopters: [{ minEsf: -20, maxEsf: 18, minCil: -8, maxCil: 8 }],
    range: "lab",
  }),
  clearlook_sharp174_02: createSharp174({
    lensItemId: "CL_sharp174_02",
    diam: [70],
    rangeDiopters: [{ minEsf: -30, maxEsf: -20, minCil: -8, maxCil: 8 }],
    range: "lab",
  }),
};
 