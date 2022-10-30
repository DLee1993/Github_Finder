import React, { Component } from "react";
import PropTypes from 'prop-types';

class Navbar extends Component {
    //! default props are used as default values if nothing is passed into the parent component
    static defaultProps = {
        title: "Github Finder",
        icon: "fab fa-github",
    };
    //! proptypes is used as type checking, making sure the value of title and icon are strings, if not it will through an error
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };
    //! This is what is shown in the browser
    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={this.props.icon} style={{ marginRight: "10px" }} />
                    {this.props.title}
                </h1>
            </nav>
        );
    }
}

export default Navbar;
