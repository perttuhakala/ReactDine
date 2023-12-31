import { useContext } from "react";
import PropTypes from "prop-types";
import { MenuContext } from "./menu-context.jsx";
import "./pages/menu.css";

export const Item = (props) => {
  const { id, itemName, description, price, itemImage } = props.data;
  const { addToCart, cart } = useContext(MenuContext);

  const quantityInCart = cart.find((item) => item.id === id)?.quantity || 0;

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <div className="item">
      <img src={itemImage} alt={itemName} />
      <div className="description">
        <p>
          <b>{itemName}</b>
        </p>
        <p>
          <b>{description}</b>
        </p>
        <p className="price">€{price.toFixed(2)}</p>
      </div>
      <div className="quantity-controls">
        <button onClick={handleAddToCart}>Add To Cart</button>
        <span className="added-quantity">{quantityInCart}</span>
      </div>
    </div>
  );
};

Item.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    itemName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    itemImage: PropTypes.string.isRequired,
  }).isRequired,
};