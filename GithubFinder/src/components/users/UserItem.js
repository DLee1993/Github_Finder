import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, html_url, avatar_url } }) => {
    return (
        <div className='card text-center'>
            <img
                src={avatar_url}
                alt='profile'
                style={{ width: "100px", borderRadius: "50%" }}
            ></img>
            <h3>{login}</h3>
            <Link to={`/users/${login}`} className='btn btn-dark btn-sm my-1'>
                MORE
            </Link>
        </div>
    );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserItem;
