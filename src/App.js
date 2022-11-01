import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        [alert, setAlert] = useState(null);

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
                                    <User/>
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
