import { useEffect, useState } from "react";
import { getAllCategories } from "../services/productServices";

export const useGetAllCategories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getAllCategories()
        .then((res) => {
            setCategories(res.data)
        })
    }, [])
    return {categories}
}