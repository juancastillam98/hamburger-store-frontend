"use client"
import Image from "next/image";
import {
    useWindowWidth,
} from '@react-hook/window-size'
import Link from "next/link";
export const HomeMenu = () => {
    const windowsWidth = useWindowWidth();

    const imagenEntrantesBg = `${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/image/upload/v1718390943/medium_entrantes_gyozas_dbae8f815c.webp`;
    const imagenEntrantesFront = `${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/image/upload/v1718464095/small_entrantes_gyozas_sin_fondo_9b4cd9961e.png`;


    const imagenHamburguesaBg = `${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/image/upload/v1718465496/medium_hamburguesas_lil_wayne_e5b36ca376.webp`;
    const imagenHamburguesaFront = `${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/image/upload/v1718464095/small_hamburguesas_lil_wayne_sin_fondo_38b60fc2b3.png`;

    const imagenCarnesBg = `${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/image/upload/v1718390943/medium_carnes_entrecot_35a1feac50.webp`;
    const imagenCarnesFront = `${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/image/upload/v1718464096/small_carnes_entrecot_sin_fondo_e3cefd4b9a.png`;

    const imagenPostresBg = `${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/image/upload/v1718470048/medium_postres_mochi_min_556f0fc85a.webp    `;
    const imagenPostresFront = `${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/image/upload/v1718464094/small_postres_mochi_rosa_blanco_sin_fondo_ec1ea8bfca.png`;

    const imagenesArray = [
        {
            category: 'Entrantes',
            background: imagenEntrantesBg,
            foreground: imagenEntrantesFront
        },
        {
            category: 'Hamburguesas',
            background: imagenHamburguesaBg,
            foreground: imagenHamburguesaFront
        },
        {
            category: 'Carnes',
            background: imagenCarnesBg,
            foreground: imagenCarnesFront
        },
        {
            category: 'Postres',
            background: imagenPostresBg,
            foreground: imagenPostresFront
        }
    ];

    return (
        <section className="w-full mt-20 xl:mt-28 xl:mt-32 bg-primary text-text">
            <div className="max-w-screen-2xl mx-auto px-4 py-8 sm:p-10 md:p-12">
                <h2 className="font-raleway text-h2 font-raleway font-bold italic"><span
                    className={"title-shadow"}>OUR</span> MENU</h2>
                <div className={"flex gap-6 parent-scroll-snap mt-12 sm:mt-16 lg:mt-20 xl:mt-24"}>
                    {imagenesArray?.map((element, index) => (
                        <div className={"min-w-52 child-scroll-snap flex flex-col h-full justify-center items-center p-2 gap-y-2 bg-secondary md:flex-1-1-200"}>
                            <h3 className={"font-raleway text-h3 text-accent"}>{element.category}</h3>
                            <article
                                className={" custom-hover-3d h-full sm:h-auto w-full "}
                                key={index}
                            >
                                <Image
                                    src={element.background}
                                    alt="Equipo en acción"
                                    width={400}
                                    height={400}
                                    className="object-cover h-full aspect-9/16 w-full"

                                />
                                <Image
                                    src={element.foreground}
                                    alt="Equipo en acción"
                                    width={300}
                                    height={300}
                                    className="object-cover  w-full sm:h-auto z-10"
                                />
                            </article>
                            <button className="font-raleway text-base bg-primary py-2 px-4 border-2 border-text">
                                <a href="/menu"> VER MÁS</a>
                            </button>
                        </div>
                    ))}
                </div>
                <div
                    className={`${windowsWidth < 640 ? "bg-menu-background-mobile" : "bg-menu-background-desktop"} bg-center bg-no-repeat bg-cover h-72 md:h-[420px] flex justify-center items-end pb-3 sm:pb-6 mt-10 sm:mt-14 lg:mt-16 xl:mt-20 `}
                >
                    <button className="font-raleway text-base bg-primary py-3 px-6 border-2 border-text">
                            <a href="/menu">ACCEDE A LA CARTA</a>
                    </button>

                </div>
            </div>
        </section>
    )
}