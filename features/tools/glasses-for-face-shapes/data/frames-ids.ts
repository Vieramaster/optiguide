//COMPONENTS
import { AviatorFrame, NavigatorFrame, BrownlineFrame, ButterflyFrame, CatEyeFrame, GeometricFrame, OvalFrame, RectangleFrame, RoundFrame, ShieldFrame, SquareFrame, PantosFrame, WayfarerFrame } from "../components/frames";


//TYPES
import { FrameData } from "../types/frames";

export const framesData: FrameData[] = [
    { id: "aviator", name: "Aviador", Ico: AviatorFrame, femaleOnly: false },
    { id: "round", name: "Redondo", Ico: RoundFrame, femaleOnly: false },
    { id: "oval", name: "Ovalado", Ico: OvalFrame, femaleOnly: false },
    { id: "shield", name: "Shield", Ico: ShieldFrame, femaleOnly: false },
    { id: "geometric", name: "Geométrico", Ico: GeometricFrame, femaleOnly: true },
    { id: "rectangular", name: "Rectangular", Ico: RectangleFrame, femaleOnly: false },
    { id: "square", name: "Cuadrado", Ico: SquareFrame, femaleOnly: false },
    { id: "browline", name: "Clubmaster", Ico: BrownlineFrame, femaleOnly: false },
    { id: "catEye", name: "Cat-eye", Ico: CatEyeFrame, femaleOnly: true },
    { id: "butterfly", name: "Butterfly", Ico: ButterflyFrame, femaleOnly: true },
    { id: "wayfarer", name: "Wayfarer", Ico: WayfarerFrame, femaleOnly: false },
    { id: "pantos", name: "Pantos", Ico: PantosFrame, femaleOnly: false },
    { id: "navigator", name: "Navigator", Ico: NavigatorFrame, femaleOnly: false }
]
