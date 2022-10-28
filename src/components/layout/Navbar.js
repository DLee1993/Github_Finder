import React from "react";
import PropTypes from "prop-types";
//! Use Link instead of a tag
//! this allows the state to stay intact
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon} />
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

//! Default values to add to the props if none provided ( see Navbar.js navbar tag  )
Navbar.defaultProps = {
    title: "Github finder",
    icon: "fab fa-github",
};
//! PropTypes allows you to ensure the correct data type i.e. string, is being used
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Navbar;
