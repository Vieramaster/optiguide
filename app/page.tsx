import { PageTitle } from "@/components/page-title";

const MainPage = () => {
  return (
    <section className="h-full w-full p-5  flex flex-col gap-8 justify-center items-center">
      <div className=" flex container-type-inline-size text-4xl">
        <PageTitle />
      </div>
      <article className="text-centerw-2/3 flex flex-col gap-8 items-center text-center">
        <h2 className="text-2xl">
          Guia práctica para quienes empiezan a trabajar en óptica.
        </h2>
        <p>Conceptos claros, ejemplos reales y explicaciones simples para aprender más rapido el trabajo diario</p>
      </article>
    </section>
  );
}
export default MainPage