//COMPONENTS
import { faceShapes } from "../../data/face-shapes";
import { MDImage } from "@/components/ui";
import { FramesList} from "./frames-list";

export const FaceShapeList = () => (
  <ul className="w-full flex flex-col gap-8 justify-center items-center lg:gap-10">
    {faceShapes.map(({ imageURL, name, description, frameIds }) => (
      <li
        key={name}
        className=" bg-secondary text-secundary w-72 lg:w-160 rounded-lg overflow-hidden pb-4"
      >
        <div className="lg:flex gap-4 lg:gap-6 ">
          {/* Imagen */}
          <div className="p-3 lg:w-[30%]">
            <MDImage
              src={imageURL}
              alt={name}
              width={256}
              height={256}
              className="w-full rounded-md object-cover"
            />
          </div>

          {/* Texto */}
          <div className="px-4 lg:w-[70%] lg:text-left lg:pt-4 place-content-start">
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <p className="">{description}</p>
          </div>
        </div>

        {/* Frames */}
        <FramesList frames={frameIds} />
      </li>
    ))}
  </ul>
);
