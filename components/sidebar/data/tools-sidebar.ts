//COMPONENTS
import {
    DraftingCompass,
    Smile
} from "lucide-react";
//TYPES
import { toolItem } from "../types/sidebar";

export const TOOLS_SIDEBAR: toolItem[] = [
    {
        title: "Simulador de espesor de lentes",
        url: "/herramientas/simulador-de-espesor",
        Icon: DraftingCompass,
    },
    {
        title: "Lentes según el rostro",
        url: "/herramientas/lentes-segun-el-rostro",
        Icon: Smile,
    },

]
