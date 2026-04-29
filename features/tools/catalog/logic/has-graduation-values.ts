
import { isValidString } from "@/shared/utils/string/is-valid-string";
import type{ GraduationBaseKeys } from "@/shared/graduation-form/graduation-type";

export const hasGraduationValues = (
    filters: Record<GraduationBaseKeys, string> | null
  ) => {
    if (!filters) return false;
  
    const { ESF, CIL } = filters;
  
    return isValidString(ESF) || isValidString(CIL);
  };