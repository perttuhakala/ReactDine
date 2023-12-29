import PropTypes from 'prop-types';

export const Item = (props) => {
     const {  itemName, price, itemImage } = props.data;
    return (
        <div className="item">
        <img src={itemImage} />
        <div className="description">
            <p>
            <b>{itemName}</b>
            </p>
            <p>€{price}</p>
        </div>
        <button className="addToCartButton">Add To Cart</button>
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