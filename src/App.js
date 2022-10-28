import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import "./App.css";

class App extends Component {
    state = {
        users: [],
        loading: false,
        alert: null,
    };
    //! Below function shows how to get all users from the github api
    // async componentDidMount() {
    //     try {
    //         this.setState({ loading: true });
    //         const res = await axios.get(
    //             `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    //         );
    //         this.setState({ users: res.data, loading: false });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    //!  function used to search the github users api based on search text
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

    //! function is used to clear users from state - clear the current list of users
    clearUsers = () => this.setState({ users: [], loading: false });

    //! function is used to set an alert when the user searches without any input
    setAlert = (msg, type) => {
        this.setState({
            alert: {
                msg,
                type,
            },
        });
        setTimeout(() => {
            this.setState({alert: null})
        }, 5000);
    };

    render() {
        return (
            <div className='App'>
                <Navbar />
                <div className='container'>
                    <Alert alert={this.state.alert}/>
                    <Search
                        searchUsers={this.searchUsers}
                        clearUsers={this.clearUsers}
                        showClear={this.state.users.length > 0 ? true : false}
                        setAlert={this.setAlert}
                    />
                    <Users loading={this.state.loading} users={this.state.users} />
                </div>
            </div>
        );
    }
}

export default App;
