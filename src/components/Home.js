import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from '../auth/Auth';

function Home({user}) {
    return(
        <div id="lilTetris">
            <div id="hiScores">
                <h2>High Scores</h2>
                <p>Something goes here.</p>
            </div>
            <div id="startGame">
                <h2>Welcome to LilTetris</h2>
                <Auth />

                <h2>Game</h2>
                <Link to="/game">Game</Link>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({ user: state.auth.user });

export default connect(
    mapStateToProps
)(Home);