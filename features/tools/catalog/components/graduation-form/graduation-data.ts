import { GraduationBase, GraduationComplete } from "./graduation-type"

export const graduationBase: GraduationBase = {
    ESF: "",
    CIL: "",

}

export const graduationComplete: GraduationComplete = {
    ...graduationBase,
    EJE: "",
    DIAM: ""
}

//RANGE FOR GRADUATIONS
export const GRADUATION_RANGES_BASE = {
    ESF: { step: 0.25, min: -14, max: 14 },
    CIL: { step: 0.25, min: -14, max: 14 },

};

export const GRADUATION_RANGES_COMPLETE = {
    ...GRADUATION_RANGES_BASE,
    EJE: { step: 1, min: 0, max: 180 },
    DIAM: { step: 1, min: 20, max: 65 },
}
