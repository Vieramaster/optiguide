//COMPONENTS
import { faceShapes } from "../../data/face-shapes";
import { MDImage } from "@/components/ui";
import { FramesList} from "./frames-list";

export const FaceShapeList = () => (
  <ul className="w-full flex flex-col gap-5 justify-center items-center">
    {faceShapes.map(({ imageURL, name, description, frameIds }) => (
      <li
        key={name}
        className=" bg-secondary text-secundary w-72 lg:w-[35rem] rounded-lg overflow-hidden"
      >
        <div className="lg:flex gap-4">
          {/* Imagen */}
          <div className="p-3 lg:w-2/5">
            <MDImage
              src={imageURL}
              alt={name}
              width={256}
              height={256}
              className="w-full rounded-md object-cover"
            />
          </div>

          {/* Texto */}
          <div className="px-4 lg:w-3/5 lg:text-left lg:pt-4 place-content-center">
            <h3 className="text-3xl font-bold mb-4">{name}</h3>
            <p className="">{description}</p>
          </div>
        </div>

        {/* Frames */}
        <FramesList frames={frameIds} />
      </li>
    ))}
  </ul>
);
