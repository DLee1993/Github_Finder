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
    const 
        [repos, setRepos] = useState([]),
        [loading, setLoading] = useState(false),
        [alert, setAlert] = useState(null);

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
                                            setAlert={showAlert}
                                        />
                                        <Users />
                                    </Fragment>
                                }
                            />
                            <Route path='/about' element={About()} />
                            <Route
                                path='/users/:login'
                                element={
                                    <User
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
