import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkForToken } from './auth/actions';
import Routes from './Routes';
import './App.css';
// import LilTetris from './components/LilTetris';

const Header = (
  <div>
    <h1><Link to="/"> Lil Tetris </Link></h1>
  </div>
);

class App extends Component {

  render() {
    return (
      <Router>
        {Header}
        <div className="App">

          <Routes />

        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  dispatch => ({
    checkForToken() { return dispatch(checkForToken()); }
  })
)(App);