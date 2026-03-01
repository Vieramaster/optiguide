export type lenstType = {
  id: string;
  name: string;
  category: string;
  lens: string;
  company: string;
  range: string;
  diam: number[];
  lensMaterial: { name: string; tipo: string; index: number };
  maxDiopters?: { min: number; max: number }[]
  rangeDiopters?: { maxEsf: number, minEsf: number, minCil: number, maxCil: number }[];
  lensType: string;
  tecnologies: string[];
  surfacing: string;
};

export type monofocalLensType = Record<string, lenstType>;
