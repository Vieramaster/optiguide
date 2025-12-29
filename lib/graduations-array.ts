import { simulatorGraduationData } from "@/data/simulator-graduation-data";
import { graduationType } from "@/types/simulator-types";

export const GraduationKeysArray = Object.keys(
    simulatorGraduationData
  ) as graduationType[];
