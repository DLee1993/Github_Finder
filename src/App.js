import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import GithubState from "./context/Github/GithubState";

const App = () => {
    const [users, setUsers] = useState([]),
        [user, setUser] = useState({}),
        [repos, setRepos] = useState([]),
        [loading, setLoading] = useState(false),
        [alert, setAlert] = useState(null);

    //! Search github users
    const searchUsers = async (text) => {
        try {
            setLoading(true);
            const res = await axios.get(
                `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
            );
            setUsers(res.data.items);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    //!  Get a single user
    const getUser = async (username) => {
        try {
            setLoading(true);
            const res = await axios.get(
                `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
            );
            setUser(res.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    //!  Get a users repos
    const getUserRepos = async (username) => {
        try {
            setLoading(true);
            const res = await axios.get(
                `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
            );
            setRepos(res.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const clearUsers = () => {
        setUsers([]);
        setLoading(false);
    };

    const showAlert = (msg, type) => {
        setAlert({
            msg,
            type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 3000);
    };

    return (
        <GithubState>
            <Router>
                <div className='App'>
                    <Navbar />
                    <div className='container'>
                        <Alert alert={alert} />
                        <Routes>
                            <Route
                                path='/'
                                element={
                                    <Fragment>
                                        <Search
                                            searchUsers={searchUsers}
                                            clearUsers={clearUsers}
                                            showClear={users.length > 0 ? true : false}
                                            setAlert={showAlert}
                                        />
                                        <Users loading={loading} users={users} />
                                    </Fragment>
                                }
                            />
                            <Route path='/about' element={About()} />
                            <Route
                                path='/users/:login'
                                element={
                                    <User
                                        getUser={getUser}
                                        user={user}
                                        getUserRepos={getUserRepos}
                                        repos={repos}
                                        loading={loading}
                                    />
                                }
                            />
                        </Routes>
                    </div>
                </div>
            </Router>
        </GithubState>
    );
};

export default App;
