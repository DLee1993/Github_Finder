import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'; 

const Navbar = ({ title, icon }) => {
    //! This is what is shown in the browser
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon} style={{ marginRight: "10px" }} />
                {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
};

//! default props are used as default values if nothing is passed into the parent component
Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github",
};
//! proptypes is used as type checking, making sure the value of title and icon are strings, if not it will through an error
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Navbar;
