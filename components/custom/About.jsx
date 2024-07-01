import Image from "next/image";
export const About = () => {
    return (
        <section className="w-full mt-20 xl:mt-28 xl:mt-32 bg-primary text-text">
            <div className="max-w-screen-2xl mx-auto px-4 py-8 sm:p-10 md:p-12">
                <h2 className="font-raleway text-h2 font-raleway font-bold italic text-end"><span className={"title-shadow"}>WHY</span> US?</h2>
                <div className="flex flex-col lg:flex-row lg:space-x-12 mt-12 sm:mt-16 lg:mt-20 xl:mt-24">
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
                            <p className="text-base mb-6 text-justify break-words">
                                Gottan Grill es una cadena de restaurantes especializados en hamburguesas de primera calidad. La marca nació en Málaga, pero a día de hoy también estamos en Sevilla y Granada.
                            </p>
                            <p className="text-base text-justify break-words">
                                Nuestra marca, además, está muy presente en redes, contamos con canal de Youtube, Twitter, Tik Tok, Instagram y Spotify, donde además de mostrar nuestras recetas, tenemos una sección viajera en la que descubrimos nuevos sabores para incorporarlos posteriormente a la carta y crear ediciones especiales y limitadas.

                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </section>

    )
}