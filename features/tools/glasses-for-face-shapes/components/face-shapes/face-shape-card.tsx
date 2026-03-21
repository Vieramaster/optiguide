//COMPONENTS
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  MDImage
} from "@/components/ui";
import { FaceShapeFrames } from "./face-shape-frames";

//TYPES
import type { FaceShape } from "../../types/frames";

export const FaceShapeCard = ({ name, imageURL, frameIds, description }: FaceShape) =>

  <ul className="flex flex-col gap-5 bg-violet-500 w-full">
    <li className="bg-red-500 w-72 rounded-lg">
      {/**primer bloque */}
      <div>
        <div className="h-10 place-content-center text-2xl font-bold">
        <h3 className="font-bold"> {name}</h3>
        </div>
        <div className="h- bg-violet-400 flex place-content-center">
          <MDImage
            src={imageURL}
            alt={name}
            width={256}
            height={256}
            className="h-full"
          />
        </div>
        <div className="p-2">

          <p>{description}</p>
        </div>
        <FaceShapeFrames frames={frameIds} />
      </div>
    </li>
  </ul>

/**
 *   <ul className="mx-auto grid px-10 max-w-7xl xl:grid-cols-3 2xl:grid-cols-4 gap-8 justify-items-center">
 *   <Popover>
  <PopoverTrigger asChild>
    <Button
      variant="outline"
      aria-label={`Ver monturas para rostro ${name}`}
      className="relative group hover:brightness-95 size-52 shadow-lg flex flex-col px-0"
    >

      <MDImage 
      src={imageURL}
      alt={name}
      width={256}
      height={256}
      className="w-full h-auto rounded-lg"
      />
      <span className="absolute bottom-2 bg-background rounded-md px-1 text-lg font-semibold pointer-events-none">
        {name}
      </span>
    </Button>
  </PopoverTrigger>

  <PopoverContent className="w-80">
    <FaceShapeFrames frames={frameIds} />
  </PopoverContent>
</Popover>
</ul>
 */