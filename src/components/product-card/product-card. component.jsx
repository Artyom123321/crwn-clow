import "./product.card.style.scss";

import { useContext } from "react";
import { CartContext } from "../../context/card.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const addToProductsCard = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price} </span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addToProductsCard}
      >
        Add to card
      </Button>
    </div>
  );
};
export default ProductCard;
