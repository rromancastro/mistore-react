import { IoBagHandleOutline } from "react-icons/io5";
import { CartContext } from "../../context";
import { useContext } from "react";
import { Link } from "react-router";

export const CartWidget = () => {

    const { cartState } = useContext(CartContext);

    const totalItems = cartState.reduce((aux, item) => aux + item.qtyCartItem, 0);


    return (
        <Link to={'/cart-view'} id="cartWidgetContainer"> 
            <IoBagHandleOutline className="navUtilitieItem" />
            <p>{totalItems}</p>
        </Link>
    )
}