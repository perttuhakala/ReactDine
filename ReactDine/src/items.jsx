import PropTypes from 'prop-types';
import { MenuContext } from "./menu-context.jsx";
import { useContext } from 'react';

export const Item = (props) => {
     const {  id, itemName, price, itemImage } = props.data;
      const { addToCart } = useContext(MenuContext);

    return (
        <div className="item">
        <img src={itemImage} />
        <div className="description">
            <p>
            <b>{itemName}</b>
            </p>
            <p>€{price}</p>
        </div>
        <button className="addToCartButton" onClick={() => addToCart (id)}>
        Add To Cart
        </button>
        </div>
    );
};
        
Item.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    itemName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    itemImage: PropTypes.string.isRequired,
  }).isRequired,
};
export default Item;