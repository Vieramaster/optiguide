export const ophthalmicLenses = {
  orma1: {
    id: "O1",
    name: "Orma 1",
    category: "Orma",
    company: "Essilor",
    range: "stock",
    diam: [65, 70],
    combinations: [
      { esf: 6, cil: -2 },
      { esf: -6, cil: 2 }
    ],
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },
    nativeBlueControl: false,
    lensType: "esférico",
    tecnologies: []
  },

  orma2: {
    id: "O2",
    name: "Orma 2",
    category: "Orma",
    company: "Essilor",
    range: "stock",
    diam: [65, 70],
    combinations: [
      { esf: 4, cil: -2 },
      { esf: -4, cil: 2 }
    ],
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },
    nativeBlueControl: false,
    lensType: "esférico",
    tecnologies: []
  },

  orma3: {
    id: "O3",
    name: "Orma 3",
    category: "Orma",
    company: "Essilor",
    range: "EXT",
    diam: [65, 70],
    combinations: [
      { esf: 4, cil: -4 },
      { esf: -4, cil: 4 },
      { esf: -8, cil: 4 }
    ],
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },
    nativeBlueControl: false,
    lensType: "esférico",
    tecnologies: []
  },

  orma4: {
    id: "O4",
    name: "Orma 4",
    category: "Orma",
    company: "Essilor",
    range: "LAB",
    diam: [65, 70],
    combinations: [
      { esf: 13.5, cil: -6 },
      { esf: -14, cil: 6 }
    ],
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },
    nativeBlueControl: false,
    lensType: "esférico",
    tecnologies: []
  },

  orma5: {
    id: "O5",
    name: "Orma 5",
    category: "Orma",
    company: "Essilor",
    range: "LAB",
    diam: [68],
    maxDiopters: { min: 0, max: 10 },
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },
    nativeBlueControl: false,
    lensType: "esférico",
    tecnologies: []
  },

  orma6: {
    id: "O6",
    name: "Orma 6",
    category: "Orma",
    company: "Essilor",
    range: "LAB",
    diam: [65, 70],
    maxDiopters: { min: 0, max: 10 },
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },
    nativeBlueControl: false,
    lensType: "esférico",
    tecnologies: []
  },

  orma7: {
    id: "O7",
    name: "Orma 7",
    category: "Orma",
    company: "Essilor",
    range: "stock",
    diam: [70],
    rangeDiopters: [{ minEsf: -11, maxEsf: 11, cil: -6 }],
    lensMaterial: { name: "CR-39", tipo: "resina orgánica estándar", index: 1.50 },
    nativeBlueControl: false,
    lensType: "esférico",
    tecnologies: []
  },

  blueCut1: {
    id: "BC1",
    name: "Blue Cut n°1",
    category: "Orma",
    company: "Essilor",
    range: "stock",
    diam: [65, 70],
    combinations: [
      { esf: 6, cil: 2 },
      { esf: -6, cil: 2 }
    ],
    lensMaterial: { name: "Orgánico 1.56", tipo: "resina de índice medio", index: 1.56 },
    nativeBlueControl: true,
    lensType: "esférico",
    tecnologies: []
  },

  blueCut2: {
    id: "BC2",
    name: "Blue Cut n°2",
    category: "Orma",
    company: "Essilor",
    range: "stock",
    diam: [65, 70],
    combinations: [
      { esf: 4, cil: -2 },
      { esf: -6, cil: -2 }
    ],
    lensMaterial: { name: "MR-series 1.61", tipo: "thiourethane", index: 1.61 },
    nativeBlueControl: true,
    lensType: "asférico",
    tecnologies: []
  },

  blueCut3: {
    id: "BC3",
    name: "Blue Cut n°3",
    category: "Orma",
    company: "Essilor",
    range: "EXT",
    diam: [65, 70],
    rangeDiopters: [
      { minEsf: -6.25, maxEsf: -8, cil: 2 },
      { minEsf: +4, maxEsf: -4, cil: -4 }
    ],
    lensMaterial: { name: "MR-8", tipo: "thiourethane", index: 1.60 },
    nativeBlueControl: true,
    lensType: "esférico",
    tecnologies: []
  }
};
