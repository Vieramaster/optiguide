import Image from "next/image";
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
  // Validar que src sea un string (Next.js Image no acepta Blob)
  if (typeof src !== "string" || !isValidImageSrc(src)) return null;

  // Convertir width y height a números
  const { width: imageWidth, height: imageHeight } = parseImageDimensions(
    width,
    height
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
