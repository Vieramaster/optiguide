
import { faceShapes } from "@/data/face-shapes";
import Image from "next/image";
const Page = () => {
  return (
    <section className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-10">
        Cómo elegir las gafas perfectas según la forma de los rostros
      </h1>

      <ul className="w-full bg-red-500 my-10 flex flex-col gap-10 items-center">
        <li className="w-48  bg-blue-500">
          {/**bloque 1 */}
          <div className="w-full">
            {/**subloque 1 */}
            <div className="h-12 bg-violet-500 flex justify-center items-center">
              <h2 className="text-white font-semibold text-2xl">cara caejta</h2>
            </div>
            {/**subloque 2 */}
            <div className="w-full ">
              <Image
                src={"/assets/face-shapes/face-shape-square.png"}
                alt="cara caja"
                width={192}
                height={192}
                className="mx-auto my-4 w-48 h-48 object-contain bg-white"
              />
              <div className="px-4">
              <p className="text-white ">
lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              </p>
            </div>
 
            

            </div>

          </div>
          {/**blopque 2 */}
          <ul className="w-full bg-green-500 flex flex-wrap gap-2 justify-center p-2">
            <li className="w-16 h-24 bg-amber-500"></li>
            <li className="w-16 h-24 bg-amber-500"></li>
          </ul>

        </li>

      </ul>
    </section>
  );
};

export default Page;

/**
 * <FaceShapeGrid />
 */