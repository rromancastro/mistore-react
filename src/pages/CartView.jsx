import { useContext } from "react"
import { Layout } from "../Layout"
import { CartContext } from "../context"
import { FaTrash } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";

export const CartView = () => {

    const {cartState, addItem, removeItem, deleteItem} = useContext(CartContext)

    function handleAddItem(product) {
        product.qtyCartItem < product.stock ? addItem(product) : null
    }

    function handleRemoveItem(product) {
        product.qtyCartItem > 1 ? removeItem(product) : null
    }

    function handleDeleteItem(productId) {
        deleteItem(productId)
    }

    return (
        <Layout>
            {cartState.reduce((acumulador, item) => acumulador + item.price * item.qtyCartItem , 0) == 0 ? 
            <Flex width={'100%'} height={'90vh'} justifyContent={'center'} alignItems={'center'} backgroundColor={'#F5F5F5'}>
                <h1 style={{color: 'black'}}>
                Your cart is empty, let's fill it!</h1>
            </Flex> :
            <section id="cartView">
                <div id="productsView">
                    {
                        cartState.map((data) => {
                            return (
                                <article id="productCartView" key={data.id}>
                                    <img src={data.thumbnail} alt={data.id} />
                                    <div id="productCartViewInfo">
                                        <h2>{data.title}</h2>
                                        <h3>${data.price}</h3>
                                        <h3>stock: {data.stock}</h3>
                                        <div id="quantitySelect"><button onClick={() => {handleRemoveItem(data)}}>-</button><p>{data.qtyCartItem}</p><button onClick={() => {handleAddItem(data)}}>+</button></div>
                                    </div>
                                    <div id="subtotal">
                                        <h3>Subtotal: ${data.price * data.qtyCartItem}</h3>
                                        <button onClick={() => {handleDeleteItem(data.id)}}><FaTrash color="red"/></button>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
                <div id="purchaseInfo">
                    <h2>Total: ${cartState.reduce((acumulador, item) => acumulador + item.price * item.qtyCartItem , 0)}</h2>
                </div>
            </section>}
        </Layout>
    )
}