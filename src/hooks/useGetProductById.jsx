import { useEffect, useState } from "react";
import { getProductById } from "../services/productServices";

export const useGetProductById = (id) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProductById(id)
        .then((res) => {
            setProduct(res.data)
        })
    },[])
    return {product}
}