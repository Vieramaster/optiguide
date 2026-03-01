export type treatmentType = {
  id: string;
  name: string;
  brand: string;
  tecnologies: string[];
  features: string[];
};

export type lensTreatmentstype =  Record<string, treatmentType>;
