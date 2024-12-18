import { useParams } from 'react-router'
import {Layout} from '../Layout'
import { useGetProductById } from '../hooks'
import { Radio, RadioGroup, Skeleton, Stack } from '@chakra-ui/react'
import { useState, useContext } from 'react'
import { CartContext } from "../context";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Loader } from '../components'

export const ItemDetail = () => {

    const {id} = useParams()
    const {product, loader} = useGetProductById(id.replace(':', ''))

    //logica skeleton
    const [loading, setLoading] = useState(true)

    //logica seleccionar imagen
    const [imgSelected, setImgSelected] = useState(0)

    //LOGICA CARRITO
    const [count, setCount] = useState(0);
    const { addItem, removeItem } = useContext(CartContext);
  
    const handleAddProduct = () => {
      setCount(count + 1);
      addItem(product);
    };

    //logica zoom imagen
    const [transformOrigin, setTransformOrigin] = useState("center center");

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top; 

    const xPercent = (x / rect.width) * 100; 
    const yPercent = (y / rect.height) * 100;

    setTransformOrigin(`${xPercent}% ${yPercent}%`);
  };

  const handleMouseLeave = () => {
    setTransformOrigin("center center");
  };

    //sweet alert
    function addedToCartAlert() {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: "Product Added To Cart!",
            icon: "success"
        })
    }

    return (
        
        <Layout>
            {loader ? <Loader /> : <section id='itemDetail'>
            <div id='images'>
                    <div className="zoom-container"  onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <Skeleton isLoaded={!loading}  startColor='grey' endColor='white'>
                        {
                            product.images && product.images.length > 0 ? <img src={product.images[imgSelected]} alt={product.title} onLoad={() => {setLoading(false)}} className="zoom-image" style={{ transformOrigin }}/> : null
                        }
                        </Skeleton>
                    </div>
                    <RadioGroup id='radioGroup'>
                          <Stack direction='row'>
                            <Radio value='1' onClick={() => {setImgSelected(0), setLoading(true)}} style={{border: '1px solid grey', backgroundColor: 'transparent', color: 'black'}}></Radio>
                            {product.images && product.images.length > 1 ? <Radio value='2' onClick={() => {setImgSelected(1), setLoading(true)}} style={{border: '1px solid grey', backgroundColor: 'transparent'}}></Radio> : null}
                            {product.images && product.images.length > 2 ? <Radio value='3' onClick={() => {setImgSelected(2), setLoading(true)}} style={{border: '1px solid grey', backgroundColor: 'transparent'}}></Radio> : null}
                          </Stack>
                    </RadioGroup>
            </div>
                <div id='itemDetailText'>
                    <h2>{product.brand}</h2>
                    <h1>{product.title}</h1>
                    <h3>{product.description}</h3>
                    <h4>rating: {product.rating}/5</h4>
                    <ul>
                        <li>{product.availabilityStatus}</li>
                        <li>{product.warrantyInformation}</li>
                        <li>{product.returnPolicy}</li>
                    </ul>
                    <h5>${product.price}</h5>
                    <div id='addToCartContainer'>
                        <h3 onClick={()=> {handleAddProduct(); addedToCartAlert()}}>Add To Cart</h3>
                    </div>
                </div>
            </section>}
        </Layout>
    )
}