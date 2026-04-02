//COMPONENTS
import { MDImage } from "@/components/ui";
import { FrameCard } from "./frame-card";
//TYPES
import { FaceShape } from "../types/frames";

interface FaceShapeProps {
  shape: FaceShape
}
export const FaceShapeCard = ({ shape }: FaceShapeProps) => {
  const { imageURL, name, description, frameIds } = shape;

  return (
    <li className="bg-secondary w-72 lg:w-160 rounded-lg overflow-hidden pb-4 ">
      <article aria-labelledby={`face-shape-${name} ` }>
        <div className="lg:flex gap-4 lg:gap-6">
          
          {/* Imagen */}
          <div className="p-3 lg:w-[30%]">
            <MDImage
              src={imageURL}
              alt={`Forma de rostro ${name}`}
              width={256}
              height={256}
              className="w-full rounded-md object-cover"
            />
          </div>

          {/* Texto */}
          <div className="px-4 lg:w-[70%] lg:text-left lg:pt-4">
            <h3
              id={`face-shape-${name}`}
              className="text-2xl font-bold mb-2"
            >
              {name}
            </h3>
            <p>{description}</p>
          </div>
        </div>

        {/* Frames */}
        <ul
          className="flex flex-wrap gap-3 p-4 justify-center items-center"
          aria-label={`Tipos de monturas recomendadas para rostro ${name}`}
        >
          {frameIds.map((frameId) => (
            <FrameCard key={frameId} frame={frameId} />
          ))}
        </ul>
      </article>
    </li>
  );
};