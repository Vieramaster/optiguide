import {framesData} from "../data/frames-ids";


  export type FaceShapeType = {
    name: string;
    description:string
    imageURL: string;
    frameIds: readonly FrameIdType[];
  };

// 🔹 Type con todas las keys
export type FrameIdType = keyof typeof framesData;

