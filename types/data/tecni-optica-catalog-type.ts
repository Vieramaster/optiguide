
import type { lenstType } from "@/types/data/monofocal-lens-type";
import type { photochromaticType } from "@/types/data/photochromatic-lenses-type";
import type { treatmentType } from "@/types/data/lens-treatments-type";

export type monofocalCatalogItem = {
  lens: lenstType;
  treatment?: treatmentType[];
  photochromatic?: photochromaticType;
};
export type catalogTecniOpticaType = {
  monofocal: monofocalCatalogItem[],
};