
import type {
  LensBase,
  LensBaseObject,
  CreateLens,
} from "../../../../types/domain/lens/lens-base";
//==================DATA=================/
import { LENS_MATERIALS } from "../../../../constants/lens-materials";


export const createEvoClearDigital = (data: CreateLens): LensBase =>
({
  company: "Kodak",
  lens: "monofocal",
  category: "EvoClear Digital 1.56",
  lensMaterial: LENS_MATERIALS.MID_INDEX_RESIN,
  lensForm: "asf",
  surfacing: true,
  ...data,
})


export const EVOCLEAR_DIGITAL: LensBaseObject = {
  kodak_evoclear_digital_01: createEvoClearDigital({
    lensItemId: "kod_evoclear_1",
    range: "stock",
    diam: [70],
    rangeDiopters: [{ minEsf: -4, maxEsf: 4, minCil: -2, maxCil: 2 }],
  }),
  kodak_evoclear_digital_02: createEvoClearDigital({
    lensItemId: "kod_evoclear_2",
    range: "ext",
    diam: [70],
    rangeDiopters: [
      { minEsf: -4, maxEsf: 4, minCil: -4, maxCil: -2.25 },
      { minEsf: 4.25, maxEsf: 6, minCil: -4, maxCil: 4 },
    ],
  }),
  kodak_evoclear_digital_03: createEvoClearDigital({
    lensItemId: "kod_evoclear_2",
    range: "ext",
    diam: [70],
    rangeDiopters: [
      { minEsf: -8, maxEsf: -4.25, minCil: -4, maxCil: 4 },
      { minEsf: -10, maxEsf: -8.25, minCil: -2, maxCil: 2 },
    ],
  }),
};
