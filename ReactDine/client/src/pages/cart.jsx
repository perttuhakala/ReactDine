// Import React hooks and components from the React Router and other files
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../menu-context.jsx";
import { ITEMS } from "../itemlist";
import "./cart.css";

// Functional component representing the Cart
export const Cart = () => {
    // Use the useContext hook to access the MenuContext
    const { cart, removeFromCart } = useContext(MenuContext);

    // Calculate the total cost of items in the cart
    const totalCost = cart.reduce((acc, item) => {
        return acc + ITEMS[item.id - 1].price * item.quantity;
    }, 0);

    // Render the Cart component
    return (
        <div className="cart">
            {/* Cart header displaying column titles */}
            <div className="cart-header">
                <div className="header-item"> | Item name</div>
                <div className="header-quantity">| Quantity</div>
                <div className="header-price">| Price |</div>
                <div className="header-action"></div>
            </div>

            {/* Map through each item in the cart and display its details */}
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <div className="item-name">{ITEMS[item.id - 1].itemName}</div>
                    <div className="item-quantity">{item.quantity}</div>
                    <div className="item-price">{(ITEMS[item.id - 1].price * item.quantity).toFixed(2)} €</div>
                    <div className="item-action">
                        {/* Button to remove the item from the cart */}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                </div>
            ))}

            {/* Display the total cost of items in the cart */}
            <div className="total-cost">
                <p>Total Cost: {(totalCost).toFixed(2)} €</p>
            </div>

            {/* Link to navigate to the checkout page */}
            <Link to="/checkout" className="checkout-button">
                Checkout
            </Link>
        </div>
    );
};
