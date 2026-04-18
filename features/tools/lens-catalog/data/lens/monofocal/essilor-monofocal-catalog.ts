// ================= TYPES =================
import type { Lens, Company, CreateEssilorLensInput, CreateEssilorDefault, LensBaseObject, LensBase } from "../../../types/lens/lens-base"

// ================= BASE FACTORY =================
const createLens = (
  data: CreateEssilorLensInput,
  defaults: CreateEssilorDefault,
  lensConfig: Lens,
  companyCofing: Company
): LensBase => ({
  lens: lensConfig,
  company: companyCofing,
  ...defaults,
  ...data,
});

// ================= DEFAULTS =================
export const ORMA_DEFAULTS: CreateEssilorDefault = {
  category: "Orma",
  lensMaterial: {
    name: "CR-39",
    type: "resina orgánica estándar",
    index: 1.5,
  },
};
export const ESSILOR_MID_INDEX_DEFAULTS: CreateEssilorDefault = {
  category: "Essilor 1.56",
  lensMaterial: {
    name: "Orgánico 1.56",
    type: "resina de medio índice",
    index: 1.56
  },
}
export const AIRWEAR_DEFAULTS: CreateEssilorDefault = {
  category: "Airwear",
  lensMaterial: {
    name: "policarbonato",
    type: "policarbonato",
    index: 1.59,
  },
};

const ORMIX_DEFAULTS: CreateEssilorDefault = {
  category: "Ormix",
  lensMaterial: {
    name: "MR-8",
    type: "thiourethane",
    index: 1.6,
  },
};

export const STYLIS_DEFAULTS: CreateEssilorDefault = {
  category: "Stylis",
  lensMaterial: {
    name: "Japan MR-8",
    type: "thiourethane",
    index: 1.67
  },
}
export const PREMIUM_DEFAULTS: CreateEssilorDefault = {
  category: "Premium",
  lensMaterial: {
    name: "MR-174",
    type: "resina de ultra alto índice",
    index: 1.74,
  },
};


// ================= CATEGORY FACTORIES =================

//1.50
export const createOrmaLens = (data: CreateEssilorLensInput) =>
  createLens(data, ORMA_DEFAULTS, "monofocal", "Essilor");
//1.56
export const createMidIndexLens = (data: CreateEssilorLensInput) =>
  createLens(data, ESSILOR_MID_INDEX_DEFAULTS, "monofocal", "Essilor");
//1.59
export const createAirwearLens = (data: CreateEssilorLensInput) =>
  createLens(data, AIRWEAR_DEFAULTS, "monofocal", "Essilor");
//1.60
export const createOrmixLens = (data: CreateEssilorLensInput) =>
  createLens(data, ORMIX_DEFAULTS, "monofocal", "Essilor");
//1.67 
export const createStylisLens = (data: CreateEssilorLensInput) =>
  createLens(data, STYLIS_DEFAULTS, "monofocal", "Essilor");
//1.74
export const createPremiumLens = (data: CreateEssilorLensInput) =>
  createLens(data, PREMIUM_DEFAULTS, "monofocal", "Essilor");


export const ESSILOR_MONOFOCAL_CATALOG: LensBaseObject = {

  EO1: createOrmaLens({
    lensItemId: "EO1",
    range: "stock",
    diam: [65, 70],
    lensForm: "esférico",
    surfacing: "convencional"
  }),


  essilor2: {
    lensItemId: "O2",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "stock",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -4, maxEsf: 4, minCil: -2, maxCil: 2 }],
    lensMaterial: { name: "CR-39", type: "resina orgánica estándar", index: 1.50 },
    lensForm: "esférico",
    surfacing: "convencional"
  },

  essilor3: {
    lensItemId: "O3",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "ext",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -4, maxEsf: 4, minCil: -4, maxCil: 4 }, { minEsf: -8, maxEsf: 4, minCil: 4, maxCil: 4 }],
    lensMaterial: { name: "CR-39", type: "resina orgánica estándar", index: 1.50 },
    lensForm: "esférico",
    surfacing: "convencional"
  },

  essilor4: {
    lensItemId: "O4",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "lab",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -14, maxEsf: 13.5, minCil: -6, maxCil: 6 }],
    lensMaterial: { name: "CR-39", type: "resina orgánica estándar", index: 1.50 },
    lensForm: "esférico",
    surfacing: "convencional"
  },

  essilor5: {
    lensItemId: "O5",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "lab",
    diam: [68, 65, 70],
    maxDiopters: [{ min: 0, max: 10 }],
    lensMaterial: { name: "CR-39", type: "resina orgánica estándar", index: 1.50 },
    lensForm: "esférico",
    surfacing: "convencional"
  },
  essilor6: {
    lensItemId: "O6",
    lens: "monofocal",
    category: "Essilor 1.56",
    company: "Essilor",
    range: "lab",
    diam: [65, 70],
    maxDiopters: [{ min: 0, max: 10 }],
    lensMaterial: { name: "Orgánico 1.56", type: "resina de medio índice", index: 1.56 },
    lensForm: "esférico",
    surfacing: "convencional"
  },

  essilor7: {
    lensItemId: "O7",
    lens: "monofocal",
    category: "Essilor 1.56",
    company: "Essilor",
    range: "stock",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -6, maxEsf: 6, minCil: -2, maxCil: 2 }],
    lensMaterial: { name: "Orgánico 1.56", type: "resina de medio índice", index: 1.56 },
    lensForm: "esférico",
    surfacing: "convencional"
  },
  essilor17: {
    lensItemId: "O17",
    lens: "monofocal",
    category: "Ormix",
    company: "Essilor",
    range: "ext",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -6, maxEsf: 4, minCil: -2, maxCil: 2 }],
    lensMaterial: { name: "MR-series 1.61", type: "thiourethane", index: 1.60 },
    lensForm: "asférico",
    surfacing: "convencional"
  },
  essilor8: {
    lensItemId: "O8",
    lens: "monofocal",
    category: "Ormix",
    company: "Essilor",
    range: "ext",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -8, maxEsf: -6.25, minCil: -2, maxCil: 2 },
    { minEsf: -4, maxEsf: 4, minCil: -4, maxCil: 4 }
    ],
    lensMaterial: { name: "MR-series 1.61", type: "thiourethane", index: 1.60 },
    lensForm: "esférico",
    surfacing: "convencional"
  },

  essilor9: {
    lensItemId: "O9",
    lens: "monofocal",
    category: "Ormix",
    company: "Essilor",
    range: "ext",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: 4.25, maxEsf: 6, minCil: -2, maxCil: 2 },
    { minEsf: -10, maxEsf: -6.75, minCil: 2, maxCil: 2 }
    ],
    lensMaterial: { name: "MR-8", type: "thiourethane", index: 1.60 },
    lensForm: "esférico",
    surfacing: "convencional"
  },
  ///
  essilor10: {
    lensItemId: "O10",
    lens: "monofocal",
    category: "Ormix",
    company: "Essilor",
    range: "lab",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -11, maxEsf: 11, minCil: -6, maxCil: 6 }],
    lensMaterial: { name: "MR-8", type: "thiourethane", index: 1.60 },
    lensForm: "esférico",
    surfacing: "convencional"

  },
  essilor11: {
    lensItemId: "O11",
    lens: "monofocal",
    company: "Essilor",
    category: "Orma",
    range: "lab",
    diam: [70],
    rangeDiopters: [{ minEsf: -13, maxEsf: 7, minCil: -6, maxCil: 6 }],
    lensMaterial: { name: "CR-39", type: "resina orgánica estándar", index: 1.50 },
    lensForm: "esférico",
    surfacing: "convencional"
  },
  essilor12: {
    lensItemId: "O12",
    lens: "monofocal",
    category: "Ormix",
    company: "Essilor",
    range: "ext",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -4, maxEsf: 4, minCil: -4, maxCil: 4 }],
    lensMaterial: { name: "MR-series 1.61", type: "thiourethane", index: 1.60 },
    lensForm: "esférico",
    surfacing: "convencional"
  },
  //--------------------------
  essilor13: {
    lensItemId: "O13",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "lab",
    diam: [70],
    rangeDiopters: [{ minEsf: -12, maxEsf: 9, minCil: -6, maxCil: 6 }],
    lensMaterial: { name: "CR-39", type: "resina orgánica estándar", index: 1.50 },
    lensForm: "esférico",
    surfacing: "convencional"
  },
  essilor14: {
    lensItemId: "O14",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "ext",
    diam: [70],
    rangeDiopters: [{ minEsf: -6, maxEsf: 4, minCil: -2, maxCil: 2 }],
    lensMaterial: { name: "CR-39", type: "resina orgánica estándar", index: 1.50 },
    lensForm: "esférico",
    surfacing: "digital"
  },

  essilor15: {
    lensItemId: "O15",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "lab",
    diam: [70],
    rangeDiopters: [{ minEsf: -8, maxEsf: 8, minCil: -5, maxCil: 5 }],
    lensMaterial: { name: "CR-39", type: "resina orgánica estándar", index: 1.50 },
    lensForm: "esférico",
    surfacing: "convencional"
  },
  essilor16: {
    lensItemId: "O16",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "stock",
    diam: [80],
    rangeDiopters: [{ minEsf: -5, maxEsf: 7, minCil: -4, maxCil: 4 }],
    lensMaterial: { name: "CR-39", type: "resina orgánica estándar", index: 1.50 },
    lensForm: "esférico",
    surfacing: "convencional"
  },

  //EYEZENS
  eyezen1: {
    lensItemId: "E1",
    lens: "monofocal",
    lensName: "Eyezen",
    category: "Ormix",
    company: "Essilor",
    range: "lab",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -6, maxCil: 6 }],
    lensMaterial: { name: "MR-series 1.61", type: "thiourethane", index: 1.60 },
    lensForm: "asférico",
    lensTecnologies: ["Eyezen Focus", "Blue UV Capture", "Dual Optimization"],
    surfacing: "digital"
  },
  eyezen2: {
    lensItemId: "E2",
    lens: "monofocal",
    lensName: "Eyezen",
    category: "Stylis",
    company: "Essilor",
    range: "lab",
    diam: [65],
    rangeDiopters: [{ minEsf: -14, maxEsf: 8, minCil: -4, maxCil: 4 }],
    lensMaterial: { name: "Japan MR-8", type: "thiourethane", index: 1.67 },
    lensForm: "asférico",
    lensTecnologies: ["Eyezen Focus", "Blue UV Capture", "Dual Optimization"],
    surfacing: "digital"
  },
  eyezen3: {
    lensItemId: "E3",
    lens: "monofocal",
    lensName: "Eyezen",
    category: "Premium",
    company: "Essilor",
    range: "lab",
    diam: [65],
    rangeDiopters: [{ minEsf: -20, maxEsf: 18, minCil: -8, maxCil: 8 }],
    lensMaterial: { name: "MR-174", type: "resina de alto índice", index: 1.74 },
    lensForm: "asférico",
    lensTecnologies: ["Eyezen Focus", "Blue UV Capture", "Dual Optimization"],
    surfacing: "digital"
  },
  eyezen4: {
    lensItemId: "E4",
    lens: "monofocal",
    lensName: "Eyezen",
    category: "Stylis",
    company: "Essilor",
    range: "lab",
    diam: [65],
    rangeDiopters: [{ minEsf: -14, maxEsf: 9, minCil: -6, maxCil: 6 }],
    lensMaterial: { name: "Japan MR-8", type: "thiourethane", index: 1.67 },
    lensForm: "asférico",
    lensTecnologies: ["Eyezen Focus", "Blue UV Capture", "Dual Optimization"],
    surfacing: "digital"
  },
  //POLICARBONATO
  essilorP1: {
    lensItemId: "O17",
    lens: "monofocal",
    category: "Airwear",
    company: "Essilor",
    range: "stock",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -4, maxEsf: 4, minCil: -2, maxCil: 2 }],
    lensMaterial: { name: "policarbonato", type: "policarbonato", index: 1.59 },
    lensForm: "esférico",
    surfacing: "convencional"
  },
  essilorP2: {
    lensItemId: "O18",
    lens: "monofocal",
    category: "Airwear",
    company: "Essilor",
    range: "lab",
    diam: [70],
    rangeDiopters: [{ minEsf: -14.5, maxEsf: 10, minCil: -6, maxCil: 6 }],
    lensMaterial: { name: "policarbonato", type: "policarbonato", index: 1.59 },
    lensForm: "esférico",
    surfacing: "convencional"
  },
  essilorP3: {
    lensItemId: "O19",
    lens: "monofocal",
    category: "Airwear",
    company: "Essilor",
    range: "lab",
    diam: [70],
    maxDiopters: [{ min: 6, max: 20 }],
    lensMaterial: { name: "policarbonato", type: "policarbonato", index: 1.59 },
    lensForm: "esférico",
    surfacing: "convencional"
  },
  essilorP4: {
    lensItemId: "O20",
    lens: "monofocal",
    category: "Airwear",
    company: "Essilor",
    range: "lab",
    diam: [76],
    maxDiopters: [{ min: 0, max: 10 }],
    lensMaterial: { name: "policarbonato", type: "policarbonato", index: 1.59 },
    lensForm: "esférico",
    surfacing: "convencional"
  },
  essilorP5: {
    lensItemId: "O21",
    lens: "monofocal",
    category: "Airwear",
    company: "Essilor",
    range: "lab",
    diam: [76],
    rangeDiopters: [{ minEsf: -15, maxEsf: 8, minCil: -4, maxCil: 4 }],
    lensMaterial: { name: "policarbonato", type: "policarbonato", index: 1.59 },
    lensForm: "esférico",
    surfacing: "convencional"
  },
  essilorP6: {
    lensItemId: "O22",
    lens: "monofocal",
    category: "Airwear",
    company: "Essilor",
    range: "lab",
    diam: [74],
    rangeDiopters: [{ minEsf: -12, maxEsf: 8, minCil: -4, maxCil: 4 }],
    lensMaterial: { name: "policarbonato", type: "policarbonato", index: 1.59 },
    lensForm: "esférico",
    surfacing: "convencional"
  },

  essilorP7: {
    lensItemId: "O23",
    lens: "monofocal",
    category: "Airwear",
    company: "Essilor",
    range: "stock",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -2, maxEsf: 2, minCil: -1, maxCil: 1 }],
    lensMaterial: { name: "policarbonato", type: "policarbonato", index: 1.59 },
    lensForm: "esférico",
    surfacing: "convencional",
  },
  essilorP8: {
    lensItemId: "O24",
    lens: "monofocal",
    category: "Airwear",
    company: "Essilor",
    range: "lab",
    diam: [80],
    rangeDiopters: [{ minEsf: -12, maxEsf: 8, minCil: -4, maxCil: 4 }],
    lensMaterial: { name: "policarbonato", type: "policarbonato", index: 1.59 },
    lensForm: "esférico",
    surfacing: "convencional"
  },
  //EYEZEN POLICARBONATO
  eyezenP1: {
    lensItemId: "PE1",
    lens: "monofocal",
    category: "Airwear",
    company: "Essilor",
    range: "lab",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -10, maxEsf: 6, minCil: -6, maxCil: 6 }],
    lensMaterial: { name: "policarbonato", type: "policarbonato", index: 1.59 },
    lensForm: "esférico",
    surfacing: "convencional"
  }

}

