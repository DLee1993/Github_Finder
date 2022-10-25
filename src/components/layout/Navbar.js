import React, { Component } from 'react'; 
import PropTypes from 'prop-types'; 

export class Navbar extends Component {
    //! Default values to add to the props if none provided ( see Navbar.js navbar tag  )
    static defaultProps = {
        title: 'Github finder', 
        icon: 'fab fa-github'
    }; 
    //! PropTypes allows you to ensure the correct data type i.e. string, is being used
    static propTypes = {
        title: PropTypes.string.isRequired, 
        icon: PropTypes.string.isRequired
    }
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
            <i className={this.props.icon} />{this.props.title}
        </h1>
      </nav>
    )
  }
}

export default Navbar