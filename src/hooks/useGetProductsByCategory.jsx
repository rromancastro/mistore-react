import { useEffect, useState } from "react"
import { getProductsByCategory } from "../services/productServices"

export const useGetProductsByCategory = (category) => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        getProductsByCategory(category)
        .then((res) => {
            setProducts(res.data.products)
        })
        .catch((error) => {console.log(error)})
        .finally(() => {setLoader(false)})
    }, [category])

    return {products, loader}
}