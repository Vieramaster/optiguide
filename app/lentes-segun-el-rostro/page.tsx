import Image from "next/image";
import { faceShapes } from "@/data/face-shapes";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
const Page = () => {
  return (
    <section className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-30">
        Cómo elegir las gafas perfectas según la forma de los rostros
      </h1>

      <ul className="mx-auto  grid px-10 max-w-7xl  grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 justify-items-center">
        {faceShapes.map(({ name, imageURL, frames }) => (
          <Popover key={name}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="relative group hover:brightness-95 size-52 hadow-lg flex flex-col  text-center px-0"
              >
                <Image
                  src={imageURL}
                  alt={name}
                  width={256}
                  height={256}
                  className="w-full h-auto  rounded-lg "
                />
                <span className="absolute bg-background rounded-md px-2 bottom-4 text-lg font-semibold">
                  {name}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 flex flex-col gap-4">
              <ul className="flex flex-wrap gap-3 justify-center items-center ">
                {frames.map(({ name, imageURL, femaleOnly }) => (
                  <li key={name} >
                    <Image
                      src={imageURL}
                      alt={name}
                      width={120}
                      height={36}
                      className={femaleOnly ? "bg-pink-200 rounded-lg" : ""}
                    />
                    <p className="text-center text-sm italic">{name}</p>
                  </li>
                ))}
              </ul>

            </PopoverContent>
          </Popover>
        ))}
      </ul>
    </section>
  );
};

export default Page;
