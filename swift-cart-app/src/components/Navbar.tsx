import Toggle from "../assets/toggle.svg";
import User from "../assets/user-icon.svg";
import Search from "../assets/search-icon.svg";
import Heart from "../assets/heart-icon.svg";
import Menu from "../assets/menu-icon.svg";
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-top">
                <h3 className="logo">SwiftCart</h3>

                <section className="desktop-links">
                    <a href="#">Home</a>
                    <a href="#">Shop <img src={Toggle} alt="toggle icon" /></a>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                    <a href="#">Pages</a>
                </section>

                <section className="icons">
                    <div className="icon-items">
                        <img src={User} alt="User icon" />
                        <p>Login / Register</p>
                    </div>
                    <img src={Search} alt="Search icon" className="icon-items" />
                    {/* <CartIcon /> */}
                    <img src={Heart} alt="Heart icon" className="icon-items" />
                    <img
                        src={Menu}
                        alt="menu"
                        className="mobile-toggle"
                        onClick={() => setMenuOpen(prev => !prev)}
                    />
                </section>
            </div>

            <div className={`mobile-menu ${menuOpen ? 'show-menu' : ''}`}>
                <a href="#">Home</a>
                <a href="#">Product</a>
                <a href="#">Pricing</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
