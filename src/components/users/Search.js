import React, { Component } from "react";
import PropTypes from 'prop-types'

class Search extends Component {
    state = {
        text: "",
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text: "" });
    };

    render() {
        return (
            <div>
                <form className='form' onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        name='text'
                        placeholder='Search Users'
                        value={this.state.text}
                        onChange={this.onChange}
                    ></input>
                    <button type='submit' className='btn btn-dark btn-block'>
                        Search
                    </button>
                </form>
            </div>
        );
    }
}; 

export default Search;
