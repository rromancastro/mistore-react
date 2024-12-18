import { Flex } from "@chakra-ui/react"
import { Layout } from "../Layout"

export const NotFound = () => {
    return (
        <Layout>
            <Flex width={'100%'} height={"90vh"} justifyContent={'center'} alignItems={'center'} backgroundColor={'#F5F5F5'}>
            <h1 style={{color:"grey"}}>Error 404, url not found</h1>
            </Flex>
        </Layout>
    )
}