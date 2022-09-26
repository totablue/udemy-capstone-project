import React, { useContext } from "react";

import CartItem from "../cart-item/CartItem";
import Button from "../button/Button";

import { CartContext } from "../../contexts/cart-context";

import "./CartDropdown.styles.scss";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;
