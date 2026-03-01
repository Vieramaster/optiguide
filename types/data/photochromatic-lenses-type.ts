export type photochromaticType = {
  id: string;
  name: string;
  brand: string;
  generation: string;
  colors: string[];
  photochromic_speed: string;
  UV_protection: string;
  blue_light_filter: {
    clear_state: string;
    dark_state: string;
  };
  features: string[];
  polarized: boolean;
};

export type photochromaticlensesType = Record<string, photochromaticType>;