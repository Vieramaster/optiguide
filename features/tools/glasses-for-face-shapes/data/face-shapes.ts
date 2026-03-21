
import { FaceShape } from "../types/frames";

export const faceShapes: FaceShape[] = [
  {
    name: "Cuadrado",
    description: "Rostro con mandíbula fuerte y ángulos definidos. Brillás con armazones de líneas suaves que equilibran tu carácter marcado.",
    imageURL: "/images/face-shapes/faces/square.webp",
    frameIds: ["round", "oval", "aviator", "pantos", "shield"],
  },
  {
    name: "Rectangular",
    description: "Un rostro alargado que pide curvas para suavizar. Los lentes redondeados aportan armonía y balance.",
    imageURL: "/images/face-shapes/faces/rectangle.webp",
    frameIds: ["round", "oval", "aviator", "pantos", "geometric", "shield"],
  },
  {
    name: "Rectángulo redondeado",
    description: "Alargado pero con bordes más gentiles. Se luce con armazones que acompañan esas curvas naturales.",
    imageURL: "/images/face-shapes/faces/rounded-rectangle.webp",
    frameIds: ["aviator", "round", "pantos", "geometric", "shield"],
  },
  {
    name: "Redondo",
    description: "Predominan las curvas y la suavidad. Los lentes angulosos contrastan y realzan tus facciones.",
    imageURL: "/images/face-shapes/faces/round.webp",
    frameIds: ["rectangular", "square", "wayfarer", "navigator", "geometric", "browline", "shield"],
  },
  {
    name: "Triángulo",
    description: "Mandíbula amplia y frente más angosta. Los armazones que abren en la parte superior equilibran tu perfil.",
    imageURL: "/images/face-shapes/faces/triangle.webp",
    frameIds: ["aviator", "navigator", "browline", "geometric", "shield"],
  },
  {
    name: "Corazón",
    description: "Frente generosa y pómulos delicados. Los lentes que suavizan la parte inferior acompañan tu encanto natural.",
    imageURL: "/images/face-shapes/faces/heart.webp",
    frameIds: ["aviator", "navigator", "round", "oval", "butterfly", "shield"],
  },
  {
    name: "Diamante",
    description: "Pómulos protagonistas con frente y mentón más finos. Los armazones ovalados o redondeados resaltan tu elegancia.",
    imageURL: "/images/face-shapes/faces/diamond.webp",
    frameIds: ["oval", "round", "pantos", "aviator", "catEye"],
  },
  {
    name: "Ovalado",
    description: "Un rostro equilibrado y versátil. Tenés la libertad de jugar con casi cualquier estilo de armazón.",
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
