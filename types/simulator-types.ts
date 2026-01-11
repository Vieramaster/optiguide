import { simulatorGraduationData } from "@/data/simulator-graduation-data";

export type graduationType = keyof typeof simulatorGraduationData;

export type GraduationValueType = Record<graduationType, string>;

export type ErrorStateType = Partial<Record<graduationType, string>>;

export type sideThicknessType = { A: number; B: number };