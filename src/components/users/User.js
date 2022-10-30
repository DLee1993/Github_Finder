import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function User({ user, loading, getUser }) {
    const { login } = useParams();
    const {
        name,
        // avatar_url,
        // location,
        // bio,
        // blog,
        // html_url,
        // followers,
        // following,
        // public_repos,
        // piublic_gists,
        // hireable,
    } = user;

    useEffect(() => {
        getUser(login);
    }, [getUser, login]);

    return <div>{name}</div>;
}

export default User;
