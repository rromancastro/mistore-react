import { useParams } from "react-router"
import { ItemListContainer, Loader } from "../components"
import { useGetProductsSearch } from "../hooks"
import { Layout } from "../Layout"
import { Flex } from "@chakra-ui/react"

export const ProductsSearch = () => {

    const { searchValue } = useParams()
    const {products, loader} = useGetProductsSearch(searchValue)

    return (
        <Layout>
            {loader ? <Loader/> : 
            products.length == 0 ? <Flex width={"100%"} height={'100vh'} justifyContent={'center'} alignItems={'center'} backgroundColor={'#F5F5F5'}><h1 style={{color: 'grey'}}>No results for "{searchValue}"</h1></Flex> :
            <ItemListContainer products={products} />}
        </Layout>
    )
}