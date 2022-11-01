import React, { useEffect, Fragment, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Repos from "../repos/Repos";
import GithubContext from "../../context/Github/GithubContext";

const User = ({ getUserRepos, repos }) => {
    const githubcontext = useContext(GithubContext);
    const { user, getUser } = githubcontext;
    const { login } = useParams();
    useEffect(() => {
        getUser(login);
        getUserRepos(login);
        //eslint-disable-next-line
    }, []);
    const {
        name,
        avatar_url,
        location,
        company,
        bio,
        blog,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    } = user;

    return (
        <Fragment>
            <Link to='/' className='btn btn-light'>
                Back to Search
            </Link>
            <div className='card grid-2'>
                <div className='all-center'>
                    <img
                        src={avatar_url}
                        alt='profile'
                        className='round-img'
                        style={{ width: "150px" }}
                    />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                    <div>
                        Hireable:{" "}
                        {hireable ? (
                            <i className='fas fa-check text-success' />
                        ) : (
                            <i className='fas fa-times-circle text-danger' />
                        )}
                    </div>
                </div>
                <div>
                    {bio && (
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} className='btn btn-dark my-1'>
                        Visit Github Profile
                    </a>
                    <ul>
                        <li>
                            {login && (
                                <Fragment>
                                    <strong>Username: </strong>
                                    {login}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {company && (
                                <Fragment>
                                    <strong>Company: </strong>
                                    {company}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {blog && (
                                <Fragment>
                                    <strong>Website Blog: </strong>
                                    {blog}
                                </Fragment>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className='card text-center'>
                <div className='badge badge-primary'>Followers: {followers}</div>
                <div className='badge badge-success'>Following: {following}</div>
                <div className='badge badge-light'>Public Repos: {public_repos}</div>
                <div className='badge badge-dark'>Public Gists: {public_gists}</div>
            </div>
            <Repos repos={repos} />
        </Fragment>
    );
};

User.propTypes = {
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
};

export default User;