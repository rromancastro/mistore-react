import { IoBagHandleOutline } from "react-icons/io5";
import { CartContext } from "../../context";
import { useContext } from "react";

export const CartWidget = () => {

    const { cartState } = useContext(CartContext);

  console.log(cartState)

  const totalItems = cartState.reduce((aux, item) => aux + item.qtyCartItem, 0);


    return (
        <div id="cartWidgetContainer"> 
            <IoBagHandleOutline className="navUtilitieItem" />
            <p>{totalItems}</p>
        </div>
    )
}