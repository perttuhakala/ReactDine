import { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../menu-context.jsx";
import { ITEMS } from "../itemlist";
import "./cart.css";

export const Cart = () => {
    const { cart, removeFromCart } = useContext(MenuContext);

    const totalCost = cart.reduce((acc, item) => {
        return acc + ITEMS[item.id - 1].price * item.quantity;
    }, 0);

    return (
        <div className="cart">
            <div className="cart-header">
                <div className="header-item"> | Item name</div>
                <div className="header-quantity">| Quantity</div>
                <div className="header-price">| Price |</div>
                <div className="header-action"></div>
            </div>
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <div className="item-name">{ITEMS[item.id - 1].itemName}</div>
                    <div className="item-quantity">{item.quantity}</div>
                    <div className="item-price">{(ITEMS[item.id - 1].price * item.quantity).toFixed(2)} €</div>
                    <div className="item-action">
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className="total-cost">
                <p>Total Cost: {(totalCost).toFixed(2)} €</p>
            </div>

            <Link to="/checkout" className="checkout-button">
                Checkout
            </Link>
        </div>
    );
};
