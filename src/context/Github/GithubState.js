import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS } from "../types";

const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //! Search github users
    const searchUsers = async (text) => {
        try {
            setLoading();
            const res = await axios.get(
                `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
            );
            dispatch({ type: SEARCH_USERS, payload: res.data.items });
        } catch (error) {
            console.log(error);
        }
    };

    //!  Get a single user
    const getUser = async (username) => {
        try {
            setLoading();
            const res = await axios.get(
                `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
            );
            dispatch({type: GET_USER, payload: res.data})
        } catch (error) {
            console.log(error);
        }
    };

    //! Clear user List
    const clearUsers = () => dispatch({type: CLEAR_USERS})

    //! Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                searchUsers,
                getUser,
                clearUsers,
                repos: state.repos,
                loading: state.loading,
            }}
        >
            {props.children}
        </GithubContext.Provider>
    );
};

export default GithubState;