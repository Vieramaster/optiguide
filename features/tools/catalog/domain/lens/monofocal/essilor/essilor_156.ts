
import { LENS_MATERIALS } from "@/features/tools/catalog/constants/lens-materials";
import type {
  LensBase,
  LensBaseObject,
  CreateLens,
} from "@/features/tools/catalog/types/domain/lens/lens-base";


export const createEssilor156Lens = (data: CreateLens): LensBase =>
({
  company: "Essilor",
  lens: "monofocal",
  category: "Essilor 1.56",
  lensMaterial: LENS_MATERIALS.MID_INDEX_RESIN,
  lensForm: "esf",
  surfacing: "estandar",
  ...data,
});



export const ESSILOR_156: LensBaseObject = {
  essilor_156_01: createEssilor156Lens({
    lensItemId: "ESS_E156_01",
    range: "lab",
    diam: [65, 70],
    maxDiopters: [{ min: 0, max: 10 }],
  }),
  essilor_156_02: createEssilor156Lens({
    lensItemId: "ESS_E156_02",
    range: "stock",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -6, maxEsf: 6, minCil: -2, maxCil: 2 }],
  }),
};
