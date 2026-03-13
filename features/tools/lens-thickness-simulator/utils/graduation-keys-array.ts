import { GRADUATION_RANGES } from "../data/graduation-ranges";


export const graduationKeysArray = Object.keys(
  GRADUATION_RANGES
) as Array<keyof typeof GRADUATION_RANGES>;