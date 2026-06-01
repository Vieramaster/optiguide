import { Title } from "@/shared/components/ui";

import { faceShapes } from "../constants/face-shapes";

import { FaceShapeCard } from "./face-shape-card";
import { FaceShapeSection } from "./face-shape-section";

export const FaceShapeGlasses = () => (
  <FaceShapeSection aria-labelledby="face-shape-title">
    <Title id="face-shape-title">
      Cómo elegir las gafas perfectas según la forma de los rostros
    </Title>

    <ul className="mt-16 w-full flex flex-col gap-8 justify-center items-center lg:gap-10">
      {faceShapes.map((item) => (
        <FaceShapeCard key={item.name} shape={item} />
      ))}
    </ul>
  </FaceShapeSection>
);
