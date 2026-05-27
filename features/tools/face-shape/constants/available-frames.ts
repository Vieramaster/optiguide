
import { AviatorFrame, NavigatorFrame, BrownlineFrame, ButterflyFrame, CatEyeFrame, GeometricFrame, OvalFrame, RectangleFrame, RoundFrame, ShieldFrame, SquareFrame, PantosFrame, WayfarerFrame } from "../components/frames";
import type { FrameDetails } from "../types/frames";

export const availableFrames: FrameDetails[] = [
    { id: "aviator", name: "Aviador", icon: AviatorFrame, femaleOnly: false },
    { id: "round", name: "Redondo", icon: RoundFrame, femaleOnly: false },
    { id: "oval", name: "Ovalado", icon: OvalFrame, femaleOnly: false },
    { id: "shield", name: "Shield", icon: ShieldFrame, femaleOnly: false },
    { id: "geometric", name: "Geométrico", icon: GeometricFrame, femaleOnly: true },
    { id: "rectangular", name: "Rectangular", icon: RectangleFrame, femaleOnly: false },
    { id: "square", name: "Cuadrado", icon: SquareFrame, femaleOnly: false },
    { id: "browline", name: "Clubmaster", icon: BrownlineFrame, femaleOnly: false },
    { id: "catEye", name: "Cat-eye", icon: CatEyeFrame, femaleOnly: true },
    { id: "butterfly", name: "Butterfly", icon: ButterflyFrame, femaleOnly: true },
    { id: "wayfarer", name: "Wayfarer", icon: WayfarerFrame, femaleOnly: false },
    { id: "pantos", name: "Pantos", icon: PantosFrame, femaleOnly: false },
    { id: "navigator", name: "Navigator", icon: NavigatorFrame, femaleOnly: false }
]
