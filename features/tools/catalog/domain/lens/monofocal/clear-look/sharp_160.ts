import { LENS_MATERIALS } from "@/features/tools/catalog/data/lens-materials";
import type {
  CreateLens,
  LensBaseObject,
  LensBase,
} from "@/features/tools/catalog/types/domain/lens/lens-base";

const createSharp160 = (data: CreateLens): LensBase => ({
  company: "ClearLook",
  lens: "monofocal",
  lensMaterial: LENS_MATERIALS.RESIN_MR_8,
  category: "Sharp 1.6",
  lensForm: "asf",
  surfacing: "digital",
  ...data,
});

export const SHARP_160: LensBaseObject = {
  clearLook_sharp160_01: createSharp160({
    lensItemId: "CL_SHARP160_01",
    range: "lab",
    diam: [70],
    rangeDiopters: [{ minEsf: -12, maxEsf: 10, minCil: -6, maxCil: 6 }],
  }),

  clearLook_sharp160_02: createSharp160({
    lensItemId: "CL_SHARP160_02",
    range: "stock",
    diam: [70],
    rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -2, maxCil: 2 }],
  }),
  // ...
};