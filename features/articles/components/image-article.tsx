import { MDImage } from "@/components/ui";

export const ImageArticle = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <MDImage
        {...props}
        className="mx-auto my-5 rounded-xl w-[75%] 2xl:w-[50%]"
    />
);