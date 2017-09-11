import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadMenu } from '../actions/action';

class Menu extends Component {
    componentDidMount(){
        this.props.dispatch(loadMenu());
    }
    render() {
        return (
            <div>
                { !this.props.isPlaying ? <h2>Press space to start</h2> : null }
            </div>
        );
    }
}

Menu.propTypes = {
    isPlaying: PropTypes.bool
};

export default Menu;