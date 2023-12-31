import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../menu-context.jsx";
import "./checkout.css";

export const Checkout = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phoneNumber: "",
        specialInstructions: "",
    });

    const [formErrors, setFormErrors] = useState({});
    const [orderSubmitted, setOrderSubmitted] = useState(false);

    const { checkout } = useContext(MenuContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

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

        if (Object.keys(errors).length === 0) {

            setOrderSubmitted(true);

            checkout();
        }
    };

    return (
        <div className="checkout">
            {orderSubmitted ? (
                <div className="confirmation-message">
                    <p>Thank you, your order has been received. Enjoy!</p>
                </div>
            ) : (
                <>
                    <h2>Checkout</h2>
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit">Submit Order</button>
                    </form>
                </>
            )}
            {!orderSubmitted && (
                <Link to="/cart" className="back-to-cart-button">
                    Back to Cart
                </Link>
            )}
        </div>
    );
};