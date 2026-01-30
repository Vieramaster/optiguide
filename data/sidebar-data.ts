//TYPES
import type { SidebarDataType } from "@/types/sidebar-data-types";
//ICOS
import {
  DraftingCompass,
  Sparkle,
  Smile,
  Eye,
  BookOpen,
} from "lucide-react";

export const sidebarData: SidebarDataType = {
  tools: [
    {
      title: "Simulador de espesor de lentes",
      url: "/herramientas/simulador-de-espesor",
      icon: DraftingCompass,
    },
    {
      title: "Lentes según el rostro",
      url: "/herramientas/lentes-segun-el-rostro",
      icon: Smile,
    },
    /**
     * {
      title: "Filtro de lentes",
      url: "#",
      icon: ScanSearch,
    },
    {
      title: "Pasillo de multifocales",
      url: "#",
      icon: CircleSlash2,
    }
     */
  ],
  library: [
    {
      title: "Conceptos básicos",
      icon: BookOpen,
      blocks: [
        { title: "Tipos de lentes", url: "/libreria/tipos-de-lentes" },
        { title: "¿Cómo leer una receta?", url: "/libreria/como-leer-una-receta" },
        {
          title: "Conversión de transposición",
          url: "/libreria/conversion-de-transposicion",
        },

        { title: "Cristales y sus indices", url: "/libreria/cristales-y-sus-indices" },
        {
          title: "Armazones y sus materiales",
          url: "/libreria/armazones-y-sus-materiales",
        },
      ],
    },
    {
      title: "Tratamientos",
      icon: Sparkle,

      blocks: [
        {
          title: "Tratamiento Antirreflejante",
          url: "/libreria/antirreflejante",
        },
        {
          title: "Filtro azul",
          url: "/libreria/filtro-azul",
        },
        {
          title: "Filtro Ultravioleta ",
          url: "/libreria/filtro-ultravioleta",
        },
        {
          title: "Fotocromáticos ",
          url: "/libreria/fotocromaticos",
        },
        {
          title: " Hidrofóbico y Oleofóbico",
          url: "/libreria/hidrofobico-y-oleofobico",
        },
        {
          title: "Tratamiento Antiempañante",
          url: "/libreria/tratamiento-antiempanante",
        },
        {
          title: "Polarizado",
          url: "/libreria/polarizado",
        },
        {
          title: "tratamiento anti rayas",
          url: "/libreria/tratamiento-anti-rayas",
        },
        {
          title: "Recubrimiento Espejado",
          url: "/libreria/recubrimiento-espejado",
        },
      ],
    },

    {
      title: "Condiciones visuales",

      icon: Eye,
      blocks: [
        // Errores refractivos
        { title: "Miopía", url: "/libreria/miopia" },
        { title: "Hipermetropía", url: "/libreria/hipermetropia" },
        { title: "Astigmatismo", url: "/libreria/astigmatismo" },
        { title: "Presbicia", url: "/libreria/presbicia" },

        // Posición ocular
        { title: "Forias", url: "/libreria/forias" },
        { title: "Tropías o estrabismos", url: "/libreria/tropias-o-estrabismos" },
        //Patologias oculares
        { title: "Cataratas", url: "/libreria/cataratas" },
        { title: "Glaucoma", url: "/libreria/glaucoma" },
        { title: "ambliopía", url: "/libreria/ambliopia" },
        { title: "ojo seco", url: "/libreria/ojo-seco" },

        { title: "Daltonismo", url: "/libreria/daltonismo" },
        { title: "fotofobia", url: "/libreria/fotofobia" },
      ],
    },
  ],
};

/**
 * {
  "title": "Condiciones visuales",
  "icon": "Eye",
  "blocks": {
    "Defectos refractivos": [
      { "title": "Miopía", url: "/miopia" },
      { "title": "Hipermetropía", url: "/hipermetropia" },
      { "title": "Astigmatismo", url: "/astigmatismo" },
      { "title": "Presbicia", url: "/presbicia" }
    ],
    "Visión binocular y acomodación": [
      { "title": "Forias", url: "/forias" },
      { "title": "Estrabismos", url: "/estrabismos" },
      { "title": "Convergencias", url: "/convergencias" },
      { "title": "Trastornos de acomodación", url: "/trastornos-acomodacion" },
      { "title": "Inflexibilidad acomodativa", url: "/inflexibilidad-acomodativa" },
      { "title": "Ambliopía", url: "/ambliopia" }
    ],
    "Trastornos funcionales": [
      { "title": "Ojo seco", url: "/ojo-seco" },
      { "title": "Fotofobia", url: "/fotofobia" },
      { "title": "Baja sensibilidad al contraste", url: "/baja-sensibilidad-contraste" }
    ],
    "Percepción del color": [
      { "title": "Daltonismo", url: "/daltonismo" },
      { "title": "Acromatopsia", url: "/acromatopsia" }
    ],
    "Patologías oculares": [
      { "title": "Cataratas", url: "/cataratas" },
      { "title": "Glaucoma", url: "/glaucoma" },
      { "title": "Degeneración macular", url: "/degeneracion-macular" },
      { "title": "Retinopatía diabética", url: "/retinopatia-diabetica" },
      { "title": "Desprendimiento de retina", url: "/desprendimiento-retina" },
      { "title": "Queratocono", url: "/queratocono" },
      { "title": "Uveítis", url: "/uveitis" }
    ]
  }
}

 */
/**
 *   laboratoryTools: [
    {
      title: "Medicion",
      icon: GalleryVerticalEnd,
      blocks: [
        {
          title: "Lensometro",
          url: "/herramientas-de-aboratorio/medicion/lensometro",
        },
        {
          title: "Calibrador digital",
          url: "/herramientas-de-aboratorio/medicion/calibrador_digital",
        },
        {
          title: "Regla PD",
          url: "/herramientas-de-aboratorio/medicion/regla_pd",
        },
        {
          title: "Esferometro",
          url: "/herramientas-de-aboratorio/medicion/esferometro",
        },
        {
          title: "Medidor de curvatura",
          url: "/herramientas-de-aboratorio/medicion/medidor_curvatura",
        },
        {
          title: "Pupimetro",
          url: "/herramientas-de-aboratorio/medicion/pupimetro",
        },
      ],
    },
    {
      title: "Tallado",
      icon: GalleryVerticalEnd,
      blocks: [
        {
          title: "Biseladora",
          url: "/herramientas-de-aboratorio/tallado/biseladora",
        },
        {
          title: "Bloqueadora",
          url: "/herramientas-de-aboratorio/tallado/bloqueadora",
        },
        {
          title: "Generador digital",
          url: "/herramientas-de-aboratorio/tallado/generador_digital",
        },
        {
          title: "Pulidora",
          url: "/herramientas-de-aboratorio/tallado/pulidora",
        },
        {
          title: "Desbastadora",
          url: "/herramientas-de-aboratorio/tallado/desbastadora",
        },
        {
          title: "Centrado",
          url: "/herramientas-de-aboratorio/tallado/centrado",
        },
      ],
    },
    {
      title: "Herramientas",
      icon: GalleryVerticalEnd,
      blocks: [
        {
          title: "Alicate universal",
          url: "/herramientas-de-aboratorio/herramientas/alicate_universal",
        },
        {
          title: "Alicate de corte",
          url: "/herramientas-de-aboratorio/herramientas/alicate_corte",
        },
        {
          title: "Alicate punta redonda",
          url: "/herramientas-de-aboratorio/herramientas/alicate_punta_redonda",
        },
        {
          title: "Destornilladores",
          url: "/herramientas-de-aboratorio/herramientas/destornilladores",
        },
        {
          title: "Pinzas de ajuste",
          url: "/herramientas-de-aboratorio/herramientas/pinzas_ajuste",
        },
        {
          title: "Limas",
          url: "/herramientas-de-aboratorio/herramientas/limas",
        },
      ],
    },
    {
      title: "Procesos",
      icon: GalleryVerticalEnd,
      blocks: [
        {
          title: "Baño hard coat",
          url: "/herramientas-de-aboratorio/procesos/hard-coat",
        },
        {
          title: "Tinturas",
          url: "/herramientas-de-aboratorio/procesos/tinturas",
        },
        {
          title: "Horno para tintura",
          url: "/herramientas-de-aboratorio/procesos/horno_tintura",
        },
        { title: "Proceso AR", url: "/herramientas-de-aboratorio/procesos/ar" },
        {
          title: "lavadora ultrasónica",
          url: "/herramientas-de-aboratorio/procesos/lavadora-ultrasonica",
        },
        {
          title: "Estación de estiramiento",
          url: "/herramientas-de-aboratorio/procesos/estacion-de-estiramiento",
        },
        {
          title: "Estación de control óptico",
          url: "/herramientas-de-aboratorio/procesos/estacion-de-control-optico",
        },
        {
          title: "Estación de de análisis fotometrico",
          url: "/herramientas-de-aboratorio/procesos/estacion-de-analisis-fotometrico",
        },
        {
          title: "Prensa de laminación óptica",
          url: "/herramientas-de-aboratorio/procesos/prensa-de-laminacion-optica",
        },

        {
          title: "Horno de curado",
          url: "/herramientas-de-aboratorio/procesos/horno-de-curado",
        },

        {
          title: "Cámara de vacío",
          url: "/herramientas-de-aboratorio/procesos/camara-de-vacio",
        },
        {
          title: "talladora digital de superficie libre",
          url: "/herramientas-de-aboratorio/procesos/talladora-digital-de-superficie-libre",
        },
      ],
    },
    {
      title: "Control",
      icon: GalleryVerticalEnd,
      blocks: [
        {
          title: "Plantilla de centrado",
          url: "/herramientas-de-aboratorio/control/plantilla_centrado",
        },
        {
          title: "Medidor de espesor",
          url: "/herramientas-de-aboratorio/control/medidor_espesor",
        },
        {
          title: "Lampara de inspeccion",
          url: "/herramientas-de-aboratorio/control/lampara_inspeccion",
        },
        {
          title: "Tablas milimetradas",
          url: "/herramientas-de-aboratorio/control/tablas_milimetradas",
        },
      ],
    },
    {
      title: "Montaje",
      icon: GalleryVerticalEnd,
      blocks: [
        {
          title: "Calentador de armazones",
          url: "/herramientas-de-aboratorio/montaje/calentador",
        },
        {
          title: "Succionadores",
          url: "/herramientas-de-aboratorio/montaje/succionadores",
        },
        {
          title: "Plantillas",
          url: "/herramientas-de-aboratorio/montaje/plantillas",
        },
      ],
    },
  ],
 */
