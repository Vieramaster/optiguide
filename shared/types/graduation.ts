export type BaseGraduation = {
  ESF: string;
  CIL: string;
};

export type GraduationFields = BaseGraduation & {
  EJE: string;
  DIAM: string;
};

export type GraduationKey = keyof GraduationFields;

export type GraduationError<K extends GraduationKey = GraduationKey> = Partial<
  Record<K, string>
>;
export type GraduationValues = BaseGraduation | GraduationFields;

