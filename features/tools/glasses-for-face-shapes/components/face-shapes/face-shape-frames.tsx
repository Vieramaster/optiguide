
import type { Frame } from "../../types/frames";
import { framesData } from "@/features/tools/glasses-for-face-shapes/data/frames-ids";
import { MDImage } from "@/components/ui";
interface FaceShapeFramesProps {
  frames: Frame[];
}

export const FaceShapeFrames = ({ frames }: FaceShapeFramesProps) => (
  <ul className="flex flex-wrap gap-3 justify-center items-center">
    {frames.map((frame) => {
      const frameData = framesData.find(({ id }) => id === frame);

      if (!frameData) {
        throw new Error(`Frame no encontrado: ${frame}`);
      }

      const { name, imageURL, femaleOnly } = frameData;

      return (
        <li key={frame}>
          <MDImage
            src={imageURL}
            alt={name}
            width={120}
            height={40}
            className={femaleOnly ? "bg-pink-200 rounded-lg" : ""}
          />
        </li>
      );
    })}
  </ul>
);

