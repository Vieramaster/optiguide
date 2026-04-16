import { GraduationBase } from "../graduation-form/graduation-type";

export type BaseGraduation = {
  ESF: string;
  CIL: string;
};

export type GraduationFields = BaseGraduation & {
  EJE: string;
  DIAM: string;
};

export type BaseGraduationKeys = keyof GraduationBase

export type GraduationFieldsKey = keyof GraduationFields;

export type GraduationError<K extends GraduationFieldsKey = GraduationFieldsKey> = Partial<
  Record<K, string>
>;
export type GraduationValues = BaseGraduation | GraduationFields;
