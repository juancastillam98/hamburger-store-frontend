"use client"
import {createContext, useEffect, useState} from "react";
import {error} from "next/dist/build/output/log";
import {axiosClient, axiosCloudinaryClient} from "@/helpers/helpers";

export const ProductContext = createContext();
export default  function ProductProvider({children}) {
const [products, setProducts]=useState([]);
const [newProduct, setNewProduct]=useState([]);
const [categories, setCategories]=useState([]);
const [allProducts, setAllProducts]=useState([]);

useEffect(() => {
        const getNewProduct = async ()=> {
            try {
                const {data}=await axiosClient("/api/products?sort=createdAt:desc&populate=*&pagination[limit]=1");
                setNewProduct(data.data)
            }catch (e) {
                console.error(error)
            }
        }
        const getProducts = async ()=> {
            try {
                const {data}=await axiosClient("/api/products?sort=popularity:desc&populate=*&pagination[limit]=4");
                setProducts(data.data)
            }catch (e) {
                console.error(error)
            }
        }
        getNewProduct();
        getProducts();
    }, []);

    const getAllCategories = async ()=> {
        try {
            const {data}=await axiosClient("/api/categories?populate=icon");
            setCategories(data.data)
        }catch (e) {
            console.error(error);
        }
    }
    const getAllProducts = async ()=> {
        try {
            const {data}=await axiosClient("/api/products?populate=*");
            setAllProducts(data.data)
        }catch (e) {
            console.error(error);
        }
    }

    //Obtener las imagenes del about

    return (
        <ProductContext.Provider
            value={{
                products,
                setProducts,
                newProduct,
                getAllCategories,
                categories,
                getAllProducts,
                allProducts,
            }}>
            {children}
        </ProductContext.Provider>
    )
}