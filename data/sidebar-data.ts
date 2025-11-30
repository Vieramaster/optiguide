//TYPES
import type { SidebarDataType } from "@/types/sidebar-data-types";
//ICOS
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  DraftingCompass,
  ScanSearch,
  CircleSlash2,
  CircleDot,
  Sparkle,
  Smile,
  Eye,
} from "lucide-react";

export const sidebarData: SidebarDataType = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  tools: [
    {
      title: "Simulador de espesor de lentes",
      url: "/simulador",
      icon: DraftingCompass,
    },
    {
      title: "Filtro de lentes",
      url: "#",
      icon: ScanSearch,
    },
    {
      title: "Pasillo de multifocales",
      url: "#",
      icon: CircleSlash2,
    },
    {
      title: "Anteojos según el rostro",
      url: "#",
      icon: Smile,
    },
  ],
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],

  library: [

    {
      title: "Tratamientos",
      url: "/libreria/",
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
      url: "/Condiciones",
      icon: Eye,
      blocks: [
        { title: "Miopía", url: "/libreria/miopia" },
        { title: "Hipermetropía", url: "/libreria/hipermetropia" },
        { title: "Astigmatismo", url: "/libreria/astigmatismo" },
        { title: "Presbicia", url: "/libreria/presbicia" },

        { title: "Exoforia", url: "/condiciones/exoforia" },
        { title: "Esoforia", url: "/condiciones/esoforia" },
        { title: "Hiperforia", url: "/condiciones/hiperforia" },
        { title: "Exotropía", url: "/condiciones/exotropia" },
        { title: "Esotropía", url: "/condiciones/esotropia" },
        { title: "Hipertropía", url: "/condiciones/hipertropia" },

        {
          title: "Insuficiencia de convergencia",
          url: "/condiciones/insuficiencia-convergencia",
        },
        {
          title: "Exceso de convergencia",
          url: "/condiciones/exceso-convergencia",
        },
        {
          title: "Insuficiencia de acomodación",
          url: "/condiciones/insuficiencia-acomodacion",
        },
        {
          title: "Exceso de acomodación",
          url: "/condiciones/exceso-acomodacion",
        },
        {
          title: "Inflexibilidad acomodativa",
          url: "/condiciones/inflexibilidad-acomodativa",
        },

        { title: "Ambliopía", url: "/condiciones/ambliopia" },
        { title: "Ojo seco", url: "/condiciones/ojo-seco" },
        { title: "Fotofobia", url: "/condiciones/fotofobia" },
        {
          title: "Baja sensibilidad al contraste",
          url: "/condiciones/baja-sensibilidad-contraste",
        },

        { title: "Deuteranomalía", url: "/condiciones/deuteranomalía" },
        { title: "Protanomalía", url: "/condiciones/protanomalia" },
        { title: "Tritanomalía", url: "/condiciones/tritanomalia" },
        { title: "Acromatopsia", url: "/condiciones/acromatopsia" },

        { title: "Cataratas", url: "/condiciones/cataratas" },
        { title: "Glaucoma", url: "/condiciones/glaucoma" },
        {
          title: "Degeneración macular",
          url: "/condiciones/degeneracion-macular",
        },
        {
          title: "Retinopatía diabética",
          url: "/condiciones/retinopatia-diabetica",
        },
        {
          title: "Desprendimiento de retina",
          url: "/condiciones/desprendimiento-retina",
        },
        { title: "Queratocono", url: "/condiciones/queratocono" },
        { title: "Uveítis", url: "/condiciones/uveitis" },
      ],
    },
    {
      title: "Materiales e índice",
      url: "/libreria/",
      icon: Sparkle,
      blocks: [
        {
          title: "materiales de lentes",
          url: "/libreria/materiales-de-lentes"
        },
        {
          title: "Indice de refracción",
          url: "/libreria/indice-de-refraccion"
        }

      ]
    },
    {
      title: "Lentes de contacto",
      url: "/lentesContacto",
      icon: CircleDot,
      blocks: [
        {
          title: "Acuvue 2",
          url: "#",
        },
        {
          title: "Acuvue Oasys",
          url: "#",
        },
        {
          title: "Acuvue Vita",
          url: "#",
        },
        {
          title: "Acuvue Moist",
          url: "#",
        },
        {
          title: "Acuvue Oasys multifocal",
          url: "#",
        },
      ],
    },
  ],
  laboratoryTools: [
    {
      title: "Medicion",
      url: "/herramientas-de-aboratorio/medicion",
      icon: GalleryVerticalEnd,
      blocks: [
        { title: "Lensometro", url: "/herramientas-de-aboratorio/medicion/lensometro" },
        {
          title: "Calibrador digital",
          url: "/herramientas-de-aboratorio/medicion/calibrador_digital",
        },
        { title: "Regla PD", url: "/herramientas-de-aboratorio/medicion/regla_pd" },
        { title: "Esferometro", url: "/herramientas-de-aboratorio/medicion/esferometro" },
        {
          title: "Medidor de curvatura",
          url: "/herramientas-de-aboratorio/medicion/medidor_curvatura",
        },
        { title: "Pupimetro", url: "/herramientas-de-aboratorio/medicion/pupimetro" },
      ],
    },
    {
      title: "Tallado",
      url: "/herramientas-de-aboratorio/tallado",
      icon: GalleryVerticalEnd,
      blocks: [
        { title: "Biseladora", url: "/herramientas-de-aboratorio/tallado/biseladora" },
        { title: "Bloqueadora", url: "/herramientas-de-aboratorio/tallado/bloqueadora" },
        {
          title: "Generador digital",
          url: "/herramientas-de-aboratorio/tallado/generador_digital",
        },
        { title: "Pulidora", url: "/herramientas-de-aboratorio/tallado/pulidora" },
        { title: "Desbastadora", url: "/herramientas-de-aboratorio/tallado/desbastadora" },
        { title: "Centrado", url: "/herramientas-de-aboratorio/tallado/centrado" },
      ],
    },
    {
      title: "Herramientas",
      url: "/herramientas-de-aboratorio/herramientas",
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
        { title: "Limas", url: "/herramientas-de-aboratorio/herramientas/limas" },
      ],
    },
    {
      title: "Procesos",
      url: "/herramientas-de-aboratorio/procesos",
      icon: GalleryVerticalEnd,
      blocks: [
        { title: "Baño hard coat", url: "/herramientas-de-aboratorio/procesos/hard-coat" },
        { title: "Tinturas", url: "/herramientas-de-aboratorio/procesos/tinturas" },
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

        { title: "Cámara de vacío", url: "/herramientas-de-aboratorio/procesos/camara-de-vacio" },
        { title: "talladora digital de superficie libre", url: "/herramientas-de-aboratorio/procesos/talladora-digital-de-superficie-libre" }
      ],
    },
    {
      title: "Control",
      url: "/herramientas-de-aboratorio/control",
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
      url: "/herramientas-de-aboratorio/montaje",
      icon: GalleryVerticalEnd,
      blocks: [
        {
          title: "Calentador de armazones",
          url: "/herramientas-de-aboratorio/montaje/calentador",
        },
        { title: "Succionadores", url: "/herramientas-de-aboratorio/montaje/succionadores" },
        { title: "Plantillas", url: "/herramientas-de-aboratorio/montaje/plantillas" },
      ],
    },
  ],

};
