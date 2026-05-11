import { GRADUATION_RANGES } from "../../../../shared/graduation-form/graduation-ranges";


export const graduationKeysArray = Object.keys(
  GRADUATION_RANGES
) as Array<keyof typeof GRADUATION_RANGES>;

