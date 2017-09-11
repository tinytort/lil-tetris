import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import {activeBlocks, currentBlock, nextBlock, gameScore, gameStatus}  from './reducers/reducer';
import auth from './auth/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    activeBlocks,
    currentBlock,
    nextBlock,
    gameScore,
    gameStatus,
    auth
})

const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(ReduxThunk))
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
