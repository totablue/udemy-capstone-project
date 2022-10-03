import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/CartItem";
import Button from "../button/Button";

import { CartContext } from "../../contexts/cart-context";

import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems,
} from "./CartDropdown.styles.js";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const handleGoToCheckout = () => {
        navigate("/checkout");
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={handleGoToCheckout}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
