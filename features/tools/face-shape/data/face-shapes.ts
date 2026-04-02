
import { FaceShape } from "../types/frames";


export const faceShapes: FaceShape[] = [
  {
    name: "Cuadrado",
    description: "Rostro con mandíbula marcada, frente amplia y laterales rectos. La clave es suavizar los ángulos: armazones redondos u ovalados reducen la rigidez visual y aportan equilibrio. Evitá formas cuadradas o muy rectas porque refuerzan la dureza natural.",
    imageURL: "/images/face-shapes/faces/square.webp",
    frameIds: ["round", "oval", "aviator", "pantos", "shield"],
  },
  {
    name: "Rectangular",
    description: "Más largo que ancho, con líneas rectas y mandíbula definida. Conviene acortar visualmente el rostro: lentes altos o con buena altura de lente, y formas curvas que rompan la verticalidad. Evitá armazones angostos o muy chicos.",
    imageURL: "/images/face-shapes/faces/rectangle.webp",
    frameIds: ["round", "oval", "aviator", "pantos", "geometric", "shield"],
  },
  {
    name: "Rectángulo redondeado",
    description: "Proporciones alargadas pero con bordes suaves. Funciona bien mantener esa armonía: armazones ligeramente curvos o mixtos (ni muy redondos ni muy rectos). Evitá extremos: ni demasiado anguloso ni completamente circular.",
    imageURL: "/images/face-shapes/faces/rounded-rectangle.webp",
    frameIds: ["aviator", "round", "pantos", "geometric", "shield"],
  },
  {
    name: "Redondo",
    description: "Ancho y largo similares, con mejillas llenas y sin ángulos marcados. Necesitás contraste: armazones rectangulares o cuadrados afinan el rostro y generan estructura. Evitá formas redondas que acentúan la circularidad.",
    imageURL: "/images/face-shapes/faces/round.webp",
    frameIds: ["rectangular", "square", "wayfarer", "navigator", "geometric", "browline", "shield"],
  },
  {
    name: "Triángulo",
    description: "Mandíbula ancha y frente más estrecha. El objetivo es equilibrar la parte superior: armazones con peso visual arriba (tipo browline o aviador) amplían la frente. Evitá monturas pesadas abajo.",
    imageURL: "/images/face-shapes/faces/triangle.webp",
    frameIds: ["aviator", "navigator", "browline", "geometric", "shield"],
  },
  {
    name: "Corazón",
    description: "Frente amplia y mentón fino. Conviene compensar la parte superior: armazones livianos o con foco abajo equilibran el rostro. Formas redondeadas o tipo aviador suavizan la transición hacia el mentón.",
    imageURL: "/images/face-shapes/faces/heart.webp",
    frameIds: ["aviator", "navigator", "round", "oval", "butterfly", "shield"],
  },
  {
    name: "Diamante",
    description: "Pómulos prominentes, con frente y mandíbula más estrechas. La idea es suavizar y dar apoyo lateral: armazones ovalados o con curvas reducen el protagonismo de los pómulos. Evitá formas muy angulosas o estrechas.",
    imageURL: "/images/face-shapes/faces/diamond.webp",
    frameIds: ["oval", "round", "pantos", "aviator", "catEye"],
  },
  {
    name: "Ovalado",
    description: "Proporción equilibrada entre largo y ancho, sin ángulos extremos. Es el más versátil: casi cualquier armazón funciona. Solo evitá formas demasiado grandes o desproporcionadas que rompan el balance natural.",
    imageURL: "/images/face-shapes/faces/oval.webp",
    frameIds: [
      "aviator",
      "navigator",
      "wayfarer",
      "pantos",
      "round",
      "oval",
      "rectangular",
      "square",
      "geometric",
      "browline",
      "shield",
      "catEye",
      "butterfly",
    ],
  },
] as const;

