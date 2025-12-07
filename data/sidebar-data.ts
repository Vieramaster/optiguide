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

  library: [
    {
      title: "Conceptos básicos",
      icon: Sparkle,
      blocks: [
        { title: "Tipos de lentes", url: "/tipos-de-lentes" },
        { title: "¿Cómo leer una receta?", url: "/como-leer-una-receta" },
        {
          title: "Conversión de transposición",
          url: "/conversion-de-transposicion",
        },

        { title: "Cristales y sus indices", url: "/cristales-y-sus-indices" },
        {
          title: "Armazones y sus materiales",
          url: "/armazones-y-sus-materiales",
        },
      ],
    },
    {
      title: "Tratamientos",
      icon: Sparkle,

      blocks: [
        {
          title: "Tratamiento Antirreflejante",
          url: "/antirreflejante",
        },
        {
          title: "Filtro azul",
          url: "/filtro-azul",
        },
        {
          title: "Filtro Ultravioleta ",
          url: "/filtro-ultravioleta",
        },
        {
          title: "Fotocromáticos ",
          url: "/fotocromaticos",
        },
        {
          title: " Hidrofóbico y Oleofóbico",
          url: "/hidrofobico-y-oleofobico",
        },
        {
          title: "Tratamiento Antiempañante",
          url: "/tratamiento-antiempanante",
        },
        {
          title: "Polarizado",
          url: "/polarizado",
        },
        {
          title: "tratamiento anti rayas",
          url: "/tratamiento-anti-rayas",
        },
        {
          title: "Recubrimiento Espejado",
          url: "/recubrimiento-espejado",
        },
      ],
    },

    {
      title: "Condiciones visuales",

      icon: Eye,
      blocks: [
        { title: "Miopía", url: "/miopia" },
        { title: "Hipermetropía", url: "/hipermetropia" },
        { title: "Astigmatismo", url: "/astigmatismo" },
        { title: "Presbicia", url: "/presbicia" },
        { title: "Exoforia", url: "/exoforia" },
        { title: "Esoforia", url: "/esoforia" },
        { title: "Hiperforia", url: "/hiperforia" },
        { title: "Exotropía", url: "/exotropia" },
        { title: "Esotropía", url: "/esotropia" },
        { title: "Hipertropía", url: "/hipertropia" },

        {
          title: "Insuficiencia de convergencia",
          url: "/insuficiencia-convergencia",
        },
        {
          title: "Exceso de convergencia",
          url: "/exceso-convergencia",
        },
        {
          title: "Insuficiencia de acomodación",
          url: "/insuficiencia-acomodacion",
        },
        {
          title: "Exceso de acomodación",
          url: "/exceso-acomodacion",
        },
        {
          title: "Inflexibilidad acomodativa",
          url: "/inflexibilidad-acomodativa",
        },

        { title: "Ambliopía", url: "/ambliopia" },
        { title: "Ojo seco", url: "/ojo-seco" },
        { title: "Fotofobia", url: "/fotofobia" },
        {
          title: "Baja sensibilidad al contraste",
          url: "/baja-sensibilidad-contraste",
        },

        { title: "Deuteranomalía", url: "/deuteranomalía" },
        { title: "Protanomalía", url: "/protanomalia" },
        { title: "Tritanomalía", url: "/tritanomalia" },
        { title: "Acromatopsia", url: "/acromatopsia" },

        { title: "Cataratas", url: "/cataratas" },
        { title: "Glaucoma", url: "/glaucoma" },
        {
          title: "Degeneración macular",
          url: "/degeneracion-macular",
        },
        {
          title: "Retinopatía diabética",
          url: "/retinopatia-diabetica",
        },
        {
          title: "Desprendimiento de retina",
          url: "/desprendimiento-retina",
        },
        { title: "Queratocono", url: "/queratocono" },
        { title: "Uveítis", url: "/uveitis" },
      ],
    },
  ],
};
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
