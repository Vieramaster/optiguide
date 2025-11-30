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
      isActive: true,
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
          url: "/libreria/tratamiento-antiempañante",
        },
        {
          title: "Polarizado",
          url: "/libreria/polarizado",
        },
        {
          title: "Anti rayas",
          url: "/libreria/anti-rayas",
        },
        {
          title: "Recubrimiento Espejado",
          url: "/libreria/recubrimiento-espejado",
        },
      ],
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
    {
      title: "Condiciones visuales",
      url: "/Condiciones",
      icon: Eye,
      blocks: [
        { title: "Miopía", url: "/condiciones/miopia" },
        { title: "Hipermetropía", url: "/condiciones/hipermetropia" },
        { title: "Astigmatismo", url: "/condiciones/astigmatismo" },
        { title: "Presbicia", url: "/condiciones/presbicia" },

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
  ],
  laboratoryTools: [
    {
      title: "Medicion",
      url: "/laboratorio/medicion",
      icon: GalleryVerticalEnd,
      blocks: [
        { title: "Lensometro", url: "/laboratorio/medicion/lensometro" },
        {
          title: "Calibrador digital",
          url: "/laboratorio/medicion/calibrador_digital",
        },
        { title: "Regla PD", url: "/laboratorio/medicion/regla_pd" },
        { title: "Esferometro", url: "/laboratorio/medicion/esferometro" },
        {
          title: "Medidor de curvatura",
          url: "/laboratorio/medicion/medidor_curvatura",
        },
        { title: "Pupimetro", url: "/laboratorio/medicion/pupimetro" },
      ],
    },
    {
      title: "Tallado",
      url: "/laboratorio/tallado",
      icon: GalleryVerticalEnd,
      blocks: [
        { title: "Biseladora", url: "/laboratorio/tallado/biseladora" },
        { title: "Bloqueadora", url: "/laboratorio/tallado/bloqueadora" },
        {
          title: "Generador digital",
          url: "/laboratorio/tallado/generador_digital",
        },
        { title: "Pulidora", url: "/laboratorio/tallado/pulidora" },
        { title: "Desbastadora", url: "/laboratorio/tallado/desbastadora" },
        { title: "Centrado", url: "/laboratorio/tallado/centrado" },
      ],
    },
    {
      title: "Herramientas",
      url: "/laboratorio/herramientas",
      icon: GalleryVerticalEnd,
      blocks: [
        {
          title: "Alicate universal",
          url: "/laboratorio/herramientas/alicate_universal",
        },
        {
          title: "Alicate de corte",
          url: "/laboratorio/herramientas/alicate_corte",
        },
        {
          title: "Alicate punta redonda",
          url: "/laboratorio/herramientas/alicate_punta_redonda",
        },
        {
          title: "Destornilladores",
          url: "/laboratorio/herramientas/destornilladores",
        },
        {
          title: "Pinzas de ajuste",
          url: "/laboratorio/herramientas/pinzas_ajuste",
        },
        { title: "Limas", url: "/laboratorio/herramientas/limas" },
      ],
    },
    {
      title: "Procesos",
      url: "/laboratorio/procesos",
      icon: GalleryVerticalEnd,
      blocks: [
        { title: "Baño hard coat", url: "/laboratorio/procesos/hard_coat" },
        { title: "Tinturas", url: "/laboratorio/procesos/tinturas" },
        {
          title: "Horno para tintura",
          url: "/laboratorio/procesos/horno_tintura",
        },
        { title: "Proceso AR", url: "/laboratorio/procesos/ar" },
        { title: "Ultrasonido", url: "/laboratorio/procesos/ultrasonido" },
      ],
    },
    {
      title: "Control",
      url: "/laboratorio/control",
      icon: GalleryVerticalEnd,
      blocks: [
        {
          title: "Plantilla de centrado",
          url: "/laboratorio/control/plantilla_centrado",
        },
        {
          title: "Medidor de espesor",
          url: "/laboratorio/control/medidor_espesor",
        },
        {
          title: "Lampara de inspeccion",
          url: "/laboratorio/control/lampara_inspeccion",
        },
        {
          title: "Tablas milimetradas",
          url: "/laboratorio/control/tablas_milimetradas",
        },
      ],
    },
    {
      title: "Montaje",
      url: "/laboratorio/montaje",
      icon: GalleryVerticalEnd,
      blocks: [
        {
          title: "Calentador de armazones",
          url: "/laboratorio/montaje/calentador",
        },
        { title: "Succionadores", url: "/laboratorio/montaje/succionadores" },
        { title: "Plantillas", url: "/laboratorio/montaje/plantillas" },
      ],
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
};
