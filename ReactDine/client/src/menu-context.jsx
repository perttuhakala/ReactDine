// Import React hooks and PropTypes library
import { createContext, useState } from "react";
import PropTypes from 'prop-types';

// Create a context with an initial value of null
export const MenuContext = createContext(null);

// Functional component representing the MenuContextProvider
export const MenuContextProvider = (props) => {
    // State to manage the cart
    const [cart, setCart] = useState([])

    // Function to add an item to the cart
    const addToCart = (item) => {
        // Check if the item is already in the cart
        const existingItem = cart.find((cartItem) => cartItem.id === item)

        // If the item is in the cart, update its quantity
        if (existingItem) {
            const updatedCart = cart.map((cartItem) =>
                cartItem.id === item
                    ? { id: cartItem.id, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
            setCart(updatedCart)
        } else {
            // If the item is not in the cart, add it with a quantity of 1
            setCart([...cart, { id: item, quantity: 1 }])
        }
    }

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        // Update the cart by decreasing the quantity of the specified item
        const updatedCart = cart
            .map((item) =>
                item.id === itemId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            // Filter out items with a quantity of 0 or less
            .filter((item) => item.quantity > 0)

        setCart(updatedCart)
    }

    // Function to clear the cart (checkout)
    const checkout = () => {
        setCart([]);
    };

    // Create the context value with cart and cart-related functions
    const contextValue = {
        cart,
        addToCart,
        removeFromCart,
        checkout,
    };
    
    // Provide the context value to the MenuContext.Provider
    return (
        <MenuContext.Provider value={contextValue}>
          {props.children}
        </MenuContext.Provider>
    );
};

// PropTypes for ensuring the correct data structure is provided as props
MenuContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
