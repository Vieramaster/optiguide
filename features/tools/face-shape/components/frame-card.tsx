import type { Frame } from "../types/frames";

import { availableFrames } from "../constants/available-frames";

interface FrameCardProps {
  frame: Frame;
}

export const FrameCard = ({ frame }: FrameCardProps) => {
  const frameDetails = availableFrames.find(({ id }) => id === frame);
  if (!frameDetails) return null;
  const { name, icon: Icon } = frameDetails;

  return (
    <li className="flex flex-col items-center " aria-label={name}>
      <Icon
        className="w-28 h-14 fill-current"
        aria-hidden="true"
        focusable="false"
      />
      <p className="text-xs ">{name}</p>
    </li>
  );
};
