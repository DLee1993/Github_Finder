import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import GithubContext from '../../context/Github/GithubContext';

const Search = ({ setAlert }) => {
    const githubcontext = useContext(GithubContext);
    const [text, setText] = useState("");
    const onChange = (e) => setText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        text === "" ? setAlert("Please enter something", "light") : githubcontext.searchUsers(text);
        setText("");
    };

    return (
        <div>
            <form className='form' onSubmit={onSubmit}>
                <input
                    type='text'
                    name='text'
                    placeholder='Search users...'
                    value={text}
                    onChange={onChange}
                />
                <button type='submit' value='Search' className='btn btn-dark btn-block'>
                    Search
                </button>
            </form>
            {githubcontext.users.length > 0 && (
                <button className='btn btn-light btn-block' onClick={githubcontext.clearUsers}>
                    Clear
                </button>
            )}
        </div>
    );
};

Search.propTypes = {
    setAlert: PropTypes.func.isRequired,
};

export default Search;
