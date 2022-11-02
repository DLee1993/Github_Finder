import React, { useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from '../../context/Github/GithubContext';

const Users = () => {
    const githubcontext = useContext(GithubContext);
    const { users } = githubcontext;
    return (
        <div style={userStyle}>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
};

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
};

export default Users;
