import { useParams } from 'react-router'
import {Layout} from '../Layout'
import { useGetProductById } from '../hooks'
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useState } from 'react'

export const ItemDetail = () => {

    const {id} = useParams()
    const {product} = useGetProductById(id.replace(':', ''))

    const [imgSelected, setImgSelected] = useState(0)


    return (
        <Layout>
            <section id='itemDetail'>
            <div id='images'>
                    {
                        product.images && product.images.length > 0 ? <img src={product.images[imgSelected]} alt={product.title} /> : null
                    }
                    <RadioGroup id='radioGroup'>
                          <Stack direction='row'>
                            <Radio value='1' onClick={() => {setImgSelected(0)}} style={{border: '1px solid grey', backgroundColor: 'transparent'}}></Radio>
                            {product.images && product.images.length > 1 ? <Radio value='2' onClick={() => {setImgSelected(1)}} style={{border: '1px solid grey', backgroundColor: 'transparent'}}></Radio> : null}
                            {product.images && product.images.length > 2 ? <Radio value='3' onClick={() => {setImgSelected(2)}} style={{border: '1px solid grey', backgroundColor: 'transparent'}}></Radio> : null}
                          </Stack>
                    </RadioGroup>
            </div>
                <div id='itemDetailText'>
                    <h2>{product.brand}</h2>
                    <h1>{product.title}</h1>
                    <h3>{product.description}</h3>
                    <h4>rating: {product.rating}</h4>
                    <ul>
                        <li>{product.availabilityStatus}</li>
                        <li>{product.warrantyInformation}</li>
                        <li>{product.returnPolicy}</li>
                    </ul>
                    <h5>${product.price}</h5>
                    <button>Add To Cart</button>
                </div>
            </section>
        </Layout>
    )
}