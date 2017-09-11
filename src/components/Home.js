import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const GetStarted = () => (
    <p>
        <Link to="/auth/signin">Sign In</Link>
        {' or '}
        <Link to="/auth/signup">Sign Up</Link>
        {' to get started '}
    </p>
);

const WelcomeGreeting = ({ name }) => (
    <p>Welcome {name}</p>
);

function Home({user}) {
    return(
        <div>
            <h1>Welcome to LilTetris</h1>
            { user ? <WelcomeGreeting name={user.name} /> : <GetStarted />}
        </div>
    );
}

const mapStateToProps = state => ({ user: state.auth.user });

export default connect(
    mapStateToProps
)(Home);