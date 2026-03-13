import { GRADUATION_RANGES } from "@/features/lens-thickness-simulator/data/graduation-ranges";

export type GraduationKey = keyof typeof GRADUATION_RANGES;

export type GraduationObject = Record<GraduationKey, string>;

export type ErrorState = Partial<Record<GraduationKey, string>>;

export type SideThickness = { A: number; B: number };

export type LensSide = "A" | "B";
