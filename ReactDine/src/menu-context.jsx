import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const MenuContext = createContext(null);

export const MenuContextProvider = (props) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item)
        console.log(existingItem);

        if (existingItem) {
            
            const updatedCart = cart.map((cartItem) =>
                cartItem.id === item
                    ? { id: cartItem.id, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
            setCart(updatedCart)
        } else {
            
            setCart([...cart, { id: item, quantity: 1 }])
        }
        console.log(cart);
    }

    const removeFromCart = (itemId) => {
        const updatedCart = cart
            .map((item) =>
                item.id === itemId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter((item) => item.quantity > 0)

        setCart(updatedCart)
    }

    const checkout = () => {
        setCart([]);
    };

      const contextValue = {
        cart,
        addToCart,
        removeFromCart,
        checkout,
      };
    
      return (
        <MenuContext.Provider value={contextValue}>
          {props.children}
        </MenuContext.Provider>
      );
    };

    MenuContextProvider.propTypes = {
        children: PropTypes.node.isRequired,
      };
