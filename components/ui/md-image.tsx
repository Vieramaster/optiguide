//FRAMEWORK
import Image from "next/image";
//UTILS
import { isValidImageSrc } from "@/lib/utils/image-validator";
import { parseImageDimensions } from "@/lib/utils/image-dimensions";

type MDImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const MDImage = ({
  src,
  alt,
  width,
  height,
  className,
  ...rest
}: MDImageProps) => {
  if (typeof src !== "string" || !isValidImageSrc(src)) return null;

  const { width: imageWidth, height: imageHeight } = parseImageDimensions(
    width,
    height,
  );

  return (
    <Image
      src={src}
      alt={alt || ""}
      width={imageWidth}
      height={imageHeight}
      sizes="(max-width: 1024px) 100vw, 800px"
      className={`mx-auto my-5 rounded-xl w-[75%] 2xl:w-[50%] ${className ?? ""}`}
      {...rest}
    />
  );
};

