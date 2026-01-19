import { FaceShapeGrid } from "@/components/face-shapes/face-shape-grid";

const Page = () => {
  return (
    <section className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-30">
        Cómo elegir las gafas perfectas según la forma de los rostros
      </h1>

      <FaceShapeGrid />
    </section>
  );
};

export default Page;
