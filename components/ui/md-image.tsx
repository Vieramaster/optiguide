import Image from "next/image";

import { isValidImageSrc } from "@/shared/utils/image/image-validator";
import { parseImageDimensions } from "@/shared/utils/image/image-dimensions";

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
      loading="eager"
      className={className}
      {...rest}
    />
  );
};
