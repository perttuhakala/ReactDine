import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="title">
                <h1>ReactDine</h1>
            </div>
            <div className="links">
                <Link to="/">Menu</Link>
                <Link to="/cart">Show Cart</Link>
            </div>
        </div>
    );
};
