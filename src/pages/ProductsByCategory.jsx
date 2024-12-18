import { useParams } from "react-router"
import { ItemListContainer, Loader } from "../components"
import { Layout } from "../Layout"
import { useGetProductsByCategory } from "../hooks"

export const ProductsByCategory = () => {
    const {category} = useParams()
    const {products, loader} = useGetProductsByCategory(category.replace(':', ''))

    return (
        <Layout>
            {loader ? <Loader /> :
            <ItemListContainer products={products}/>}
        </Layout>
    )
}