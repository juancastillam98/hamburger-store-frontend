import {ProductContext} from "@/context/ProductProvider";
import {useContext} from "react";
export const useProducts=()=>{
    return useContext(ProductContext)
}