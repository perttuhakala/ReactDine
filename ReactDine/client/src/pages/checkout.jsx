// Import React hooks and components from the React Router and other files
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../menu-context.jsx";
import "./checkout.css";

// Functional component representing the Checkout
export const Checkout = () => {
    // Use the useState and useContext hooks to manage component state and access the MenuContext
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phoneNumber: "",
        specialInstructions: "",
    });

    // State to manage form validation errors
    const [formErrors, setFormErrors] = useState({});
    
    // State to track whether the order has been successfully submitted
    const [orderSubmitted, setOrderSubmitted] = useState(false);

    // Access the checkout function from MenuContext
    const { checkout } = useContext(MenuContext);

    // Event handler for input changes in the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation logic for form fields
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = "Name is required";
        }
        if (!formData.address.trim()) {
            errors.address = "Address is required";
        }
        if (!formData.phoneNumber.trim()) {
            errors.phoneNumber = "Phone Number is required";
        }
        setFormErrors(errors);

        // If no errors, submit the order
        if (Object.keys(errors).length === 0) {
            setOrderSubmitted(true);
            checkout();
        }
    };

    // Render the Checkout component
    return (
        <div className="checkout">
            {orderSubmitted ? (
                // Display a confirmation message after successful order submission
                <div className="confirmation-message">
                    <p>Thank you, your order has been received. Enjoy!</p>
                </div>
            ) : (
                // Display the form for user input
                <>
                    <h2>Checkout</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Input fields for user information */}
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            {formErrors.name && <p className="error-message">{formErrors.name}</p>}
                        </label>
                        <label>
                            Address:
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                            {formErrors.address && <p className="error-message">{formErrors.address}</p>}
                        </label>
                        <label>
                            Phone Number:
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                            />
                            {formErrors.phoneNumber && <p className="error-message">{formErrors.phoneNumber}</p>}
                        </label>
                        <label>
                            Special Instructions:
                            <textarea
                                name="specialInstructions"
                                value={formData.specialInstructions}
                                onChange={handleInputChange}
                            />
                        </label>
                        {/* Button to submit the order */}
                        <button type="submit">Submit Order</button>
                    </form>
                </>
            )}
            
            {/* Display a link to navigate back to the cart */}
            {!orderSubmitted && (
                <Link to="/cart" className="back-to-cart-button">
                    Back to Cart
                </Link>
            )}
        </div>
    );
};
