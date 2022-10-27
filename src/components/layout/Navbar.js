import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon} />
                {title}
            </h1>
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
