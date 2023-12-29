import { ITEMS } from "../itemlist";
import {Item} from "../items";
import "../menu.css";

export const Menu = () => {
    return (
 <div className="menu">
      <div className="menuTitle">
            <h1> ReactDine</h1>
            <h2> Welcome to ReactDine shop, here you can view our products and place your order online.</h2>
        </div>
        
        <div className="items">
        {ITEMS.map((item) => (
            <Item data={item} />
        ))}
        </div>
    </div>
    );
};
