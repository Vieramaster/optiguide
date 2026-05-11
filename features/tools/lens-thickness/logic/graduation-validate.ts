import { GraduationFields, GraduationError, GraduationFieldsKey } from "@/shared/types/graduation";

import {GRADUATION_RANGES} from "../../../../shared/graduation-form/graduation-ranges"
;
export const graduationValidate = (values: GraduationFields): GraduationError => {
  const newErrors: GraduationError = {};
    
  (Object.keys(values) as GraduationFieldsKey[]).forEach((key) => {
    const raw = values[key];

    // ignorar campos que no se usan
    if (raw === "" || raw === undefined) return;

    const val = Number(raw);
    const config = GRADUATION_RANGES[key];

    if (!config) return;

    const { min, max, step } = config;

    if (!Number.isFinite(val)) {
      newErrors[key] = "número inválido";
      return;
    }

    if (val < min || val > max) {
      newErrors[key] = `entre ${min} y ${max}`;
      return;
    }

    if ((val - min) % step !== 0) {
      newErrors[key] = `múltiplo de ${step}`;
    }
  });

  return newErrors;
};
