import { FRAMES } from "../data/frames"

export type Frame = typeof FRAMES[number];

export type FaceShape = {
    name: string;
    description: string;
    imageURL: string;
    frameIds: Frame[];
};


export type FrameData = {
    id:Frame
    name: string
    imageURL: string
    femaleOnly: boolean
}

