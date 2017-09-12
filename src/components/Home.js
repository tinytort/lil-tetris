import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from '../auth/Auth';
import { signout } from '../auth/actions';

const NavLink = props => <Link {...props} />

const WelcomeGreeting = ({ name, signout }) => (
    <div>
        <p>Welcome {name}!</p>
        <NavLink to="/" onClick={ signout }> Sign Out </NavLink>
    </div>
);



function Home({ user, signout }) {
    return (
        <div id="lilTetris">

            <div id="hiScores">
                <h2>High Scores</h2>
                <p>Something goes here.</p>
            </div>
            <div id="startGame">
                <h2>Welcome to LilTetris</h2>

                {user ? <WelcomeGreeting signout={signout} name={user.name} /> : <Auth />}

                <h2>Play Game</h2>
                <Link to="/game">Start game &raquo;</Link>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({ user: state.auth.user });

export default connect(
    mapStateToProps,
    dispatch => ({ signout() { dispatch(signout()); } })
)(Home);