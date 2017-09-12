import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from '../auth/Auth';

const WelcomeGreeting = ({ name }) => (
    <p>Welcome {name}!</p>
  );



function Home({user}) {
    if(user) {
        console.log('user', user, 'user.name', user.name);
    }
    
    return(
        <div id="lilTetris">
            <div id="hiScores">
                <h2>High Scores</h2>
                <p>Something goes here.</p>
            </div>
            <div id="startGame">
                <h2>Welcome to LilTetris</h2>

                { user ? <WelcomeGreeting name={user.name} /> : <Auth /> }

                <h2>Play Game</h2>
                <Link to="/game">Start game &raquo;</Link>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({ user: state.auth.user });

export default connect(
    mapStateToProps
)(Home);