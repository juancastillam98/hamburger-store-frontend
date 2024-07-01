"use client"
import { useEffect, useState} from "react";
import {useProducts} from "@/hooks/useHooks";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Image from "next/image";
export default function Carta(){
        const {getAllCategories, categories, allProducts, getAllProducts} = useProducts();
        const [currentCategory, setCurrentCategory]=useState('burgers')
        const [selectedProduct, setSelectedProduct] = useState(null);
        const [productClicked, setProductClicked]=useState(false)

        useEffect(() => {
                getAllCategories();
                getAllProducts();

        }, []);

        const filteredProducts = allProducts.filter(product =>(
            product.attributes.category.data.attributes.name === currentCategory
        ))

        // Reordena las categorías para asegurar que "hamburguesas" sea la primera
        const orderedCategories = [...categories].sort((a, b) => {
                if (a.attributes.name === "burgers") return -1;
                if (b.attributes.name === "burgers") return 1;
                return 0;
        });
        const handleProductClick = (product) => {
                setProductClicked(!productClicked)
                setSelectedProduct(product)
        }

        return (
            <section className="w-full mt-20 xl:mt-28 xl:mt-32 text-text">
                <div className="max-w-screen-2xl mx-auto px-4 py-8 sm:p-10 md:p-12">
                <h1 className={"text-h1 font-bold italic"}>Nuestra Carta</h1>
                        <Tabs defaultValue={"burgers"} className={"flex flex-col justify-center mt-5"}>
                                <TabsList className={"parent-scroll-snap flex justify-start"}>
                                        {orderedCategories.map((category) => (
                                            <TabsTrigger
                                                key={category.id}
                                                value={category.attributes.name}
                                                onClick={() => setCurrentCategory(category.attributes.name)}
                                                className={"child-scroll-snap grow-0 basis-[75px] shrink-0"}
                                            >
                                                    <div className="flex flex-col items-center bg-secondary p-2 w-full">
                                                            <Image
                                                                src={category.attributes.icon.data[0].attributes.url}
                                                                alt="Equipo en acción"
                                                                width={40}
                                                                height={40}
                                                                style={{
                                                                        objectFit: 'contain',
                                                                        width: 'auto',
                                                                        height: '40px'
                                                                }}
                                                            />
                                                    </div>
                                                    <span> {category.attributes.name}</span>
                                            </TabsTrigger>
                                        ))}
                                </TabsList>
                                <div className="flex mt-8 md:mt-8 gap-4">
                                        <div className="w-1/4 overflow-y-auto parent-scroll-snap-vertical">
                                                {filteredProducts.map((product, index) => (
                                                    <TabsContent
                                                        key={index}
                                                        value={currentCategory}
                                                        onClick={()=>handleProductClick(product)}
                                                        className={"child-scroll-snap"}
                                                    >
                                                            <article
                                                                className={`flex flex-col mb-4 w-full relative p-1 ${selectedProduct === product ? 'bg-accent' : 'bg-secondary'}  `}>
                                                                    <div className={"aspect-square relative"}>
                                                                            <Image
                                                                                src={product?.attributes?.picture?.data[0]?.attributes?.formats?.small?.url || '/default-image.png'}
                                                                                alt={product?.attributes.name}
                                                                                fill={true}
                                                                                className={"object-cover"}
                                                                            />
                                                                    </div>

                                                                    <p className="text-sm sm:text-base font-barlow px-2 sm:p-2 text-center">
                                                                            {product?.attributes.name}
                                                                    </p>
                                                            </article>
                                                    </TabsContent>
                                                ))}
                                        </div>
                                        <div className="w-3/4 h-dvh">
                                                <article className="bg-secondary p-2 flex flex-col justify-between gap-4">
                                                        {selectedProduct && (
                                                            <Image
                                                                src={selectedProduct?.attributes?.picture?.data[0].attributes?.url}
                                                                alt={`Picture of ${selectedProduct?.attributes?.name}`}
                                                                width={400}
                                                                height={400}
                                                                className="object-cover shadow-lg h-full w-full"
                                                            />
                                                        )}
                                                        <h3 className="text-h3 font-raleway p-2 text-center">
                                                                {selectedProduct?.attributes.name}
                                                        </h3>
                                                        <p className={"text-base font-barlow p-2 text-start"}>{selectedProduct?.attributes.description}</p>
                                                        <div className={"flex justify-between items-center"}>
                                                                <p className={" text-h3 font-barlow p-2 text-justify"}>{selectedProduct?.attributes.sell_price}€</p>
                                                                <p className={"text-base font-barlow p-2 text-justify"}>Cantidad</p>
                                                        </div>
                                                        <button
                                                            className="w-full sm:w-auto font-raleway text-base bg-primary py-2 px-4 border-2 border-text hover:bg-accent hover:text-primary">
                                                                <a href="/menu"> VER MÁS</a>
                                                        </button>
                                                </article>

                                        </div>
                                </div>
                        </Tabs>
                </div>
            </section>
        )
}