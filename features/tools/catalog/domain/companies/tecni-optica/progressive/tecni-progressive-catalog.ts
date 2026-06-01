import type { LensObjectInput } from "../../../../types/companies/companies"

import { TECNI_KODAK_PROGRESSIVE } from "./kodak"
import { TECNI_VARILUX_PROGRESSIVE } from "./varilux"

export const TECNI_PROGRESSIVE_CATALOG: LensObjectInput[] = [
    ...TECNI_VARILUX_PROGRESSIVE,
    ...TECNI_KODAK_PROGRESSIVE
]