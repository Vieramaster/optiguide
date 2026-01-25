import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { FaceShapeFrames } from "./face-shape-frames";
import { FaceShapeType } from "@/types/face-shape-types";

export const FaceShapeCard = ({ name, imageURL, frameIds, description }: FaceShapeType) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          aria-label={`Ver monturas para rostro ${name}`}
          className="relative group hover:brightness-95 size-52 shadow-lg flex flex-col px-0"
        >
          <Image
            src={imageURL}
            alt={name}
            width={256}
            height={256}
            className="w-full h-auto rounded-lg"
          />
          <span className="absolute bottom-4 bg-background rounded-md px-2 text-lg font-semibold pointer-events-none">
            {name}
          </span>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-80">
        <FaceShapeFrames frames={frameIds} />
      
      </PopoverContent>
    </Popover>
  );
};
