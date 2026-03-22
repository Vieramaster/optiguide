import { Minus, GlassesIcon } from "lucide-react";
interface PageTitleProps {
  textSize: "text-4xl" | "text-2xl"
}
export const PageTitle = ({ textSize }: PageTitleProps) => (
  <div className={`flex justify-center items-center ${textSize}`}>
    <p className=" font-heading font-semibold mt-1 ">OPTIGUIDE</p>
    <Minus className="rotate-90 w-[1.2em] h-[1.2em] pl-0.5" />
    <GlassesIcon className="w-[1.2em] h-[1.2em] pl-0.5" />
  </div>
);
