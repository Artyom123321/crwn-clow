import { useContext } from "react";

import { CartContext } from "../../context/card.context";

import {
  ShoppingIcon,
  CardIconContainer,
  ItemCount,
} from "./card-icon.style.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cardCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CardIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cardCount}</ItemCount>
    </CardIconContainer>
  );
};

export default CartIcon;
