export type lenstType = {
  id: string;
  name: string;
  category: "monofocal" | "bifocal" | "occupational" | "progressive" ;
  lens: string;
  company: string;
  range: string;
  diam: number[];
  lensMaterial: { name: string; tipo: string; index: number };
  maxDiopters?: { min: number; max: number }[]
  rangeDiopters?: { minEsf: number, maxEsf: number,  minCil: number, maxCil: number }[];
  lensType: "esférico" | "asférico" ;
  tecnologies: string[];
  surfacing: "convencional" | "digital";
};

export type monofocalLensType = Record<string, lenstType>;
