
import { FaceShape } from "../types/frames";

export const faceShapes: FaceShape[] = [
  {
    name: "Cuadrado",
    description: "Mandíbula marcada, convienen las formas suaves.",
    imageURL: "/images/face-shapes/faces/square.webp",
    frameIds: ["round", "oval", "aviator", "shield"],
  },
  {
    name: "Rectangular",
    description: "Rostro alargado, conviene sumar las curvas.",
    imageURL: "/images/face-shapes/faces/rectangle.webp",
    frameIds: ["round", "oval", "aviator", "geometric", "shield"],
  },
  {
    name: "Rectángulo redondeado",
    description: "Alargado pero con curvas suaves.",
    imageURL: "/images/face-shapes/faces/rounded-rectangle.webp",
    frameIds: ["aviator", "round", "geometric", "shield"],
  },
  {
    name: "Redondo",
    description: "Curvas predominantes, convienen las formas angulosas.",
    imageURL: "/images/face-shapes/faces/round.webp",
    frameIds: ["rectangular", "square", "geometric", "browline", "shield"],
  },
  {
    name: "Triángulo",
    description: "Mandíbula ancha, frente angosta.",
    imageURL: "/images/face-shapes/faces/triangle.webp",
    frameIds: ["aviator", "browline", "geometric", "shield"],
  },

  {
    name: "Corazón",
    description: "Frente amplia, pómulos suaves.",
    imageURL: "/images/face-shapes/faces/heart.webp",
    frameIds: ["aviator", "round", "oval", "butterfly", "shield"],
  },
  {
    name: "Diamante",
    description: "Pómulos marcados, frente y mentón angostos.",
    imageURL: "/images/face-shapes/faces/diamond.webp",
    frameIds: ["oval", "round", "aviator", "catEye"],
  },
  {
    name: "Ovalado",
    description: "Rostro equilibrado, acepta casi todas las formas.",
    imageURL: "/images/face-shapes/faces/oval.webp",
    frameIds: [
      "aviator",
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
