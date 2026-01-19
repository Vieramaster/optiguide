import { faceShapes } from "@/data/face-shapes";
import { FaceShapeCard } from "./face-shape-card";

export const FaceShapeGrid = () => {
  return (
    <ul className="mx-auto grid px-10 max-w-7xl grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 justify-items-center">
      {faceShapes.map((shape) => (
        <li key={shape.name}>
          <FaceShapeCard {...shape} />
        </li>
      ))}
    </ul>
  );
};
