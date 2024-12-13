import * as React from 'react'
import './estilos/css/style.css'
import { PublicRouter } from './router/PublicRouter'
import { ChakraProvider } from '@chakra-ui/react'
import { CartProvider } from './context/CartContext'


function App() {

  return (
    <CartProvider>
    <ChakraProvider>
      <PublicRouter/>
    </ChakraProvider>
    </CartProvider>
  )
}

export default App
