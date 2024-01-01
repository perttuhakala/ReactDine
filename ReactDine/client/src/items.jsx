// Import React hooks and PropTypes library
import { useContext } from "react";
import PropTypes from "prop-types";

// Import MenuContext for accessing global state
import { MenuContext } from "./menu-context.jsx";

// Import styles for the Item component
import "./pages/menu.css";

// Functional component representing an item in the menu
export const Item = (props) => {
  // Destructure props to get item details
  const { id, itemName, description, price, itemImage } = props.data;

  // Use the useContext hook to access global state from MenuContext
  const { addToCart, cart } = useContext(MenuContext);

  // Determine the quantity of this item in the cart
  const quantityInCart = cart.find((item) => item.id === id)?.quantity || 0;

  // Function to handle adding the item to the cart
  const handleAddToCart = () => {
    addToCart(id);
  };

  // Render the Item component
  return (
    <div className="item">
      {/* Display the item image */}
      <img src={itemImage} alt={itemName} />

      {/* Display item details and controls */}
      <div className="description">
        <p>
          <b>{itemName}</b>
        </p>
        <p>
          <b>{description}</b>
        </p>
        <p className="price">€{price.toFixed(2)}</p>
      </div>

      {/* Controls for adding to cart and displaying the quantity in cart */}
      <div className="quantity-controls">
        <button onClick={handleAddToCart}>Add To Cart</button>
        <span className="added-quantity">{quantityInCart}</span>
      </div>
    </div>
  );
};

// PropTypes for ensuring the correct data structure is provided as props
Item.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    itemName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    itemImage: PropTypes.string.isRequired,
  }).isRequired,
};
