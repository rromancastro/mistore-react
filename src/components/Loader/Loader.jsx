import { Flex, Spinner } from "@chakra-ui/react"

export const Loader = () => {
    return (
        <Flex height={'100vh'} width={'100%'} justifyContent={'center'} alignItems={'center'} backgroundColor={'#F5F5F5'}>
            <Spinner color={'grey'}/>
        </Flex>
    )
}