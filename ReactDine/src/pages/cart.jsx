import "../menu.css";
import { MenuContext } from "../menu-context.jsx";
import { ITEMS } from "../itemlist";
import { useContext } from 'react';
import "../cart.css";

export const Cart = () => {
    const { cart } = useContext(MenuContext);

    return (
        <div className="cart">
        {cart.map((item) => (
            <div key={item.id} className="description">
            <p>
            <b>{item.quantity}x {ITEMS[item.id-1].itemName}</b>
            </p>
            <p>{(ITEMS[item.id-1].price * item.quantity).toFixed(2)} €</p>
            </div>
        ))}
        </div>
    );
};
