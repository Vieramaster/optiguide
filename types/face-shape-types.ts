export type FrameType = {
    name: string;
    imageURL: string;
    femaleOnly?: boolean;
  };
  
  export type FaceShapeType = {
    name: string;
    description:string
    imageURL: string;
    frames: readonly FrameType[];
  };
  
  export type FramesType = FaceShapeType["frames"];

