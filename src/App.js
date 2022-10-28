import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";

class App extends Component {
    state = {
        users: [],
        loading: false,
    };
    //! fetch all users, regardless of submit
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

    //! search github users
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
    }


    render() {
        const { loading, users } = this.state;
        return (
            <div className='App'>
                <Navbar />
                <div className='container'>
                    <Search searchUsers={this.searchUsers}/>
                    <Users loading={loading} users={users} />
                </div>
            </div>
        );
    }
}

export default App;
