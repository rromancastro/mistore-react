import { useEffect, useState } from "react";
import { getProductsSearch } from "../services/productServices";

export const useGetProductsSearch = (searchValue) => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        getProductsSearch(searchValue)
        .then((res) => {
            setProducts(res.data.products)
        })
        .catch((error) => {console.log(error)})
        .finally(() => {setLoader(false)})
    }, [searchValue])

    return {products, loader}
}