import { GRADUATION_RANGES } from "../../../../shared/graduation-form/graduation-ranges";

export type GraduationKey = keyof typeof GRADUATION_RANGES;

export type GraduationObject = Record<GraduationKey, string>;

export type LensSide = "A" | "B";

export type SelectLensIndex = Record<LensSide, number>;
