import Image from "next/image";
export const About = () => {
    return (
        <section className="w-full mt-10 xl:mt-28 xl:mt-32 bg-primary text-text">
            <div className="max-w-screen-2xl mx-auto px-4 sm:p-6 md:p-8">
                <h2 className="font-raleway text-h2 font-raleway font-bold italic mb-12"><span className={"title-shadow"}>Why</span> us?</h2>
                <div className="flex flex-col lg:flex-row lg:space-x-12">
                    <div className="w-full flex gap-4 mb-8 lg:mb-0">
                        <div className={"flex-1 h-96 sm:h-auto  hover:expand-flex-3 transition-all duration-300"}>
                            <Image
                                src={process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL + "/image/upload/v1717350584/about3_min_2_6dc9b51c51.webp"}
                                alt="Equipo en acción"
                                width={400}
                                height={400}
                                className="object-cover h-full"
                            />
                        </div>
                        <div className={"flex-1 hover:expand-flex-3 transition-all duration-300"}>
                            <Image
                                src={process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL + "/image/upload/v1717350583/medium_about_2_min_2_db30642a51.webp"}
                                alt="Equipo en acción"
                                width={400}
                                height={400}
                                className="object-cover h-full"
                            />
                        </div>
                        <div className={"flex-1 hover:expand-flex-3 transition-all duration-300"}>
                            <video autoPlay loop muted
                                   className="object-cover rounded-md  h-full">
                                <source
                                    src={process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL + "/video/upload/v1717532803/video_gottan_61914c2186.mp4"}
                                    type="video/mp4"/>
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                        </div>

                    </div>

                    <div className="w-full  inset-0 overflow-hidden">
                        <div className="w-full z-10 flex flex-col justify-between">
                            <h3 className="text-accent text-h3 font-semibold mb-6">Nuestra Historia</h3>
                            <p className="text-base mb-6">
                                En Gotan Grill Gourmet, nuestra misión va más allá de servir hamburguesas. Nos dedicamos
                                a
                                crear
                                una experiencia gastronómica única, fusionando ingredientes frescos y de calidad con una
                                creatividad sin límites. Desde el primer mordisco, queremos que nuestros clientes
                                sientan la
                                pasión y el amor que ponemos en cada detalle.
                            </p>
                            <p className="text-base mb-6">
                                Nuestro espacio es un reflejo de nuestra filosofía: un ambiente urbano, atrevido y
                                vibrante
                                que
                                invita a disfrutar y a compartir momentos inolvidables. Aquí, cada visita se transforma
                                en
                                una
                                celebración de sabores y sensaciones que desafían lo convencional.
                            </p>
                            <p className="text-base">
                                Gotan Grill no es solo una hamburguesería, es un destino donde la buena comida y la
                                creatividad
                                se encuentran para ofrecerte algo más que una comida, una verdadera aventura culinaria.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </section>

    )
}