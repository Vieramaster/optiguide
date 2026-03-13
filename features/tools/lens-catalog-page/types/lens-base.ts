export type RangeDiopter = {
    minEsf: number;
    maxEsf: number;
    minCil: number;
    maxCil: number;
  };
  
  export type MaxDiopter = {
    min: number;
    max: number;
  };
  
  export type Material = {
    name: string;
    type: string;
    index: number;
  };
  
  export type LensBase = {
    id: string;
    name: string;
    category: string;
    design: "monofocal" | "bifocal" | "occupational" | "progressive";
    company: string;
    range: string;
  
    diameters: number[];
  
    material: Material;
  
    rangeDiopters?: RangeDiopter[];
    maxDiopters?: MaxDiopter[];
  
    lensType: "esferico" | "asferico";
  
    technologies: string[];
  
    surfacing: "convencional" | "digital";
  };
  
