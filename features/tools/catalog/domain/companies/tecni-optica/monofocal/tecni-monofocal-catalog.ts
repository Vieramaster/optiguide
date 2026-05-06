import type { LensObjectInput } from "../../../../types/companies/companies";

import { CLEARLOOK_MONOFOCAL } from "./clearlook-monofocal";
import { ESSILOR_MONOFOCAL } from "./essilor-monofocal";
import { KODAK_MONOFOCAL } from "./kodak-monofocal";

export const TECNI_MONOFOCAL_CATALOG: LensObjectInput[] = [
  ...CLEARLOOK_MONOFOCAL,
  ...ESSILOR_MONOFOCAL,
  ...KODAK_MONOFOCAL


];