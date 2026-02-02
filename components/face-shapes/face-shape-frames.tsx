import Image from "next/image";
import type { FrameIdType } from "@/types/face-shape-types"
import { framesData } from "@/data/frames-ids";

interface FaceShapeFramesProps {
  frames: readonly FrameIdType[];
}

export const FaceShapeFrames = ({ frames }: FaceShapeFramesProps) => {
  return (
    <ul className="flex flex-wrap gap-3 justify-center items-center">
      {frames.map(frameId => {
        const { imageURL, name, femaleOnly } = framesData[frameId];
        return (
          <li key={frameId}>
            <Image
              src={imageURL}
              alt={name}
              width={120}
              height={36}
              className={femaleOnly ? "bg-pink-200 rounded-lg" : ""}
            />
          </li>
        );
      })}
    </ul>
  );
};
