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

export const FaceShapeCard = ({ name, imageURL, frameIds }: FaceShape) =>
  <Popover>
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