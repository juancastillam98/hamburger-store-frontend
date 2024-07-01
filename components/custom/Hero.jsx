"use client"
import { useProducts } from "@/hooks/useHooks";
import Image from "next/image";
import {useEffect, useState} from "react";

export const Hero = () => {
    const { products, newProduct } = useProducts();
    const [productHero, setProductHero] = useState({});
    const screenWidth = window.innerWidth;


    useEffect(() => {
        if (newProduct) {
            setProductHero(newProduct[0]);
        }
    }, [newProduct]);

    const mobileBackgroundStyle = productHero?.id && screenWidth <= 767
        ? { backgroundImage: `url(${productHero.attributes.picture.data[0].attributes.url})` }
        : {};

    const handleProductHero = (id) => {
        if (newProduct[0]?.id === id) {
            setProductHero(newProduct[0]);
        }else {
            const selectedProduct = products.find(product => product.id === id);
            setProductHero(selectedProduct || {});
        }
    };

    return (
        <section className="h-dvh md:h-full w-full  xl:pt-28 bg-primary text-text">
            <div className={" h-full flex flex-col max-w-screen-2xl mx-auto sm:p-6 md:p-8"}>
                <div className="flex flex-col h-[65%] md:flex-row items-center justify-between gap-12">
                    <div
                        className={`w-full h-full md:h-[500px] gap-4 bg-cover bg-center `}
                        style={mobileBackgroundStyle}
                    >
                        <div
                            className={"h-full px-4 pb-4 mobileBgLayer sm:bg-primary flex flex-col justify-center sm:justify-center gap-4 sm:gap-6"}
                            >
                            <h1 className="text-h1 font-raleway font-bold leading-none italic"><span className={"title-shadow whitespace-nowrap"}>WHY NOT A</span> <span className={"whitespace-nowrap"}>BURGER ? </span></h1>
                            <p className="text-base">Descubre nuestras deliciosas hamburguesas hechas con los mejores
                                ingredientes.</p>
                            {productHero?.id && (
                                <div className="">
                                    <h3 className="text-h3 font-semibold text-accent">{productHero.attributes.name}</h3>
                                    {/*<p className="text-base font-barlow">{productHero.attributes.description}</p>*/}
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        className="hidden md:flex flex-col justify-start md:justify-end w-full h-[400px]  md:h-[500px]">
                        {productHero?.id && (
                            <Image
                                src={productHero.attributes.picture.data[0].attributes.url}
                                alt={`Picture of ${productHero?.attributes?.name}`}
                                width={400}
                                height={400}
                                className="object-cover rounded-md shadow-lg h-full w-auto"
                            />
                        )}
                    </div>
                </div>
                <div className="mt-4">
                    <div className="pt-16 pb-8 px-4 parent-scroll-snap mt-[-150px] sm:mt-0 flex gap-4  sm:gap-3 space-x-2  bg-transparent md:relative md:top-0">
                    {newProduct && (
                            <article
                                key={newProduct[0]?.id}
                                onClick={() => handleProductHero(newProduct[0]?.id)}
                                className="max-w-52 min-h-60 h-full w-full flex flex-col justify-between cursor-pointer child-scroll-snap bg-accent rounded-md p-2 hover:transform hover:-translate-y-8 hover:scale-110 transition-all duration-300 ">
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
