import { useState, useEffect } from "react";
import { getAllProducts } from "../services/productServices";

export const useGetAllProducts = (limit) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts(limit)
        .then((res) => {
            setProducts(res.data.products)
        })
    }, [])
    return {products}
}
