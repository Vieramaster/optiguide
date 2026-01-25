import {framesIds} from "../data/frames-ids"


  export type FaceShapeType = {
    name: string;
    description:string
    imageURL: string;
    frameIds:  FrameIdType[];
  };
  
// 🔹 Type con todas las keys
export type FrameIdType = keyof typeof framesIds;

