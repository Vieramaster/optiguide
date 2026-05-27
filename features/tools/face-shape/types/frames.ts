import { FRAMES } from "../constants/frames"

export type Frame = typeof FRAMES[number];

export type FaceShape = {
    name: string;
    description: string;
    imageURL: string;
    frameIds: Frame[];
};


export type FrameDetails = {
    id: Frame
    name: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    femaleOnly: boolean
}

