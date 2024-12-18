import { useEffect, useState } from "react";
import { getProductById } from "../services/productServices";

export const useGetProductById = (id) => {
    const [product, setProduct] = useState({})
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        getProductById(id)
        .then((res) => {
            setProduct(res.data)
        })
        .catch((error) => {console.log(error)})
        .finally(() => {setLoader(false)})
    },[])
    return {product, loader}
}