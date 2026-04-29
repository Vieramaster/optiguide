import { Title } from "@/components/ui";

import { FaceShapeCard } from "./components/face-shape-card";
import { FaceShapeSection } from "./components/face-shape-section";

import { faceShapes } from "./data/face-shapes";

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
