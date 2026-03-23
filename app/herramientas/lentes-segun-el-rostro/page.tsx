import { FaceShapeList } from "@/features/tools/glasses-for-face-shapes/components/face-shapes/face-shape-list";
import { Title } from "@/components/ui/typography";

const Page = () => {
  return (
    <section className="p-10 text-center">
      <Title> Cómo elegir las gafas perfectas según la forma de los rostros</Title>
      <FaceShapeList />
    </section>
  );
};

export default Page;
