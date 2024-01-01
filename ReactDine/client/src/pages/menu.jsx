// Import React hooks and components from other files
import { useState } from "react";
import { ITEMS } from "../itemlist";
import { Item } from "../items";
import "./menu.css";

// Functional component representing the Menu
export const Menu = () => {
  // State to track the quantities of items in the cart
  const [cartQuantities, setCartQuantities] = useState({});

  // Function to update the quantity of an item in the cart
  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  // Render the Menu component
  return (
    <div className="menu">
      {/* Title section */}
      <div className="menuTitle">
        <h1> ReactDine</h1>
        <h2> Welcome to ReactDine shop, here you can view our products and place your order online.</h2>
      </div>

      {/* Display items using the Item component */}
      <div className="items">
        {/* Map through each item and render an Item component */}
        {ITEMS.map((item) => (
          <Item
            key={item.id}
            data={item}
            quantity={cartQuantities[item.id] || 0}
            onUpdateQuantity={handleUpdateQuantity}
          />
        ))}
      </div>
    </div>
  );
};
