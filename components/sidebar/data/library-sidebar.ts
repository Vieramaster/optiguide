//COMPONENTS
import {
    Sparkle,
    Eye,
    BookOpen,
} from "lucide-react";
//TYPES
import { articleItem } from "../types/sidebar";


export const ARTICLES_SIDEBAR: articleItem[] = [
    {
        title: "Conceptos básicos",
        Icon: BookOpen,
        blocks: [
            {
                title: "¿Cómo leer una receta?",
                url: "/articulos/como-leer-una-receta"
            },
            {
                title: "Conversión de transposición",
                url: "/articulos/conversion-de-transposicion",
            },
            {
                title: "Armazones y sus materiales",
                url: "/articulos/armazones-y-sus-materiales",
            },
            {
                title: "Tipos de lentes",
                url: "/articulos/tipos-de-lentes"
            },

            {
                title: "Cristales y sus indices",
                url: "/articulos/cristales-y-sus-indices"
            },
            {
                title: "Colores de lentes",
                url: "/articulos/colores-de-lentes"
            },
            {
                title: "Ángulo pantoscópico",
                url: "/articulos/angulo-pantoscopico"
            },
            {
                title: "Tallado digital",
                url: "/articulos/tallado-digital"
            }
        ],
    },
    {
        title: "Tratamientos",
        Icon: Sparkle,
        blocks: [
            {
                title: "Tratamiento Antirreflejante",
                url: "/articulos/antirreflejante",
            },
            {
                title: "Filtro azul",
                url: "/articulos/filtro-azul",
            },
            {
                title: "Filtro Ultravioleta ",
                url: "/articulos/filtro-ultravioleta",
            },
            {
                title: "Fotocromáticos ",
                url: "/articulos/fotocromaticos",
            },
            {
                title: " Hidrofóbico y Oleofóbico",
                url: "/articulos/hidrofobico-y-oleofobico",
            },
            {
                title: "Tratamiento Antiempañante",
                url: "/articulos/tratamiento-antiempanante",
            },
            {
                title: "Polarizado",
                url: "/articulos/polarizado",
            },
            {
                title: "tratamiento anti rayas",
                url: "/articulos/tratamiento-anti-rayas",
            },
            {
                title: "Recubrimiento Espejado",
                url: "/articulos/recubrimiento-espejado",
            },
        ],
    },

    {
        title: "Condiciones visuales",
        Icon: Eye,
        blocks: [
            // Errores refractivos
            { title: "Miopía", url: "/articulos/miopia" },
            { title: "Hipermetropía", url: "/articulos/hipermetropia" },
            { title: "Astigmatismo", url: "/articulos/astigmatismo" },
            { title: "Presbicia", url: "/articulos/presbicia" },

            // Posición ocular
            { title: "Forias", url: "/articulos/forias" },
            { title: "Tropías o estrabismos", url: "/articulos/tropias-o-estrabismos" },
            //Patologias oculares
            { title: "Cataratas", url: "/articulos/cataratas" },
            { title: "Glaucoma", url: "/articulos/glaucoma" },
            { title: "ambliopía", url: "/articulos/ambliopia" },
            { title: "ojo seco", url: "/articulos/ojo-seco" },

            { title: "Daltonismo", url: "/articulos/daltonismo" },
            { title: "fotofobia", url: "/articulos/fotofobia" },
        ],
    },
]