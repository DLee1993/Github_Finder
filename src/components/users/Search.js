import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
    state = {
        text: "",
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    };

    //! onchange event firing and changing the state to the value of what the user types
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    //! onsubmit event firing and takes this.state.text as the argument into seachUsers(APP.JS)
    //! this event also clears the search input
    onSubmit = (e) => {
        e.preventDefault();
        this.state.text === ""
            ? this.props.setAlert("Please enter something", "light")
            : this.props.searchUsers(this.state.text);
        this.setState({ text: "" });
    };
    //! render is used to show the content on the page
    render() {
        const { showClear, clearUsers } = this.props;
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
                {showClear && (
                    <button onClick={clearUsers} className='btn btn-light btn-block'>
                        Clear
                    </button>
                )}
            </div>
        );
    }
}

export default Search;
