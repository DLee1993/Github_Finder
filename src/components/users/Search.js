import React, { Component } from "react";
import PropTypes from 'prop-types'; 

export class Search extends Component {
    state = {
        text: "",
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired
    }

    //! onchange event firing and changing the state to the value of what the user types
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text: "" });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form' style={{ margin: "0 10px 0 10px" }}>
                    <input
                        type='text'
                        name='text'
                        placeholder='Search Users...'
                        //! the value will equal to what the user types
                        value={this.state.text}
                        //! Add on change event to change the value of the input
                        onChange={this.onChange}
                    />
                    <button type='submit' value='Search' className='btn btn-dark btn-block'>
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

export default Search;
