import Image from "next/image";
import { FramesType } from "@/types/face-shape-types";

interface FaceShapeFramesProps {
  frames: FramesType;
}
export const FaceShapeFrames = ({ frames }: FaceShapeFramesProps) => {
  return (
    <ul className="flex flex-wrap gap-3 justify-center items-center">
      {frames.map(({ name, imageURL, femaleOnly }) => (
        <li key={name}>
          <Image
            src={imageURL}
            alt={name}
            width={120}
            height={36}
            className={femaleOnly ? "bg-pink-200 rounded-lg" : ""}
          />
  
        </li>
      ))}
    </ul>
  );
};
