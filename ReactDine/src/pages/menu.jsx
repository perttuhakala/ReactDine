import { ITEMS } from "./itemlist";
import {Item} from "./items"

export const Menu = () => {
    return (
 <div className="menu">
        <div>
            <h1> ReactDine</h1>
        </div>
        <div>
            <h2> Welcome to reactdine shop, here you can view our products and place your order online.</h2>
        </div>
        <div className="items">
        {" "}
        {ITEMS.map((item) => (
            <ItemItem data={item} />
        ))}
        </div>
    </div>
    );
};
