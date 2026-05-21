export type GraduationBase = {
  ESF: string;
  CIL: string;
};

export type GraduationComplete = GraduationBase & {
  EJE: string;
  DIAM: string;
};

export type GraduationBaseKeys = keyof GraduationBase;
export type GraduationCompleteKey = keyof GraduationComplete;
