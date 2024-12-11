import { useEffect, useState } from "react"
import { getProductsByCategory } from "../services/productServices"

export const useGetProductsByCategory = (category) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProductsByCategory(category)
        .then((res) => {
            setProducts(res.data.products)
        }
        )
    }, [category])

    return {products}
}