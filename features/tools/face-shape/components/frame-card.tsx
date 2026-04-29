import type { Frame } from "../types/frames";

import { framesData } from "../data/frames-ids";

interface FrameCardProps {
  frame: Frame;
}

export const FrameCard = ({ frame }: FrameCardProps) => {
  const frameData = framesData.find(({ id }) => id === frame);
  if (!frameData) return null;
  const { name, Ico } = frameData;

  return (
    <li className="flex flex-col items-center " aria-label={name}>
      <Ico
        className="w-28 h-14 fill-current"
        aria-hidden="true"
        focusable="false"
      />
      <p className="text-xs ">{name}</p>
    </li>
  );
};
