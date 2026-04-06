export type Name = "Orma" | "Eyezen";
export type Surfacing = "convencional" | "digital";
export type Lens = "monofocal" | "bifocal" | "occupational" | "progressive";
export type Category = "Orma" | "Eyezen" | "BlueCut";
export type Company = "Essilor";
export type Range = "stock" | "EXT" | "LAB";
export type LensType = "esférico" | "asférico";

export type LensMaterial = {
  name: string;
  type: string;
  index: number;
};

export type RangeDiopters = {
  minEsf: number;
  maxEsf: number;
  minCil: number;
  maxCil: number;
};

export type MaxDiopters = {
  min: number;
  max: number;
};

export type LensBase = {
  lensItemId: string;
  lensLine: Name;
  category: Category;
  lens: Lens;
  company: Company;
  range: Range;
  diam: number[];
  rangeDiopters?: RangeDiopters[];
  maxDiopters?: MaxDiopters[];
  lensMaterial: LensMaterial;
  lensForm: LensType;
  lensTecnologies?: string[];
  surfacing: Surfacing;
};