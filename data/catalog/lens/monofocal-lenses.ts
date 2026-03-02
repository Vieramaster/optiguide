import type { monofocalLensType } from "@/types/data/monofocal-lens-type";

export const MONOFOCALLENSES: monofocalLensType = {
  orma1: {
    id: "O1",
    name: "Orma",
    category: "Orma",
    lens: "monofocal",
    company: "Essilor",
    range: "stock",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -6, maxEsf: 6, minCil: -2, maxCil: 2 }],
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },
    lensType: "esférico",
    tecnologies: [],
    surfacing: "convencional"
  },

  orma2: {
    id: "O2",
    name: "Orma",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "stock",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -4, maxEsf: 4, minCil: -2, maxCil: 2 }],
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },
    lensType: "esférico",
    tecnologies: [],
    surfacing: "convencional"
  },

  orma3: {
    id: "O3",
    name: "Orma",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "EXT",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -4, maxEsf: 4, minCil: -4, maxCil: 4 }],
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },
    lensType: "esférico",
    tecnologies: [],
    surfacing: "convencional"
  },

  orma4: {
    id: "O4",
    name: "Orma",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "LAB",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -14, maxEsf: 13.5, minCil: -6, maxCil: 6 }],
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },
    lensType: "esférico",
    tecnologies: [],
    surfacing: "convencional"
  },

  orma5: {
    id: "O5",
    name: "Orma",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "LAB",
    diam: [68],
    maxDiopters: [{ min: 0, max: 10 }],
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },
    lensType: "esférico",
    tecnologies: [],
    surfacing: "convencional"
  },

  orma7: {
    id: "O7",
    name: "Orma",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "stock",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -6, maxEsf: 6, minCil: -2, maxCil: 2 }],
    lensMaterial: { name: "Orgánico 1.56", tipo: "resina de índice medio", index: 1.56 },
    lensType: "esférico",
    tecnologies: [],
    surfacing: "convencional"
  },

  orma8: {
    id: "O8",
    name: "Orma",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "stock",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -6, maxEsf: 4, minCil: -2, maxCil: 0 }],
    lensMaterial: { name: "MR-series 1.61", tipo: "thiourethane", index: 1.61 },

    lensType: "asférico",
    tecnologies: [],
    surfacing: "convencional"
  },

  orma9: {
    id: "O9",
    name: "Orma",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "EXT",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -8, maxEsf: -6.25, minCil: 0, maxCil: 2 },
    { minEsf: -4, maxEsf: 4, minCil: 0, maxCil: -4 }

    ],
    lensMaterial: { name: "MR-8", tipo: "thiourethane", index: 1.60 },
    lensType: "esférico",
    tecnologies: [],
    surfacing: "convencional"
  },
  ///
  orma10: {
    id: "O10",
    name: "Orma",
    lens: "monofocal",
    category: "BlueCut",
    company: "Essilor",
    range: "EXT",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -6.75, maxEsf: 6, minCil: -2, maxCil: 2 }],
    lensMaterial: { name: "MR-8", tipo: "thiourethane", index: 1.60 },
    lensType: "esferico",
    tecnologies: [],
    surfacing: "convencional"

  },
  orma11: {
    id: "O11",
    name: "Orma",
    lens: "monofocal",
    company: "Essilor",
    category: "BlueCut",
    range: "LAB",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -11, maxEsf: 11, cil: -6 }],
    lensMaterial: { name: "MR-series 1.61", tipo: "thiourethane", index: 1.61 },
    lensType: "esferico",
    tecnologies: [],
    surfacing: "convencional"
  },
  orma12: {
    id: "O12",
    name: "Orma",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "stock",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -4, maxEsf: 4, minCil: -2, maxCil: 2 }],
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },
    lensType: "esférico",
    tecnologies: [],
    surfacing: "convencional"
  },
  orma13: {
    id: "O13",
    name: "Orma",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "LAB",
    diam: [70],
    rangeDiopters: [{ minEsf: -13, maxEsf: 7, minCil: -6, maxCil: 6 }],
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },

    lensType: "esférico",
    tecnologies: [],
    surfacing: "convencional"
  },
  orma14: {
    id: "O14",
    name: "Orma",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "EXT",
    diam: [70],
    rangeDiopters: [{ minEsf: -4, maxEsf: 4, minCil: -4, maxCil: 4 }],
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },
    lensType: "esférico",
    tecnologies: [],
    surfacing: "convencional"
  },


  orma15: {
    id: "O15",
    name: "Orma",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "LAB",
    diam: [70],
    rangeDiopters: [{ minEsf: -12, maxEsf: 9, minCil: -6, maxCil: 6 }],
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },
    lensType: "esférico",
    tecnologies: [],
    surfacing: "convencional"
  },
  orma16: {
    id: "O16",
    name: "Orma",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "stock",
    diam: [70],
    rangeDiopters: [{ minEsf: -6, maxEsf: 4, minCil: -2, maxCil: 2 }],
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },
    lensType: "esférico",
    tecnologies: [],
    surfacing: "convencional"
  },
  orma17: {
    id: "O17",
    name: "Orma",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "LAB",
    diam: [70],
    rangeDiopters: [{ minEsf: -8, maxEsf: 8, cil: -5 }],
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },
    lensType: "esférico",
    tecnologies: [],
    surfacing: "convencional"
  },
  orma18: {
    id: "O18",
    name: "Orma",
    lens: "monofocal",
    category: "Orma",
    company: "Essilor",
    range: "LAB",
    diam: [80],
    rangeDiopters: [{ minEsf: -5, maxEsf: 7, cil: -4 }],
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },
    lensType: "esférico",
    tecnologies: [],
    surfacing: "convencional"
  },
  eyezen1: {
    id: "E1",
    name: "Eyezen",
    lens: "monofocal",
    category: "Eyezen",
    company: "Essilor",
    range: "stock",
    diam: [65, 70],
    rangeDiopters: [{ minEsf: -10, maxEsf: 6, cil: -6 }],
    lensMaterial: { name: "MR-series 1.61", tipo: "thiourethane", index: 1.61 },
    lensType: "esferico",
    tecnologies: [],
    surfacing: "digital"
  }
};




