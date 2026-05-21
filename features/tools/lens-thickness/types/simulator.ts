import { GRADUATION_RANGES } from "../../../../shared/graduation-form/graduation-ranges"; 

export type GraduationKey = keyof typeof GRADUATION_RANGES;

export type GraduationObject = Record<GraduationKey, string>;



export type SideThickness = { A: number; B: number };

export type LensSide = "A" | "B";
