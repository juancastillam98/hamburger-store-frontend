"use client";
import { useProducts } from "@/hooks/useHooks";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Hero = () => {
    const { products, newProduct } = useProducts();
    const [productHero, setProductHero] = useState({});
    const [screenWidth, setScreenWidth] = useState(null);

    useEffect(() => {
        // Verificar si estamos en el entorno del cliente antes de acceder a window
        if (typeof window !== "undefined") {
            setScreenWidth(window.innerWidth);
        }

        if (newProduct && newProduct.length > 0) {
            setProductHero(newProduct[0]);
        }
    }, [newProduct]); // Dependencia del useEffect debe ser newProduct

    const mobileBackgroundStyle =
        productHero?.id && screenWidth <= 767
            ? {
                backgroundImage: `url(${
                    productHero.attributes.picture.data[0].attributes.url
                })`,
            }
            : {};

    const handleProductHero = (id) => {
        if (newProduct[0]?.id === id) {
            setProductHero(newProduct[0]);
        } else {
            const selectedProduct = products.find((product) => product.id === id);
            setProductHero(selectedProduct || {});
        }
    };

    return (
        <section className="h-dvh w-full text-text pt-24"
                 style={{
                     backgroundImage: `
                     linear-gradient(
                        to right,
                        #0c0c0c 0%,
                        rgba(255, 255, 255, 0) 100%,
                        transparent 100%
                    ),
                     url(${productHero?.attributes?.picture?.data[0].attributes.url})`,
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat"
                 }}
        >
            <div className={" h-full flex flex-col justify-between max-w-screen-2xl mx-auto sm:p-6 md:p-8"}>
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 ">
                    <div className={`w-full h-full gap-4 bg-cover bg-center `}>
                        <div className={"h-full px-4 pb-4 mobileBgLayer  flex flex-col justify-center sm:justify-center gap-4 sm:gap-6"}>
                            <h1 className="text-h1 font-raleway font-bold leading-none italic"><span className={"title-shadow whitespace-nowrap"}>WHY NOT A</span> <span className={"whitespace-nowrap"}>BURGER ? </span></h1>
                            <p className="text-base">Descubre nuestras deliciosas hamburguesas hechas con los mejores ingredientes.</p>
                            {productHero?.id && (
                                <div className="">
                                    <h3 className="text-h3 font-semibold text-accent">{productHero.attributes.name}</h3>
                                    {/*<p className="text-base font-barlow">{productHero.attributes.description}</p>*/}
                                </div>
                            )}
                        </div>
                    </div>

                </div>
                <div className="mt-4">
                    <div className="pt-16 pb-8 px-4 parent-scroll-snap mt-[-150px] sm:mt-0 flex gap-4  sm:gap-3 space-x-2  bg-transparent md:relative md:top-0">
                        {newProduct && newProduct.length > 0 && (
                            <article
                                key={newProduct[0]?.id}
                                onClick={() => handleProductHero(newProduct[0]?.id)}
                                className="max-w-52 min-h-60 h-full w-full flex flex-col justify-between cursor-pointer child-scroll-snap bg-accent rounded-md p-2 hover:transform hover:-translate-y-8 hover:scale-110 transition-all duration-300 "
                            >
                                <Image
                                    src={newProduct[0]?.attributes.picture.data[0].attributes.formats.small.url}
                                    alt={`Picture of ${newProduct[0]?.attributes?.name}`}
                                    width={200}
                                    height={200}
                                    className="object-cover rounded shadow-lg aspect-square"
                                />
                                <p className="text-start sm:text-center mt-2 text-base text-primary font-barlow">{newProduct[0]?.attributes.name}</p>
                                <p className="text-center sm:text-center mt-2 text-base text-primary font-barlow">¡ NUEVO !</p>
                            </article>
                        )}
                        {products?.map((product, index) => (
                            <article
                                key={index}
                                onClick={() => handleProductHero(product?.id)}
                                className="p-0 w-48 h-60 child-scroll-snap cursor-pointer hover:transform hover:-translate-y-8 hover:scale-110 transition-all duration-300"
                                style={{
                                    backgroundImage: `url(${product?.attributes.picture.data[0].attributes.formats.small.url})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="w-full h-full bg-gradient-to-t from-primary to-transparent opacity-75 flex flex-col items-start justify-end">
                                    <p className="px-3 text-start sm:text-center mt-2 text-base font-barlow p-2 rounded">
                                        {product?.attributes.name}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
