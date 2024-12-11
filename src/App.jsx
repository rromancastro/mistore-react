import * as React from 'react'
import './estilos/css/style.css'
import { PublicRouter } from './router/PublicRouter'
import { ChakraProvider } from '@chakra-ui/react'


function App() {

  return (
    <ChakraProvider>
      <PublicRouter/>
    </ChakraProvider>
  )
}

export default App
