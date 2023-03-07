import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/card.context";

import Button from "../button/button.component";
import CartItem from "../../components/card-item/card-item.component";

import {
  CardDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./card-dropdown.style.jsx";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const getCheckOutHeandler = () => {
    navigate("/checkout");
  };
  return (
    <CardDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={getCheckOutHeandler}>GO </Button>
    </CardDropdownContainer>
  );
};

export default CartDropdown;
