import Image from "next/image";

import { isValidImageSrc } from "@/shared/validation/image-validator";

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

  const imageWidth =
    typeof width === "string" ? parseInt(width, 10) : (width ?? 600);
  const imageHeight =
    typeof height === "string" ? parseInt(height, 10) : (height ?? 400);

  return (
    <Image
      src={src}
      alt={alt || ""}
      width={imageWidth}
      height={imageHeight}
      sizes="(max-width: 1024px) 100vw, 800px"
      loading="lazy"
      className={className}
      {...rest}
    />
  );
};
