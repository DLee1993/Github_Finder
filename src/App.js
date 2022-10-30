import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

class App extends Component {
    state = {
        users: [],
        user: {},
        loading: false,
        alert: null,
    };

    //! Search github users
    searchUsers = async (text) => {
        try {
            this.setState({ loading: true });
            const res = await axios.get(
                `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
            );
            this.setState({ users: res.data.items, loading: false });
        } catch (error) {
            console.log(error);
        }
    };

    //!  Get a single user
    getUser = async (username) => {
        try {
            this.setState({ loading: true });
            const res = await axios.get(
                `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
            );
            this.setState({ user: res.data, loading: false });
        } catch (error) {
            console.log(error);
        }
    };

    clearUsers = () => this.setState({ users: [], loading: false });

    setAlert = (msg, type) => {
        this.setState({
            alert: {
                msg,
                type,
            },
        });
        setTimeout(() => {
            this.setState({ alert: null });
        }, 3000);
    };

    render() {
        const { users, user, loading, alert } = this.state;
        return (
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
                                            searchUsers={this.searchUsers}
                                            clearUsers={this.clearUsers}
                                            showClear={users.length > 0 ? true : false}
                                            setAlert={this.setAlert}
                                        />
                                        <Users loading={loading} users={users} />
                                    </Fragment>
                                }
                            />
                            <Route path='/about' element={About()} />
                            <Route
                                path='/users/:login'
                                element={
                                    <User getUser={this.getUser} user={user} loading={loading} />
                                }
                            />
                        </Routes>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
