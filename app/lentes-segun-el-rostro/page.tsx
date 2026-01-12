import Image from "next/image";

const Page = () => {

    const faceShapes = [
        {
            name: "Rostro Ovalado",
            description: "El rostro ovalado es equilibrado y versátil, permitiendo una amplia variedad de estilos de gafas. Las monturas rectangulares, cuadradas y de aviador son ideales para resaltar sus proporciones armoniosas.",
            imageUrl: "/images/rostro-ovalado.jpg",
            frames: ["img1.jpg", "img2.jpg"]
        },
        {
            name: "Rostro Redondo",
            description: "Para rostros redondos, las gafas angulares y rectangulares ayudan a definir y alargar el rostro. Evita monturas redondeadas que acentúan la forma circular.",
            imageUrl: "/images/rostro-redondo.jpg",
            frames: ["img3.jpg", "img4.jpg"]
        },
        {
            name: "Rostro Cuadrado",
            description: "Las gafas con monturas redondeadas o ovaladas suavizan las líneas fuertes de un rostro cuadrado. Busca estilos que añadan curvas y equilibrio a la mandíbula prominente.",
            imageUrl: "/images/rostro-cuadrado.jpg",
            frames: ["img5.jpg", "img6.jpg"]
        },
        {
            name: "Rostro Rectangular",
            description: "Para rostros rectangulares, las gafas grandes y con detalles en la parte superior ayudan a equilibrar la longitud del rostro. Las monturas redondeadas o de aviador son opciones favorecedoras.",
            imageUrl: "/images/rostro-rectangular.jpg",
            frames: ["img7.jpg", "img8.jpg"]
        },
        {
            name: "Rostro Corazón",
            description: "Las gafas con monturas más anchas en la parte inferior, como las de estilo aviador o sin montura, equilibran un rostro en forma de corazón al suavizar la frente ancha y resaltar el mentón estrecho.",
            imageUrl: "/images/rostro-corazon.jpg",
            frames: ["img9.jpg", "img10.jpg"]
        },
        {
            name: "Rostro Diamante",
            description: "Para rostros en forma de diamante, las gafas ovaladas o sin montura ayudan a suavizar los pómulos prominentes y equilibrar la frente y la mandíbula angosta.",
            imageUrl: "/images/rostro-diamante.jpg",
            frames: ["img11.jpg", "img12.jpg"]
        },
        {
            name: "Rostro Triángulo Invertido",
            description: "Las gafas con monturas más anchas en la parte inferior, como las de estilo aviador o sin montura, equilibran un rostro en forma de triángulo invertido al suavizar la frente ancha y resaltar el mentón estrecho.",
            imageUrl: "/images/rostro-triangulo-invertido.jpg",
            frames: ["img13.jpg", "img14.jpg"]
        },


    ]
    return (
        <section className="p-10 text-center max-w-7xl mx-auto gap-10 justify-center items-center ">
            <h1 className="text-3xl font-bold mb-6">Cómo elegir las gafas perfectas según la forma de tu rostro</h1>
            <p className="mb-4"> Descubre qué estilos de lentes favorecen a cada tipo de rostro ovalado, redondo, cuadrado, rectangular, corazón, diamante y triángulo invertido— y aprende a resaltar tus rasgos con el diseño ideal.</p>

            <div className="w-full flex justify-center items-center flex-wrap gap-8">
                {
                    faceShapes.map((shape) => (
                        <div key={shape.name} className="  p-4 w-60 text-center mb-4 rounded-lg rounded-lg shadow-lg flex flex-col items-center">
                            <Image src={shape.imageUrl} alt={shape.name} width={256} height={256} className="w-full h-auto " />
                            <h2 className="text-2xl font-semibold mb-4">{shape.name}</h2>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Page;