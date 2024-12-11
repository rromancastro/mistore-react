import { useParams } from "react-router"
import { ItemListContainer } from "../components"
import { Layout } from "../Layout"
import { useGetProductsByCategory } from "../hooks"

export const ProductsSearch = () => {
    const {category} = useParams()
    const {products} = useGetProductsByCategory(category.replace(':', ''))

    return (
        <Layout>
            <ItemListContainer products={products}/>
        </Layout>
    )
}