import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import Credentials from './Credentials';

function Auth({ user, signin, signup, error, location }) {
    const redirect = location.state ? location.state.from : '/';

    if (user) return <Redirect to={redirect} />;

    return (
        <div>
            <div>
                <h3>Sign In</h3>
                <Credentials submit={signin} />
            </div>
            <div>
                <h3>Sign Up</h3>
                <Credentials submit={signup} allowName={true} />
            </div>
            
            {error && <div>{ error }</div>}
        </div>
    );
}

export default withRouter(connect(
    ({auth}) => ({
        error: auth.error,
        user: auth.user
    }),
    dispatch => ({
        signup(user){ dispatch(signup(user)); },
        signin(credentials){ dispatch(signin(credentials)); }
    })
)(Auth));