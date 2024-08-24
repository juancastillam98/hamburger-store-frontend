"use client"
import { useEffect, useState} from "react";
import {useProducts} from "@/hooks/useHooks";
import {
        Tabs,
        TabsHeader,
        TabsBody,
        Tab,
        TabPanel,
} from "@material-tailwind/react";

import Image from "next/image";
import {FoodInfo} from "@/components/custom/FoodInfo";
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
            <section id={"carta"} className="w-full mt-20 xl:mt-28 xl:mt-32 text-text">
                <div className="max-w-screen-2xl mx-auto px-4 py-8 sm:p-10 md:p-12">
                        <h1 className={"text-h1 font-bold italic"}>Nuestra Carta</h1>
                        <Tabs id="custom-animation" value={currentCategory}>
                                <TabsHeader
                                className={"parent-scroll-snap bg-secondary rounded-none"}
                                >
                                        {orderedCategories.map((category) => (
                                            <Tab
                                                key={category.id}
                                                value={category.attributes.name}
                                                onClick={() => setCurrentCategory(category.attributes.name)}
                                                className={"child-scroll-snap grow-0 basis-[75px] shrink-0 grow"}
                                            >
                                                    <div className="flex flex-col items-center bg-secondary p-2 w-full">
                                                            <Image
                                                                src={category.attributes.icon.data[0].attributes.url}
                                                                alt={category.attributes.name}
                                                                width={40}
                                                                height={40}
                                                                style={{
                                                                        objectFit: 'contain',
                                                                        width: 'auto',
                                                                        height: '40px',
                                                                }}
                                                            />
                                                    </div>
                                                    <span className={"text-text"}>{category.attributes.name}</span>
                                            </Tab>
                                        ))}
                                </TabsHeader>

                                <TabsBody
                                    animate={{
                                            initial: { y: 250 },
                                            mount: { y: 0 },
                                            unmount: { y: 250 },
                                    }}
                                    className="flex mt-5 md:mt-8 gap-3 sm:gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 "
                                >
                                                {filteredProducts.map((product, index) => (
                                                    <TabPanel
                                                        key={index}
                                                        value={currentCategory}
                                                        onClick={() => handleProductClick(product)}
                                                        className={`w-full flex flex-col  relative p-1 ${
                                                            selectedProduct === product ? 'bg-accent' : 'bg-terciary'
                                                        }`}
                                                    >
                                                            <FoodInfo key={index} product={product} />
                                                    </TabPanel>
                                                ))}
                                </TabsBody>
                        </Tabs>
                </div>

            </section>
        )
}